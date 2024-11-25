import { createProcessor } from "../common/processorFactory";
import { CHAINS } from "../constants/types";
import { HIGH_PROCESSING_QUESTS } from "../constants/types";

export const processor = createProcessor(CHAINS.BERACHAIN, HIGH_PROCESSING_QUESTS, true);

export * from "../common/processorFactory";