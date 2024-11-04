import { parseEther, zeroAddress } from "viem";
import {
  APICULTURE_ADDRESS,
  AQUABERA_ADDRESS,
  BEBOP_ADDRESS,
  BERABORROW_BORROWER_OPERATIONS_ADDRESS,
  BERABORROW_LIQUID_STABILITY_POOL_ADDRESS,
  BERACPOL_2_ADDRESS,
  BERAMONIUM_ADDRESS,
  BGT_ADDRESS,
  BOARDING_PASS_ADDRESS,
  BOOGA_BEARS_ADDRESS,
  BOOGA_BEARS_TESTNET_ADDRESS,
  BROWN_HOLE_ADDRESS,
  BRUUVVPRINT_ADDRESS,
  BULLAS_ADDRESS,
  BV_ADDRESS,
  DIRAC_USDC_ADDRESS,
  EGGS_ADDRESS,
  ELEMENTAL_JANI_ADDRESS,
  FABLE_BERAS_ADDRESS,
  GOLDILOCKS_ADDRESS,
  GOLDISWAP_ADDRESS,
  HENLO_CULT_ADDRESS,
  HENLO_CULT_DASHBOARD_ADDRESS,
  HONEY_ADDRESS,
  HONEY_JAR_GEN_4_ADDRESS,
  HONEY_SITE_ADDRESS,
  HONEY_WBERA_REWARDS_VAULT_ADDRESS,
  HONEY_ZERU_LP_ADDRESS,
  HONEY_ZERU_REWARDS_VAULT_ADDRESS,
  HONEYPOT_JANI_ADDRESS,
  HONEYPOT_POT_ADDRESS,
  HOOK_VAULT_ADDRESS,
  HOOKED_ADDRESS,
  HORSES_ADDRESS,
  IBGT_DIRAC_VAULT_ADDRESS,
  INHERITOR_OF_A_DYING_WORLD_ADDRESS,
  JANI_ADDRESS,
  JOKERACE_GOVERNOR_ADDRESS,
  KODIAK_POOL_ADDRESS,
  LEFT_CURVE_ADDRESS,
  LV_ADDRESS,
  MEMESWAP_JANI_ADDRESS,
  MEMESWAP_SHMOKEY_ADDRESS,
  MIBERA_README_ADDRESS,
  MYSTERY_BOX_ADDRESS,
  NECT_DIRAC_VAULT_ADDRESS,
  POT_ADDRESS,
  PRETZEL_BRIDGE_ADDRESS,
  SHROOMIEZ_ADDRESS,
  SMILEE_FINANCE_FAUCET_ADDRESS,
  SMILEE_FINANCE_POSITION_MANAGER_ADDRESS,
  SPOOKY_BOX_ADDRESS,
  STATION_X_ADDRESS,
  STDV4TNT_ADDRESS,
  THJ_VALIDATOR_ADDRESS,
  URSA_ROLL_ADDRESS,
  URSA_VAULT_ADDRESS,
  WAGMI_BELAND_ADDRESS,
  WAGMI_BULLAS_ADDRESS,
  WAGMI_BVOL_ADDRESS,
  WAGMI_FABLE_ADDRESS,
  WAGMI_JAR_ADDRESS,
  WAGMI_WAGMI_ADDRESS,
  WAGMIBERA_ADDRESS,
  WBERA_ADDRESS,
  WEBERA_ADDRESS,
  YEET_BOND_ADDRESS,
  YEET_STAKE_ADDRESS,
  ZERU_LENDING_POOL,
  ZERU_STRATEGIES_CONTROLLER,
  ZORB_ADDRESS,
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
    [QUESTS.JUNKY_URSAS]: {
      steps: [
        // mint $JNKY tokens
        {
          types: [QUEST_TYPES.ERC20_MINT],
          addresses: ["0xa0525273423537BC76825B4389F3bAeC1968f83F"],
          filterCriteria: {
            [QUEST_TYPES.ERC20_MINT]: {
              from: zeroAddress,
            },
          },
        },
        {
          types: [QUEST_TYPES.ERC20_MINT],
          addresses: ["0x0000000000000000000000000000000000000000"],
        },
      ],
    },
    [QUESTS.HONEYPOT_FINANCE]: {
      steps: [
        {
          types: [QUEST_TYPES.UNISWAP_SWAP],
          addresses: ["0x8e372a22f272C6B15d07a3D25ccB9b6a3201d8bA"], // Beiro
        },
        {
          types: [QUEST_TYPES.UNISWAP_SWAP],
          addresses: ["0xdf5484AF1d8b17B147DE2584fC4EA44ba9Beb714"], // Bepe
        },
        {
          types: [QUEST_TYPES.UNISWAP_SWAP],
          addresses: ["0xC7d90C2DC76fA3A7FA24867AD38440cFd69ee7De"], // Bog
        },
        {
          types: [QUEST_TYPES.UNISWAP_SWAP],
          addresses: ["0x678Aec5982B2d1a06FEd529949Dd7eA5bAdAD616"], // Bif
        },
        {
          types: [QUEST_TYPES.UNISWAP_SWAP],
          addresses: ["0x504A6d538e21a0A1dDa34C1D3075d6cBAe1733D7"], // Bopcat
        },
        {
          types: [QUEST_TYPES.UNISWAP_SWAP],
          addresses: ["0x1033F3586556Ee464e9367908045DB5d7DA49a4f"], // Biga
        },
        {
          types: [QUEST_TYPES.UNISWAP_SWAP],
          addresses: ["0x3755a042b02Bf75d7C60b2c1E8BD37D0402ECe07"], // Boat
        },
        {
          types: [QUEST_TYPES.UNISWAP_SWAP],
          addresses: ["0xb4248d756eb4BD52D8000B9A13fE8EAB1AC1E081"], // BooDeng
        },
        {
          types: [QUEST_TYPES.UNISWAP_SWAP],
          addresses: ["0x1614a03A8D10802d633D26A096695746F2f225E5"], // Betardio
        },
        {
          types: [QUEST_TYPES.UNISWAP_SWAP],
          addresses: ["0x0a14B021B337074cCBE3Ba124Fe901809f851Dc8"], // Bapu
        },
      ],
      startTime: 1730664000,
      endTime: 1731700800,
    },
    [QUESTS.BERABORROW]: {
      steps: [
        {
          types: [
            // QUEST_TYPES.BERABORROW_DEN_CREATED,
            // QUEST_TYPES.BERABORROW_DEN_UPDATED,
            QUEST_TYPES.BERABORROW_BORROWING_FEE_PAID,
          ],
          addresses: [BERABORROW_BORROWER_OPERATIONS_ADDRESS],
        },
        {
          types: [QUEST_TYPES.BERABORROW_DEPOSIT],
          addresses: [BERABORROW_LIQUID_STABILITY_POOL_ADDRESS],
        },
        {
          types: [QUEST_TYPES.UNISWAP_SWAP],
          addresses: ["0x496e305C03909ae382974cAcA4c580E1BF32afBE"], // from my transaction, need to confirm.
        },
        {
          types: [QUEST_TYPES.UNISWAP_MINT],
          addresses: ["0x4d41822c1804ffF5c038E4905cfd1044121e0E85"], // from my transaction, need to confirm.
        },
        {
          types: [QUEST_TYPES.STAKE],
          addresses: ["0x584084216b8D0193EB26f6e28466535f29f3B20c"], // infrared option
        },
        {
          types: [QUEST_TYPES.STAKE],
          addresses: ["0x72e222116fC6063f4eE5cA90A6C59916AAD8352a"], // bartio option
        },
        {
          types: [
            QUEST_TYPES.BERABORROW_DEN_CREATED,
            QUEST_TYPES.BERABORROW_DEN_UPDATED,
          ],
          addresses: [BERABORROW_BORROWER_OPERATIONS_ADDRESS],
        },
      ],
      startTime: 1730491200 - EXTENSION_DURATION,
      endTime: 1731528000,
    },
    [QUESTS.SMILEE_FINANCE]: {
      steps: [
        {
          types: [QUEST_TYPES.SMILEE_TOKEN_EMISSION],
          addresses: [SMILEE_FINANCE_FAUCET_ADDRESS],
          startBlock: 6129017,
        },
        {
          types: [QUEST_TYPES.SMILEE_BUY_DVP],
          addresses: [SMILEE_FINANCE_POSITION_MANAGER_ADDRESS],
          startBlock: 6129017,
          includeTransaction: true,
        },
        {
          types: [QUEST_TYPES.SMILEE_SELL_DVP],
          addresses: [SMILEE_FINANCE_POSITION_MANAGER_ADDRESS],
          startBlock: 6129017,
          includeTransaction: true,
        },
      ],
      startTime: 1730232000 - EXTENSION_DURATION,
      endTime: 1731355200,
    },

    [QUESTS.BOOGA_BERAS]: {
      steps: [
        {
          types: [QUEST_TYPES.ERC721_MINT],
          addresses: [BOOGA_BEARS_TESTNET_ADDRESS],
          // filterCriteria: {
          //   [QUEST_TYPES.ERC721_MINT]: {
          //     from: zeroAddress,
          //   },
          // },
          startBlock: 6013825,
        },
      ],
      // startTime: 1729706400 - EXTENSION_DURATION,
      endTime: 1731009600,
    },
    [QUESTS.YEET]: {
      steps: [
        // {
        //   types: [QUEST_TYPES.YEET_STAKE],
        //   addresses: [YEET_STAKE_ADDRESS],
        //   startBlock: 5900573,
        // },
        {
          types: [QUEST_TYPES.YEET_BOND],
          addresses: [YEET_BOND_ADDRESS],
          startBlock: 5900573,
          includeTransaction: true,
        },
      ],
      startTime: 1729540800 - EXTENSION_DURATION,
      endTime: 1730664000,
    },
    [QUESTS.BERAMONIUM]: {
      steps: [
        {
          types: [QUEST_TYPES.BERAMONIUM_STAKE],
          addresses: [BERAMONIUM_ADDRESS],
          startBlock: 5900573,
        },
      ],
      startTime: 1729713600 - EXTENSION_DURATION,
      endTime: 1730836800,
    },
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
    [QUESTS.THE_WEBERA_JUNGLE_PARTY]: {
      steps: [
        {
          types: [QUEST_TYPES.ERC20_TRANSFER],
          addresses: [WEBERA_ADDRESS],
          filterCriteria: {
            [QUEST_TYPES.ERC20_TRANSFER]: {
              from: zeroAddress,
            },
          },
          startBlock: 5900573,
        },
      ],
      startTime: 1729627200 - EXTENSION_DURATION,
      endTime: 1730232000,
    },
    [QUESTS.BEBOP_X_BERA]: {
      steps: [
        {
          types: [QUEST_TYPES.JAM_SETTLEMENT],
          addresses: [BEBOP_ADDRESS],
          startBlock: 5889748,
          includeTransactionLogs: true,
          includeTransaction: true,
          siblingTypes: [
            QUEST_TYPES.JAM_NATIVE_TRANSFER,
            QUEST_TYPES.ERC20_TRANSFER,
          ], // Add this line
        },
      ],
      startTime: 1729706400,
      endTime: 1730138400,
    },
    [QUESTS.ZOO_ENCHANTED_NIGHT]: {
      steps: [
        {
          types: [QUEST_TYPES.LV_SWAP],
          addresses: [LV_ADDRESS],
          startBlock: 5788071,
        },
        {
          types: [QUEST_TYPES.BV_DEPOSIT],
          addresses: [BV_ADDRESS],
          startBlock: 5788071,
        },
      ],
      startTime: 1729368000 - EXTENSION_DURATION,
      endTime: 1730232000,
    },
    [QUESTS.THE_HONEY_JAR]: {
      steps: [
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
      startTime: 1729368000 - EXTENSION_DURATION,
      endTime: 1730232000,
    },
    [QUESTS.BERAC_ULTIMATE_OG]: {
      steps: [
        {
          types: [QUEST_TYPES.ERC20_MINT],
          addresses: [DIRAC_USDC_ADDRESS],
          filterCriteria: {
            [QUEST_TYPES.ERC20_MINT]: {
              from: zeroAddress,
            },
          },
          startBlock: 5574627,
        },
      ],
      // startTime: 1729080000 - EXTENSION_DURATION,
      endTime: 1730318400,
    },
    [QUESTS.OCTOBERA_REVOLUTION]: {
      steps: [
        {
          types: [QUEST_TYPES.ERC20_MINT],
          addresses: [HONEY_ZERU_LP_ADDRESS],
          filterCriteria: {
            [QUEST_TYPES.ERC20_MINT]: {
              from: zeroAddress,
            },
          },
          startBlock: 5540465,
        },
        {
          types: [QUEST_TYPES.STAKE],
          addresses: [HONEY_ZERU_REWARDS_VAULT_ADDRESS],
          startBlock: 5540465,
        },
      ],
      startTime: 1728928800 - EXTENSION_DURATION,
      endTime: 1729188000,
    },
    [QUESTS.WAGMILAND]: {
      steps: [
        {
          types: [QUEST_TYPES.ERC20_MINT],
          addresses: [WAGMI_WAGMI_ADDRESS],
          filterCriteria: {
            [QUEST_TYPES.ERC20_MINT]: {
              from: zeroAddress,
            },
          },
          startBlock: 5482013,
        },
        {
          types: [
            QUEST_TYPES.WAGMI_BUY,
            QUEST_TYPES.WAGMI_BUY,
            QUEST_TYPES.WAGMI_BUY,
            QUEST_TYPES.WAGMI_BUY,
          ],
          addresses: [
            WAGMI_JAR_ADDRESS,
            WAGMI_BULLAS_ADDRESS,
            WAGMI_FABLE_ADDRESS,
            WAGMI_BELAND_ADDRESS,
            WAGMI_BVOL_ADDRESS,
          ],
          startBlock: 5482013,
        },
      ],
      startTime: 1728756000 - EXTENSION_DURATION,
      endTime: 1729360800,
    },
    [QUESTS.THE_HONEY_FESTIVAL]: {
      steps: [
        {
          types: [QUEST_TYPES.ERC721_MINT],
          addresses: [STATION_X_ADDRESS],
          filterCriteria: {
            [QUEST_TYPES.ERC721_MINT]: {
              from: zeroAddress,
            },
          },
        },
      ],
      // startTime: 1728561600 - EXTENSION_DURATION,
      endTime: 1729425600,
    },
    [QUESTS.BRIDGE_TO_PRETZEL]: {
      steps: [
        {
          types: [QUEST_TYPES.PRETZEL_BRIDGE],
          addresses: [PRETZEL_BRIDGE_ADDRESS],
        },
      ],
      startTime: 1728669600 - EXTENSION_DURATION,
      endTime: 1728928800,
    },
    [QUESTS.SOURCE_OF_LIFE]: {
      steps: [
        {
          types: [QUEST_TYPES.AQUABERA_DEPOSIT],
          addresses: [AQUABERA_ADDRESS],
        },
      ],
      startTime: 1727956800,
      endTime: 1728216000,
    },
    [QUESTS.HOUSE_IN_DA_WOODS]: {
      steps: [
        {
          types: [QUEST_TYPES.GOLDILOCKS_BUY],
          addresses: [GOLDISWAP_ADDRESS],
        },
        {
          types: [QUEST_TYPES.GOLDILOCKS_STAKE],
          addresses: [GOLDILOCKS_ADDRESS],
        },
      ],
      startTime: 1728331200,
      endTime: 1729360800,
    },
    [QUESTS.BERAS_BIG_BET]: {
      steps: [
        {
          types: [QUEST_TYPES.URSA_ROLL_DEPOSIT],
          addresses: [URSA_ROLL_ADDRESS],
        },
        {
          types: [QUEST_TYPES.URSA_ROLL_LIQUIDITY_ADDED],
          addresses: [URSA_VAULT_ADDRESS],
        },
      ],
      startTime: 1726164000 - EXTENSION_DURATION,
      endTime: 1726596000,
    },
    [QUESTS.BRUUVVPRINT]: {
      steps: [
        {
          types: [QUEST_TYPES.MEMESWAP_DEPLOY],
          addresses: [BRUUVVPRINT_ADDRESS],
        },
      ],
    },
    [QUESTS.JANI_VS_POT]: {
      steps: [
        {
          types: [QUEST_TYPES.FTO_DEPOSIT, QUEST_TYPES.ERC20_MINT],
          addresses: [HONEYPOT_JANI_ADDRESS, JANI_ADDRESS],
          path: "Jani",
        },
        {
          types: [QUEST_TYPES.FTO_DEPOSIT, QUEST_TYPES.ERC20_MINT],
          addresses: [HONEYPOT_POT_ADDRESS, POT_ADDRESS],
          path: "Pot",
        },
      ],
      startTime: 1724673600 - EXTENSION_DURATION,
      endTime: 1725912000,
    },
    [QUESTS.HONEY_HEIST]: {
      steps: [
        {
          types: [QUEST_TYPES.ZERU_DEPOSIT],
          addresses: [ZERU_LENDING_POOL],
          filterCriteria: {
            [QUEST_TYPES.ZERU_DEPOSIT]: {
              reserve: HONEY_ADDRESS,
            },
          },
        },
        {
          types: [QUEST_TYPES.ZERU_BORROW],
          addresses: [ZERU_LENDING_POOL],
          filterCriteria: {
            [QUEST_TYPES.ZERU_BORROW]: {
              reserve: WBERA_ADDRESS,
            },
          },
        },
        {
          types: [QUEST_TYPES.ZERU_OPEN_POSITION],
          addresses: [ZERU_STRATEGIES_CONTROLLER],
          filterCriteria: {
            [QUEST_TYPES.ZERU_OPEN_POSITION]: {
              strategyId: "1",
            },
          },
        },
      ],
      startTime: 1724673600 - EXTENSION_DURATION,
      endTime: 1725192000,
    },
    [QUESTS.BERAC_POL]: {
      steps: [
        {
          types: [QUEST_TYPES.DIRAC_DEPOSIT],
          addresses: [IBGT_DIRAC_VAULT_ADDRESS],
        },
        {
          types: [QUEST_TYPES.DIRAC_DEPOSIT],
          addresses: [NECT_DIRAC_VAULT_ADDRESS],
        },
      ],
      startTime: 1724367186,
      endTime: 1725480000,
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
    [QUESTS.RUN_IT_BACK_TURBO]: {
      steps: [
        {
          types: [QUEST_TYPES.UNISWAP_SWAP],
          addresses: ["0x8a960A6e5f224D0a88BaD10463bDAD161b68C144"],
        },
        {
          types: [QUEST_TYPES.ERC721_MINT],
          addresses: ["0xBd10c70e94aCA5c0b9Eb434A62f2D8444Ec0649D"],
          filterCriteria: {
            [QUEST_TYPES.ERC721_MINT]: {
              from: zeroAddress,
            },
          },
        },
      ],
      endTime: 1720461600,
    },
    [QUESTS.UNION_FUR_AND_FRIENDSHIP]: {
      steps: [
        {
          types: [QUEST_TYPES.ERC20_MINT],
          addresses: [STDV4TNT_ADDRESS],
          filterCriteria: {
            [QUEST_TYPES.ERC20_MINT]: {
              from: zeroAddress,
            },
          },
          requiredAmount: 1n,
        },
        {
          types: [QUEST_TYPES.UNISWAP_MINT],
          addresses: [KODIAK_POOL_ADDRESS],
          includeTransaction: true,
        },
      ],
      endTime: 1723233600,
    },
  },
  [CHAINS.BASE]: {
    [QUESTS.THE_HONEY_ELEMENT]: {
      steps: [
        {
          types: [QUEST_TYPES.ERC1155_MINT],
          addresses: [ELEMENTAL_JANI_ADDRESS],
          filterCriteria: {
            [QUEST_TYPES.ERC1155_MINT]: {
              from: zeroAddress,
            },
          },
          startBlock: 21540663,
        },
      ],
      // startTime: 1729897200 - EXTENSION_DURATION,
      endTime: 1730232000,
    },
    [QUESTS.TRICK_OR_TREAT]: {
      steps: [
        {
          types: [QUEST_TYPES.ERC1155_MINT],
          addresses: [SPOOKY_BOX_ADDRESS],
          filterCriteria: {
            [QUEST_TYPES.ERC1155_MINT]: {
              from: zeroAddress,
            },
          },
          revshareTracking: true,
          includeTransaction: true,
          startBlock: 20596152,
        },
      ],
      startTime: 1727985600,
      endTime: 1730145600,
    },
    [QUESTS.A_JOURNEY_OVER_THE_HORIZON]: {
      steps: [
        {
          types: [QUEST_TYPES.ERC1155_MINT],
          addresses: [BOARDING_PASS_ADDRESS],
          filterCriteria: {
            [QUEST_TYPES.ERC1155_MINT]: {
              from: zeroAddress,
            },
          },
        },
      ],
      // startTime: 1727899200,
      endTime: 1728262800,
    },
    [QUESTS.MEME_MADNESS]: {
      steps: [
        {
          types: [QUEST_TYPES.GOVERNOR_PROPOSE],
          addresses: [JOKERACE_GOVERNOR_ADDRESS],
        },
      ],
      endTime: 1727989200,
    },
    [QUESTS.HENLO_CULT]: {
      steps: [
        {
          types: [QUEST_TYPES.ERC721_MINT],
          addresses: [HENLO_CULT_ADDRESS],
          filterCriteria: {
            [QUEST_TYPES.ERC721_MINT]: {
              from: zeroAddress,
            },
          },
        },
        {
          types: [QUEST_TYPES.ERC1155_MINT],
          addresses: [HENLO_CULT_DASHBOARD_ADDRESS],
          filterCriteria: {
            [QUEST_TYPES.ERC1155_MINT]: {
              from: zeroAddress,
            },
          },
        },
      ],
      // startTime: 1727121600 - EXTENSION_DURATION,
      endTime: 1727985600,
    },
    [QUESTS.BERA_DREAMER]: {
      steps: [
        {
          types: [QUEST_TYPES.ERC1155_MINT],
          addresses: [APICULTURE_ADDRESS],
          filterCriteria: {
            [QUEST_TYPES.ERC1155_MINT]: {
              id: 5n,
            },
          },
        },
      ],
      startTime: 1725912000 - EXTENSION_DURATION,
      endTime: 1726776000,
    },
    [QUESTS.CHAOS_SCAVENGER_HUNT]: {
      steps: [
        {
          types: [QUEST_TYPES.ETH_TRANSFER],
          addresses: ["0xf6c3De06D433D48bc984c1aF76Ae6871960396D3"], // Replace with the actual address
          requiredAmount: parseEther("0.00042"), // Set the required amount, e.g., 0.1 ETH
        },
      ],
      startTime: 1725566400 - EXTENSION_DURATION,
      endTime: 1726434000,
    },
    [QUESTS.OHA_BERA]: {
      steps: [
        {
          types: [QUEST_TYPES.ERC1155_MINT],
          addresses: [APICULTURE_ADDRESS],
          filterCriteria: {
            [QUEST_TYPES.ERC1155_MINT]: {
              id: 4n,
            },
          },
        },
      ],
      startTime: 1725364800,
    },
    [QUESTS.LEFT_CURVE_BERAS]: {
      steps: [
        {
          types: [QUEST_TYPES.ERC1155_MINT],
          addresses: [LEFT_CURVE_ADDRESS],
          filterCriteria: {
            [QUEST_TYPES.ERC1155_MINT]: {
              from: zeroAddress,
            },
          },
        },
      ],
    },
    [QUESTS.OOGA_BOOGA_TRIBE]: {
      steps: [
        {
          types: [QUEST_TYPES.ERC1155_MINT],
          addresses: [MYSTERY_BOX_ADDRESS],
          requiredAmount: 1n,
        },
      ],
      endTime: 1723226400,
    },
    [QUESTS.HONEY_HOOKS_AND_CUTLASSES]: {
      steps: [
        {
          types: [QUEST_TYPES.TOKENS_DEPOSITED],
          addresses: [HOOK_VAULT_ADDRESS],
          requiredAmount: parseEther("0.025"),
        },
      ],
    },
    [QUESTS.THE_REVENGE_OF_THE_BULLAS]: {
      steps: [
        {
          types: [QUEST_TYPES.ERC1155_MINT],
          addresses: [BULLAS_ADDRESS],
          filterCriteria: {
            [QUEST_TYPES.ERC1155_MINT]: {
              from: zeroAddress,
            },
          },
          requiredAmount: 1n,
        },
        {
          types: [QUEST_TYPES.ERC1155_MINT],
          addresses: [BULLAS_ADDRESS],
          filterCriteria: {
            [QUEST_TYPES.ERC1155_MINT]: {
              from: zeroAddress,
            },
          },
          requiredAmount: 5n,
        },
      ],
      endTime: 1721160000,
    },
    [QUESTS.JANI_LOVE_EGGS]: {
      steps: [
        {
          types: [QUEST_TYPES.ERC1155_MINT],
          addresses: [EGGS_ADDRESS],
          filterCriteria: {
            [QUEST_TYPES.ERC1155_MINT]: {
              from: zeroAddress,
            },
          },
          requiredAmount: 1n,
        },
        {
          types: [QUEST_TYPES.ERC1155_MINT],
          addresses: [EGGS_ADDRESS],
          filterCriteria: {
            [QUEST_TYPES.ERC1155_MINT]: {
              from: zeroAddress,
            },
          },
          requiredAmount: 10n,
        },
      ],
      endTime: 1722880800,
    },
    [QUESTS.CLASS_IS_IN_SESSION]: {
      steps: [
        {
          types: [QUEST_TYPES.ERC1155_MINT],
          addresses: [HOOKED_ADDRESS],
          filterCriteria: {
            [QUEST_TYPES.ERC1155_MINT]: {
              from: zeroAddress,
            },
          },
        },
      ],
      endTime: 1722103200,
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
        },
      ],
      endTime: 1717690800,
    },
  },
  [CHAINS.ARBITRUM]: {
    // [QUESTS.BOOGA_BERAS]: {
    //   steps: [
    //     {
    //       types: [QUEST_TYPES.ERC721_MINT],
    //       addresses: [BOOGA_BEARS_TESTNET_ADDRESS],
    //       filterCriteria: {
    //         [QUEST_TYPES.ERC721_MINT]: {
    //           from: zeroAddress,
    //         },
    //       },
    //       startBlock: 6013825,
    //     },
    //   ],
    //   startTime: 1729706400 - EXTENSION_DURATION,
    //   endTime: 1730829600,
    // },
    [QUESTS.THREE_IS_BETTER_THAN_ONE]: {
      steps: [
        {
          types: [QUEST_TYPES.ERC721_MINT],
          addresses: [WAGMIBERA_ADDRESS],
          filterCriteria: {
            [QUEST_TYPES.ERC721_MINT]: {
              from: zeroAddress,
            },
          },
          startBlock: 265950877,
          revshareTracking: true,
          includeTransaction: true,
        },
      ],
      startTime: 1729706400,
      endTime: 1731002400,
    },
    [QUESTS.BERAC_ULTIMATE_OG]: {
      steps: [
        {
          types: [QUEST_TYPES.ERC721_MINT],
          addresses: [BERACPOL_2_ADDRESS],
          filterCriteria: {
            [QUEST_TYPES.ERC721_MINT]: {
              from: zeroAddress,
            },
          },
          stepNumber: 2,
          revshareTracking: true,
          includeTransaction: true,
        },
      ],
      // startTime: 1729080000 - EXTENSION_DURATION,
      endTime: 1730318400,
    },
    [QUESTS.QUEST_FOR_THE_BROWN_HOLE]: {
      steps: [
        {
          types: [QUEST_TYPES.ERC1155_MINT],
          addresses: [BROWN_HOLE_ADDRESS],
          filterCriteria: {
            [QUEST_TYPES.ERC1155_MINT]: {
              from: zeroAddress,
            },
          },
          revshareTracking: true,
          includeTransaction: true,
        },
      ],
      endTime: 1729274400,
    },
    [QUESTS.LORE_HARBINGER]: {
      steps: [
        {
          types: [QUEST_TYPES.ERC721_MINT],
          addresses: [FABLE_BERAS_ADDRESS],
          filterCriteria: {
            [QUEST_TYPES.ERC721_MINT]: {
              from: zeroAddress,
            },
          },
          startBlock: 254674088,
          includeTransaction: true,
          revshareTracking: true,
        },
      ],
      startTime: 1727460000 - EXTENSION_DURATION,
      endTime: 1728064800,
    },
    [QUESTS.BROWN_HOLE_GOES_BRRRR]: {
      steps: [
        {
          types: [QUEST_TYPES.ETH_TRANSFER],
          addresses: ["0x79D08e5Aa6b0E61F56A7FE2c6B8a8d3326589E6C"], // Replace with the actual address
          requiredAmount: parseEther("0.00042"), // Set the required amount, e.g., 0.1 ETH
        },
      ],
      startTime: 1726423200 - EXTENSION_DURATION,
      endTime: 1727028000,
    },
    [QUESTS.CHAOS_SCAVENGER_HUNT]: {
      steps: [
        {
          types: [QUEST_TYPES.ETH_TRANSFER],
          addresses: ["0xf6c3De06D433D48bc984c1aF76Ae6871960396D3"], // Replace with the actual address
          requiredAmount: parseEther("0.00042"), // Set the required amount, e.g., 0.1 ETH
        },
      ],
      startTime: 1725566400 - EXTENSION_DURATION,
      endTime: 1726434000,
    },
    [QUESTS.BEARDROPS]: {
      steps: [
        {
          types: [QUEST_TYPES.ERC1155_MINT],
          addresses: [HONEY_SITE_ADDRESS],
          filterCriteria: {
            [QUEST_TYPES.ERC1155_MINT]: {
              id: 2n,
            },
          },
        },
      ],
      startTime: 1725480000 - EXTENSION_DURATION,
      endTime: 1726344000,
    },
    [QUESTS.A_VASE_FULL_OF_HONEY]: {
      steps: [
        {
          types: [QUEST_TYPES.TOKENS_MINTED],
          addresses: [BOOGA_BEARS_ADDRESS],
          requiredAmount: 1n,
        },
      ],
      startTime: 1725393600,
      endTime: 1726257600,
    },
    [QUESTS.THE_HONEY_SITE]: {
      steps: [
        {
          types: [QUEST_TYPES.ERC1155_MINT],
          addresses: [HONEY_SITE_ADDRESS],
          filterCriteria: {
            [QUEST_TYPES.ERC1155_MINT]: {
              from: zeroAddress,
            },
          },
        },
      ],
      endTime: 1723917600,
    },
    [QUESTS.PROOF_OF_BOOGA]: {
      steps: [
        {
          types: [QUEST_TYPES.TOKENS_MINTED],
          addresses: [BOOGA_BEARS_ADDRESS],
          requiredAmount: 1n,
        },
      ],
    },
  },
  [CHAINS.OPTIMISM]: {
    [QUESTS.SHROOMIEZ_SEEK_HONEYCOMB]: {
      steps: [
        {
          types: [QUEST_TYPES.ERC721_MINT],
          addresses: [SHROOMIEZ_ADDRESS],
          filterCriteria: {
            [QUEST_TYPES.ERC721_MINT]: {
              from: zeroAddress,
            },
          },
          revshareTracking: true,
          includeTransaction: true,
        },
      ],
      endTime: 1729792800,
    },
    [QUESTS.INHERITOR_OF_A_DYING_WORLD]: {
      steps: [
        {
          types: [QUEST_TYPES.ERC721_MINT],
          addresses: [INHERITOR_OF_A_DYING_WORLD_ADDRESS],
          filterCriteria: {
            [QUEST_TYPES.ERC721_MINT]: {
              from: zeroAddress,
            },
          },
          startBlock: 126566730,
        },
      ],
      endTime: 1729771200,
    },
    [QUESTS.THE_FOURTH_GENERATION]: {
      steps: [
        {
          types: [QUEST_TYPES.ERC721_MINT],
          addresses: [HONEY_JAR_GEN_4_ADDRESS],
          filterCriteria: {
            [QUEST_TYPES.ERC721_MINT]: {
              from: zeroAddress,
            },
          },
        },
      ],
      endTime: 1727985600,
    },
    [QUESTS.ANTI_DERIVATIVE_ANTHROPOLOGY]: {
      steps: [
        {
          types: [QUEST_TYPES.ERC721_MINT],
          addresses: [MIBERA_README_ADDRESS],
          filterCriteria: {
            [QUEST_TYPES.ERC721_MINT]: {
              from: zeroAddress,
            },
          },
        },
      ],
      endTime: 1727640000,
    },
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
        },
      ],
    },
  },
  [CHAINS.ZORA]: {
    [QUESTS.ZORB_MANIA]: {
      steps: [
        {
          types: [QUEST_TYPES.ERC1155_MINT],
          addresses: [ZORB_ADDRESS],
          filterCriteria: {
            [QUEST_TYPES.ERC1155_MINT]: {
              from: zeroAddress,
            },
          },
          requiredAmount: 1n,
        },
        {
          types: [QUEST_TYPES.ERC1155_MINT],
          addresses: [ZORB_ADDRESS],
          filterCriteria: {
            [QUEST_TYPES.ERC1155_MINT]: {
              from: zeroAddress,
            },
          },
          requiredAmount: 3n,
        },
      ],
      endTime: 1722183600,
    },
  },
  [CHAINS.ETHEREUM]: {
    [QUESTS.GET_TO_THE_STARTIN_LINE]: {
      steps: [
        {
          types: [QUEST_TYPES.ERC721_MINT],
          addresses: [HORSES_ADDRESS],
          filterCriteria: {
            [QUEST_TYPES.ERC721_MINT]: {
              from: zeroAddress,
            },
          },
          startBlock: 20729110,
        },
      ],
      startTime: 1726164000 - EXTENSION_DURATION,
      endTime: 1727028000,
    },
    [QUESTS.CHAOS_SCAVENGER_HUNT]: {
      steps: [
        {
          types: [QUEST_TYPES.ETH_TRANSFER],
          addresses: ["0xf6c3De06D433D48bc984c1aF76Ae6871960396D3"], // Replace with the actual address
          requiredAmount: parseEther("0.00042"), // Set the required amount, e.g., 0.1 ETH
        },
      ],
      startTime: 1725566400 - EXTENSION_DURATION,
      endTime: 1726434000,
    },
  },
} as const;

export const MISSIONS_CONFIG: Record<string, Record<string, MissionConfig>> = {
  [CHAINS.BERACHAIN]: {},
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
  [CHAINS.BERACHAIN]: process.env.RPC_BERA_HTTP,
  [CHAINS.OPTIMISM]: process.env.RPC_OPTIMISM_HTTP,
  [CHAINS.ZORA]: process.env.RPC_ZORA_HTTP,
  [CHAINS.ETHEREUM]: process.env.RPC_ETH_HTTP,
} as const;

export const ARCHIVE_GATEWAYS = {
  [CHAINS.BASE]: "https://v2.archive.subsquid.io/network/base-mainnet",
  [CHAINS.ARBITRUM]: "https://v2.archive.subsquid.io/network/arbitrum-one",
  [CHAINS.OPTIMISM]: "https://v2.archive.subsquid.io/network/optimism-mainnet",
  [CHAINS.ZORA]: "https://v2.archive.subsquid.io/network/zora-mainnet",
  [CHAINS.BERACHAIN]: "https://v2.archive.subsquid.io/network/berachain-bartio",
  [CHAINS.ETHEREUM]: "https://v2.archive.subsquid.io/network/ethereum-mainnet",
} as const;
