import { AbiEvent } from "@subsquid/evm-abi";
import { parseEther, zeroAddress } from "viem";
import * as aquaberaAbi from "./abi/aquabera";
import * as bgtAbi from "./abi/bgt";
import * as boogaBearsAbi from "./abi/boogaBears";
import * as diracVaultAbi from "./abi/diracVault";
import * as erc1155Abi from "./abi/erc1155";
import * as erc20Abi from "./abi/erc20";
import * as erc721Abi from "./abi/erc721";
import * as ftoPairAbi from "./abi/ftoPair";
import * as goldilockedAbi from "./abi/goldilocked";
import * as goldiswapAbi from "./abi/goldiswap";
import * as governorAbi from "./abi/governor";
import * as hookVaultAbi from "./abi/hookVault";
import * as lendingPoolAbi from "./abi/lendingPool";
import * as memeswapDeployerAbi from "./abi/memeswapDeployer";
import * as pretzelBridgeAbi from "./abi/pretzelBridge";
import * as rewardsVaultAbi from "./abi/rewardsVault";
import * as simplifiedUniswapAbi from "./abi/simplifiedUniswap";
import * as spookyAbi from "./abi/spooky";
import * as stationXFactoryAbi from "./abi/stationXFactory";
import * as strategiesControllerAbi from "./abi/strategiesController";
import * as uniswapAbi from "./abi/uniswap";
import * as ursaRollAbi from "./abi/ursaRoll";
import * as ursaVaultAbi from "./abi/ursaVault";
import * as wagmiAbi from "./abi/wagmibera";

const ONE_DAY_IN_SECONDS = 60 * 60 * 24;

export const APICULTURE_ADDRESS = "0x6cfb9280767a3596ee6af887d900014a755ffc75";
export const BULLAS_ADDRESS = "0x98F6b7Db312dD276b9a7bD08e3937e68e662202C";
export const EGGS_ADDRESS = "0x30b8c95a6e7170a1322453b47722f10fea185b0f";
export const HOOKED_ADDRESS = "0xa79dd1ca7197fe48352d75984f02cb20e259f14b";
export const ZORB_ADDRESS = "0x295a70b5681069f6d37ea7ce696015c3698bb2fb";
export const HOOK_VAULT_ADDRESS = "0xB39DF6BBB1Cf2B609DeE43F109caFEFF1A7CCBEa";
export const BOOGA_BEARS_ADDRESS = "0x6Ba79f573EdFE305e7Dbd79902BC69436e197834";
export const MYSTERY_BOX_ADDRESS = "0xBB7B805B257d7C76CA9435B3ffe780355E4C4B17";
export const STDV4TNT_ADDRESS = "0x355bb949d80331516Fc7F4CF81229021187d67d2";
export const KODIAK_POOL_ADDRESS = "0xF331ABFfE9cB2b966Ab4C102ee268f4e1ad8e24b";
export const BGT_ADDRESS = "0xbDa130737BDd9618301681329bF2e46A016ff9Ad";
// HONEY-WBERA Rewards Vault
export const HONEY_WBERA_REWARDS_VAULT_ADDRESS =
  "0xAD57d7d39a487C04a44D3522b910421888Fb9C6d";
export const THJ_VALIDATOR_ADDRESS =
  "0x40495A781095932e2FC8dccA69F5e358711Fdd41";
export const HONEY_SITE_ADDRESS = "0x491e1d15f2a78799520937c02bb03a952140ac46";
// DIRAC Vaults
export const IBGT_DIRAC_VAULT_ADDRESS =
  "0x50bd749123A06F6a951AcE3C21E6d565176dCd7A";
export const NECT_DIRAC_VAULT_ADDRESS =
  "0xd5491A22D05092BDC388af8b8b69d58c2f5cc4Bc";
export const ZERU_LENDING_POOL = "0x989C7646B7F3f351E00f3e231247993C7e8C8CA2";
export const ZERU_STRATEGIES_CONTROLLER =
  "0x744E7099cb4070f9EC4108fC6fAFe9858ac94d79";
