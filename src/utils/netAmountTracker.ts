import { StepProgress } from "../model";
import { QUEST_TYPES } from "../constants/types";

interface NetAmountEvent {
  userAddress: string;
  amount: bigint;
  isInbound: boolean; // true for swaps into Henlo, false for swaps out
  questType: QUEST_TYPES;
  from: string;
  to: string;
}

/**
 * Tracks net amounts for swap events
 * Net amount = tokens swapped IN - tokens swapped OUT
 */
export class NetAmountTracker {
  /**
   * Determines if an ERC20 transfer is inbound or outbound for Henlo swaps
   */
  static isInboundTransfer(
    from: string,
    to: string,
    userAddress: string,
    relayContract: string
  ): boolean | null {
    const fromLower = from.toLowerCase();
    const toLower = to.toLowerCase();
    const userLower = userAddress.toLowerCase();
    const relayLower = relayContract.toLowerCase();

    // Inbound: Transfer FROM relay TO user (user receives Henlo)
    if (fromLower === relayLower && toLower === userLower) {
      return true;
    }

    // Outbound: Transfer FROM user TO relay (user sends Henlo back)
    if (fromLower === userLower && toLower === relayLower) {
      return false;
    }

    // Not a relevant transfer for this quest
    return null;
  }

  /**
   * Calculates net amount update for a transfer event
   */
  static calculateNetAmountUpdate(
    event: NetAmountEvent
  ): { netChange: bigint; shouldTrack: boolean } {
    // Only track if it's a relevant transfer
    if (event.isInbound === true) {
      // User receives Henlo (positive)
      return { netChange: event.amount, shouldTrack: true };
    } else if (event.isInbound === false) {
      // User sends Henlo back (negative)
      return { netChange: -event.amount, shouldTrack: true };
    }

    return { netChange: 0n, shouldTrack: false };
  }

  /**
   * Updates step progress with net amount tracking
   */
  static updateNetProgress(
    stepProgress: StepProgress,
    netChange: bigint,
    timestamp: bigint,
    transactionHash: string | null
  ): void {
    // Update the progress amount (can go negative)
    stepProgress.progressAmount += netChange;
    
    // Update timestamps
    stepProgress.lastUpdateTimestamp = timestamp;
    
    // Update transaction hash if provided
    if (transactionHash) {
      stepProgress.lastTransactionHash = transactionHash;
    }
  }

  /**
   * Checks if net amount meets the required threshold
   */
  static isNetAmountComplete(
    progressAmount: bigint,
    requiredAmount: bigint
  ): boolean {
    // For net amount tracking, we check if the final net amount is >= required
    // This prevents users from gaming the system by swapping in and out
    return progressAmount >= requiredAmount;
  }

  /**
   * Formats net amount for display (handles negative values)
   */
  static formatNetAmount(amount: bigint, decimals: number = 18): string {
    const divisor = BigInt(10 ** decimals);
    const wholePart = amount / divisor;
    const isNegative = amount < 0n;
    
    if (isNegative) {
      return `-${(-wholePart).toString()}`;
    }
    return wholePart.toString();
  }
}

/**
 * Configuration for net amount tracking quests
 */
export interface NetAmountQuestConfig {
  relayContractAddress: string;
  tokenAddress: string;
  requiredNetAmount: bigint;
  trackBothDirections: boolean;
}

/**
 * Helper to identify net amount tracking quests
 */
export function isNetAmountQuest(questName: string): boolean {
  // List of quests that use net amount tracking
  const netAmountQuests = [
    "Beras On the Opensea",
    "Bountiful Beras Booty",
    // Add more net amount tracking quests here
  ];
  
  return netAmountQuests.includes(questName);
}