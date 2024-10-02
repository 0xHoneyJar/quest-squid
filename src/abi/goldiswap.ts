import * as p from '@subsquid/evm-codec'
import { event, fun, viewFun, indexed, ContractBase } from '@subsquid/evm-abi'
import type { EventParams as EParams, FunctionArguments, FunctionReturn } from '@subsquid/evm-abi'

export const events = {
    Approval: event("0x8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925", "Approval(address,address,uint256)", {"owner": indexed(p.address), "spender": indexed(p.address), "amount": p.uint256}),
    Buy: event("0x064fb1933e186be0b289a87e98518dc18cc9856ecbc9f1353d1a138ddf733ec5", "Buy(address,uint256,uint256,uint256,uint256)", {"user": indexed(p.address), "amount": p.uint256, "fsl": p.uint256, "psl": p.uint256, "supply": p.uint256}),
    Redeem: event("0xe02f6383e19e87c24e0c03e2cd5dbd05156cb29a1b0f3dbca1fa3430e444f63d", "Redeem(address,uint256,uint256,uint256,uint256)", {"user": indexed(p.address), "amount": p.uint256, "fsl": p.uint256, "psl": p.uint256, "supply": p.uint256}),
    Sale: event("0x8a6435dc2017e9eb1b4348796a32fdbd80a8b41fd176793bb7246dfb1287b0b0", "Sale(address,uint256,uint256,uint256,uint256)", {"user": indexed(p.address), "amount": p.uint256, "fsl": p.uint256, "psl": p.uint256, "supply": p.uint256}),
    Transfer: event("0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef", "Transfer(address,address,uint256)", {"from": indexed(p.address), "to": indexed(p.address), "amount": p.uint256}),
}

export const functions = {
    DOMAIN_SEPARATOR: viewFun("0x3644e515", "DOMAIN_SEPARATOR()", {}, p.bytes32),
    MAX_FLOOR_REDUCE: viewFun("0x0b4e03bb", "MAX_FLOOR_REDUCE()", {}, p.uint256),
    MAX_RATIO: viewFun("0x630eb8ab", "MAX_RATIO()", {}, p.uint256),
    allowance: viewFun("0xdd62ed3e", "allowance(address,address)", {"owner": p.address, "spender": p.address}, p.uint256),
    approve: fun("0x095ea7b3", "approve(address,uint256)", {"spender": p.address, "amount": p.uint256}, p.bool),
    balanceOf: viewFun("0x70a08231", "balanceOf(address)", {"owner": p.address}, p.uint256),
    borrowTransfer: fun("0xea194de0", "borrowTransfer(address,uint256,uint256)", {"to": p.address, "amount": p.uint256, "fee": p.uint256}, ),
    buy: fun("0xd6febde8", "buy(uint256,uint256)", {"amount": p.uint256, "maxAmount": p.uint256}, ),
    decimals: viewFun("0x313ce567", "decimals()", {}, p.uint8),
    floorPrice: viewFun("0x9363c812", "floorPrice()", {}, p.uint256),
    fsl: viewFun("0x1db77a4d", "fsl()", {}, p.uint256),
    goldilocked: viewFun("0xcd19c458", "goldilocked()", {}, p.address),
    honey: viewFun("0x36b2c4b2", "honey()", {}, p.address),
    initializeProtocol: fun("0x076079a1", "initializeProtocol(uint256)", {"amount": p.uint256}, ),
    injectLiquidity: fun("0xd2ddfa77", "injectLiquidity(uint256)", {"liquidity": p.uint256}, ),
    lastFloorDecrease: viewFun("0xd054a16f", "lastFloorDecrease()", {}, p.uint256),
    lastFloorIncrease: viewFun("0xfe6bfe16", "lastFloorIncrease()", {}, p.uint256),
    marketPrice: viewFun("0x45a15388", "marketPrice()", {}, p.uint256),
    multisig: viewFun("0x4783c35b", "multisig()", {}, p.address),
    name: viewFun("0x06fdde03", "name()", {}, p.string),
    nonces: viewFun("0x7ecebe00", "nonces(address)", {"owner": p.address}, p.uint256),
    permit: fun("0xd505accf", "permit(address,address,uint256,uint256,uint8,bytes32,bytes32)", {"owner": p.address, "spender": p.address, "value": p.uint256, "deadline": p.uint256, "v": p.uint8, "r": p.bytes32, "s": p.bytes32}, ),
    porridgeMint: fun("0x01567bb9", "porridgeMint(address,uint256,uint256)", {"to": p.address, "amount": p.uint256, "cost": p.uint256}, ),
    psl: viewFun("0x80468812", "psl()", {}, p.uint256),
    redeem: fun("0xdb006a75", "redeem(uint256)", {"amount": p.uint256}, ),
    sell: fun("0xd79875eb", "sell(uint256,uint256)", {"amount": p.uint256, "minAmount": p.uint256}, ),
    setGoldilockedAddy: fun("0x19efb1fa", "setGoldilockedAddy(address)", {"_goldilocked": p.address}, ),
    symbol: viewFun("0x95d89b41", "symbol()", {}, p.string),
    targetRatio: viewFun("0x5a08bd17", "targetRatio()", {}, p.uint256),
    timelock: viewFun("0xd33219b4", "timelock()", {}, p.address),
    totalSupply: viewFun("0x18160ddd", "totalSupply()", {}, p.uint256),
    tradingActive: viewFun("0xbbc0c742", "tradingActive()", {}, p.bool),
    transfer: fun("0xa9059cbb", "transfer(address,uint256)", {"to": p.address, "amount": p.uint256}, p.bool),
    transferFrom: fun("0x23b872dd", "transferFrom(address,address,uint256)", {"from": p.address, "to": p.address, "amount": p.uint256}, p.bool),
}