export const HONEY_ADDRESS = "0x0E4aaF1351de4c0264C5c7056Ef3777b41BD8e03";
export const WBERA_ADDRESS = "0x7507c1dc16935B82698e4C63f2746A2fCf994dF8";
export const TPOT_FAUCET_ADDRESS = "0xfc5e3743E9FAC8BB60408797607352E24Db7d65E";
export const HONEYPOT_POT_ADDRESS =
  "0x93f8beabd145a61067ef2fca38c4c9c31d47ab7e";
export const HONEYPOT_JANI_ADDRESS =
  "0x2c504e661750e03aa9252c67e771dc059a521863";
export const JANI_ADDRESS = "0x180f30908B7c92Ff2d65609088Ad17BF923b42Dc";
export const POT_ADDRESS = "0xfad73c80D67d3cb4A929d1c0fAF33A820620aE41";
export const BRUUVVPRINT_ADDRESS = "0xe93435C4FD05A566f4EB20e1fCbbb83F95886e08";
export const LEFT_CURVE_ADDRESS = "0x737732bA94b868E5115cCE477BFb171Ae9069d88";
export const OHA_BERA_ADDRESS = "0x0264D933F13eE993270591668CfF87b8D35Dd3b4";
export const URSA_ROLL_ADDRESS = "0x286E7db45Ebd9cF4426EE617b2e36Cc008CAB063";
export const URSA_VAULT_ADDRESS = "0x8E3e0A48c8Db7C9AB1419276e12808a53F441B79";
export const HORSES_ADDRESS = "0xf4DEd30B6ca5a6A40f56D9Fe066A9951571C6E3C";
export const MIBERA_README_ADDRESS =
  "0x167D72124B0e9DbC94999b280b2282d8F985a21D";
export const HENLO_CULT_ADDRESS = "0x90D1F6c8C67BA8b3E9084f8d20E1d9E64359Ec01";
export const HENLO_CULT_DASHBOARD_ADDRESS =
  "0xdC6b3687D5D9ADA19fAAd9E782E3eCE41e1DA7Ba";
export const HONEY_JAR_GEN_4_ADDRESS =
  "0xe1d16cc75c9f39a2e0f5131eb39d4b634b23f301";
export const FABLE_BERAS_ADDRESS = "0x06D7ce587bD94583070192caBc5AE3FC06D43A90";
export const JOKERACE_GOVERNOR_ADDRESS =
  "0x855B7839fd915BDC6d589cB2D612EEc7f5B0b7cc";
export const AQUABERA_ADDRESS = "0x0Dad5a47adbec92E7472F6F34AC066798dEdEE40";
export const GOLDILOCKS_ADDRESS = "0xe2cA693a47C32bd33949120d31d42b9e5Ef5c7Ef";
export const GOLDISWAP_ADDRESS = "0xC94ecBfE16E337f6e606dcd86B8A5eaDbAe7A337";
export const BOARDING_PASS_ADDRESS =
  "0x154a563Ab6C037BD0f041ac91600FfA9FE2f5fa0";
export const SPOOKY_BOX_ADDRESS = "0xBB7B805B257d7C76CA9435B3ffe780355E4C4B17";
export const PRETZEL_BRIDGE_ADDRESS =
  "0xC4555f8Fd652FECC01DbbF9a64bf1819b0a4A695";
export const STATION_X_ADDRESS = "0x013dB555Bf79c2e4De4b4e106bD7eF3DEe595500";
export const BROWN_HOLE_ADDRESS = "0x197e75a1951f5b47603787e2d206459b07f6951b";
export const WAGMI_JAR_ADDRESS = "0x8995D1745AA4439Aeb22A7D7897297D5F53aB27D";
export const WAGMI_BULLAS_ADDRESS =
  "0xCAcF16A642993D111852262c9656a77BD04D1864";
export const WAGMI_FABLE_ADDRESS = "0x0288976B80309EDB5003cB2dAa034A1E54Eb3E41";
export const WAGMI_BELAND_ADDRESS =
  "0x2A82164F7217060d53A9e988d2164cAF2aE04DA5";
