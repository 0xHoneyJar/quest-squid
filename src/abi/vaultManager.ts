import * as p from '@subsquid/evm-codec'
import { event, fun, viewFun, indexed, ContractBase } from '@subsquid/evm-abi'
import type { EventParams as EParams, FunctionArguments, FunctionReturn } from '@subsquid/evm-abi'

export const events = {
    LiquidityAdded: event("0x36f3b2e1a21c19137dd82ec243b0708a1d26b3d1fa1dc49c44c4c366a5878138", "LiquidityAdded(address,address,uint256,uint256)", {"user": indexed(p.address), "liqTokenAddress": indexed(p.address), "amount": p.uint256, "vaultTokens": p.uint256}),
}

export class Contract extends ContractBase {
}

/// Event types
export type LiquidityAddedEventArgs = EParams<typeof events.LiquidityAdded>
