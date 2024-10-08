import * as p from '@subsquid/evm-codec'
import { event, fun, viewFun, indexed, ContractBase } from '@subsquid/evm-abi'
import type { EventParams as EParams, FunctionArguments, FunctionReturn } from '@subsquid/evm-abi'

export const events = {
    Staked: event("0x9e71bc8eea02a63969f509818f2dafb9254532904319f9dbda79b67bd34a5f3d", "Staked(address,uint256)", {"user": indexed(p.address), "amount": p.uint256}),
}

export class Contract extends ContractBase {
}

/// Event types
export type StakedEventArgs = EParams<typeof events.Staked>
