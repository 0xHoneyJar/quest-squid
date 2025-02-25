import { zeroAddress } from "viem";
import {
  BERAKIN_ADDRESS,
  BERO_ADDRESS,
  CUB_ADDRESS,
  DIRAC_REPORT_ADDRESS,
  TALES_ARTICLE_ADDRESS,
  TALES_ARTICLE_ADDRESS_2,
  YEET_ADDRESS,
} from "./address";
import {
  CHAINS,
  MissionConfig,
  QUEST_TYPES,
  QuestConfig,
  QUESTS,
} from "./types";

export const QUESTS_CONFIG: Record<string, Record<string, QuestConfig>> = {
  [CHAINS.BERACHAIN]: {
    // [QUESTS.KODIAK_ENJOYOOOR]: {
    //   steps: [
    //     {
    //       types: [QUEST_TYPES.ETH_TRANSFER],
    //       addresses: [KODIAK_ROUTER_ADDRESS],
    //       requiredAmount: 0n,
    //       includeTransaction: true,
    //     },
    //   ],
    //   startTime: 1738353600,
    //   endTime: 1739204400,
    // },
    // [QUESTS.STIR_THE_POT]: {
    //   steps: [
    //     {
    //       types: [QUEST_TYPES.GOLDILOCKS_MAINNET_BUY],
    //       addresses: [GOLDISWAP_MAINNET_ADDRESS],
    //     },
    //     {
    //       types: [QUEST_TYPES.GOLDILOCKS_MAINNET_STAKE],
    //       addresses: [GOLDILOCKS_MAINNET_ADDRESS],
    //     },
    //   ],
    //   startTime: 1738353600,
    //   endTime: 1740772800,
    // },
    // [QUESTS.THE_BERAS_ENTER_BERACHAIN]: {
    //   steps: [
    //     {
    //       types: [QUEST_TYPES.ERC721_MINT],
    //       addresses: [
    //         BIT_BEARS_ADDRESS,
    //         BABY_BEARS_ADDRESS,
    //         BAND_BEARS_ADDRESS,
    //         BOND_BEARS_ADDRESS,
    //         BONG_BEARS_ADDRESS,
    //         BOO_BEARS_ADDRESS,
    //       ],
    //       filterCriteria: {
    //         [QUEST_TYPES.ERC721_MINT]: {
    //           from: zeroAddress,
    //         },
    //       },
    //       stepNumber: 5,
    //     },
    //   ],
    //   startTime: 1738353600,
    //   endTime: 1740772800,
    // },
    [QUESTS.THE_GREAT_MIGRATION]: {
      steps: [
        {
          types: [QUEST_TYPES.ERC1155_MINT],
          addresses: [CUB_ADDRESS],
          filterCriteria: {
            [QUEST_TYPES.ERC1155_MINT]: {
              from: zeroAddress,
            },
          },
        },
      ],
      endTime: 1740600000,
    },
    [QUESTS.BERAKIN_BREAKOUT]: {
      steps: [
        {
          types: [QUEST_TYPES.ERC721_MINT],
          addresses: [BERAKIN_ADDRESS],
          filterCriteria: {
            [QUEST_TYPES.ERC721_MINT]: {
              from: zeroAddress,
            },
          },
        },
      ],
      endTime: 1740600000,
    },
    [QUESTS.LAWSUIT_LIFESTYLE]: {
      steps: [
        {
          types: [QUEST_TYPES.BERO_TOKEN_BUY, QUEST_TYPES.BERO_TOKEN_SELL],
          addresses: [BERO_ADDRESS],
          includeTransaction: true,
        },
      ],
      endTime: 1740686400,
    },
    [QUESTS.YEET_IT]: {
      steps: [
        {
          types: [QUEST_TYPES.YEET_STAKE_V2],
          addresses: [YEET_ADDRESS],
          startBlock: 1308488,
        },
      ],
      startTime: 1739908800,
      endTime: 1740772800,
    },
  },
  [CHAINS.BERACHAIN_TESTNET]: {},
  [CHAINS.BASE]: {
    [QUESTS.TALES_OF_HONEY]: {
      steps: [
        {
          types: [QUEST_TYPES.ERC721_MINT],
          addresses: [TALES_ARTICLE_ADDRESS, TALES_ARTICLE_ADDRESS_2],
          filterCriteria: {
            [QUEST_TYPES.ERC721_MINT]: {
              from: zeroAddress,
            },
          },
        },
      ],
      endTime: 1740859200,
    },
    [QUESTS.S_AND_P_DIRAC]: {
      steps: [
        {
          types: [QUEST_TYPES.ERC721_MINT],
          addresses: [DIRAC_REPORT_ADDRESS],
          filterCriteria: {
            [QUEST_TYPES.ERC721_MINT]: {
              from: zeroAddress,
            },
          },
        },
      ],
      endTime: 1740859200,
    },
  },
  [CHAINS.ARBITRUM]: {},
  [CHAINS.OPTIMISM]: {},
  [CHAINS.ZORA]: {},
  [CHAINS.ETHEREUM]: {},
} as const;

