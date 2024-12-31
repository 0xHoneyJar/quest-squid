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

interface LogRequest {
  topic0: string[];
  topic1?: string;
  topic2?: string;
  addresses: string[];
  includeTransaction: boolean;
  includeTransactionLogs: boolean;
  range?: { from: number; to?: number };
}

export function createProcessor(chain: CHAINS, quests?: string[]) {
  const questConfig = QUESTS_CONFIG[chain];
  const logRequests: LogRequest[] = [];
  const ethTransferAddresses: string[] = [];

  // Find the earliest start block from the quest steps if testing specific quests
  let startBlock: number = BLOCK_RANGES[chain].from;
  if (quests?.length === 1) {
    const questSteps = Object.values(
      quests
        ? quests.reduce((acc, questName) => {
            if (questConfig[questName]) {
              acc[questName] = questConfig[questName];
            }
            return acc;
          }, {} as typeof questConfig)
        : questConfig
    )[0].steps;
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

  // Filter for the specified quests or use all quests if none specified
  const filteredQuestConfig = quests
    ? quests.reduce((acc, questName) => {
        if (questConfig[questName]) {
          acc[questName] = questConfig[questName];
        }
        return acc;
      }, {} as typeof questConfig)
    : questConfig;

  // Group similar log requests
  for (const quest of Object.values(filteredQuestConfig)) {
    for (const step of quest.steps) {
      const questTypes = step.types;
      for (const address of step.addresses) {
        const lowerCaseAddress = address.toLowerCase();

        for (const questType of questTypes) {
          const questTypeInfo = QUEST_TYPE_INFO[questType];

          // Special handling for ETH_TRANSFER
          if (questType === QUEST_TYPES.ETH_TRANSFER) {
            if (!ethTransferAddresses.includes(lowerCaseAddress)) {
              ethTransferAddresses.push(lowerCaseAddress);
            }
            continue;
          }

          const eventNames = Array.isArray(questTypeInfo.eventName)
            ? questTypeInfo.eventName
            : [questTypeInfo.eventName];

          const topics = eventNames.map(
            (eventName) => questTypeInfo.abi.events[eventName].topic.toLowerCase()
          );

          // Find existing matching log request or create new one
          const matchingRequest = logRequests.find(
            (req) =>
              JSON.stringify(req.topic0.sort()) === JSON.stringify(topics.sort()) &&
              req.topic1 === (questTypeInfo.topic1 ? formatAddressTopic(questTypeInfo.topic1) : undefined) &&
              req.topic2 === (questTypeInfo.topic2 ? formatAddressTopic(questTypeInfo.topic2) : undefined) &&
              req.includeTransaction === !!step.includeTransaction &&
              req.includeTransactionLogs === !!step.includeTransactionLogs &&
              JSON.stringify(req.range) === JSON.stringify(step.startBlock ? { from: step.startBlock } : undefined)
          );

          if (matchingRequest) {
            if (!matchingRequest.addresses.includes(lowerCaseAddress)) {
              matchingRequest.addresses.push(lowerCaseAddress);
            }
          } else {
            logRequests.push({
              topic0: topics,
              topic1: questTypeInfo.topic1 ? formatAddressTopic(questTypeInfo.topic1) : undefined,
              topic2: questTypeInfo.topic2 ? formatAddressTopic(questTypeInfo.topic2) : undefined,
              addresses: [lowerCaseAddress],
              includeTransaction: !!step.includeTransaction,
              includeTransactionLogs: !!step.includeTransactionLogs,
              range: step.startBlock ? { from: step.startBlock } : undefined,
            });
          }
        }
      }
    }
  }

  const processor = new EvmBatchProcessor()
    // TODO: Uncomment this and remove setGateway to switch to portals
    // .setPortal(assertNotNull(
    //   PORTAL_URLS[chain],
    //   `Required env variable ${PORTAL_URLS[chain]} is missing`
    // ))
    .setGateway(ARCHIVE_GATEWAYS[chain])

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

  // Add consolidated log requests
  for (const request of logRequests) {
    processor.addLog({
      address: request.addresses,
      topic0: request.topic0,
      topic1: request.topic1 ? [request.topic1] : undefined,
      topic2: request.topic2 ? [request.topic2] : undefined,
      range: request.range,
      transaction: request.includeTransaction,
      transactionLogs: request.includeTransactionLogs,
    });
  }

  // Add traces for ETH transfers
  if (ethTransferAddresses.length > 0) {
    processor.addTrace({
      type: ["call"],
      callTo: ethTransferAddresses,
      transaction: true,
    });
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