export const WAGMI_WAGMI_ADDRESS = "0x157Ab16d344727510E6BC3B294E0824a6a6CAAfD";
export const INHERITOR_OF_A_DYING_WORLD_ADDRESS =
  "0x137E1747C2e57630A5a627c5359d4A7C76b0EE80";
export const HONEY_ZERU_LP_ADDRESS =
  "0x7a560f7336D75787F5DD12ea7082fa611c3F5dDB";
export const HONEY_ZERU_REWARDS_VAULT_ADDRESS =
  "0x016044304A7e7Df23630D4B5796176097C6bd409";
export const DIRAC_USDC_ADDRESS = "0xB42FA579B971FCa501E320d7531C0d6b0FE95820";
export const BERACPOL_2_ADDRESS = "0x2A2D56802ECB44EAC0110F76731981131219667c";
export const SHROOMIEZ_ADDRESS = "0xbCD0294fCC8CD0eFb326ff82b7560f86D2f0F65e";

export enum CHAINS {
  BASE = "base",
  ARBITRUM = "arbitrum",
  OPTIMISM = "optimism",
  BERACHAIN = "berachain",
  ZORA = "zora",
  ETHEREUM = "ethereum",
}

export enum QUESTS {
  HONEY_HOOKS_AND_CUTLASSES = "Honey Hooks and Cutlasses",
  HONEYCOMB_HERITAGE = "Honeycomb Heritage",
  PROOF_OF_BOOGA = "Proof of Booga",
  THJ_101 = "THJ 101",
  OURS_DE_LA_RENAISSANCE = "Ours de la Renaissance",
  THE_REVENGE_OF_THE_BULLAS = "The Revenge of the Bullas",
  HENLO_6_9 = "Henlo 6/9",
  JANI_LOVE_EGGS = "Jani Love Eggs",
  RUN_IT_BACK_TURBO = "Run It Back Turbo",
  CLASS_IS_IN_SESSION = "Class Is In Session",
  ZORB_MANIA = "Zorb Mania",
  OOGA_BOOGA_TRIBE = "Ooga Booga Tribe",
  UNION_FUR_AND_FRIENDSHIP = "Bera Union: Fur and Friendship",
  DELEGATOOOR = "Delegatooor",
  STAKOOOR = "Stakooor",
  THE_HONEY_SITE = "The Honey Site",
  BERAC_POL = "BeracPol",
  HONEY_HEIST = "Honey Heist",
  BRUUVVPRINT = "Bruuvvprint!",
  JANI_VS_POT = "Jani vs. Pot",
  LEFT_CURVE_BERAS = "Left Curve Beras",
  A_VASE_FULL_OF_HONEY = "A Vase full of Honey",
  OHA_BERA = "おはベラ!",
  BEARDROPS = "Beardrops",
  CHAOS_SCAVENGER_HUNT = "Chaos Scavenger Hunt",
  BERA_DREAMER = "Bera Dreamer",
  GET_TO_THE_STARTIN_LINE = "Get to the Startin' Line",
  BERAS_BIG_BET = "Bera's Big Bet",
  BROWN_HOLE_GOES_BRRRR = "Brown Hole Goes Brrrr",
  ANTI_DERIVATIVE_ANTHROPOLOGY = "Anti-Derivative Anthropology",
  HENLO_CULT = "Henlo Cult!",
  THE_FOURTH_GENERATION = "The Fourth Generation",
  LORE_HARBINGER = "Lore Harbinger",
  MEME_MADNESS = "Meme Madness",
  HOUSE_IN_DA_WOODS = "House in Da Woods",
  SOURCE_OF_LIFE = "Source of Life",
  A_JOURNEY_OVER_THE_HORIZON = "A Journey Over the Horizon",
  TRICK_OR_TREAT = "Trick or Treat with Spooky.box",
  BRIDGE_TO_PRETZEL = "Bridge to Pretzel",
  THE_HONEY_FESTIVAL = "The Honey Festival",
  QUEST_FOR_THE_BROWN_HOLE = "Quest for the Brown Hole",
  WAGMILAND = "Wagmiland",
  INHERITOR_OF_A_DYING_WORLD = "Inheritor of a Dying World",
  OCTOBERA_REVOLUTION = "Octobera Revolution",
  BERAC_ULTIMATE_OG = "Berac Ultimate OG",
  SHROOMIEZ_SEEK_HONEYCOMB = "Shroomiez seek HoneyComb",
}

