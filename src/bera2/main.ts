import { TypeormDatabaseWithCache } from "@belopash/typeorm-store";
import { createMain } from "../common/main";
import { CHAINS } from "../constants/types";
import { processor } from "./processor";

processor.run(
  new TypeormDatabaseWithCache({
    stateSchema: "bera2_processor",
    isolationLevel: "READ COMMITTED",
  }),
  createMain(CHAINS.BERACHAIN)
);