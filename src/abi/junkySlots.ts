import * as p from '@subsquid/evm-codec'
import { event, fun, viewFun, indexed, ContractBase } from '@subsquid/evm-abi'
import type { EventParams as EParams, FunctionArguments, FunctionReturn } from '@subsquid/evm-abi'

export const events = {
    GameStarted: event("0x04f724f71f660cbd5e29bd00abcd1468a28d6c5397a12f476e70c5587658c635", "GameStarted(uint64,address,uint256,uint8,address,bytes32)", {"sequenceNumber": p.uint64, "player": indexed(p.address), "wager": p.uint256, "count": p.uint8, "token": indexed(p.address), "userRandomNumber": indexed(p.bytes32)}),
}

export class Contract extends ContractBase {
}

/// Event types
export type GameStartedEventArgs = EParams<typeof events.GameStarted>
