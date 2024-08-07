import { StoreWithCache } from "@belopash/typeorm-store";
import { AbiEvent } from "@subsquid/evm-abi";
import { DataHandlerContext, Log } from "@subsquid/evm-processor";
import {
  CHAINS,
  MISSIONS_CONFIG,
  MISSION_TYPES,
  MISSION_TYPE_INFO,
  QUESTS_CONFIG,
  QUEST_TYPES,
  QUEST_TYPE_INFO,
} from "../constants";
import {
  Mission,
  Quest,
  QuestStep,
  StepProgress,
  UserMissionProgress,
  UserQuestProgress,
} from "../model";
import { ProcessorContext } from "./processorFactory";

type Task = () => Promise<void>;
type MappingContext = ProcessorContext<StoreWithCache> & {
  queue: Task[];
  userMissionProgressCache: Map<string, UserMissionProgress>;
  quests: Map<string, Quest>;
  questSteps: Map<string, QuestStep>;
  missions: Map<string, Mission>;
};

export function createMain(chain: CHAINS) {
  return async (ctx: DataHandlerContext<StoreWithCache>) => {
    const mctx: MappingContext = {
      ...ctx,
      queue: [],
      userMissionProgressCache: new Map(),
      quests: new Map(),
      questSteps: new Map(),
      missions: new Map(),
    };

    // Initialize quests and quest steps
    for (const [questName, questConfig] of Object.entries(
      QUESTS_CONFIG[chain]
    )) {
      const quest = new Quest({ id: questName });
      quest.name = questName;
      quest.chain = chain;
      quest.steps = [];
      quest.startTime = questConfig.startTime;
      quest.endTime = questConfig.endTime;
      quest.totalParticipants = 0;
      quest.totalCompletions = 0;

      questConfig.steps.forEach((stepConfig, index) => {
        const stepId = `${questName}-step-${index + 1}`;
        const questStep = new QuestStep({ id: stepId });
        questStep.quest = quest;
        questStep.stepNumber = index + 1;
        questStep.type = stepConfig.type;
        questStep.address = stepConfig.address;
        questStep.filterCriteria = stepConfig.filterCriteria;
        questStep.requiredAmount = stepConfig.requiredAmount || 1n;
        questStep.includeTransaction = stepConfig.includeTransaction || false;
        quest.steps.push(questStep);
        mctx.questSteps.set(stepId, questStep);
      });

      mctx.quests.set(questName, quest);
    }

    // Initialize missions
    for (const [missionName, missionConfig] of Object.entries(
      MISSIONS_CONFIG[chain] || {}
    )) {
      const mission = new Mission({ id: missionName });
      mission.name = missionName;
      mission.chain = chain;
      mission.startTime = missionConfig.startTime;
      mission.address = missionConfig.address;
      mission.startStreak = missionConfig.startStreak;
      mission.endStreak = missionConfig.endStreak;
      mctx.missions.set(missionName, mission);
      console.log(`Initialized mission: ${JSON.stringify(mission)}`);
    }

    // Check if missions were initialized
    if (mctx.missions.size === 0) {
      console.warn(`No missions initialized for chain: ${chain}`);
    }

    // Save all missions
    mctx.queue.push(async () => {
      await mctx.store.upsert([...mctx.missions.values()]);
    });

    for (let block of ctx.blocks) {
      for (let log of block.logs) {
        const matchingQuests = Array.from(mctx.quests.values()).filter(
          (quest) =>
            quest.steps.some(
              (step) => step.address.toLowerCase() === log.address.toLowerCase()
            )
        );

        const currentTimestamp = Math.floor(block.header.timestamp / 1000);

        for (const matchingQuest of matchingQuests) {
          if (
            (matchingQuest.startTime &&
              currentTimestamp < matchingQuest.startTime) ||
            (matchingQuest.endTime && currentTimestamp > matchingQuest.endTime)
          ) {
            continue;
          }

          const matchingSteps = matchingQuest.steps.filter(
            (step) => step.address.toLowerCase() === log.address.toLowerCase()
          );

          for (const matchingStep of matchingSteps) {
            const questTypeInfo =
              QUEST_TYPE_INFO[matchingStep.type as QUEST_TYPES];
            const { abi, eventName } = questTypeInfo;

            let decodedLog;

            if (abi.events && eventName in abi.events) {
              const event = abi.events[eventName] as AbiEvent<any>;
              if (event.is(log)) {
                decodedLog = event.decode(log);
              } else {
                console.log(`Event ${eventName} not found in abi.events`);
                continue;
              }
            } else {
              console.log(`Event ${eventName} not found in abi.events`);
              continue;
            }

            if (log.transaction) {
              console.log(`Transaction hash: ${log.transaction.hash}`);
            }

            const processed = await handleQuestEvent(
              mctx,
              matchingQuest,
              matchingStep,
              decodedLog,
              matchingStep.includeTransaction
                ? log.getTransaction().from
                : undefined
            );

            if (processed) {
              console.log(
                `Processed event: ${eventName} for quest: ${matchingQuest.name}, step: ${matchingStep.stepNumber}`
              );
            }
          }
        }

        // Process missions
        await handleMissionEvents(mctx, mctx.missions, block.logs);
      }

      // Update daily streaks for all active missions
      await updateDailyStreaks(mctx, mctx.missions, block.header.timestamp);
    }

    // Execute all queued tasks
    for (const task of mctx.queue) {
      await task();
    }
  };
}