export class Contract extends ContractBase {

    DOMAIN_SEPARATOR() {
        return this.eth_call(functions.DOMAIN_SEPARATOR, {})
    }

    MAX_FLOOR_REDUCE() {
        return this.eth_call(functions.MAX_FLOOR_REDUCE, {})
    }

    MAX_RATIO() {
        return this.eth_call(functions.MAX_RATIO, {})
    }

    allowance(owner: AllowanceParams["owner"], spender: AllowanceParams["spender"]) {
        return this.eth_call(functions.allowance, {owner, spender})
    }

    balanceOf(owner: BalanceOfParams["owner"]) {
        return this.eth_call(functions.balanceOf, {owner})
    }

    decimals() {
        return this.eth_call(functions.decimals, {})
    }

    floorPrice() {
        return this.eth_call(functions.floorPrice, {})
    }

    fsl() {
        return this.eth_call(functions.fsl, {})
    }

    goldilocked() {
        return this.eth_call(functions.goldilocked, {})
    }

    honey() {
        return this.eth_call(functions.honey, {})
    }

    lastFloorDecrease() {
        return this.eth_call(functions.lastFloorDecrease, {})
    }

    lastFloorIncrease() {
        return this.eth_call(functions.lastFloorIncrease, {})
    }

    marketPrice() {
        return this.eth_call(functions.marketPrice, {})
    }

    multisig() {
        return this.eth_call(functions.multisig, {})
    }

    name() {
        return this.eth_call(functions.name, {})
    }

    nonces(owner: NoncesParams["owner"]) {
        return this.eth_call(functions.nonces, {owner})
    }

    psl() {
        return this.eth_call(functions.psl, {})
    }

    symbol() {
        return this.eth_call(functions.symbol, {})
    }

    targetRatio() {
        return this.eth_call(functions.targetRatio, {})
    }

    timelock() {
        return this.eth_call(functions.timelock, {})
    }

    totalSupply() {
        return this.eth_call(functions.totalSupply, {})
    }

    tradingActive() {
        return this.eth_call(functions.tradingActive, {})
    }
}

/// Event types
export type ApprovalEventArgs = EParams<typeof events.Approval>
export type BuyEventArgs = EParams<typeof events.Buy>
export type RedeemEventArgs = EParams<typeof events.Redeem>
export type SaleEventArgs = EParams<typeof events.Sale>
export type TransferEventArgs = EParams<typeof events.Transfer>

/// Function types
export type DOMAIN_SEPARATORParams = FunctionArguments<typeof functions.DOMAIN_SEPARATOR>
export type DOMAIN_SEPARATORReturn = FunctionReturn<typeof functions.DOMAIN_SEPARATOR>

export type MAX_FLOOR_REDUCEParams = FunctionArguments<typeof functions.MAX_FLOOR_REDUCE>
export type MAX_FLOOR_REDUCEReturn = FunctionReturn<typeof functions.MAX_FLOOR_REDUCE>

export type MAX_RATIOParams = FunctionArguments<typeof functions.MAX_RATIO>
export type MAX_RATIOReturn = FunctionReturn<typeof functions.MAX_RATIO>

export type AllowanceParams = FunctionArguments<typeof functions.allowance>
export type AllowanceReturn = FunctionReturn<typeof functions.allowance>

export type ApproveParams = FunctionArguments<typeof functions.approve>
export type ApproveReturn = FunctionReturn<typeof functions.approve>