export enum MISSIONS {
  BERA_METAL_SOLID = "Bera Metal Solid",
}

export enum QUEST_TYPES {
  ERC721_MINT = "ERC721_MINT",
  ERC1155_MINT = "ERC1155_MINT",
  ERC20_MINT = "ERC20_MINT",
  ERC20_TRANSFER = "ERC20_TRANSFER",
  UNISWAP_SWAP = "UNISWAP_SWAP",
  TOKENS_MINTED = "TOKENS_MINTED",
  TOKENS_DEPOSITED = "TOKENS_DEPOSITED",
  UNISWAP_MINT = "UNISWAP_MINT",
  DELEGATE_QUEUE = "DELEGATE_QUEUE",
  DELEGATE_ACTIVATE = "DELEGATE_ACTIVATE",
  STAKE = "STAKE",
  CLAIM_BGT_REWARD = "CLAIM_BGT_REWARD",
  DIRAC_DEPOSIT = "DIRAC_DEPOSIT",
  ZERU_DEPOSIT = "ZERU_DEPOSIT",
  ZERU_BORROW = "ZERU_BORROW",
  ZERU_OPEN_POSITION = "ZERU_OPEN_POSITION",
  MEMESWAP_DEPLOY = "MEMESWAP_DEPLOY",
  FTO_DEPOSIT = "FTO_DEPOSIT",
  ETH_TRANSFER = "ETH_TRANSFER",
  URSA_ROLL_DEPOSIT = "URSA_ROLL_DEPOSIT",
  URSA_ROLL_LIQUIDITY_ADDED = "URSA_ROLL_LIQUIDITY_ADDED",
  GOVERNOR_PROPOSE = "GOVERNOR_PROPOSE",
  GOLDILOCKS_STAKE = "GOLDILOCKS_STAKE",
  GOLDILOCKS_BUY = "GOLDILOCKS_BUY",
  AQUABERA_DEPOSIT = "AQUABERA_DEPOSIT",
  SPOOKY_MINTED = "SPOOKY_MINTED",
  PRETZEL_BRIDGE = "PRETZEL_BRIDGE",
  STATION_X_NEW_USER = "STATION_X_NEW_USER",
  WAGMI_BUY = "WAGMI_BUY",
}

export enum MISSION_TYPES {
  ACTIVATE_BOOST = "ACTIVATE_BOOST",
  DROP_BOOST = "DROP_BOOST",
}

export type AbiWithEvents = {
  events: {
    [eventName: string]: AbiEvent<any>;
  };
};

export const QUEST_TYPE_INFO: Record<
  QUEST_TYPES,
  {
    eventName: string | string[];
    abi: AbiWithEvents;
    topic1?: string;
    topic2?: string;
  }
