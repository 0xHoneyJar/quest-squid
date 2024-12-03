import { AbiEvent } from "@subsquid/evm-abi";
import * as aquaberaAbi from "../abi/aquabera";
import * as beraborrowBorrowerOperationsAbi from "../abi/beraborrowBorrowerOperations";
import * as beramoniumAbi from "../abi/beramoniumGemhunters";
import * as beraborrowLiquidStabilityPoolAbi from "../abi/berraborrowLiquidStabilityPoolAbi";
import * as bgtAbi from "../abi/bgt";
import * as boogaBearsAbi from "../abi/boogaBears";
import * as bvaultAbi from "../abi/bvault";
import * as diracVaultAbi from "../abi/diracVault";
import * as erc1155Abi from "../abi/erc1155";
import * as erc20Abi from "../abi/erc20";
import * as erc721Abi from "../abi/erc721";
import * as ftoPairAbi from "../abi/ftoPair";
import * as goldilockedAbi from "../abi/goldilocked";
import * as goldiswapAbi from "../abi/goldiswap";
import * as governorAbi from "../abi/governor";
import * as honeyFlipAbi from "../abi/honeyFlip";
import * as hookVaultAbi from "../abi/hookVault";
import * as jamSettlementAbi from "../abi/jamSettlement";
import * as junkySlotsAbi from "../abi/junkySlots";
import * as lendingPoolAbi from "../abi/lendingPool";
import * as lvaultAbi from "../abi/lvault";
import * as memeswapDeployerAbi from "../abi/memeswapDeployer";
import * as pretzelBridgeAbi from "../abi/pretzelBridge";
import * as rewardsVaultAbi from "../abi/rewardsVault";
import * as smileeFinancePositionManagerAbi from "../abi/smileeFinanceAbiPositionManager";
import * as smileeFinanceFaucetAbi from "../abi/smileeFinanceFaucetAbi";
import * as spookyAbi from "../abi/spooky";
import * as stationXFactoryAbi from "../abi/stationXFactory";
import * as strategiesControllerAbi from "../abi/strategiesController";
import * as simplifiedUniswapAbi from "../abi/uniswap";
import * as uniswapAbi from "../abi/uniswap";
import * as ursaRollAbi from "../abi/ursaRoll";
import * as ursaRoll2Abi from "../abi/ursaroll2";
import * as ursaVaultAbi from "../abi/ursaVault";
import * as vaultManagerAbi from "../abi/vaultManager";
import * as vaultRouterAbi from "../abi/vaultRouter";
import * as wagmiAbi from "../abi/wagmibera";
import * as yeetBondAbi from "../abi/yeetBond";
import * as yeetStakeAbi from "../abi/yeetStake";
import * as uniswapV3PoolAbi from "../abi/uniswapV3pool";
import * as borrowerOperationsAbi from "../abi/BorrowerOperations";
import * as bgtStakingAbi from "../abi/BGTStaking";

import { THJ_VALIDATOR_ADDRESS } from "./address";