export type BalanceOfParams = FunctionArguments<typeof functions.balanceOf>
export type BalanceOfReturn = FunctionReturn<typeof functions.balanceOf>

export type BorrowTransferParams = FunctionArguments<typeof functions.borrowTransfer>
export type BorrowTransferReturn = FunctionReturn<typeof functions.borrowTransfer>

export type BuyParams = FunctionArguments<typeof functions.buy>
export type BuyReturn = FunctionReturn<typeof functions.buy>

export type DecimalsParams = FunctionArguments<typeof functions.decimals>
export type DecimalsReturn = FunctionReturn<typeof functions.decimals>

export type FloorPriceParams = FunctionArguments<typeof functions.floorPrice>
export type FloorPriceReturn = FunctionReturn<typeof functions.floorPrice>

export type FslParams = FunctionArguments<typeof functions.fsl>
export type FslReturn = FunctionReturn<typeof functions.fsl>

export type GoldilockedParams = FunctionArguments<typeof functions.goldilocked>
export type GoldilockedReturn = FunctionReturn<typeof functions.goldilocked>

export type HoneyParams = FunctionArguments<typeof functions.honey>
export type HoneyReturn = FunctionReturn<typeof functions.honey>

export type InitializeProtocolParams = FunctionArguments<typeof functions.initializeProtocol>
export type InitializeProtocolReturn = FunctionReturn<typeof functions.initializeProtocol>

export type InjectLiquidityParams = FunctionArguments<typeof functions.injectLiquidity>
export type InjectLiquidityReturn = FunctionReturn<typeof functions.injectLiquidity>

export type LastFloorDecreaseParams = FunctionArguments<typeof functions.lastFloorDecrease>
export type LastFloorDecreaseReturn = FunctionReturn<typeof functions.lastFloorDecrease>

export type LastFloorIncreaseParams = FunctionArguments<typeof functions.lastFloorIncrease>
export type LastFloorIncreaseReturn = FunctionReturn<typeof functions.lastFloorIncrease>

export type MarketPriceParams = FunctionArguments<typeof functions.marketPrice>
export type MarketPriceReturn = FunctionReturn<typeof functions.marketPrice>

export type MultisigParams = FunctionArguments<typeof functions.multisig>
export type MultisigReturn = FunctionReturn<typeof functions.multisig>

export type NameParams = FunctionArguments<typeof functions.name>
export type NameReturn = FunctionReturn<typeof functions.name>

export type NoncesParams = FunctionArguments<typeof functions.nonces>
export type NoncesReturn = FunctionReturn<typeof functions.nonces>

export type PermitParams = FunctionArguments<typeof functions.permit>
export type PermitReturn = FunctionReturn<typeof functions.permit>

export type PorridgeMintParams = FunctionArguments<typeof functions.porridgeMint>
export type PorridgeMintReturn = FunctionReturn<typeof functions.porridgeMint>

export type PslParams = FunctionArguments<typeof functions.psl>
export type PslReturn = FunctionReturn<typeof functions.psl>

export type RedeemParams = FunctionArguments<typeof functions.redeem>
export type RedeemReturn = FunctionReturn<typeof functions.redeem>

export type SellParams = FunctionArguments<typeof functions.sell>
export type SellReturn = FunctionReturn<typeof functions.sell>

export type SetGoldilockedAddyParams = FunctionArguments<typeof functions.setGoldilockedAddy>
export type SetGoldilockedAddyReturn = FunctionReturn<typeof functions.setGoldilockedAddy>

export type SymbolParams = FunctionArguments<typeof functions.symbol>
export type SymbolReturn = FunctionReturn<typeof functions.symbol>

export type TargetRatioParams = FunctionArguments<typeof functions.targetRatio>
export type TargetRatioReturn = FunctionReturn<typeof functions.targetRatio>

export type TimelockParams = FunctionArguments<typeof functions.timelock>
export type TimelockReturn = FunctionReturn<typeof functions.timelock>

export type TotalSupplyParams = FunctionArguments<typeof functions.totalSupply>
export type TotalSupplyReturn = FunctionReturn<typeof functions.totalSupply>

export type TradingActiveParams = FunctionArguments<typeof functions.tradingActive>
export type TradingActiveReturn = FunctionReturn<typeof functions.tradingActive>

export type TransferParams = FunctionArguments<typeof functions.transfer>
export type TransferReturn = FunctionReturn<typeof functions.transfer>

export type TransferFromParams = FunctionArguments<typeof functions.transferFrom>
export type TransferFromReturn = FunctionReturn<typeof functions.transferFrom>

