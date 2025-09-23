import { QUESTS_CONFIG } from "../constants/quests";
import { CHAINS, QuestConfig } from "../constants/types";

const DEFAULT_ARCHIVE_GRACE_PERIOD_SECONDS = 60 * 60 * 24 * 14; // 14 days
const DEFAULT_UPCOMING_LEAD_SECONDS = 60 * 60 * 24 * 7; // 7 days

export type QuestFilterOptions = {
  includeArchived?: boolean;
  now?: number;
  gracePeriodSeconds?: number;
  upcomingLeadSeconds?: number;
};

export type QuestFilterResult = {
  questConfig: Record<string, QuestConfig>;
  questNames: string[];
  skipped: Array<{ name: string; reason: string }>;
  includeArchived: boolean;
};

export function filterQuests(
  chain: CHAINS,
  quests?: string[],
  options: QuestFilterOptions = {}
): QuestFilterResult {
  const rawConfig = QUESTS_CONFIG[chain] || {};

  if (!rawConfig || Object.keys(rawConfig).length === 0) {
    return { questConfig: {}, questNames: [], skipped: [], includeArchived: true };
  }

  const includeArchived = resolveIncludeArchived(options.includeArchived);

  if (quests && quests.length > 0) {
    const normalized = quests.map((name) => name.trim()).filter(Boolean);
    const questConfig: Record<string, QuestConfig> = {};
    const skipped: Array<{ name: string; reason: string }> = [];

    for (const questName of normalized) {
      const config = rawConfig[questName];
      if (!config) {
        skipped.push({ name: questName, reason: "missing" });
        continue;
      }
      questConfig[questName] = config;
    }

    return {
      questConfig,
      questNames: Object.keys(questConfig),
      skipped,
      includeArchived: true,
    };
  }

  const now = options.now ?? Math.floor(Date.now() / 1000);
  const grace = resolveNumber(
    options.gracePeriodSeconds,
    process.env.QUEST_ARCHIVE_GRACE_PERIOD_SECONDS,
    DEFAULT_ARCHIVE_GRACE_PERIOD_SECONDS
  );
  const upcomingLead = resolveNumber(
    options.upcomingLeadSeconds,
    process.env.QUEST_UPCOMING_LEAD_SECONDS,
    DEFAULT_UPCOMING_LEAD_SECONDS
  );

  const questConfig: Record<string, QuestConfig> = {};
  const skipped: Array<{ name: string; reason: string }> = [];

  for (const [questName, config] of Object.entries(rawConfig)) {
    if (
      includeArchived ||
      isQuestActive(config, now, grace, upcomingLead)
    ) {
      questConfig[questName] = config;
    } else {
      skipped.push({ name: questName, reason: "archived" });
    }
  }

  return {
    questConfig,
    questNames: Object.keys(questConfig),
    skipped,
    includeArchived,
  };
}

export function isQuestActive(
  config: QuestConfig,
  now: number,
  gracePeriodSeconds: number,
  upcomingLeadSeconds: number
): boolean {
  if (!config) return false;
  if (config.archived) return false;

  if (config.endTime !== undefined && config.endTime !== null) {
    if (config.endTime < now - gracePeriodSeconds) {
      return false;
    }
  }

  if (config.startTime !== undefined && config.startTime !== null) {
    if (config.startTime > now + upcomingLeadSeconds) {
      return false;
    }
  }

  return true;
}

function resolveIncludeArchived(explicit?: boolean): boolean {
  if (typeof explicit === "boolean") {
    return explicit;
  }

  const env = process.env.INCLUDE_ARCHIVED_QUESTS;
  if (!env) return false;

  return isTruthy(env);
}

function resolveNumber(
  explicit: number | undefined,
  envValue: string | undefined,
  fallback: number
): number {
  if (typeof explicit === "number" && Number.isFinite(explicit)) {
    return explicit;
  }
  if (envValue !== undefined) {
    const parsed = Number(envValue);
    if (Number.isFinite(parsed) && parsed >= 0) {
      return parsed;
    }
  }
  return fallback;
}

function isTruthy(value: string): boolean {
  return /^(1|true|TRUE|yes|YES|y|on)$/u.test(value.trim());
}
