import { createProcessor } from "../common/processorFactory";
import { CHAINS } from "../constants/types";

export const processor = createProcessor(CHAINS.BERACHAIN_TESTNET);

export * from "../common/processorFactory";
