import { createProcessor } from "../common/processorFactory";
import { CHAINS } from "../constants/types";

export const processor = createProcessor(CHAINS.ARBITRUM);

export * from "../common/processorFactory";
