import * as p from '@subsquid/evm-codec'
import { event, fun, viewFun, indexed, ContractBase } from '@subsquid/evm-abi'
import type { EventParams as EParams, FunctionArguments, FunctionReturn } from '@subsquid/evm-abi'

export const events = {
    DepositForwarded: event("0x425e9f077f9db249ef795bd139f30608e86b0b6c06f049e167ddee551b8c891d", "DepositForwarded(address,address,address,uint256,uint256,address)", {"sender": indexed(p.address), "vault": indexed(p.address), "token": indexed(p.address), "amount": p.uint256, "shares": p.uint256, "to": p.address}),
}

export class Contract extends ContractBase {
}

/// Event types
export type DepositForwardedEventArgs = EParams<typeof events.DepositForwarded>
