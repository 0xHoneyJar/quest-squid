# Quest Squid - Technical Documentation

## Overview
This is a Subsquid indexer that tracks on-chain user participation in gamified quests across multiple blockchain networks. It monitors smart contract events to determine when users complete quest objectives and maintains a real-time database of quest progress.

## Architecture Flow

### 1. Quest Configuration Layer
**Location**: `src/constants/`

- **`types.ts`**: Defines all quest types, event types, and their mappings
  - `QUESTS` enum: All available quest names
  - `QUEST_TYPES` enum: Event types to track (ERC721_MINT, UNISWAP_SWAP, etc.)
  - `QUEST_TYPE_INFO`: Maps event types to their ABIs and event names
  
- **`quests.ts`**: Quest configuration with steps and requirements
  - Each quest has multiple steps
  - Steps define: contract addresses, event types, filter criteria, required amounts
  - Time windows (startTime/endTime) for limited campaigns

### 2. Event Processing Pipeline
**Location**: `src/common/main.ts`

**Flow**:
1. **Initialization** (`scheduleInit`):
   - Creates Quest and QuestStep entities from configuration
   - Sets up in-memory maps for efficient lookups
   - Normalizes addresses to lowercase

2. **Block Processing** (`mapBlock`):
   - Iterates through logs and traces in each block
   - Matches events against quest step addresses
   - Validates time windows (quest active period)
   - Decodes events using appropriate ABIs

3. **Event Matching**:
   - Checks if log address matches any quest step
   - Verifies event signature matches expected type
   - Applies filter criteria (e.g., specific token IDs, amounts)
   - Handles both logs (ERC20/721 events) and traces (ETH transfers)

### 3. User Progress Tracking
**Location**: `src/model/generated/`

**Data Models**:
- **Quest**: Master quest definition (name, chain, steps, stats)
- **QuestStep**: Individual step configuration
- **UserQuestProgress**: User's overall quest completion status
- **StepProgress**: User's progress on specific steps
- **RevshareEvent**: Optional revenue sharing tracking

**Progress Logic**:
```
Event occurs → Extract user address → Update step progress
→ Check if step complete → Update quest completion → Store in database
```

### 4. Event Type Handlers
**Location**: `getUserAddressAndAmount()` in main.ts`

Each event type has specific logic to extract:
- **User address**: Who gets credit (to, from, recipient, etc.)
- **Amount**: Quantity for progress tracking

Examples:
- `ERC721_MINT`: User = `to` address (recipient)
- `UNISWAP_SWAP`: User = `recipient` address
- `DELEGATE_QUEUE`: User = `sender`, Amount = delegation amount

## Key Features

### Multi-Step Quests
Quests can have multiple sequential or parallel steps:
```typescript
steps: [
  { types: [QUEST_TYPES.ERC721_MINT], addresses: [CONTRACT_A] },
  { types: [QUEST_TYPES.ERC721_MINT], addresses: [CONTRACT_B] },
]
```

### Filter Criteria
Apply conditions to events:
```typescript
filterCriteria: {
  [QUEST_TYPES.ERC721_MINT]: {
    from: zeroAddress  // Only track mints, not transfers
  }
}
```

### Sibling Events
Track multiple events in same transaction:
```typescript
includeTransactionLogs: true,
siblingTypes: [QUEST_TYPES.ERC20_TRANSFER]
```

### Time Windows
Limited-time campaigns:
```typescript
startTime: 1738353600,  // Unix timestamp
endTime: 1740772800
```

## Running the Squid

### Single Quest Mode
```bash
CHAIN=berachain QUEST="Quest Name" npm run processor
```

### Environment Variables
- `CHAIN`: Target blockchain (berachain, ethereum, base, etc.)
- `QUEST`: Specific quest to index
- `RPC_ENDPOINT`: Blockchain RPC URL
- `DATABASE_URL`: PostgreSQL connection string

## Adding New Quests

1. **Define Quest Type** (if new event type):
   ```typescript
   // In types.ts
   QUEST_TYPES.NEW_EVENT = "NEW_EVENT"
   
   // In QUEST_TYPE_INFO
   [QUEST_TYPES.NEW_EVENT]: {
     eventName: "EventName",
     abi: contractAbi
   }
   ```

2. **Add Quest Configuration**:
   ```typescript
   // In quests.ts
   [QUESTS.MY_NEW_QUEST]: {
     steps: [{
       types: [QUEST_TYPES.NEW_EVENT],
       addresses: ["0x..."],
       requiredAmount: 1n
     }],
     startTime: timestamp,
     endTime: timestamp
   }
   ```

3. **Add Address Extraction Logic**:
   ```typescript
   // In getUserAddressAndAmount()
   case QUEST_TYPES.NEW_EVENT:
     userAddress = decodedLog.user.toLowerCase();
     amount = decodedLog.value;
     break;
   ```

## Common Patterns

### Minting Quests
Track NFT/token mints from specific contracts:
```typescript
types: [QUEST_TYPES.ERC721_MINT],
filterCriteria: { from: zeroAddress }
```

### DeFi Interaction Quests
Track swaps, deposits, stakes:
```typescript
types: [QUEST_TYPES.UNISWAP_SWAP, QUEST_TYPES.DIRAC_DEPOSIT]
```

### Multi-Protocol Quests
Require interactions across multiple protocols:
```typescript
steps: [
  { addresses: [PROTOCOL_A] },
  { addresses: [PROTOCOL_B] },
  { addresses: [PROTOCOL_C] }
]
```

## Database Schema

### Core Tables
- `quest`: Quest definitions and statistics
- `quest_step`: Step configurations
- `user_quest_progress`: User completion tracking
- `step_progress`: Detailed step progress
- `revshare_event`: Revenue sharing events

### Key Relationships
```
Quest → QuestStep (1:many)
Quest → UserQuestProgress (1:many)
UserQuestProgress → StepProgress (1:many)
```

## Debugging Tips

1. **Check Event Matching**:
   - Verify contract address in quest config
   - Ensure ABI matches deployed contract
   - Check event name spelling

2. **User Address Extraction**:
   - Different events use different fields (to, from, recipient, user)
   - Some events need transaction sender (`includeTransaction: true`)

3. **Progress Not Updating**:
   - Verify time windows (startTime/endTime)
   - Check filter criteria matching
   - Ensure requiredAmount is set correctly

## Performance Considerations

- Uses `TaskQueue` for batch database operations
- Deferred entity loading with `store.defer()`
- In-memory quest maps for fast lookups
- Processes events in parallel where possible

## Contact & Support
This squid is maintained by the THJ team. For issues or questions, refer to the team's internal documentation or contact the Web3 engineering team.