export const MISSIONS_CONFIG: Record<string, Record<string, MissionConfig>> = {
  [CHAINS.BERACHAIN_TESTNET]: {},
};

export const BLOCK_RANGES = {
  [CHAINS.ETHEREUM]: {
    from: 20681803,
  },
  [CHAINS.BASE]: {
    from: 13264923,
  },
  [CHAINS.ARBITRUM]: {
    from: 201662549,
  },
  [CHAINS.BERACHAIN]: {
    from: 800000,
  },
  [CHAINS.BERACHAIN_TESTNET]: {
    from: 607983,
  },
  [CHAINS.OPTIMISM]: {
    from: 120304396,
  },
  [CHAINS.ZORA]: {
    from: 15591949,
  },
} as const;

export const RPC_ENDPOINTS = {
  [CHAINS.BASE]: process.env.RPC_BASE_HTTP,
  [CHAINS.ARBITRUM]: process.env.RPC_ARBITRUM_ONE_HTTP,
  [CHAINS.BERACHAIN_TESTNET]: process.env.RPC_BERACHAIN_TESTNET_HTTP,
  [CHAINS.BERACHAIN]: process.env.RPC_BERACHAIN_HTTP,
  [CHAINS.OPTIMISM]: process.env.RPC_OPTIMISM_HTTP,
  [CHAINS.ZORA]: process.env.RPC_ZORA_HTTP,
  [CHAINS.ETHEREUM]: process.env.RPC_ETH_HTTP,
} as const;

export const ARCHIVE_GATEWAYS = {
  [CHAINS.BASE]: "https://v2.archive.subsquid.io/network/base-mainnet",
  [CHAINS.ARBITRUM]: "https://v2.archive.subsquid.io/network/arbitrum-one",
  [CHAINS.OPTIMISM]: "https://v2.archive.subsquid.io/network/optimism-mainnet",
  [CHAINS.ZORA]: "https://v2.archive.subsquid.io/network/zora-mainnet",
  [CHAINS.BERACHAIN_TESTNET]:
    "https://v2.archive.subsquid.io/network/berachain-bartio",
  [CHAINS.ETHEREUM]: "https://v2.archive.subsquid.io/network/ethereum-mainnet",
  [CHAINS.BERACHAIN]:
    "https://v2.archive.subsquid.io/network/berachain-mainnet",
} as const;

export const PORTAL_URLS = {
  [CHAINS.BASE]: process.env.BASE_PORTAL_URL,
  [CHAINS.ARBITRUM]: process.env.ARB_PORTAL_URL,
  [CHAINS.BERACHAIN_TESTNET]: process.env.BERA_PORTAL_URL,
  [CHAINS.OPTIMISM]: process.env.OP_PORTAL_URL,
  [CHAINS.ZORA]: process.env.ZORA_PORTAL_URL,
  [CHAINS.ETHEREUM]: process.env.ETH_PORTAL_URL,
} as const;
