import { parseEther, zeroAddress } from "viem";
import {
  APICULTURE_ADDRESS,
  BABY_BEARS_ADDRESS,
  BAND_BEARS_ADDRESS,
  BGT_ADDRESS,
  BIT_BEARS_ADDRESS,
  BOND_BEARS_ADDRESS,
  BONG_BEARS_ADDRESS,
  BOO_BEARS_ADDRESS,
  BOOGA_BEARS_ADDRESS,
  GOLDILOCKS_MAINNET_ADDRESS,
  GOLDISWAP_MAINNET_ADDRESS,
  HONEY_WBERA_REWARDS_VAULT_ADDRESS,
  HONEYPOT_JANI_ADDRESS,
  HONEYPOT_POT_ADDRESS,
  HOOK_VAULT_ADDRESS,
  JANI_ADDRESS,
  KODIAK_ROUTER_ADDRESS,
  MEMESWAP_JANI_ADDRESS,
  MEMESWAP_SHMOKEY_ADDRESS,
  POT_ADDRESS,
  THJ_VALIDATOR_ADDRESS,
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
    [QUESTS.KODIAK_ENJOYOOOR]: {
      steps: [
        {
          types: [QUEST_TYPES.ETH_TRANSFER],
          addresses: [KODIAK_ROUTER_ADDRESS],
          requiredAmount: 0n,
          includeTransaction: true,
        },
      ],
      startTime: 1738353600,
      endTime: 1739204400,
    },
    [QUESTS.STIR_THE_POT]: {
      steps: [
        {
          types: [QUEST_TYPES.GOLDILOCKS_MAINNET_BUY],
          addresses: [GOLDISWAP_MAINNET_ADDRESS],
        },
        {
          types: [QUEST_TYPES.GOLDILOCKS_MAINNET_STAKE],
          addresses: [GOLDILOCKS_MAINNET_ADDRESS],
        },
      ],
      startTime: 1738353600,
      endTime: 1740772800,
    },
    [QUESTS.THE_BERAS_ENTER_BERACHAIN]: {
      steps: [
        {
          types: [QUEST_TYPES.ERC721_MINT],
          addresses: [
            BIT_BEARS_ADDRESS,
            BABY_BEARS_ADDRESS,
            BAND_BEARS_ADDRESS,
            BOND_BEARS_ADDRESS,
            BONG_BEARS_ADDRESS,
            BOO_BEARS_ADDRESS,
          ],
          filterCriteria: {
            [QUEST_TYPES.ERC721_MINT]: {
              from: zeroAddress,
            },
          },
          stepNumber: 5,
        },
      ],
      startTime: 1738353600,
      endTime: 1740772800,
    },
  },
  [CHAINS.BERACHAIN_TESTNET]: {
    [QUESTS.IQ_CURVE]: {
      steps: [
        {
          types: [QUEST_TYPES.ERC20_MINT],
          addresses: [MEMESWAP_JANI_ADDRESS],
          // filterCriteria: {
          //   [QUEST_TYPES.ERC20_MINT]: {
          //     from: zeroAddress,
          //   },
          // },
          stepNumber: 1,
          startBlock: 5900573,
          path: "Jani",
        },
        {
          types: [QUEST_TYPES.ERC20_MINT],
          addresses: [MEMESWAP_SHMOKEY_ADDRESS],
          // filterCriteria: {
          //   [QUEST_TYPES.ERC20_MINT]: {
          //     from: zeroAddress,
          //   },
          // },
          stepNumber: 1,
          startBlock: 5900573,
          path: "Shmokey",
        },
      ],
      startTime: 1729627200 - EXTENSION_DURATION,
      endTime: 1730232000,
    },

    [QUESTS.JANI_VS_POT]: {
      steps: [
        {
          types: [QUEST_TYPES.FTO_DEPOSIT, QUEST_TYPES.ERC20_MINT],
          addresses: [HONEYPOT_JANI_ADDRESS, JANI_ADDRESS],
          path: "Jani",
          startBlock: 3617024,
        },
        {
          types: [QUEST_TYPES.FTO_DEPOSIT, QUEST_TYPES.ERC20_MINT],
          addresses: [HONEYPOT_POT_ADDRESS, POT_ADDRESS],
          path: "Pot",
          startBlock: 3616975,
        },
      ],
      startTime: 1724673600 - EXTENSION_DURATION,
      endTime: 1725912000,
    },
    [QUESTS.STAKOOOR]: {
      steps: [
        {
          types: [QUEST_TYPES.STAKE],
          addresses: [HONEY_WBERA_REWARDS_VAULT_ADDRESS],
          startBlock: 3853226,
        },
      ],
      startTime: 1725480000 - EXTENSION_DURATION,
    },
    [QUESTS.DELEGATOOOR]: {
      steps: [
        {
          types: [QUEST_TYPES.CLAIM_BGT_REWARD],
          addresses: [HONEY_WBERA_REWARDS_VAULT_ADDRESS],
          startBlock: 3853226,
        },
        {
          types: [QUEST_TYPES.DELEGATE_QUEUE],
          addresses: [BGT_ADDRESS],
          filterCriteria: {
            [QUEST_TYPES.DELEGATE_QUEUE]: {
              validator: THJ_VALIDATOR_ADDRESS,
            },
          },
          requiredAmount: parseEther("1"),
          startBlock: 3853226,
        },
        {
          types: [QUEST_TYPES.DELEGATE_ACTIVATE],
          addresses: [BGT_ADDRESS],
          filterCriteria: {
            [QUEST_TYPES.DELEGATE_ACTIVATE]: {
              validator: THJ_VALIDATOR_ADDRESS,
            },
          },
          requiredAmount: parseEther("1"),
          startBlock: 3853226,
        },
      ],
      startTime: 1725480000 - EXTENSION_DURATION,
    },
  },
  [CHAINS.BASE]: {
    [QUESTS.CARNIVAL_AND_CHAOS]: {
      steps: [
        {
          types: [QUEST_TYPES.ERC1155_MINT],
          addresses: ["0x4c51768bed7cb3ae10a7a1f44729e2338c4104d1"],
          filterCriteria: {
            [QUEST_TYPES.ERC1155_MINT]: {
              from: zeroAddress,
            },
          },
          startBlock: 24868191,
        },
      ],
      startTime: 1736496000 - EXTENSION_DURATION,
      endTime: 1736611800,
    },
    [QUESTS.HONEY_HOOKS_AND_CUTLASSES]: {
      steps: [
        {
          types: [QUEST_TYPES.TOKENS_DEPOSITED],
          addresses: [HOOK_VAULT_ADDRESS],
          requiredAmount: parseEther("0.025"),
          startBlock: 12694135,
        },
      ],
    },
    [QUESTS.HENLO_6_9]: {
      steps: [
        {
          types: [QUEST_TYPES.ERC1155_MINT],
          addresses: [APICULTURE_ADDRESS],
          filterCriteria: {
            [QUEST_TYPES.ERC1155_MINT]: {
              from: zeroAddress,
            },
          },
          startBlock: 13803165,
        },
      ],
      endTime: 1718554800,
    },
    [QUESTS.OURS_DE_LA_RENAISSANCE]: {
      steps: [
        {
          types: [QUEST_TYPES.ERC1155_MINT],
          addresses: [APICULTURE_ADDRESS],
          filterCriteria: {
            [QUEST_TYPES.ERC1155_MINT]: {
              from: zeroAddress,
            },
          },
          startBlock: 13803165,
        },
      ],
      endTime: 1717690800,
    },
  },
  [CHAINS.ARBITRUM]: {
    [QUESTS.PROOF_OF_BOOGA]: {
      steps: [
        {
          types: [QUEST_TYPES.TOKENS_MINTED],
          addresses: [BOOGA_BEARS_ADDRESS],
          requiredAmount: 1n,
          startBlock: 207361208,
        },
      ],
    },
  },
  [CHAINS.OPTIMISM]: {
    [QUESTS.THJ_101]: {
      steps: [
        {
          types: [QUEST_TYPES.ERC721_MINT],
          addresses: ["0x9bc2C48189Ff3865875E4A85AfEb6d6ba848739B"],
          filterCriteria: {
            [QUEST_TYPES.ERC721_MINT]: {
              from: zeroAddress,
            },
          },
          startBlock: 120304360,
        },
      ],
    },
  },
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
} as const;

export const PORTAL_URLS = {
  [CHAINS.BASE]: process.env.BASE_PORTAL_URL,
  [CHAINS.ARBITRUM]: process.env.ARB_PORTAL_URL,
  [CHAINS.BERACHAIN_TESTNET]: process.env.BERA_PORTAL_URL,
  [CHAINS.OPTIMISM]: process.env.OP_PORTAL_URL,
  [CHAINS.ZORA]: process.env.ZORA_PORTAL_URL,
  [CHAINS.ETHEREUM]: process.env.ETH_PORTAL_URL,
} as const;