async function handleQuestEvent(
  mctx: MappingContext,
  quest: Quest,
  step: QuestStep,
  decodedLog: any,
  sender?: string
): Promise<boolean> {
  if (step.filterCriteria) {
    for (const [key, value] of Object.entries(step.filterCriteria)) {
      if (decodedLog[key] !== value.toLowerCase()) {
        return false;
      }
    }
  }

  let userAddress: string;
  let amount: bigint = 1n;

  switch (step.type) {
    case QUEST_TYPES.ERC721_MINT:
    case QUEST_TYPES.ERC20_MINT:
      userAddress = decodedLog.to.toLowerCase();
      if (step.type === QUEST_TYPES.ERC20_MINT) amount = decodedLog.value;
      break;
    case QUEST_TYPES.UNISWAP_MINT:
      userAddress = sender?.toLowerCase() || "";
      break;
    case QUEST_TYPES.ERC1155_MINT:
      userAddress = decodedLog.to.toLowerCase();
      amount = decodedLog.amount;
      break;
    case QUEST_TYPES.UNISWAP_SWAP:
      userAddress = decodedLog.recipient.toLowerCase();
      break;
    case QUEST_TYPES.TOKENS_MINTED:
      userAddress = decodedLog.recipient.toLowerCase();
      amount = decodedLog.amount;
      break;
    case QUEST_TYPES.TOKENS_DEPOSITED:
      userAddress = decodedLog.depositor.toLowerCase();
      amount = decodedLog.depositAmount;
      break;
    default:
      console.log(`Unsupported quest type: ${step.type}`);
      return false;
  }

  mctx.queue.push(async () => {
    await updateUserQuestProgress(mctx, userAddress, quest, step, amount);
  });

  return true;
}

async function updateUserQuestProgress(
  mctx: MappingContext,
  userAddress: string,
  quest: Quest,
  completedStep: QuestStep,
  amount: bigint
) {
  mctx.store.defer(UserQuestProgress, `${userAddress}-${quest.id}`);
  mctx.store.defer(
    StepProgress,
    `${userAddress}-${quest.id}-step-${completedStep.stepNumber}`
  );

  mctx.queue.push(async () => {
    const userQuestProgress = await mctx.store.getOrInsert(
      UserQuestProgress,
      `${userAddress}-${quest.id}`,
      () => ({
        id: `${userAddress}-${quest.id}`,
        address: userAddress,
        quest,
        completedSteps: 0,
        completed: false,
      })
    );

    const stepProgress = await mctx.store.getOrInsert(
      StepProgress,
      `${userQuestProgress.id}-step-${completedStep.stepNumber}`,
      () => ({
        id: `${userQuestProgress.id}-step-${completedStep.stepNumber}`,
        userQuestProgress,
        stepNumber: completedStep.stepNumber,
        progressAmount: 0n,
        completed: false,
      })
    );

    stepProgress.progressAmount += amount;

    if (
      stepProgress.progressAmount >= completedStep.requiredAmount &&
      !stepProgress.completed
    ) {
      stepProgress.completed = true;
      userQuestProgress.completedSteps += 1;

      const allStepsCompleted = await Promise.all(
        quest.steps.map(async (step) => {
          const stepProgressId = `${userQuestProgress.id}-step-${step.stepNumber}`;
          const progress = await mctx.store.get(StepProgress, stepProgressId);
          return progress && progress.completed;
        })
      );

      if (allStepsCompleted.every(Boolean)) {
        userQuestProgress.completed = true;
        quest.totalCompletions += 1;
        await mctx.store.upsert(quest);
      }
    }

    await mctx.store.upsert(stepProgress);
    await mctx.store.upsert(userQuestProgress);
  });
}

