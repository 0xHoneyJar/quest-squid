import { StoreWithCache } from "@belopash/typeorm-store";
import { AbiEvent } from "@subsquid/evm-abi";
import { BlockData, Log } from "@subsquid/evm-processor";
import { QUESTS_CONFIG } from "../constants/quests";
import { CHAINS, QUEST_TYPE_INFO, QUEST_TYPES } from "../constants/types";
import {
  Quest,
  QuestStep,
  RevshareEvent,
  StepProgress,
  UserQuestProgress,
} from "../model";
import { TaskQueue } from "../utils/queue";
import { Context, ProcessorContext } from "./processorFactory";

type MappingContext = ProcessorContext<StoreWithCache> & { queue: TaskQueue };

export function createMain(chain: CHAINS, quests?: string[]) {
  return async (ctx: Context) => {
    return await mapBlocks(
      {
        ...ctx,
        queue: new TaskQueue(),
      },
      chain,
      quests || Object.keys(QUESTS_CONFIG[chain])
    );
  };
}

async function mapBlocks(ctx: MappingContext, chain: CHAINS, quests: string[]) {
  const questsMap: Map<string, Quest> = new Map();
  const questSteps: Map<string, QuestStep> = new Map();

  scheduleInit(chain, questsMap, questSteps, quests);

  const questsArray = Array.from(questsMap.values());

  for (const block of ctx.blocks) {
    mapBlock(ctx, block, questsArray);
  }

  await ctx.queue.run();
}

function scheduleInit(
  chain: CHAINS,
  quests: Map<string, Quest>,
  questSteps: Map<string, QuestStep>,
  questNames: string[]
) {
  for (const questName of questNames) {
    const questConfig = QUESTS_CONFIG[chain][questName];
    if (!questConfig) {
      console.warn(`Quest ${questName} not found for chain ${chain}`);
      continue;
    }

    const questId = `${chain}-${questName.replace(/\s+/g, "-").toLowerCase()}`;
    const quest = new Quest({ id: questId });
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
      questStep.stepNumber = stepConfig.stepNumber || index + 1;
      questStep.types = stepConfig.types;
      questStep.siblingTypes = stepConfig.siblingTypes;
      questStep.addresses = stepConfig.addresses.map((address) =>
        address.toLowerCase()
      );
      questStep.filterCriteria = stepConfig.filterCriteria;
      questStep.requiredAmount = stepConfig.requiredAmount || 1n;
      questStep.includeTransaction = stepConfig.includeTransaction || false;
      questStep.includeTransactionLogs =
        stepConfig.includeTransactionLogs || false;
      questStep.path = stepConfig.path;
      questStep.startBlock = stepConfig.startBlock;
      questStep.revshareTracking = stepConfig.revshareTracking || false;
      quest.steps.push(questStep);
      questSteps.set(stepId, questStep);
    });

    quests.set(questName, quest);
  }
}

