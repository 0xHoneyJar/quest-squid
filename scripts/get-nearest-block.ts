import prompts from "prompts";
import { EXTENSION_DURATION } from "../src/constants/types";

const INTERNAL_GRAPHQL_ENDPOINT =
  "https://the-honey-jar.squids.live/internal-squid@v4/api/graphql";

async function getNearestBlockToTimestamp(timestamp: number): Promise<number> {
  const query = `
    query GetNearestBlock($timestamp: BigInt!) {
      blocks(
        limit: 1
        orderBy: timestamp_ASC
        where: { timestamp_gte: $timestamp }
      ) {
        number
        timestamp
      }
    }
  `;

  try {
    const response = await fetch(INTERNAL_GRAPHQL_ENDPOINT, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        query,
        variables: { timestamp },
      }),
    });

    const responseData = await response.json();

    if (responseData.errors) {
      console.error("GraphQL errors:", responseData.errors);
      throw new Error("GraphQL query failed");
    }

    if (!responseData.data?.blocks?.[0]) {
      console.error("No block found for timestamp:", timestamp);
      throw new Error("No block found for the given timestamp");
    }

    return Number(responseData.data.blocks[0].number);
  } catch (error) {
    console.error("Error fetching nearest block:", error);
    throw error;
  }
}

// Main execution
async function main() {
  const response = await prompts({
    type: "number",
    name: "timestamp",
    message: "Enter the timestamp (in seconds)",
    validate: (value) => value > 0 || "Please enter a valid timestamp",
  });

  if (!response.timestamp) {
    console.error("No timestamp provided");
    process.exit(1);
  }

  const adjustedTimestamp = response.timestamp - EXTENSION_DURATION;
  try {
    const blockNumber = await getNearestBlockToTimestamp(adjustedTimestamp);
    console.log(
      `Block number for timestamp ${adjustedTimestamp}: ${blockNumber}`
    );
  } catch (error) {
    console.error("Failed to get block number:", error);
    process.exit(1);
  }
}

// Run the script
main();
