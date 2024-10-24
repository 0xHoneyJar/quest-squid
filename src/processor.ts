import { TypeormDatabaseWithCache } from "@belopash/typeorm-store";
import { createMain } from "./common/main";
import { createProcessor } from "./common/processorFactory";
import { QUESTS_CONFIG } from "./constants/quests";
import { CHAINS } from "./constants/types";

const chainArg = process.env.CHAIN;
const questArg = process.env.QUEST;

console.log(`Received arguments: chain=${chainArg}, quest=${questArg}`);

if (!chainArg || !questArg) {
  console.error("Both CHAIN and QUEST must be specified.");
  process.exit(1);
}

// Validate chain
const chain = CHAINS[chainArg.toUpperCase() as keyof typeof CHAINS];
if (!chain) {
  console.error(`Invalid chain specified: ${chainArg}`);
  console.error(`Available chains: ${Object.keys(CHAINS).join(", ")}`);
  process.exit(1);
}

// Validate quest
if (!(questArg in QUESTS_CONFIG[chain])) {
  console.error(`Invalid quest for ${chain}: ${questArg}`);
  console.error(
    `Available quests for ${chain}: ${Object.keys(QUESTS_CONFIG[chain]).join(
      ", "
    )}`
  );
  process.exit(1);
}

const quests = [questArg];

console.log(`Initializing processor for chain: ${chain}, quest: ${questArg}`);

const processor = createProcessor(chain, quests);
processor.run(new TypeormDatabaseWithCache(), createMain(chain, quests));
