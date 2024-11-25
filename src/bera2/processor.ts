import { createProcessor } from "../common/processorFactory";
import { CHAINS } from "../constants/types";
import { HIGH_PROCESSING_QUESTS } from "../constants/types";


export const processor = createProcessor(CHAINS.BERACHAIN, HIGH_PROCESSING_QUESTS, false);

export * from "../common/processorFactory";