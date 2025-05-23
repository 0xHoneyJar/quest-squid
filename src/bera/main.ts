import { TypeormDatabaseWithCache } from "@belopash/typeorm-store";
import { createMain } from "../common/main";
import { CHAINS } from "../constants/types";
import { processor } from "./processor";

processor.run(
  new TypeormDatabaseWithCache({
    stateSchema: CHAINS.BERACHAIN_TESTNET,
    isolationLevel: "READ COMMITTED",
  }),
  createMain(CHAINS.BERACHAIN_TESTNET)
);