function mapBlock(ctx: MappingContext, block: BlockData, questsArray: Quest[]) {
  const currentTimestamp = Math.floor(block.header.timestamp / 1000);

  for (let log of block.logs) {
    const logAddress = log.address.toLowerCase();

    const matchingQuests = questsArray.filter(
      (quest) =>
        quest.steps.some((step) =>
          step.addresses.some((address) => address.toLowerCase() === logAddress)
        ) &&
        (!quest.startTime || currentTimestamp >= quest.startTime) &&
        (!quest.endTime || currentTimestamp <= quest.endTime)
    );

    if (matchingQuests.length > 0) {
      for (const matchingQuest of matchingQuests) {
        const matchingSteps = matchingQuest.steps.filter((step) =>
          step.addresses.includes(logAddress)
        );

        for (const matchingStep of matchingSteps) {
          const questTypes = matchingStep.types;

          for (const questType of questTypes) {
            const questTypeInfo = QUEST_TYPE_INFO[questType as QUEST_TYPES];
            const eventNames = Array.isArray(questTypeInfo.eventName)
              ? questTypeInfo.eventName
              : [questTypeInfo.eventName];

            for (const eventName of eventNames) {
              if (
                questTypeInfo.abi.events &&
                eventName in questTypeInfo.abi.events
              ) {
                const event = questTypeInfo.abi.events[
                  eventName
                ] as AbiEvent<any>;
                if (event.is(log)) {
                  const decodedLog = event.decode(log);
                  const sender = matchingStep.includeTransaction
                    ? log.getTransaction().from
                    : undefined;

                  handleQuestEvent(
                    ctx,
                    matchingQuest,
                    matchingStep,
                    decodedLog,
                    sender,
                    eventName,
                    questType as QUEST_TYPES,
                    matchingStep.revshareTracking
                      ? log.transaction?.hash
                      : undefined,
                    log.transaction?.logs,
                    log.logIndex
                  );
                  break; // Exit the loop if we've found a matching event
                }
              }
            }
          }
        }
      }
    }
  }

  // Process traces for ETH transfers
  for (let trace of block.traces) {
    if (
      trace.type === "call" &&
      (trace as any).action?.value &&
      (trace as any).action.value > 0n &&
      (trace as any).action?.to &&
      (trace as any).action?.from
    ) {
      const toAddress = (trace as any).action.to.toLowerCase();

      const matchingQuests = questsArray.filter(
        (quest) =>
          quest.steps.some((step) =>
            step.addresses.some(
              (address) => address.toLowerCase() === toAddress
            )
          ) &&
          (!quest.startTime || currentTimestamp >= quest.startTime) &&
          (!quest.endTime || currentTimestamp <= quest.endTime)
      );

      if (matchingQuests.length > 0) {
        for (const matchingQuest of matchingQuests) {
          const matchingSteps = matchingQuest.steps.filter((step) =>
            step.addresses.includes(toAddress)
          );

          for (const matchingStep of matchingSteps) {
            if (matchingStep.types.includes(QUEST_TYPES.ETH_TRANSFER)) {
              handleQuestEvent(
                ctx,
                matchingQuest,
                matchingStep,
                {
                  from: (trace as any).action.from,
                  to: (trace as any).action.to,
                  value: (trace as any).action.value,
                },
                (trace as any).action.from,
                "ETH_Transfer",
                QUEST_TYPES.ETH_TRANSFER,
                matchingStep.revshareTracking
                  ? trace.transaction?.hash
                  : undefined
              );
            }
          }
        }
      }
    }
  }

  async function handleQuestEvent(
    ctx: MappingContext,
    quest: Quest,
    step: QuestStep,
    decodedLog: any,
    sender?: string,
    eventName?: string,
    questType?: QUEST_TYPES,
    transactionHash?: string,
    transactionLogs?: Log[],
    logIndex?: number
  ): Promise<void> {
    if (step.filterCriteria) {
      const filterCriteria = Array.isArray(step.filterCriteria)
        ? step.filterCriteria
        : [step.filterCriteria];

      // Check if ANY of the criteria match
      const anyMatch = filterCriteria.some((criteria) => {
        if (criteria[questType as QUEST_TYPES]) {
          const criteriaSet = criteria[questType as QUEST_TYPES];
          return Object.entries(criteriaSet).every(([key, value]) => {
            let logValue = decodedLog[key];
            let criteriaValue = value;

            if (typeof logValue === "bigint") {
              logValue = logValue.toString();
            }
            if (typeof criteriaValue === "bigint") {
              criteriaValue = criteriaValue.toString();
            }

            if (Array.isArray(criteriaValue)) {
              return criteriaValue.some(
                (v) => v.toLowerCase() === logValue.toLowerCase()
              );
            } else if (
              typeof logValue === "string" &&
              typeof criteriaValue === "string"
            ) {
              return logValue.toLowerCase() === criteriaValue.toLowerCase();
            }
            return false;
          });
        }
        return false;
      });

      if (!anyMatch) {
        return;
      }
    }

    let userAddress: string | null = null;
    let amount: bigint = 1n;

    if (step.includeTransactionLogs && step.siblingTypes && transactionLogs) {
      for (let i = 0; i < transactionLogs.length; i++) {
        const log = transactionLogs[i];

        const matchingQuestType = step.siblingTypes.find((type) => {
          const questTypeInfo = QUEST_TYPE_INFO[type as QUEST_TYPES];
          const eventNames = Array.isArray(questTypeInfo.eventName)
            ? questTypeInfo.eventName
            : [questTypeInfo.eventName];
          return eventNames.some((name) => {
            const event = questTypeInfo.abi.events[name] as AbiEvent<any>;
            return event.is(log);
          });
        });

        if (matchingQuestType) {
          const questTypeInfo =
            QUEST_TYPE_INFO[matchingQuestType as QUEST_TYPES];
          const eventNames = Array.isArray(questTypeInfo.eventName)
            ? questTypeInfo.eventName
            : [questTypeInfo.eventName];
          const matchingEventName = eventNames.find((name) => {
            const event = questTypeInfo.abi.events[name] as AbiEvent<any>;
            return event.is(log);
          });

          if (matchingEventName) {
            const event = questTypeInfo.abi.events[
              matchingEventName
            ] as AbiEvent<any>;
            const decodedTransactionLog = event.decode(log);
            const result = getUserAddressAndAmount(
              matchingQuestType as QUEST_TYPES,
              decodedTransactionLog,
              sender,
              matchingEventName
            );
            userAddress = result.userAddress;
            amount = result.amount;
          }
        }
      }
    } else {
      const result = getUserAddressAndAmount(
        questType as QUEST_TYPES,
        decodedLog,
        sender,
        eventName
      );
      userAddress = result.userAddress;
      amount = result.amount;
    }

    if (!userAddress) {
      return;
    }

    console.log(
      `Processing valid quest event - Quest: ${quest.name}, Step: ${step.stepNumber}, Event: ${eventName}, User: ${userAddress}, Amount: ${amount}`
    );

    const userQuestProgressId = `${userAddress}-${quest.id}`;
    const stepProgressId = `${userQuestProgressId}-step-${step.stepNumber}`;

    // Simplify the RevshareEvent ID
    const revshareEventId = `${userAddress}-${transactionHash}-${logIndex}`;

    const userQuestProgressDeferred = ctx.store.defer(
      UserQuestProgress,
      userQuestProgressId
    );
    const stepProgressDeferred = ctx.store.defer(StepProgress, stepProgressId);
    const revshareEventDeferred = ctx.store.defer(
      RevshareEvent,
      revshareEventId
    );

    ctx.queue.add(async () => {
      const userQuestProgress = await userQuestProgressDeferred.getOrInsert(
        (id) => {
          quest.totalParticipants += 1;
          return new UserQuestProgress({
            id,
            address: userAddress,
            quest,
            completedSteps: 0,
            completed: false,
          });
        }
      );

      const stepProgress = await stepProgressDeferred.getOrInsert((id) => {
        return new StepProgress({
          id: stepProgressId,
          userQuestProgress,
          stepNumber: step.stepNumber,
          progressAmount: 0n,
          completed: false,
          startTimestamp: BigInt(block.header.timestamp),
          lastUpdateTimestamp: BigInt(block.header.timestamp),
          lastTransactionHash: transactionHash ? transactionHash : null,
          path: step.path,
        });
      });

      stepProgress.progressAmount += amount;
      stepProgress.lastUpdateTimestamp = BigInt(block.header.timestamp);

      if (transactionHash) {
        stepProgress.lastTransactionHash = transactionHash;
      }

      if (
        stepProgress.progressAmount >= step.requiredAmount &&
        !stepProgress.completed
      ) {
        stepProgress.completed = true;
        userQuestProgress.completedSteps += 1;

        if (userQuestProgress.completedSteps === quest.steps.length) {
          userQuestProgress.completed = true;
          quest.totalCompletions += 1;
        }
      }

      await ctx.store.upsert(quest);
      await ctx.store.upsert(userQuestProgress);
      await ctx.store.upsert(stepProgress);

      // Handle revshare tracking
      if (step.revshareTracking) {
        // console.log(
        //   "Revshare tracking enabled for step:",
        //   step.id,
        //   quest,
        //   step
        // );
        const revshareEvent = await revshareEventDeferred.getOrInsert(() => {
          return new RevshareEvent({
            id: revshareEventId,
            quest,
            user: userAddress,
            stepNumber: step.stepNumber,
            amount,
            timestamp: BigInt(block.header.timestamp),
            transactionHash,
          });
        });

        await ctx.store.upsert(revshareEvent);
      }
    });
  }

  function getUserAddressAndAmount(
    questType: QUEST_TYPES,
    decodedLog: any,
    sender?: string,
    eventName?: string
  ): { userAddress: string | null; amount: bigint } {
    let userAddress: string | null = null;
    let amount: bigint = 1n;

    switch (questType) {
      case QUEST_TYPES.ERC721_MINT:
      case QUEST_TYPES.ERC20_MINT:
        userAddress = decodedLog.to.toLowerCase();
        if (questType === QUEST_TYPES.ERC20_MINT) amount = decodedLog.value;
        break;
      case QUEST_TYPES.ERC20_TRANSFER:
        userAddress = decodedLog.to.toLowerCase();
        amount = decodedLog.value;
        break;
      case QUEST_TYPES.UNISWAP_MINT:
        userAddress = sender?.toLowerCase() || "";
        break;
      case QUEST_TYPES.ERC1155_MINT:
        userAddress = decodedLog.to.toLowerCase();
        if (eventName === "TransferSingle") {
          amount = decodedLog.amount;
        } else if (eventName === "TransferBatch") {
          // Sum up all amounts in the batch
          amount = decodedLog.amounts.reduce(
            (sum: bigint, val: bigint) => sum + val,
            0n
          );
        }
        break;
      case QUEST_TYPES.ERC1155_KIZUNA_MINT:
        userAddress = decodedLog.to.toLowerCase();
        if (eventName === "TransferSingle") {
          amount = decodedLog.value;
        } else if (eventName === "TransferBatch") {
          // Sum up all amounts in the batch
          amount = decodedLog.values.reduce(
            (sum: bigint, val: bigint) => sum + val,
            0n
          );
        }
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
      case QUEST_TYPES.STAKE:
        userAddress = decodedLog.account.toLowerCase();
        break;
      case QUEST_TYPES.CLAIM_BGT_REWARD:
        userAddress = decodedLog.account.toLowerCase();
        break;
      case QUEST_TYPES.DELEGATE_QUEUE:
        userAddress = decodedLog.sender.toLowerCase();
        amount = decodedLog.amount;
        break;
      case QUEST_TYPES.DELEGATE_ACTIVATE:
        userAddress = decodedLog.sender.toLowerCase();
        amount = decodedLog.amount;
        break;
      case QUEST_TYPES.DIRAC_DEPOSIT:
        userAddress = decodedLog.sender.toLowerCase();
        break;
      case QUEST_TYPES.MEMESWAP_DEPLOY:
        userAddress = decodedLog.deployer.toLowerCase();
        break;
      case QUEST_TYPES.FTO_DEPOSIT:
        userAddress = decodedLog.depositer.toLowerCase();
        break;
      case QUEST_TYPES.ZERU_DEPOSIT:
        userAddress = decodedLog.user.toLowerCase();
        break;
      case QUEST_TYPES.ZERU_BORROW:
        userAddress = decodedLog.user.toLowerCase();
        break;
      case QUEST_TYPES.ZERU_OPEN_POSITION:
        userAddress = decodedLog.user.toLowerCase();
        break;
      case QUEST_TYPES.ETH_TRANSFER:
        userAddress = decodedLog.from.toLowerCase();
        amount = decodedLog.value;
        break;
      case QUEST_TYPES.URSA_ROLL_DEPOSIT:
        userAddress = decodedLog.player.toLowerCase();
        break;
      case QUEST_TYPES.URSA_ROLL_LIQUIDITY_ADDED:
        userAddress = decodedLog.user.toLowerCase();
        break;
      case QUEST_TYPES.GOVERNOR_PROPOSE:
        userAddress = decodedLog.proposer.toLowerCase();
        break;
      case QUEST_TYPES.GOLDILOCKS_STAKE:
        userAddress = decodedLog.user.toLowerCase();
        break;
      case QUEST_TYPES.GOLDILOCKS_BUY:
        userAddress = decodedLog.user.toLowerCase();
        break;
      case QUEST_TYPES.AQUABERA_DEPOSIT:
        userAddress = decodedLog.to.toLowerCase();
        break;
      case QUEST_TYPES.SPOOKY_MINTED:
        userAddress = decodedLog.recipient.toLowerCase();
        amount = decodedLog.quantity;
        break;
      case QUEST_TYPES.PRETZEL_BRIDGE:
        userAddress = decodedLog.sender.toLowerCase();
        break;
      case QUEST_TYPES.STATION_X_NEW_USER:
        userAddress = decodedLog["_depositor"].toLowerCase();
        break;
      case QUEST_TYPES.WAGMI_BUY:
        userAddress = decodedLog.buyer.toLowerCase();
        break;
      case QUEST_TYPES.BV_DEPOSIT:
        userAddress = decodedLog.user.toLowerCase();
        break;
      case QUEST_TYPES.LV_SWAP:
        userAddress = decodedLog.user.toLowerCase();
        break;
      case QUEST_TYPES.JAM_NATIVE_TRANSFER:
        userAddress = decodedLog.receiver.toLowerCase();
        break;
      case QUEST_TYPES.HONEY_VAULT_ACTIVITY:
        userAddress = decodedLog.caller.toLowerCase();
        break;
      case QUEST_TYPES.BERAMONIUM_STAKE:
        userAddress = decodedLog.user.toLowerCase();
        break;
      case QUEST_TYPES.YEET_STAKE:
        userAddress = decodedLog.addr.toLowerCase();
        break;
      case QUEST_TYPES.YEET_BOND:
        userAddress = sender?.toLowerCase() || "";
        break;
      case QUEST_TYPES.SMILEE_TOKEN_EMISSION:
        userAddress = decodedLog.user.toLowerCase();
        break;
      case QUEST_TYPES.SMILEE_BUY_DVP:
        userAddress = sender?.toLowerCase() || "";
        break;
      case QUEST_TYPES.SMILEE_SELL_DVP:
        userAddress = sender?.toLowerCase() || "";
        break;
      case QUEST_TYPES.BERABORROW_DEN_CREATED:
        userAddress = decodedLog._borrower.toLowerCase();
        break;
      case QUEST_TYPES.BERABORROW_DEN_UPDATED:
        userAddress = decodedLog._borrower.toLowerCase();
        break;
      case QUEST_TYPES.BERABORROW_DEPOSIT:
        userAddress = decodedLog.sender.toLowerCase();
        break;
      case QUEST_TYPES.BERABORROW_BORROWING_FEE_PAID:
        userAddress = decodedLog.borrower.toLowerCase();
        // amount = decodedLog.amount;
        break;
      case QUEST_TYPES.JUNKY_DEPOSIT:
        userAddress = decodedLog.player.toLowerCase();
        break;
      case QUEST_TYPES.JUNKY_SLOTS:
        userAddress = decodedLog.player.toLowerCase();
        break;
      case QUEST_TYPES.VAULT_MANAGER_DEPOSIT:
        userAddress = decodedLog.user.toLowerCase();
        break;
      case QUEST_TYPES.HONEY_FLIP:
        userAddress = decodedLog.player.toLowerCase();
        break;
      case QUEST_TYPES.TROVE_UPDATED:
        userAddress = decodedLog._borrower.toLowerCase();
        amount = decodedLog._coll; // Using collateral amount
        break;
      case QUEST_TYPES.TROVE_UPDATED_V2:
        userAddress = decodedLog._borrower.toLowerCase();
        amount = decodedLog._coll; // Using collateral amount
        break;
      case QUEST_TYPES.BGT_REWARD_PAID:
        userAddress = decodedLog.user.toLowerCase();
        amount = decodedLog.amount;
        break;
      case QUEST_TYPES.BGT_REWARD_CLAIMED:
        userAddress = decodedLog.account.toLowerCase();
        amount = decodedLog.claimed;
        break;
      case QUEST_TYPES.BERABORROW_DEN_CREATED:
        userAddress = decodedLog._borrower.toLowerCase();
        break;
      case QUEST_TYPES.BERABORROW_DEN_UPDATED:
        userAddress = decodedLog._borrower.toLowerCase();
        break;
      case QUEST_TYPES.XMAS_SRC_MINTED:
        userAddress = decodedLog.recipient.toLowerCase();
        amount = decodedLog.quantity;
        break;
      case QUEST_TYPES.ONFT_SENT:
        userAddress = decodedLog.fromAddress.toLowerCase();
        break;
      case QUEST_TYPES.GOLDILOCKS_MAINNET_BUY:
        userAddress = decodedLog.user.toLowerCase();
        break;
      case QUEST_TYPES.GOLDILOCKS_MAINNET_STAKE:
        userAddress = decodedLog.from.toLowerCase();
        break;
      case QUEST_TYPES.BERO_TOKEN_BUY:
        userAddress = sender?.toLowerCase() || "";
        break;
      case QUEST_TYPES.YEET_STAKE_V2:
        userAddress = decodedLog.addr.toLowerCase();
        break;
      case QUEST_TYPES.ROUTER_SWAP:
        userAddress = decodedLog.sender.toLowerCase();
        break;
      case QUEST_TYPES.FAT_BERA:
        userAddress = decodedLog.sender.toLowerCase();
        amount = decodedLog.assets;
        break;
      default:
        return { userAddress: null, amount: 0n };
    }

    return { userAddress, amount };
  }
}
