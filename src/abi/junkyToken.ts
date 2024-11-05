import * as p from '@subsquid/evm-codec'
import { event, fun, viewFun, indexed, ContractBase } from '@subsquid/evm-abi'
import type { EventParams as EParams, FunctionArguments, FunctionReturn } from '@subsquid/evm-abi'

export const functions = {
    balanceOf: viewFun("0x70a08231", "balanceOf(address)", {"account": p.address}, p.uint256),
}

export class Contract extends ContractBase {

    balanceOf(account: BalanceOfParams["account"]) {
        return this.eth_call(functions.balanceOf, {account})
    }
}

/// Function types
export type BalanceOfParams = FunctionArguments<typeof functions.balanceOf>
export type BalanceOfReturn = FunctionReturn<typeof functions.balanceOf>

