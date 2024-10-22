import { createProcessor } from "../common/processorFactory";
import { CHAINS } from "../constants/types";

export const processor = createProcessor(CHAINS.OPTIMISM);

export * from "../common/processorFactory";
