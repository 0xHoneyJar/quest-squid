#!/bin/bash

# Example usage:
# bash ./scripts/test-quest.sh --quest "Inheritor of a Dying World"

# Source the .env file to load environment variables
if [ -f .env ]; then
    source .env
fi

# Function to display usage
usage() {
    echo "Usage: $0 --quest <quest>"
    exit 1
}

# Parse command line arguments
while [[ "$#" -gt 0 ]]; do
    case $1 in
        --quest) QUEST="$2"; shift ;;
        *) usage ;;
    esac
    shift
done

# Check if quest is provided
if [ -z "$QUEST" ]; then
    usage
fi

# Function to get available chains for a quest
get_chains_for_quest() {
    local quest=$1
    node -e "
        const { QUESTS_CONFIG } = require('./lib/constants/quests');
        const chains = Object.keys(QUESTS_CONFIG).filter(chain => QUESTS_CONFIG[chain].hasOwnProperty('$quest'));
        console.log(chains.join(' '));
    "
}

# Get available chains for the quest
AVAILABLE_CHAINS=$(get_chains_for_quest "$QUEST")

if [ -z "$AVAILABLE_CHAINS" ]; then
    echo "Error: Quest '$QUEST' not found in any chain configuration."
    exit 1
fi

# If there's only one chain, use it automatically
if [ $(echo $AVAILABLE_CHAINS | wc -w) -eq 1 ]; then
    CHAIN=$AVAILABLE_CHAINS
else
    # Prompt user to select a chain
    echo "Quest '$QUEST' is available on multiple chains. Please select a chain:"
    select CHAIN in $AVAILABLE_CHAINS; do
        if [ -n "$CHAIN" ]; then
            break
        fi
    done
fi

echo "Testing quest '$QUEST' on chain '$CHAIN'"

# Run the sqd process command with environment variables
CHAIN=$CHAIN QUEST=$QUEST sqd process
