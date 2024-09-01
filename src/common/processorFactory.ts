import { StoreWithCache } from "@belopash/typeorm-store";
import {
  BlockHeader,
  DataHandlerContext,
  EvmBatchProcessor,
  EvmBatchProcessorFields,
  Log as _Log,
  Transaction as _Transaction,
} from "@subsquid/evm-processor";
import { assertNotNull } from "@subsquid/util-internal";
import {
  ARCHIVE_GATEWAYS,
  BLOCK_RANGES,
  CHAINS,
  QUESTS_CONFIG,
  QUEST_TYPES,
  QUEST_TYPE_INFO,
  RPC_ENDPOINTS,
} from "../constants";

export function createProcessor(chain: CHAINS) {
  const questConfig = QUESTS_CONFIG[chain];
  const addressToTopics: Record<
    string,
    { topic0: string[]; topic1?: string; topic2?: string }
  > = {};

  // Collect relevant addresses and topics
  for (const quest of Object.values(questConfig)) {
    for (const step of quest.steps) {
      const address = step.address.toLowerCase();
      if (!addressToTopics[address]) {
        addressToTopics[address] = { topic0: [] };
      }

      const questTypeInfo = QUEST_TYPE_INFO[step.type as QUEST_TYPES];
      const eventNames = Array.isArray(questTypeInfo.eventName)
        ? questTypeInfo.eventName
        : [questTypeInfo.eventName];

      for (const eventName of eventNames) {
        const topic0 = questTypeInfo.abi.events[eventName].topic;

        if (!addressToTopics[address].topic0.includes(topic0)) {
          addressToTopics[address].topic0.push(topic0);
        }
      }

      if (questTypeInfo.topic1) {
        addressToTopics[address].topic1 = questTypeInfo.topic1;
      }

      if (questTypeInfo.topic2) {
        addressToTopics[address].topic2 = questTypeInfo.topic2;
      }
    }
  }

  const processor = new EvmBatchProcessor()
    .setGateway(ARCHIVE_GATEWAYS[chain])
    .setRpcEndpoint({
      url: assertNotNull(RPC_ENDPOINTS[chain], "No RPC endpoint supplied"),
    })
    .setFinalityConfirmation(75)
    .setFields({
      log: {
        transactionHash: true,
      },
    })
    .setBlockRange({ from: BLOCK_RANGES[chain].from });

  // Add logs for each address with all its topics
  for (const [address, topics] of Object.entries(addressToTopics)) {
    processor.addLog({
      address: [address],
      topic0: topics.topic0,
      topic1: topics.topic1 ? [topics.topic1] : undefined,
      topic2: topics.topic2 ? [topics.topic2] : undefined,
      transaction: true, // Include transaction for all logs to be safe
    });
  }

  return processor;
}

export type Fields = EvmBatchProcessorFields<
  ReturnType<typeof createProcessor>
>;
export type Context = DataHandlerContext<StoreWithCache, Fields>;
export type Block = BlockHeader<Fields>;
export type Log = _Log<Fields>;
export type Transaction = _Transaction<Fields>;
export type ProcessorContext<Store> = DataHandlerContext<Store, Fields>;