async function handleMissionEvents(
  mctx: MappingContext,
  missions: Map<string, Mission>,
  logs: Log[]
): Promise<void> {
  const currentTimestamp = Math.floor(logs[0].block.timestamp / 1000);

  for (const log of logs) {
    for (const [missionName, mission] of missions) {
      if (mission.startTime && currentTimestamp < mission.startTime) {
        continue;
      }

      if (log.address.toLowerCase() !== mission.address.toLowerCase()) {
        continue;
      }

      const startStreakInfo =
        MISSION_TYPE_INFO[(mission.startStreak as any).type as MISSION_TYPES];
      const endStreakInfo =
        MISSION_TYPE_INFO[(mission.endStreak as any).type as MISSION_TYPES];

      let eventType: {
        type: MISSION_TYPES;
        filterCriteria: Record<string, any>;
      } | null = null;

      if (startStreakInfo.abi.events[startStreakInfo.eventName].is(log)) {
        eventType = mission.startStreak as any;
      } else if (endStreakInfo.abi.events[endStreakInfo.eventName].is(log)) {
        eventType = mission.endStreak as any;
      }

      if (!eventType) continue;

      const decodedLog =
        MISSION_TYPE_INFO[eventType.type].abi.events[
          MISSION_TYPE_INFO[eventType.type].eventName
        ].decode(log);

      if (!checkFilterCriteria(decodedLog, eventType.filterCriteria)) continue;

      const userAddress = log.getTransaction()?.from.toLowerCase() || "";
      if (!userAddress) {
        console.log(
          `No user address found for mission event: ${eventType.type}`
        );
        continue;
      }

      const progressId = `${userAddress}-${mission.id}`;
      let userMissionProgress = mctx.userMissionProgressCache.get(progressId);

      if (!userMissionProgress) {
        userMissionProgress = await mctx.store.get(
          UserMissionProgress,
          progressId
        );
        if (!userMissionProgress) {
          userMissionProgress = new UserMissionProgress({
            id: progressId,
            address: userAddress,
            mission,
            lastActivationTimestamp: 0,
            lastStreakUpdateTimestamp: 0,
            currentStreak: 0,
            longestStreak: 0,
          });
        }
        if (!userMissionProgress.mission) {
          userMissionProgress.mission = mission;
        }
        mctx.userMissionProgressCache.set(progressId, userMissionProgress);
      }

      updateUserMissionProgress(
        userMissionProgress,
        eventType,
        currentTimestamp
      );
    }
  }

  // Add all updated UserMissionProgress entities to the store
  for (const progress of mctx.userMissionProgressCache.values()) {
    mctx.queue.push(async () => {
      await mctx.store.upsert(progress);
    });
  }
}

function checkFilterCriteria(
  decodedLog: any,
  filterCriteria: Record<string, any>
): boolean {
  if (!filterCriteria) return true;
  return Object.entries(filterCriteria).every(
    ([key, value]) => decodedLog[key] === value.toLowerCase()
  );
}

function updateUserMissionProgress(
  userMissionProgress: UserMissionProgress,
  eventType: { type: MISSION_TYPES; filterCriteria: Record<string, any> },
  currentTimestamp: number
): void {
  if (!userMissionProgress.mission) {
    console.error(
      `Mission is undefined for UserMissionProgress: ${userMissionProgress.id}`
    );
    return;
  }

  if (!userMissionProgress.mission.startStreak) {
    console.error(
      `startStreak is undefined for Mission: ${userMissionProgress.mission.id}`
    );
    return;
  }

  if (
    eventType.type === (userMissionProgress.mission.startStreak as any).type
  ) {
    if (userMissionProgress.lastActivationTimestamp === 0) {
      userMissionProgress.currentStreak = 1;
      userMissionProgress.lastStreakUpdateTimestamp = currentTimestamp;
    } else {
      const daysSinceLastUpdate = Math.floor(
        (currentTimestamp - userMissionProgress.lastStreakUpdateTimestamp) /
          (24 * 60 * 60)
      );
      if (daysSinceLastUpdate > 0) {
        userMissionProgress.currentStreak += daysSinceLastUpdate;
        userMissionProgress.lastStreakUpdateTimestamp = currentTimestamp;
      }
    }
    userMissionProgress.lastActivationTimestamp = currentTimestamp;
  } else if (
    eventType.type === (userMissionProgress.mission.endStreak as any).type
  ) {
    userMissionProgress.currentStreak = 0;
    userMissionProgress.lastActivationTimestamp = 0;
    userMissionProgress.lastStreakUpdateTimestamp = 0;
  }

  userMissionProgress.longestStreak = Math.max(
    userMissionProgress.longestStreak,
    userMissionProgress.currentStreak
  );
}

async function updateDailyStreaks(
  mctx: MappingContext,
  missions: Map<string, Mission>,
  blockTimestamp: number
): Promise<void> {
  const currentTimestamp = Math.floor(blockTimestamp / 1000);
  const oneDayInSeconds = 24 * 60 * 60;

  for (const progress of mctx.userMissionProgressCache.values()) {
    if (
      missions.has(progress.mission.id) &&
      progress.lastActivationTimestamp > 0 &&
      currentTimestamp - progress.lastStreakUpdateTimestamp >= oneDayInSeconds
    ) {
      const daysPassed = Math.floor(
        (currentTimestamp - progress.lastStreakUpdateTimestamp) /
          oneDayInSeconds
      );
      progress.currentStreak += daysPassed;
      progress.longestStreak = Math.max(
        progress.longestStreak,
        progress.currentStreak
      );
      progress.lastStreakUpdateTimestamp += daysPassed * oneDayInSeconds;

      mctx.queue.push(async () => {
        await mctx.store.upsert(progress);
      });
    }
  }
}
