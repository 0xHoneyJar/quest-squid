#!/bin/bash

# Source the .env file to load environment variables
if [ -f .env ]; then
    source .env
fi

# Function to display usage
usage() {
    echo "Usage: $0 [--quest <quest>]"
    echo "If no quest is specified, you will be prompted to select one."
    exit 1
}

# Function to get all quests
get_all_quests() {
    node -e "
        const { QUESTS_CONFIG } = require('./lib/constants/quests');
        const allQuests = Object.values(QUESTS_CONFIG).flatMap(chainQuests => Object.keys(chainQuests));
        console.log(allQuests.map(quest => quest.replace(/ /g, '␠')).join('\n'));
    "
}

# Function to get available chains for a quest
get_chains_for_quest() {
    local quest=$1
    node -e "
        const { QUESTS_CONFIG } = require('./lib/constants/quests');
        const questName = \"$quest\";
        const chains = Object.keys(QUESTS_CONFIG).filter(chain => 
            Object.keys(QUESTS_CONFIG[chain]).some(q => q === questName)
        );
        console.log(chains.join(' '));
    "
}

# Parse command line arguments
while [[ "$#" -gt 0 ]]; do
    case $1 in
        --quest) QUEST="$2"; shift ;;
        *) usage ;;
    esac
    shift
done

# If no quest is provided, list all quests and prompt for selection
if [ -z "$QUEST" ]; then
    echo "Available quests:"
    IFS=$'\n' read -d '' -r -a QUESTS < <(get_all_quests)
    for i in "${!QUESTS[@]}"; do 
        echo "$((i+1)). ${QUESTS[$i]//␠/ }"
    done
    
    read -p "Enter the number of the quest you want to select: " QUEST_NUMBER
    if ! [[ "$QUEST_NUMBER" =~ ^[0-9]+$ ]] || [ "$QUEST_NUMBER" -lt 1 ] || [ "$QUEST_NUMBER" -gt "${#QUESTS[@]}" ]; then
        echo "Invalid selection. Please run the script again and select a valid number."
        exit 1
    fi
    QUEST="${QUESTS[$((QUEST_NUMBER-1))]//␠/ }"
fi

echo "Selected quest: $QUEST"

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

# Debug output
echo "Debug: CHAIN=$CHAIN"
echo "Debug: QUEST=$QUEST"

# Run the sqd process command with environment variables
CHAIN="$CHAIN" QUEST="$QUEST" sqd process
