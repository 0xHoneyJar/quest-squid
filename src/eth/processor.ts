import { createProcessor } from "../common/processorFactory";
import { CHAINS } from "../constants/types";

export const processor = createProcessor(CHAINS.ETHEREUM);

export * from "../common/processorFactory";
