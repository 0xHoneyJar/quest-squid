import { TypeormDatabase } from "@subsquid/typeorm-store";
import { createMain } from "../common/main";
import { CHAINS } from "../constants";
import { processor } from "./processor";
import { TypeormDatabaseWithCache } from "@belopash/typeorm-store";

processor.run(
  new TypeormDatabaseWithCache({
    supportHotBlocks: true,
    stateSchema: CHAINS.BERACHAIN,
    isolationLevel: "READ COMMITTED",
  }),
  createMain(CHAINS.BERACHAIN)
);
