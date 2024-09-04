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
  QUEST_TYPE_INFO,
  RPC_ENDPOINTS,
} from "../constants";

export function createProcessor(chain: CHAINS) {
  const questConfig = QUESTS_CONFIG[chain];
  const addressToTopics: Record<
    string,
    { 
      topic0: string[]; 
      topic1?: string; 
      topic2?: string;
      range?: { from: number; to?: number };
      includeTransaction: boolean;
    }
  > = {};

  // Collect relevant addresses and topics
  for (const quest of Object.values(questConfig)) {
    for (const step of quest.steps) {
      const questTypes = step.types;
      for (const address of step.addresses) {
        const lowerCaseAddress = address.toLowerCase();
        if (!addressToTopics[lowerCaseAddress]) {
          addressToTopics[lowerCaseAddress] = { 
            topic0: [], 
            includeTransaction: false
          };
        }

        if (step.startBlock) {
          addressToTopics[lowerCaseAddress].range = { from: step.startBlock };
        }

        if (step.includeTransaction) {
          addressToTopics[lowerCaseAddress].includeTransaction = true;
        }

        for (const questType of questTypes) {
          const questTypeInfo = QUEST_TYPE_INFO[questType];
          const eventNames = Array.isArray(questTypeInfo.eventName)
            ? questTypeInfo.eventName
            : [questTypeInfo.eventName];

          for (const eventName of eventNames) {
            const topic0 = questTypeInfo.abi.events[eventName].topic.toLowerCase();

            if (!addressToTopics[lowerCaseAddress].topic0.includes(topic0)) {
              addressToTopics[lowerCaseAddress].topic0.push(topic0);
            }
          }

          if (questTypeInfo.topic1) {
            addressToTopics[lowerCaseAddress].topic1 = formatAddressTopic(questTypeInfo.topic1);
          }

          if (questTypeInfo.topic2) {
            addressToTopics[lowerCaseAddress].topic2 = formatAddressTopic(questTypeInfo.topic2);
          }
        }
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
      range: topics.range,
      transaction: topics.includeTransaction,
    });
  }

  return processor;
}

function formatAddressTopic(address: string): string {
  return '0x' + address.replace('0x', '').padStart(64, '0').toLowerCase();
}

export type Fields = EvmBatchProcessorFields<
  ReturnType<typeof createProcessor>
>;
export type Context = DataHandlerContext<StoreWithCache, Fields>;
export type Block = BlockHeader<Fields>;
export type Log = _Log<Fields>;
export type Transaction = _Transaction<Fields>;
export type ProcessorContext<Store> = DataHandlerContext<Store, Fields>;
