import * as p from '@subsquid/evm-codec'
import { event, fun, viewFun, indexed, ContractBase } from '@subsquid/evm-abi'
import type { EventParams as EParams, FunctionArguments, FunctionReturn } from '@subsquid/evm-abi'

export const events = {
    DepositETH: event("0x9217dd089bc5a19236dda6f7f479dcc9140ec5b42b1f22ddb03110004842f931", "DepositETH(uint256,address,uint256)", {"roundIndex": indexed(p.uint256), "player": indexed(p.address), "amount": p.uint256}),
    LiquidityAdded: event("0x36f3b2e1a21c19137dd82ec243b0708a1d26b3d1fa1dc49c44c4c366a5878138", "LiquidityAdded(address,address,uint256,uint256)", {"user": indexed(p.address), "liqTokenAddress": indexed(p.address), "amount": p.uint256, "vaultTokens": p.uint256}),
    GameStarted: event("0x04f724f71f660cbd5e29bd00abcd1468a28d6c5397a12f476e70c5587658c635", "GameStarted(uint64,address,uint256,uint8,address,bytes32)", {"sequenceNumber": p.uint64, "player": indexed(p.address), "wager": p.uint256, "count": p.uint8, "token": indexed(p.address), "userRandomNumber": indexed(p.bytes32)}),
}

export const functions = {
    balanceOf: viewFun("0x70a08231", "balanceOf(address)", {"account": p.address}, p.uint256),
}

export class Contract extends ContractBase {

    balanceOf(account: BalanceOfParams["account"]) {
        return this.eth_call(functions.balanceOf, {account})
    }
}

/// Event types
export type DepositETHEventArgs = EParams<typeof events.DepositETH>
export type LiquidityAddedEventArgs = EParams<typeof events.LiquidityAdded>
export type GameStartedEventArgs = EParams<typeof events.GameStarted>

/// Function types
export type BalanceOfParams = FunctionArguments<typeof functions.balanceOf>
export type BalanceOfReturn = FunctionReturn<typeof functions.balanceOf>