export const EXTENSION_DURATION = 60 * 60 * 24 * 2;

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
  THE_HONEY_JAR = "{The_Honey_Jar}",
  ZOO_ENCHANTED_NIGHT = "Zoo Enchanted Night",
  BEBOP_X_BERA = "Bebop X Bera",
  THE_WEBERA_JUNGLE_PARTY = "The WeBera Jungle Party",
  IQ_CURVE = "IQ Curve",
  THREE_IS_BETTER_THAN_ONE = "3 is better than 1",
  YEET = "{YEET}",
  BERAMONIUM = "{Beramonium}",
  THE_HONEY_ELEMENT = "The Honey Element",
  BOOGA_BERAS = "{Booga_Beras}",
  SMILEE_FINANCE = "{Smilee_Finance}",
  BERABORROW = "{Beraborrow}",
  HONEYPOT_FINANCE = "{Honeypot_Finance}",
  JUNKY_URSAS = "{Junky_Ursas}",
  BITGET = "Bitget",
  OOGA_AWAKENING = "Ooga Awakening",
  THE_ROOT_OF_ALL_DEFI = "The Root of all DeFi",
  BULLA_BULLSHIT = "Bulla Bullshit",
  ITS_RAINING_MONEYCOMB = "It's Raining Moneycomb!",
  INTERPOL_AGENT_ACADEMY = "InterPoL Agent Academy",
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
  BV_DEPOSIT = "BV_DEPOSIT",
  LV_SWAP = "LV_SWAP",
  JAM_SETTLEMENT = "JAM_SETTLEMENT",
  HONEY_VAULT_ACTIVITY = "HONEY_VAULT_ACTIVITY",
  BERAMONIUM_STAKE = "BERAMONIUM_STAKE",
  YEET_STAKE = "YEET_STAKE",
  YEET_BOND = "YEET_BOND",
  JAM_NATIVE_TRANSFER = "JAM_NATIVE_TRANSFER",
  SMILEE_TOKEN_EMISSION = "SMILEE_TOKEN_EMISSION",
  SMILEE_BUY_DVP = "SMILEE_BUY_DVP",
  SMILEE_SELL_DVP = "SMILEE_SELL_DVP",
  BERABORROW_DEN_CREATED = "BERABORROW_DEN_CREATED",
  BERABORROW_DEN_UPDATED = "BERABORROW_DEN_UPDATED",
  BERABORROW_DEPOSIT = "BERABORROW_DEPOSIT",
  BERABORROW_BORROWING_FEE_PAID = "BERABORROW_BORROWING_FEE_PAID",
  JUNKY_DEPOSIT = "JUNKY_DEPOSIT",
  HONEY_FLIP = "HONEY_FLIP",
  JUNKY_SLOTS = "JUNKY_SLOTS",
  VAULT_MANAGER_DEPOSIT = "VAULT_MANAGER_DEPOSIT",
  UNISWAP_V3_MINT = "UNISWAP_V3_MINT",
  TROVE_UPDATED = "TROVE_UPDATED",
  BGT_REWARD_PAID = "BGT_REWARD_PAID",
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
  [QUEST_TYPES.BV_DEPOSIT]: {
    eventName: "Deposit",
    abi: bvaultAbi as AbiWithEvents,
  },
  [QUEST_TYPES.LV_SWAP]: {
    eventName: "UsdMinted",
    abi: lvaultAbi as AbiWithEvents,
  },
  [QUEST_TYPES.JAM_SETTLEMENT]: {
    eventName: "Settlement",
    abi: jamSettlementAbi as AbiWithEvents,
  },
  [QUEST_TYPES.JAM_NATIVE_TRANSFER]: {
    eventName: "NativeTransfer",
    abi: jamSettlementAbi as AbiWithEvents,
  },
  [QUEST_TYPES.HONEY_VAULT_ACTIVITY]: {
    eventName: "Activity",
    abi: vaultRouterAbi as AbiWithEvents,
  },
  [QUEST_TYPES.BERAMONIUM_STAKE]: {
    eventName: "Staked",
    abi: beramoniumAbi as AbiWithEvents,
  },
  [QUEST_TYPES.YEET_STAKE]: {
    eventName: "Stake",
    abi: yeetStakeAbi as AbiWithEvents,
  },
  [QUEST_TYPES.YEET_BOND]: {
    eventName: "Bonded",
    abi: yeetBondAbi as AbiWithEvents,
  },
  [QUEST_TYPES.SMILEE_TOKEN_EMISSION]: {
    eventName: "TokenEmission",
    abi: smileeFinanceFaucetAbi as AbiWithEvents,
  },
  [QUEST_TYPES.SMILEE_BUY_DVP]: {
    eventName: "BuyDVP",
    abi: smileeFinancePositionManagerAbi as AbiWithEvents,
  },
  [QUEST_TYPES.SMILEE_SELL_DVP]: {
    eventName: "SellDVP",
    abi: smileeFinancePositionManagerAbi as AbiWithEvents,
  },
  [QUEST_TYPES.BERABORROW_DEN_CREATED]: {
    eventName: "DenCreated",
    abi: beraborrowBorrowerOperationsAbi as AbiWithEvents,
  },
  [QUEST_TYPES.BERABORROW_DEN_UPDATED]: {
    eventName: "DenUpdated",
    abi: beraborrowBorrowerOperationsAbi as AbiWithEvents,
  },
  [QUEST_TYPES.BERABORROW_DEPOSIT]: {
    eventName: "Deposit",
    abi: beraborrowLiquidStabilityPoolAbi as AbiWithEvents,
  },
  [QUEST_TYPES.BERABORROW_BORROWING_FEE_PAID]: {
    eventName: "BorrowingFeePaid",
    abi: beraborrowBorrowerOperationsAbi as AbiWithEvents,
  },
  [QUEST_TYPES.JUNKY_DEPOSIT]: {
    eventName: "DepositETH",
    abi: ursaRoll2Abi as AbiWithEvents,
  },
  [QUEST_TYPES.HONEY_FLIP]: {
    eventName: "GameStarted",
    abi: honeyFlipAbi as AbiWithEvents,
  },
  [QUEST_TYPES.JUNKY_SLOTS]: {
    eventName: "GameStarted",
    abi: junkySlotsAbi as AbiWithEvents,
  },
  [QUEST_TYPES.VAULT_MANAGER_DEPOSIT]: {
    eventName: "LiquidityAdded",
    abi: vaultManagerAbi as AbiWithEvents,
  },
  [QUEST_TYPES.UNISWAP_V3_MINT]: {
    eventName: "Mint",
    abi: uniswapV3PoolAbi as AbiWithEvents,
  },
  [QUEST_TYPES.TROVE_UPDATED]: {
    eventName: "TroveUpdated",
    abi: borrowerOperationsAbi as AbiWithEvents,
  },
  [QUEST_TYPES.BGT_REWARD_PAID]: {
    eventName: "RewardPaid",
    abi: bgtStakingAbi as AbiWithEvents,
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
  includeTransactionLogs?: boolean;
  siblingTypes?: QUEST_TYPES[]; // Add this new field
  path?: string;
  startBlock?: number;
  revshareTracking?: boolean;
  stepNumber?: number;
};

export type QuestConfig = {
  steps: QuestStepConfig[];
  startTime?: number;
  endTime?: number;
};

export type MissionConfig = {
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