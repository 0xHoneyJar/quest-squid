import { AbiEvent } from "@subsquid/evm-abi";
import { Log } from "@subsquid/evm-processor";
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
import { Context } from "./processorFactory";

export function createMain(chain: CHAINS) {
  return async (ctx: Context) => {
    const quests: Map<string, Quest> = new Map();
    const questSteps: Map<string, QuestStep> = new Map();
    const missions: Map<string, Mission> = new Map();

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
        questSteps.set(stepId, questStep);
      });

      quests.set(questName, quest);
    }

    // Initialize missions
    for (const [missionName, missionConfig] of Object.entries(
      MISSIONS_CONFIG[chain] || {}
    )) {
      const mission = new Mission({ id: missionName });
      mission.name = missionName;
      mission.chain = chain;
      mission.startTime = missionConfig.startTime;
      mission.startStreak = missionConfig.startStreak;
      mission.endStreak = missionConfig.endStreak;
      missions.set(missionName, mission);
    }

    for (let block of ctx.blocks) {
      for (let log of block.logs) {
        const matchingQuests = Array.from(quests.values()).filter((quest) =>
          quest.steps.some(
            (step) => step.address.toLowerCase() === log.address.toLowerCase()
          )
        );

        for (const matchingQuest of matchingQuests) {
          // Check if the log is within the quest's time range
          const currentTimestamp = Math.floor(block.header.timestamp / 1000);
          if (
            (matchingQuest.startTime &&
              currentTimestamp < matchingQuest.startTime) ||
            (matchingQuest.endTime && currentTimestamp > matchingQuest.endTime)
          ) {
            // console.log(
            //   `Log outside of quest time range for ${matchingQuest.name}`
            // );
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

            console.log("eventName", eventName);

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
              // Process transaction data
              console.log(`Transaction hash: ${log.transaction.hash}`);
              // Add more transaction processing logic as needed
            }

            const processed = await handleQuestEvent(
              ctx,
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
        for (const [missionName, mission] of missions) {
          const missionConfig = MISSIONS_CONFIG[chain][missionName];
          if (
            log.address.toLowerCase() === missionConfig.address.toLowerCase()
          ) {
            const activateBoostInfo =
              MISSION_TYPE_INFO[MISSION_TYPES.ACTIVATE_BOOST];
            const dropBoostInfo = MISSION_TYPE_INFO[MISSION_TYPES.DROP_BOOST];

            if (
              activateBoostInfo.abi.events[activateBoostInfo.eventName].is(log)
            ) {
              const decodedLog =
                activateBoostInfo.abi.events[
                  activateBoostInfo.eventName
                ].decode(log);
              await handleMissionEvent(
                ctx,
                mission,
                decodedLog,
                log,
                MISSION_TYPES.ACTIVATE_BOOST
              );
            } else if (
              dropBoostInfo.abi.events[dropBoostInfo.eventName].is(log)
            ) {
              const decodedLog =
                dropBoostInfo.abi.events[dropBoostInfo.eventName].decode(log);
              await handleMissionEvent(
                ctx,
                mission,
                decodedLog,
                log,
                MISSION_TYPES.DROP_BOOST
              );
            }
          }
        }
      }
    }

    await ctx.store.save([...quests.values()]);
    await ctx.store.save([...questSteps.values()]);
    await ctx.store.save([...missions.values()]);
  };
}

async function handleQuestEvent(
  ctx: Context,
  quest: Quest,
  step: QuestStep,
  decodedLog: any,
  sender?: string
): Promise<boolean> {
  if (step.filterCriteria) {
    for (const [key, value] of Object.entries(step.filterCriteria)) {
      if (decodedLog[key] !== value) {
        // console.log(
        //   `Filter mismatch for ${key}: ${decodedLog[key]} !== ${value}`
        // );
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
      // amount = decodedLog.amount;
      // Feel like this might be less than 1
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

  await updateUserQuestProgress(ctx, userAddress, quest, step, amount);
  return true;
}

async function updateUserQuestProgress(
  ctx: Context,
  userAddress: string,
  quest: Quest,
  completedStep: QuestStep,
  amount: bigint
) {
  // Ensure the Quest is saved first
  await ctx.store.save(quest);

  let userQuestProgress = await ctx.store.get(
    UserQuestProgress,
    `${userAddress}-${quest.id}`
  );

  if (!userQuestProgress) {
    userQuestProgress = new UserQuestProgress({
      id: `${userAddress}-${quest.id}`,
      address: userAddress,
      quest,
      completedSteps: 0,
      completed: false,
    });
    quest.totalParticipants += 1;
    await ctx.store.save(quest);
  }

  // Save UserQuestProgress before creating StepProgress
  await ctx.store.save(userQuestProgress);

  let stepProgress = await ctx.store.get(
    StepProgress,
    `${userQuestProgress.id}-step-${completedStep.stepNumber}`
  );

  if (!stepProgress) {
    stepProgress = new StepProgress({
      id: `${userQuestProgress.id}-step-${completedStep.stepNumber}`,
      userQuestProgress,
      stepNumber: completedStep.stepNumber,
      progressAmount: 0n,
      completed: false,
    });
  }

  // Add the valid amount to progressAmount
  stepProgress.progressAmount += amount;

  if (stepProgress.progressAmount >= completedStep.requiredAmount) {
    if (!stepProgress.completed) {
      stepProgress.completed = true;
      userQuestProgress.completedSteps += 1;
    }

    // Check if all steps are completed
    const allStepsCompleted = await Promise.all(
      quest.steps.map(async (step) => {
        const stepProgressId = `${userQuestProgress.id}-step-${step.stepNumber}`;
        const progress = await ctx.store.get(StepProgress, stepProgressId);
        return progress && progress.completed;
      })
    );

    if (allStepsCompleted.every(Boolean)) {
      userQuestProgress.completed = true;
      quest.totalCompletions += 1;
      await ctx.store.save(quest);
    }
  }

  await ctx.store.save(stepProgress);
  await ctx.store.save(userQuestProgress);
}

async function handleMissionEvent(
  ctx: Context,
  mission: Mission,
  decodedLog: any,
  log: Log,
  eventType: MISSION_TYPES
): Promise<void> {
  const currentTimestamp = Math.floor(log.block.timestamp / 1000);
  const userAddress = log.getTransaction()?.from.toLowerCase() || "";
  const validator = decodedLog.validator.toLowerCase();

  let userMissionProgress = await ctx.store.get(
    UserMissionProgress,
    `${userAddress}-${mission.id}`
  );

  if (!userMissionProgress) {
    userMissionProgress = new UserMissionProgress({
      id: `${userAddress}-${mission.id}`,
      address: userAddress,
      mission,
      lastActivationTimestamp: 0,
      currentStreak: 0,
      longestStreak: 0,
    });
  }

  if (eventType === MISSION_TYPES.ACTIVATE_BOOST) {
    if (userMissionProgress.lastActivationTimestamp === 0) {
      // First activation
      userMissionProgress.currentStreak = 1;
    } else {
      // Increment streak
      userMissionProgress.currentStreak += 1;
    }
    userMissionProgress.longestStreak = Math.max(
      userMissionProgress.longestStreak,
      userMissionProgress.currentStreak
    );
    userMissionProgress.lastActivationTimestamp = currentTimestamp;
  } else if (eventType === MISSION_TYPES.DROP_BOOST) {
    // Reset streak on boost drop (cancel)
    userMissionProgress.currentStreak = 0;
    userMissionProgress.lastActivationTimestamp = 0;
  }

  await ctx.store.save(userMissionProgress);
}
