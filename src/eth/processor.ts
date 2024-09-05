import { createProcessor } from "../common/processorFactory";
import { CHAINS } from "../constants";

export const processor = createProcessor(CHAINS.ETHEREUM);

export * from "../common/processorFactory";
