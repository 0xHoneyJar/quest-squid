import * as p from '@subsquid/evm-codec'
import { event, fun, viewFun, indexed, ContractBase } from '@subsquid/evm-abi'
import type { EventParams as EParams, FunctionArguments, FunctionReturn } from '@subsquid/evm-abi'

export const events = {
    DepositETH: event("0x9217dd089bc5a19236dda6f7f479dcc9140ec5b42b1f22ddb03110004842f931", "DepositETH(uint256,address,uint256)", {"roundIndex": indexed(p.uint256), "player": indexed(p.address), "amount": p.uint256}),
}

export class Contract extends ContractBase {
}

/// Event types
export type DepositETHEventArgs = EParams<typeof events.DepositETH>
