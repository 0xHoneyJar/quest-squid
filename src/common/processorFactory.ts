import { StoreWithCache } from "@belopash/typeorm-store";
import {
  Log as _Log,
  Transaction as _Transaction,
  BlockHeader,
  DataHandlerContext,
  EvmBatchProcessor,
  EvmBatchProcessorFields,
} from "@subsquid/evm-processor";
import { assertNotNull } from "@subsquid/util-internal";
import {
  ARCHIVE_GATEWAYS,
  BLOCK_RANGES,
  QUESTS_CONFIG,
  RPC_ENDPOINTS,
  PORTAL_URLS,
} from "../constants/quests";
import { CHAINS, QUEST_TYPE_INFO, QUEST_TYPES } from "../constants/types";

export function createProcessor(chain: CHAINS, quests?: string[]) {
  const questConfig = QUESTS_CONFIG[chain];
  const addressToTopics: Record<
    string,
    {
      topic0: string[];
      topic1?: string;
      topic2?: string;
      range?: { from: number; to?: number };
      includeTransaction: boolean;
      includeTransactionLogs: boolean;
      isEthTransfer: boolean;
    }
  > = {};

  // Filter for the specified quests or use all quests if none specified
  const filteredQuestConfig = quests
    ? quests.reduce((acc, questName) => {
        if (questConfig[questName]) {
          acc[questName] = questConfig[questName];
        }
        return acc;
      }, {} as typeof questConfig)
    : questConfig;

  // Find the earliest start block from the quest steps if testing specific quests
  let startBlock: number = BLOCK_RANGES[chain].from;
  if (quests?.length === 1) {
    const questSteps = Object.values(filteredQuestConfig)[0].steps;
    const earliestStepBlock = Math.min(
      ...questSteps
        .filter((step) => step.startBlock !== undefined)
        .map((step) => step.startBlock!)
    );
    if (earliestStepBlock && !isNaN(earliestStepBlock)) {
      startBlock = earliestStepBlock;
      console.log(`Using quest start block: ${startBlock}`);
    }
  }

  // Collect relevant addresses and topics
  for (const quest of Object.values(filteredQuestConfig)) {
    for (const step of quest.steps) {
      const questTypes = step.types;
      for (const address of step.addresses) {
        const lowerCaseAddress = address.toLowerCase();
        if (!addressToTopics[lowerCaseAddress]) {
          addressToTopics[lowerCaseAddress] = {
            topic0: [],
            includeTransaction: false,
            includeTransactionLogs: false,
            isEthTransfer: false,
          };
        }

        if (step.startBlock) {
          addressToTopics[lowerCaseAddress].range = { from: step.startBlock };
        }

        if (step.includeTransaction) {
          addressToTopics[lowerCaseAddress].includeTransaction = true;
        }

        if (step.includeTransactionLogs) {
          addressToTopics[lowerCaseAddress].includeTransactionLogs = true;
        }

        for (const questType of questTypes) {
          const questTypeInfo = QUEST_TYPE_INFO[questType];

          // Special handling for ETH_TRANSFER
          if (questType === QUEST_TYPES.ETH_TRANSFER) {
            addressToTopics[lowerCaseAddress].isEthTransfer = true;
            continue;
          }

          const eventNames = Array.isArray(questTypeInfo.eventName)
            ? questTypeInfo.eventName
            : [questTypeInfo.eventName];

          for (const eventName of eventNames) {
            const topic0 =
              questTypeInfo.abi.events[eventName].topic.toLowerCase();

            if (!addressToTopics[lowerCaseAddress].topic0.includes(topic0)) {
              addressToTopics[lowerCaseAddress].topic0.push(topic0);
            }
          }

          if (questTypeInfo.topic1) {
            addressToTopics[lowerCaseAddress].topic1 = formatAddressTopic(
              questTypeInfo.topic1
            );
          }

          if (questTypeInfo.topic2) {
            addressToTopics[lowerCaseAddress].topic2 = formatAddressTopic(
              questTypeInfo.topic2
            );
          }
        }
      }
    }
  }

  const processor = new EvmBatchProcessor()
    // TODO: Uncomment this and remove setGateway to switch to portals
    .setPortal(assertNotNull(
      PORTAL_URLS[chain],
      `Required env variable ${PORTAL_URLS[chain]} is missing`
    ))
    // .setGateway(ARCHIVE_GATEWAYS[chain])

    .setRpcEndpoint({
      url: assertNotNull(RPC_ENDPOINTS[chain], "No RPC endpoint supplied"),
    })
    .setFinalityConfirmation(75)
    .setFields({
      log: {
        transactionHash: true,
      },
      trace: {
        callValue: true,
        callFrom: true,
        callTo: true,
        transactionHash: true
      },
    })
    .setBlockRange({ from: startBlock as number });

  // Add logs for each address with all its topics
  for (const [address, topics] of Object.entries(addressToTopics)) {
    if (!topics.isEthTransfer) {
      processor.addLog({
        address: [address],
        topic0: topics.topic0,
        topic1: topics.topic1 ? [topics.topic1] : undefined,
        topic2: topics.topic2 ? [topics.topic2] : undefined,
        range: topics.range,
        transaction: topics.includeTransaction,
        transactionLogs: topics.includeTransactionLogs,
      });
    }
  }

  // Add traces for ETH transfers
  for (const [address, topics] of Object.entries(addressToTopics)) {
    if (topics.isEthTransfer) {
      processor.addTrace({
        type: ["call"],
        callTo: [address],
        transaction: true,
      });
    }
  }

  return processor;
}

function formatAddressTopic(address: string): string {
  return "0x" + address.replace("0x", "").padStart(64, "0").toLowerCase();
}

export type Fields = EvmBatchProcessorFields<
  ReturnType<typeof createProcessor>
>;
export type Context = DataHandlerContext<StoreWithCache, Fields>;
export type Block = BlockHeader<Fields>;
export type Log = _Log<Fields>;
export type Transaction = _Transaction<Fields>;
export type ProcessorContext<Store> = DataHandlerContext<Store, Fields>;
