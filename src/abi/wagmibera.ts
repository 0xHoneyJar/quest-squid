import * as p from '@subsquid/evm-codec'
import { event, fun, viewFun, indexed, ContractBase } from '@subsquid/evm-abi'
import type { EventParams as EParams, FunctionArguments, FunctionReturn } from '@subsquid/evm-abi'

export const events = {
    TokensPurchased: event("0x6f324591646507b4899916de4fa58ffae94dbc7e9c10ad07831e59ba341cb99d", "TokensPurchased(uint256,address,uint256,uint256,bool,uint256)", {"projectId": indexed(p.uint256), "buyer": indexed(p.address), "amount0": p.uint256, "amount1": p.uint256, "reachedMinCap": p.bool, "chainId": p.uint256}),
}

export class Contract extends ContractBase {
}

/// Event types
export type TokensPurchasedEventArgs = EParams<typeof events.TokensPurchased>
