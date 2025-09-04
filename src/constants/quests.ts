import { parseEther, zeroAddress } from "viem";
import {
  BERAKIN_ADDRESS,
  BERO_ADDRESS,
  BGT_VALIDATOR_ADDRESS,
  CUB_ADDRESS,
  DIRAC_REPORT_ADDRESS,
  FAT_BERA_ADDRESS,
  HENLO_AQUABERA_ADDRESS,
  HENLO_AQUABERA_VAULT_ADDRESS,
  HENLO_TOKEN_ADDRESS,
  MIBERA_MILADIES_ADDRESS,
  MIBERA_MIPARCEL_ADDRESS,
  MIBERA_MIREVEAL_ADDRESS,
  MIBERA_VALIDATOR_PUBKEY,
  MIBERA_VM_ADDRESS,
  RELAY_CONTRACT_ADDRESS,
  ROUTER_ADDRESS,
  TALES_ARTICLE_ADDRESS,
  TALES_ARTICLE_ADDRESS_2,
  YEET_ADDRESS,
} from "./address";
import {
  CHAINS,
  EXTENSION_DURATION,
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
    [QUESTS.THROUGH_THE_LOOKING_GLASS]: {
      steps: [
        {
          types: [QUEST_TYPES.ERC721_MINT],
          addresses: [MIBERA_VM_ADDRESS],
          filterCriteria: {
            [QUEST_TYPES.ERC721_MINT]: {
              from: zeroAddress,
            },
          },
        },
        {
          types: [QUEST_TYPES.ERC721_MINT],
          addresses: [MIBERA_MILADIES_ADDRESS],
          filterCriteria: {
            [QUEST_TYPES.ERC721_MINT]: {
              from: zeroAddress,
            },
          },
        },
        {
          types: [QUEST_TYPES.ERC721_MINT],
          addresses: [MIBERA_MIREVEAL_ADDRESS],
          filterCriteria: {
            [QUEST_TYPES.ERC721_MINT]: {
              from: zeroAddress,
            },
          },
        },
        {
          types: [QUEST_TYPES.ERC721_MINT],
          addresses: [MIBERA_MIPARCEL_ADDRESS],
          filterCriteria: {
            [QUEST_TYPES.ERC721_MINT]: {
              from: zeroAddress,
            },
          },
        },
      ],
      startTime: 1754251200 - EXTENSION_DURATION,
      endTime: 1755115200,
    },
    [QUESTS.MIBOOSTED_MIBERA]: {
      steps: [
        {
          types: [QUEST_TYPES.MIBOOSTED_MIBERA],
          addresses: [BGT_VALIDATOR_ADDRESS],
          filterCriteria: {
            [QUEST_TYPES.MIBOOSTED_MIBERA]: {
              pubkey: MIBERA_VALIDATOR_PUBKEY,
            },
          },
          requiredAmount: parseEther("1"),
        },
      ],
      endTime: 1752091200,
    },
    [QUESTS.HENLO_VS_THE_WORLD]: {
      steps: [
        {
          types: [QUEST_TYPES.HENLO_VS_THE_WORLD],
          addresses: [HENLO_AQUABERA_ADDRESS],
          filterCriteria: {
            [QUEST_TYPES.HENLO_VS_THE_WORLD]: {
              vault: HENLO_AQUABERA_VAULT_ADDRESS,
            },
          },
          requiredAmount: parseEther("15"),
        },
      ],
      endTime: 1746907200,
    },
    [QUESTS.MIBERA_DISPENSERY]: {
      steps: [
        {
          types: [QUEST_TYPES.MIBERA_MINT],
          addresses: [MIBERA_VM_ADDRESS],
        },
      ],
      startTime: 1745634000,
      endTime: 1747771200,
    },
    [QUESTS.BERA_GOTTA_EAT]: {
      steps: [
        {
          types: [QUEST_TYPES.FAT_BERA],
          addresses: [FAT_BERA_ADDRESS],
          requiredAmount: parseEther("1"),
        },
      ],
    },
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
      endTime: 1741954800,
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
          types: [QUEST_TYPES.ROUTER_SWAP],
          addresses: [ROUTER_ADDRESS],
          filterCriteria: [
            {
              [QUEST_TYPES.ROUTER_SWAP]: {
                inputToken: BERO_ADDRESS,
              },
            },
            {
              [QUEST_TYPES.ROUTER_SWAP]: {
                outputToken: BERO_ADDRESS,
              },
            },
          ],
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
    [QUESTS.HENLO_500K_SWAP]: {
      steps: [
        {
          types: [QUEST_TYPES.ERC20_TRANSFER],
          addresses: [HENLO_TOKEN_ADDRESS], // Track Transfer events on the Henlo token contract
          filterCriteria: {
            [QUEST_TYPES.ERC20_TRANSFER]: {
              from: RELAY_CONTRACT_ADDRESS.toLowerCase(), // Transfers FROM the relay contract
            },
          },
          requiredAmount: parseEther("500000"), // 500k Henlo tokens minimum
        },
      ],
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
