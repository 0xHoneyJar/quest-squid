import * as p from '@subsquid/evm-codec'
import { event, fun, viewFun, indexed, ContractBase } from '@subsquid/evm-abi'
import type { EventParams as EParams, FunctionArguments, FunctionReturn } from '@subsquid/evm-abi'

export const events = {
    Buy: event("0xe3d4187f6ca4248660cc0ac8b8056515bac4a8132be2eca31d6d0cc170722a7e", "Buy(address,uint256)", {"user": indexed(p.address), "amount": p.uint256}),
    Stake: event("0xebedb8b3c678666e7f36970bc8f57abf6d8fa2e828c0da91ea5b75bf68ed101a", "Stake(address,uint256)", {"from": indexed(p.address), "amount": p.uint256}),
    TOKEN__Buy: event("0x3590f0a355392f9c1de13cd72ea564d10019bb3605905ea543b424a360b9a88e", "TOKEN__Buy(address,address,uint256)", {"account": p.address, "to": p.address, "amount": p.uint256}),
    TOKEN__Sell: event("0xffc36e4a73526964b1bc25e2a44a90e979636de95ea6e59e01b6b83f2e20ae1e", "TOKEN__Sell(address,address,uint256)", {"account": indexed(p.address), "to": indexed(p.address), "amount": p.uint256}),
}

export class Contract extends ContractBase {
}

/// Event types
export type BuyEventArgs = EParams<typeof events.Buy>
export type StakeEventArgs = EParams<typeof events.Stake>
export type TOKEN__BuyEventArgs = EParams<typeof events.TOKEN__Buy>
export type TOKEN__SellEventArgs = EParams<typeof events.TOKEN__Sell>
