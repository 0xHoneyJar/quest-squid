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

  // First pass: Collect all requests
  const initialRequests: LogRequest[] = [];
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

          initialRequests.push({
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

  // Second pass: Consolidate requests with same topics and flags
  const topicMap = new Map<string, LogRequest>();
  for (const request of initialRequests) {
    const key = JSON.stringify({
      topics: request.topic0.sort(),
      topic1: request.topic1,
      topic2: request.topic2,
      includeTransaction: request.includeTransaction,
      includeTransactionLogs: request.includeTransactionLogs,
    });

    if (topicMap.has(key)) {
      const existing = topicMap.get(key)!;
      // Add new addresses
      for (const addr of request.addresses) {
        if (!existing.addresses.includes(addr)) {
          existing.addresses.push(addr);
        }
      }
      // Update range to earliest start block
      if (request.range?.from !== undefined) {
        if (existing.range?.from === undefined) {
          existing.range = { from: request.range.from };
        } else {
          existing.range.from = Math.min(existing.range.from, request.range.from);
        }
      }
    } else {
      topicMap.set(key, { ...request });
    }
  }

  // Third pass: Try to combine requests with unique address-topic pairs
  const flagGroups = new Map<string, LogRequest[]>();
  for (const request of topicMap.values()) {
    const key = JSON.stringify({
      includeTransaction: request.includeTransaction,
      includeTransactionLogs: request.includeTransactionLogs,
    });
    
    if (!flagGroups.has(key)) {
      flagGroups.set(key, []);
    }
    flagGroups.get(key)!.push(request);
  }

  // Combine requests where possible
  for (const [_, group] of flagGroups) {
    const addressTopicMap = new Map<string, Set<string>>();
    const addressRangeMap = new Map<string, number>();
    
    // Build address to topic mapping and track start blocks
    for (const request of group) {
      for (const addr of request.addresses) {
        if (!addressTopicMap.has(addr)) {
          addressTopicMap.set(addr, new Set());
        }
        request.topic0.forEach(topic => addressTopicMap.get(addr)!.add(topic));
        
        // Track the earliest start block for each address
        if (request.range?.from !== undefined) {
          const currentEarliest = addressRangeMap.get(addr);
          if (currentEarliest === undefined) {
            addressRangeMap.set(addr, request.range.from);
          } else {
            addressRangeMap.set(addr, Math.min(currentEarliest, request.range.from));
          }
        }
      }
    }

    // Find addresses that have unique topic sets
    const topicToAddresses = new Map<string, string[]>();
    for (const [addr, topics] of addressTopicMap) {
      const topicKey = Array.from(topics).sort().join(',');
      if (!topicToAddresses.has(topicKey)) {
        topicToAddresses.set(topicKey, []);
      }
      topicToAddresses.get(topicKey)!.push(addr);
    }

    // Create consolidated requests
    const consolidatedRequests: LogRequest[] = [];
    const processedAddresses = new Set<string>();

    // First, handle unique topic sets
    for (const [topicKey, addresses] of topicToAddresses) {
      if (addresses.length > 1) {
        const topics = topicKey.split(',');
        const firstRequest = group.find(r => 
          r.addresses.includes(addresses[0]) && 
          r.topic0.some(t => topics.includes(t))
        )!;

        // Find earliest start block among all addresses being combined
        let earliestBlock: number | undefined;
        for (const addr of addresses) {
          const blockNum = addressRangeMap.get(addr);
          if (blockNum !== undefined) {
            earliestBlock = earliestBlock === undefined ? blockNum : Math.min(earliestBlock, blockNum);
          }
        }

        consolidatedRequests.push({
          ...firstRequest,
          topic0: topics,
          addresses,
          range: earliestBlock !== undefined ? { from: earliestBlock } : undefined,
        });
        addresses.forEach(addr => processedAddresses.add(addr));
      }
    }

    // Add remaining requests that couldn't be consolidated
    for (const request of group) {
      const remainingAddresses = request.addresses.filter(addr => !processedAddresses.has(addr));
      if (remainingAddresses.length > 0) {
        // Find earliest start block for remaining addresses
        let earliestBlock: number | undefined;
        for (const addr of remainingAddresses) {
          const blockNum = addressRangeMap.get(addr);
          if (blockNum !== undefined) {
            earliestBlock = earliestBlock === undefined ? blockNum : Math.min(earliestBlock, blockNum);
          }
        }

        consolidatedRequests.push({
          ...request,
          addresses: remainingAddresses,
          range: earliestBlock !== undefined ? { from: earliestBlock } : undefined,
        });
      }
    }

    logRequests.push(...consolidatedRequests);
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