> = {
  [QUEST_TYPES.ERC721_MINT]: {
    eventName: "Transfer",
    abi: erc721Abi,
  },
  [QUEST_TYPES.ERC1155_MINT]: {
    eventName: ["TransferSingle", "TransferBatch"],
    abi: erc1155Abi as AbiWithEvents,
  },
  [QUEST_TYPES.ERC20_MINT]: {
    eventName: "Transfer",
    abi: erc20Abi as AbiWithEvents,
  },
  [QUEST_TYPES.UNISWAP_SWAP]: {
    eventName: "Swap",
    abi: uniswapAbi as AbiWithEvents,
  },
  [QUEST_TYPES.TOKENS_MINTED]: {
    eventName: "TokensMinted",
    abi: boogaBearsAbi as AbiWithEvents,
  },
  [QUEST_TYPES.TOKENS_DEPOSITED]: {
    eventName: "TokensDeposited",
    abi: hookVaultAbi as AbiWithEvents,
  },
  [QUEST_TYPES.UNISWAP_MINT]: {
    eventName: "Mint",
    abi: simplifiedUniswapAbi as AbiWithEvents,
  },
  [QUEST_TYPES.DELEGATE_ACTIVATE]: {
    eventName: "ActivateBoost",
    abi: bgtAbi as AbiWithEvents,
    topic2: THJ_VALIDATOR_ADDRESS,
  },
  [QUEST_TYPES.DELEGATE_QUEUE]: {
    eventName: "QueueBoost",
    abi: bgtAbi as AbiWithEvents,
    topic2: THJ_VALIDATOR_ADDRESS,
  },
  [QUEST_TYPES.STAKE]: {
    eventName: "Staked",
    abi: rewardsVaultAbi as AbiWithEvents,
  },
  [QUEST_TYPES.CLAIM_BGT_REWARD]: {
    eventName: "RewardPaid",
    abi: rewardsVaultAbi as AbiWithEvents,
  },
  [QUEST_TYPES.DIRAC_DEPOSIT]: {
    eventName: "Deposit",
    abi: diracVaultAbi as AbiWithEvents,
  },
  [QUEST_TYPES.ZERU_DEPOSIT]: {
    eventName: "Deposit",
    abi: lendingPoolAbi as AbiWithEvents,
  },
  [QUEST_TYPES.ZERU_BORROW]: {
    eventName: "Borrow",
    abi: lendingPoolAbi as AbiWithEvents,
  },
  [QUEST_TYPES.ZERU_OPEN_POSITION]: {
    eventName: "openPositionEvent",
    abi: strategiesControllerAbi as AbiWithEvents,
  },
  [QUEST_TYPES.MEMESWAP_DEPLOY]: {
    eventName: "Deployed",
    abi: memeswapDeployerAbi as AbiWithEvents,
  },
  [QUEST_TYPES.FTO_DEPOSIT]: {
    eventName: "DepositRaisedToken",
    abi: ftoPairAbi as AbiWithEvents,
  },
  [QUEST_TYPES.ETH_TRANSFER]: {
    eventName: "Transfer",
    abi: {} as AbiWithEvents,
  },
  [QUEST_TYPES.URSA_ROLL_DEPOSIT]: {
    eventName: "DepositETH",
    abi: ursaRollAbi as AbiWithEvents,
  },
  [QUEST_TYPES.URSA_ROLL_LIQUIDITY_ADDED]: {
    eventName: "LiquidityAdded",
    abi: ursaVaultAbi as AbiWithEvents,
  },
  [QUEST_TYPES.GOVERNOR_PROPOSE]: {
    eventName: "ProposalCreated",
    abi: governorAbi as AbiWithEvents,
  },
  [QUEST_TYPES.GOLDILOCKS_STAKE]: {
    eventName: "Stake",
    abi: goldilockedAbi as AbiWithEvents,
  },
  [QUEST_TYPES.GOLDILOCKS_BUY]: {
    eventName: "Buy",
    abi: goldiswapAbi as AbiWithEvents,
  },
  [QUEST_TYPES.AQUABERA_DEPOSIT]: {
    eventName: "DepositForwarded",
    abi: aquaberaAbi as AbiWithEvents,
  },
  [QUEST_TYPES.SPOOKY_MINTED]: {
    eventName: "SpookySRC_minted",
    abi: spookyAbi as AbiWithEvents,
  },
  [QUEST_TYPES.PRETZEL_BRIDGE]: {
    eventName: "MessageDelivered",
    abi: pretzelBridgeAbi as AbiWithEvents,
  },
  [QUEST_TYPES.STATION_X_NEW_USER]: {
    eventName: "NewUser",
    abi: stationXFactoryAbi as AbiWithEvents,
  },
  [QUEST_TYPES.WAGMI_BUY]: {
    eventName: "TokensPurchased",
    abi: wagmiAbi as AbiWithEvents,
  },
  [QUEST_TYPES.ERC20_TRANSFER]: {
    eventName: "Transfer",
    abi: erc20Abi as AbiWithEvents,
  },
} as const;

