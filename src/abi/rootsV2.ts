import * as p from '@subsquid/evm-codec'
import { event, fun, viewFun, indexed, ContractBase } from '@subsquid/evm-abi'
import type { EventParams as EParams, FunctionArguments, FunctionReturn } from '@subsquid/evm-abi'

export const events = {
    TroveUpdated: event("0xc3770d654ed33aeea6bf11ac8ef05d02a6a04ed4686dd2f624d853bbec43cc8b", "TroveUpdated(address,uint256,uint256,uint256,uint8)", {"_borrower": indexed(p.address), "_debt": p.uint256, "_coll": p.uint256, "_stake": p.uint256, "_operation": p.uint8}),
}

export class Contract extends ContractBase {
}

/// Event types
export type TroveUpdatedEventArgs = EParams<typeof events.TroveUpdated>
