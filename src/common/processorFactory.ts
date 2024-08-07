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
  MISSIONS_CONFIG,
  MISSION_TYPE_INFO,
  QUESTS_CONFIG,
  QUEST_TYPES,
  QUEST_TYPE_INFO,
  RPC_ENDPOINTS,
} from "../constants";

export function createProcessor(chain: CHAINS) {
  const questConfig = QUESTS_CONFIG[chain];
  const addressToTopics: Record<
    string,
    {
      topics0: string[];
      topics1?: string[];
      topics2?: string[];
      includeTransaction: boolean;
    }
  > = {};

  // Collect relevant addresses and topics
  for (const quest of Object.values(questConfig)) {
    for (const step of quest.steps) {
      const address = step.address.toLowerCase();
      if (!addressToTopics[address]) {
        addressToTopics[address] = {
          topics0: [],
          topics1: [],
          topics2: [],
          includeTransaction: false,
        };
      }

      const questTypeInfo = QUEST_TYPE_INFO[step.type as QUEST_TYPES];
      const topic = questTypeInfo.abi.events[questTypeInfo.eventName].topic;

      if (!addressToTopics[address].topics0.includes(topic)) {
        addressToTopics[address].topics0.push(topic);
      }

      if (step.filterCriteria?.topic1) {
        addressToTopics[address].topics1 = [step.filterCriteria.topic1];
      }

      if (step.filterCriteria?.topic2) {
        addressToTopics[address].topics2 = [step.filterCriteria.topic2];
      }

      // Set includeTransaction flag if specified in the step config
      if (step.includeTransaction) {
        addressToTopics[address].includeTransaction = true;
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

  // Add logs for each address with its specific topics and include transaction if specified
  for (const [
    address,
    { topics0, topics1, topics2, includeTransaction },
  ] of Object.entries(addressToTopics)) {
    processor.addLog({
      address: [address],
      topic0: topics0,
      topic1: topics1,
      topic2: topics2,
      transaction: includeTransaction,
    });
  }

  // Add Mission events
  for (const [missionName, missionConfig] of Object.entries(
    MISSIONS_CONFIG[chain] || {}
  )) {
    processor.addLog({
      address: [missionConfig.address],
      topic0: [
        MISSION_TYPE_INFO[missionConfig.startStreak.type].abi.events[
          MISSION_TYPE_INFO[missionConfig.startStreak.type].eventName
        ].topic,
        MISSION_TYPE_INFO[missionConfig.endStreak.type].abi.events[
          MISSION_TYPE_INFO[missionConfig.endStreak.type].eventName
        ].topic,
      ],
      transaction: true,
    });
  }

  return processor;
}

export type Fields = EvmBatchProcessorFields<
  ReturnType<typeof createProcessor>
>;
export type ProcessorContext<Store> = DataHandlerContext<Store, Fields>;
export type Block = BlockHeader<Fields>;
export type Log = _Log<Fields>;
export type Transaction = _Transaction<Fields>;