const MISSION_TYPE_INFO: Record<
  MISSION_TYPES,
  { eventName: string; abi: AbiWithEvents }
> = {
  [MISSION_TYPES.ACTIVATE_BOOST]: {
    eventName: "ActivateBoost",
    abi: bgtAbi as AbiWithEvents,
  },
  [MISSION_TYPES.DROP_BOOST]: {
    eventName: "DropBoost",
    abi: bgtAbi as AbiWithEvents,
  },
};

export type QuestStepConfig = {
  types: QUEST_TYPES[];
  addresses: string[];
  filterCriteria?: {
    [K in QUEST_TYPES]?: Record<string, any>;
  };
  requiredAmount?: bigint;
  includeTransaction?: boolean;
  path?: string;
  startBlock?: number;
  revshareTracking?: boolean;
  stepNumber?: number; // Allows for overriding the default step number
};

type QuestConfig = {
  steps: QuestStepConfig[];
  startTime?: number;
  endTime?: number;
};

type MissionConfig = {
  address: string;
  startTime: number;
  startStreak: {
    type: MISSION_TYPES;
    filterCriteria: Record<string, any>;
  };
  endStreak: {
    type: MISSION_TYPES;
    filterCriteria: Record<string, any>;
  };
};

export const QUESTS_CONFIG: Record<string, Record<string, QuestConfig>> = {
  [CHAINS.BERACHAIN]: {
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
      // startTime: 1729080000 - ONE_DAY_IN_SECONDS,
      endTime: 1729713600,
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
      startTime: 1728928800 - ONE_DAY_IN_SECONDS,
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
          ],
          startBlock: 5482013,
        },
      ],
      startTime: 1728756000 - ONE_DAY_IN_SECONDS,
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
      // startTime: 1728561600 - ONE_DAY_IN_SECONDS,
      endTime: 1729425600,
    },
    [QUESTS.BRIDGE_TO_PRETZEL]: {
      steps: [
        {
          types: [QUEST_TYPES.PRETZEL_BRIDGE],
          addresses: [PRETZEL_BRIDGE_ADDRESS],
        },
      ],
      startTime: 1728669600 - ONE_DAY_IN_SECONDS,
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
      startTime: 1726164000 - ONE_DAY_IN_SECONDS,
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
      startTime: 1724673600 - ONE_DAY_IN_SECONDS,
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
      startTime: 1724673600 - ONE_DAY_IN_SECONDS,
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
      startTime: 1725480000 - ONE_DAY_IN_SECONDS,
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
      startTime: 1725480000 - ONE_DAY_IN_SECONDS,
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
    [QUESTS.TRICK_OR_TREAT]: {
      steps: [
        {
          types: [QUEST_TYPES.ERC721_MINT],
          addresses: [SPOOKY_BOX_ADDRESS],
          filterCriteria: {
            [QUEST_TYPES.ERC721_MINT]: {
              from: zeroAddress,
            },
          },
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
      // startTime: 1727121600 - ONE_DAY_IN_SECONDS,
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
      startTime: 1725912000 - ONE_DAY_IN_SECONDS,
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
      startTime: 1725566400 - ONE_DAY_IN_SECONDS,
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
      // startTime: 1729080000 - ONE_DAY_IN_SECONDS,
      endTime: 1729713600,
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
      startTime: 1727460000 - ONE_DAY_IN_SECONDS,
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
      startTime: 1726423200 - ONE_DAY_IN_SECONDS,
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
      startTime: 1725566400 - ONE_DAY_IN_SECONDS,
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
      startTime: 1725480000 - ONE_DAY_IN_SECONDS,
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
          types: [QUEST_TYPES.ERC1155_MINT],
          addresses: [SHROOMIEZ_ADDRESS],
          filterCriteria: {
            [QUEST_TYPES.ERC1155_MINT]: {
              from: zeroAddress,
            },
          },
          revshareTracking: true,
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
      startTime: 1726164000 - ONE_DAY_IN_SECONDS,
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
      startTime: 1725566400 - ONE_DAY_IN_SECONDS,
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
