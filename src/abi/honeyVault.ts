import * as p from '@subsquid/evm-codec'
import { event, fun, viewFun, indexed, ContractBase } from '@subsquid/evm-abi'
import type { EventParams as EParams, FunctionArguments, FunctionReturn } from '@subsquid/evm-abi'

export const events = {
    Approval: event("0x8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925", "Approval(address,address,uint256)", {"owner": indexed(p.address), "spender": indexed(p.address), "value": p.uint256}),
    DebtUpdated: event("0x5e2b8821ad6e0e26207e0cb4d242d07eeb1cbb1cfd853e645bdcd27cc5484f95", "DebtUpdated(address,uint256,uint256)", {"strategy": indexed(p.address), "oldDebt": p.uint256, "newDebt": p.uint256}),
    Deposit: event("0xdcbc1c05240f31ff3ad067ef1ee35ce4997762752e3a095284754544f4c709d7", "Deposit(address,address,uint256,uint256)", {"sender": indexed(p.address), "owner": indexed(p.address), "assets": p.uint256, "shares": p.uint256}),
    Harvest: event("0xeaedd1267621f4a8ee97011faf0e67800ad3063714bd179f078c980bb9a3fa3d", "Harvest(address,uint256,uint256,uint256,uint256,uint256)", {"strategy": indexed(p.address), "profit": p.uint256, "loss": p.uint256, "currentDebt": p.uint256, "totalFees": p.uint256, "totalRefunds": p.uint256}),
    Initialized: event("0xc7f505b2f371ae2175ee4913f4499e1f2633a7b5936321eed1cdaeb6115181d2", "Initialized(uint64)", {"version": p.uint64}),
    OwnershipTransferred: event("0x8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0", "OwnershipTransferred(address,address)", {"previousOwner": indexed(p.address), "newOwner": indexed(p.address)}),
    StrategyAdded: event("0x2f564a83158ad1831793ad3e69257b52f39ece5d49cb0d8746708ecb9ef964da", "StrategyAdded(address,uint256)", {"strategy": indexed(p.address), "length": p.uint256}),
    StrategyRevoked: event("0x4201c688d84c01154d321afa0c72f1bffe9eef53005c9de9d035074e71e9b32a", "StrategyRevoked(address)", {"strategy": indexed(p.address)}),
    Transfer: event("0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef", "Transfer(address,address,uint256)", {"from": indexed(p.address), "to": indexed(p.address), "value": p.uint256}),
    Withdraw: event("0xfbde797d201c681b91056529119e0b02407c7bb96a4a2c75c01fc9667232c8db", "Withdraw(address,address,address,uint256,uint256)", {"sender": indexed(p.address), "receiver": indexed(p.address), "owner": indexed(p.address), "assets": p.uint256, "shares": p.uint256}),
    WithdrawQueueUpdated: event("0x0ef29da578ca6365f361a762138684560226292af8e477c349267a8fa5c80488", "WithdrawQueueUpdated(address[],address[])", {"oldStrategyQueue": p.array(p.address), "newStrategyQueue": p.array(p.address)}),
}

export const functions = {
    MAX_BPS: viewFun("0xfd967f47", "MAX_BPS()", {}, p.uint256),
    MAX_BPS_EXTENDED: viewFun("0x36fba084", "MAX_BPS_EXTENDED()", {}, p.uint256),
    MAX_STRATEGIES: viewFun("0x767f06ae", "MAX_STRATEGIES()", {}, p.uint256),
    accountant: viewFun("0x4fb3ccc5", "accountant()", {}, p.address),
    addStrategy: fun("0xc9411e22", "addStrategy(address,uint256)", {"strategy": p.address, "maxDebt": p.uint256}, ),
    allowance: viewFun("0xdd62ed3e", "allowance(address,address)", {"owner": p.address, "spender": p.address}, p.uint256),
    approve: fun("0x095ea7b3", "approve(address,uint256)", {"spender": p.address, "value": p.uint256}, p.bool),
    asset: viewFun("0x38d52e0f", "asset()", {}, p.address),
    balanceOf: viewFun("0x70a08231", "balanceOf(address)", {"account": p.address}, p.uint256),
    convertToAssets: viewFun("0x07a2d13a", "convertToAssets(uint256)", {"shares": p.uint256}, p.uint256),
    convertToShares: viewFun("0xc6e6f592", "convertToShares(uint256)", {"assets": p.uint256}, p.uint256),
    decimals: viewFun("0x313ce567", "decimals()", {}, p.uint8),
    deposit: fun("0x6e553f65", "deposit(uint256,address)", {"assets": p.uint256, "receiver": p.address}, p.uint256),
    emergencyWithdrawAll: fun("0xdd191719", "emergencyWithdrawAll()", {}, ),
    factory: viewFun("0xc45a0155", "factory()", {}, p.address),
    fullProfitUnlockTime: viewFun("0x19ec039b", "fullProfitUnlockTime()", {}, p.uint256),
    harvest: fun("0x0e5c011e", "harvest(address)", {"strategy_": p.address}, ),
    harvestAll: fun("0x8ed955b9", "harvestAll()", {}, ),
    initialize: fun("0xa01e3f74", "initialize(address,address,string,string,address,uint256)", {"owner_": p.address, "asset_": p.address, "vaultTokenName_": p.string, "vaultTokenSymbol_": p.string, "vaultFactory_": p.address, "profitMaxUnlockTime_": p.uint256}, ),
    lastProfitHarvest: viewFun("0x50a5cb87", "lastProfitHarvest()", {}, p.uint256),
    maxDeposit: viewFun("0x402d267d", "maxDeposit(address)", {"_0": p.address}, p.uint256),
    maxMint: viewFun("0xc63d75b6", "maxMint(address)", {"_0": p.address}, p.uint256),
    maxRedeem: viewFun("0xd905777e", "maxRedeem(address)", {"owner": p.address}, p.uint256),
    maxWithdraw: viewFun("0xce96cb77", "maxWithdraw(address)", {"owner": p.address}, p.uint256),
    minTotalIdleAssets: viewFun("0x78824c06", "minTotalIdleAssets()", {}, p.uint256),
    mint: fun("0x94bf804d", "mint(uint256,address)", {"shares": p.uint256, "receiver": p.address}, p.uint256),
    name: viewFun("0x06fdde03", "name()", {}, p.string),
    owner: viewFun("0x8da5cb5b", "owner()", {}, p.address),
    previewDeposit: viewFun("0xef8b30f7", "previewDeposit(uint256)", {"assets": p.uint256}, p.uint256),
    previewMint: viewFun("0xb3d7f6b9", "previewMint(uint256)", {"shares": p.uint256}, p.uint256),
    previewRedeem: viewFun("0x4cdad506", "previewRedeem(uint256)", {"shares": p.uint256}, p.uint256),
    previewWithdraw: viewFun("0x0a28a477", "previewWithdraw(uint256)", {"assets": p.uint256}, p.uint256),
    profitMaxUnlockTime: viewFun("0x0952864e", "profitMaxUnlockTime()", {}, p.uint256),
    profitUnlockingRate: viewFun("0x5141eebb", "profitUnlockingRate()", {}, p.uint256),
    protocolFee: viewFun("0xb0e21e8a", "protocolFee()", {}, p.uint256),
    redeem: fun("0xba087652", "redeem(uint256,address,address)", {"shares": p.uint256, "receiver": p.address, "owner": p.address}, p.uint256),
    renounceOwnership: fun("0x715018a6", "renounceOwnership()", {}, ),
    revokeStrategy: fun("0xbb994d48", "revokeStrategy(address)", {"strategy": p.address}, ),
    setVaultRouter: fun("0x780e72ff", "setVaultRouter(address)", {"vaultRouter_": p.address}, ),
    setWithdrawalQueue: fun("0xac579b77", "setWithdrawalQueue(address[])", {"queue": p.array(p.address)}, ),
    strategies: viewFun("0xd574ea3d", "strategies(uint256)", {"_0": p.uint256}, p.address),
    strategyParams: viewFun("0xc4c2d9b9", "strategyParams(address)", {"strategy_": p.address}, p.struct({"isActivated": p.bool, "lastHarvest": p.uint256, "currentDebt": p.uint256, "maxDebt": p.uint256})),
    symbol: viewFun("0x95d89b41", "symbol()", {}, p.string),
    totalAssets: viewFun("0x01e1d114", "totalAssets()", {}, p.uint256),
    totalIdleAssets: viewFun("0x35a22a7d", "totalIdleAssets()", {}, p.uint256),
    totalOutstandingDebt: viewFun("0x859203e3", "totalOutstandingDebt()", {}, p.uint256),
    totalSupply: viewFun("0x18160ddd", "totalSupply()", {}, p.uint256),
    transfer: fun("0xa9059cbb", "transfer(address,uint256)", {"to": p.address, "value": p.uint256}, p.bool),
    transferFrom: fun("0x23b872dd", "transferFrom(address,address,uint256)", {"from": p.address, "to": p.address, "value": p.uint256}, p.bool),
    transferOwnership: fun("0xf2fde38b", "transferOwnership(address)", {"newOwner": p.address}, ),
    unlockedShares: viewFun("0xd9a0e97a", "unlockedShares()", {}, p.uint256),
    updateDebt: fun("0x4492e200", "updateDebt(address,uint256,uint256)", {"strategy_": p.address, "targetDebt_": p.uint256, "maxLoss_": p.uint256}, ),
    updateStrategyMaxDebt: fun("0x1c9a9e38", "updateStrategyMaxDebt(address,uint256)", {"strategy_": p.address, "maxDebt_": p.uint256}, ),
    vaultRouter: viewFun("0xd37c441c", "vaultRouter()", {}, p.address),
    withdraw: fun("0xb460af94", "withdraw(uint256,address,address)", {"assets": p.uint256, "receiver": p.address, "owner": p.address}, p.uint256),
    withdrawLimit: viewFun("0xf848d541", "withdrawLimit()", {}, p.uint256),
    withdrawQueue: viewFun("0x62518ddf", "withdrawQueue(uint256)", {"_0": p.uint256}, p.address),
}

export class Contract extends ContractBase {

    MAX_BPS() {
        return this.eth_call(functions.MAX_BPS, {})
    }

    MAX_BPS_EXTENDED() {
        return this.eth_call(functions.MAX_BPS_EXTENDED, {})
    }

    MAX_STRATEGIES() {
        return this.eth_call(functions.MAX_STRATEGIES, {})
    }

    accountant() {
        return this.eth_call(functions.accountant, {})
    }

    allowance(owner: AllowanceParams["owner"], spender: AllowanceParams["spender"]) {
        return this.eth_call(functions.allowance, {owner, spender})
    }

    asset() {
        return this.eth_call(functions.asset, {})
    }

    balanceOf(account: BalanceOfParams["account"]) {
        return this.eth_call(functions.balanceOf, {account})
    }

    convertToAssets(shares: ConvertToAssetsParams["shares"]) {
        return this.eth_call(functions.convertToAssets, {shares})
    }

    convertToShares(assets: ConvertToSharesParams["assets"]) {
        return this.eth_call(functions.convertToShares, {assets})
    }

    decimals() {
        return this.eth_call(functions.decimals, {})
    }

    factory() {
        return this.eth_call(functions.factory, {})
    }

    fullProfitUnlockTime() {
        return this.eth_call(functions.fullProfitUnlockTime, {})
    }

    lastProfitHarvest() {
        return this.eth_call(functions.lastProfitHarvest, {})
    }

    maxDeposit(_0: MaxDepositParams["_0"]) {
        return this.eth_call(functions.maxDeposit, {_0})
    }

    maxMint(_0: MaxMintParams["_0"]) {
        return this.eth_call(functions.maxMint, {_0})
    }

    maxRedeem(owner: MaxRedeemParams["owner"]) {
        return this.eth_call(functions.maxRedeem, {owner})
    }

    maxWithdraw(owner: MaxWithdrawParams["owner"]) {
        return this.eth_call(functions.maxWithdraw, {owner})
    }

    minTotalIdleAssets() {
        return this.eth_call(functions.minTotalIdleAssets, {})
    }

    name() {
        return this.eth_call(functions.name, {})
    }

    owner() {
        return this.eth_call(functions.owner, {})
    }

    previewDeposit(assets: PreviewDepositParams["assets"]) {
        return this.eth_call(functions.previewDeposit, {assets})
    }

    previewMint(shares: PreviewMintParams["shares"]) {
        return this.eth_call(functions.previewMint, {shares})
    }

    previewRedeem(shares: PreviewRedeemParams["shares"]) {
        return this.eth_call(functions.previewRedeem, {shares})
    }

    previewWithdraw(assets: PreviewWithdrawParams["assets"]) {
        return this.eth_call(functions.previewWithdraw, {assets})
    }

    profitMaxUnlockTime() {
        return this.eth_call(functions.profitMaxUnlockTime, {})
    }

    profitUnlockingRate() {
        return this.eth_call(functions.profitUnlockingRate, {})
    }

    protocolFee() {
        return this.eth_call(functions.protocolFee, {})
    }

    strategies(_0: StrategiesParams["_0"]) {
        return this.eth_call(functions.strategies, {_0})
    }

    strategyParams(strategy_: StrategyParamsParams["strategy_"]) {
        return this.eth_call(functions.strategyParams, {strategy_})
    }

    symbol() {
        return this.eth_call(functions.symbol, {})
    }

    totalAssets() {
        return this.eth_call(functions.totalAssets, {})
    }

    totalIdleAssets() {
        return this.eth_call(functions.totalIdleAssets, {})
    }

    totalOutstandingDebt() {
        return this.eth_call(functions.totalOutstandingDebt, {})
    }

    totalSupply() {
        return this.eth_call(functions.totalSupply, {})
    }

    unlockedShares() {
        return this.eth_call(functions.unlockedShares, {})
    }

    vaultRouter() {
        return this.eth_call(functions.vaultRouter, {})
    }

    withdrawLimit() {
        return this.eth_call(functions.withdrawLimit, {})
    }

    withdrawQueue(_0: WithdrawQueueParams["_0"]) {
        return this.eth_call(functions.withdrawQueue, {_0})
    }
}

/// Event types
export type ApprovalEventArgs = EParams<typeof events.Approval>
export type DebtUpdatedEventArgs = EParams<typeof events.DebtUpdated>
export type DepositEventArgs = EParams<typeof events.Deposit>
export type HarvestEventArgs = EParams<typeof events.Harvest>
export type InitializedEventArgs = EParams<typeof events.Initialized>
export type OwnershipTransferredEventArgs = EParams<typeof events.OwnershipTransferred>
export type StrategyAddedEventArgs = EParams<typeof events.StrategyAdded>
export type StrategyRevokedEventArgs = EParams<typeof events.StrategyRevoked>
export type TransferEventArgs = EParams<typeof events.Transfer>
export type WithdrawEventArgs = EParams<typeof events.Withdraw>
export type WithdrawQueueUpdatedEventArgs = EParams<typeof events.WithdrawQueueUpdated>

/// Function types
export type MAX_BPSParams = FunctionArguments<typeof functions.MAX_BPS>
export type MAX_BPSReturn = FunctionReturn<typeof functions.MAX_BPS>

export type MAX_BPS_EXTENDEDParams = FunctionArguments<typeof functions.MAX_BPS_EXTENDED>
export type MAX_BPS_EXTENDEDReturn = FunctionReturn<typeof functions.MAX_BPS_EXTENDED>

export type MAX_STRATEGIESParams = FunctionArguments<typeof functions.MAX_STRATEGIES>
export type MAX_STRATEGIESReturn = FunctionReturn<typeof functions.MAX_STRATEGIES>

export type AccountantParams = FunctionArguments<typeof functions.accountant>
export type AccountantReturn = FunctionReturn<typeof functions.accountant>

export type AddStrategyParams = FunctionArguments<typeof functions.addStrategy>
export type AddStrategyReturn = FunctionReturn<typeof functions.addStrategy>

export type AllowanceParams = FunctionArguments<typeof functions.allowance>
export type AllowanceReturn = FunctionReturn<typeof functions.allowance>

export type ApproveParams = FunctionArguments<typeof functions.approve>
export type ApproveReturn = FunctionReturn<typeof functions.approve>

export type AssetParams = FunctionArguments<typeof functions.asset>
export type AssetReturn = FunctionReturn<typeof functions.asset>

export type BalanceOfParams = FunctionArguments<typeof functions.balanceOf>
export type BalanceOfReturn = FunctionReturn<typeof functions.balanceOf>

export type ConvertToAssetsParams = FunctionArguments<typeof functions.convertToAssets>
export type ConvertToAssetsReturn = FunctionReturn<typeof functions.convertToAssets>

export type ConvertToSharesParams = FunctionArguments<typeof functions.convertToShares>
export type ConvertToSharesReturn = FunctionReturn<typeof functions.convertToShares>

export type DecimalsParams = FunctionArguments<typeof functions.decimals>
export type DecimalsReturn = FunctionReturn<typeof functions.decimals>

export type DepositParams = FunctionArguments<typeof functions.deposit>
export type DepositReturn = FunctionReturn<typeof functions.deposit>

export type EmergencyWithdrawAllParams = FunctionArguments<typeof functions.emergencyWithdrawAll>
export type EmergencyWithdrawAllReturn = FunctionReturn<typeof functions.emergencyWithdrawAll>

export type FactoryParams = FunctionArguments<typeof functions.factory>
export type FactoryReturn = FunctionReturn<typeof functions.factory>

export type FullProfitUnlockTimeParams = FunctionArguments<typeof functions.fullProfitUnlockTime>
export type FullProfitUnlockTimeReturn = FunctionReturn<typeof functions.fullProfitUnlockTime>

export type HarvestParams = FunctionArguments<typeof functions.harvest>
export type HarvestReturn = FunctionReturn<typeof functions.harvest>

export type HarvestAllParams = FunctionArguments<typeof functions.harvestAll>
export type HarvestAllReturn = FunctionReturn<typeof functions.harvestAll>

export type InitializeParams = FunctionArguments<typeof functions.initialize>
export type InitializeReturn = FunctionReturn<typeof functions.initialize>

export type LastProfitHarvestParams = FunctionArguments<typeof functions.lastProfitHarvest>
export type LastProfitHarvestReturn = FunctionReturn<typeof functions.lastProfitHarvest>

export type MaxDepositParams = FunctionArguments<typeof functions.maxDeposit>
export type MaxDepositReturn = FunctionReturn<typeof functions.maxDeposit>

export type MaxMintParams = FunctionArguments<typeof functions.maxMint>
export type MaxMintReturn = FunctionReturn<typeof functions.maxMint>

export type MaxRedeemParams = FunctionArguments<typeof functions.maxRedeem>
export type MaxRedeemReturn = FunctionReturn<typeof functions.maxRedeem>

export type MaxWithdrawParams = FunctionArguments<typeof functions.maxWithdraw>
export type MaxWithdrawReturn = FunctionReturn<typeof functions.maxWithdraw>

export type MinTotalIdleAssetsParams = FunctionArguments<typeof functions.minTotalIdleAssets>
export type MinTotalIdleAssetsReturn = FunctionReturn<typeof functions.minTotalIdleAssets>

export type MintParams = FunctionArguments<typeof functions.mint>
export type MintReturn = FunctionReturn<typeof functions.mint>

export type NameParams = FunctionArguments<typeof functions.name>
export type NameReturn = FunctionReturn<typeof functions.name>

export type OwnerParams = FunctionArguments<typeof functions.owner>
export type OwnerReturn = FunctionReturn<typeof functions.owner>

export type PreviewDepositParams = FunctionArguments<typeof functions.previewDeposit>
export type PreviewDepositReturn = FunctionReturn<typeof functions.previewDeposit>

export type PreviewMintParams = FunctionArguments<typeof functions.previewMint>
export type PreviewMintReturn = FunctionReturn<typeof functions.previewMint>

export type PreviewRedeemParams = FunctionArguments<typeof functions.previewRedeem>
export type PreviewRedeemReturn = FunctionReturn<typeof functions.previewRedeem>

export type PreviewWithdrawParams = FunctionArguments<typeof functions.previewWithdraw>
export type PreviewWithdrawReturn = FunctionReturn<typeof functions.previewWithdraw>

export type ProfitMaxUnlockTimeParams = FunctionArguments<typeof functions.profitMaxUnlockTime>
export type ProfitMaxUnlockTimeReturn = FunctionReturn<typeof functions.profitMaxUnlockTime>

export type ProfitUnlockingRateParams = FunctionArguments<typeof functions.profitUnlockingRate>
export type ProfitUnlockingRateReturn = FunctionReturn<typeof functions.profitUnlockingRate>

export type ProtocolFeeParams = FunctionArguments<typeof functions.protocolFee>
export type ProtocolFeeReturn = FunctionReturn<typeof functions.protocolFee>

export type RedeemParams = FunctionArguments<typeof functions.redeem>
export type RedeemReturn = FunctionReturn<typeof functions.redeem>

export type RenounceOwnershipParams = FunctionArguments<typeof functions.renounceOwnership>
export type RenounceOwnershipReturn = FunctionReturn<typeof functions.renounceOwnership>

export type RevokeStrategyParams = FunctionArguments<typeof functions.revokeStrategy>
export type RevokeStrategyReturn = FunctionReturn<typeof functions.revokeStrategy>

export type SetVaultRouterParams = FunctionArguments<typeof functions.setVaultRouter>
export type SetVaultRouterReturn = FunctionReturn<typeof functions.setVaultRouter>

export type SetWithdrawalQueueParams = FunctionArguments<typeof functions.setWithdrawalQueue>
export type SetWithdrawalQueueReturn = FunctionReturn<typeof functions.setWithdrawalQueue>

export type StrategiesParams = FunctionArguments<typeof functions.strategies>
export type StrategiesReturn = FunctionReturn<typeof functions.strategies>

export type StrategyParamsParams = FunctionArguments<typeof functions.strategyParams>
export type StrategyParamsReturn = FunctionReturn<typeof functions.strategyParams>

export type SymbolParams = FunctionArguments<typeof functions.symbol>
export type SymbolReturn = FunctionReturn<typeof functions.symbol>

export type TotalAssetsParams = FunctionArguments<typeof functions.totalAssets>
export type TotalAssetsReturn = FunctionReturn<typeof functions.totalAssets>

export type TotalIdleAssetsParams = FunctionArguments<typeof functions.totalIdleAssets>
export type TotalIdleAssetsReturn = FunctionReturn<typeof functions.totalIdleAssets>

export type TotalOutstandingDebtParams = FunctionArguments<typeof functions.totalOutstandingDebt>
export type TotalOutstandingDebtReturn = FunctionReturn<typeof functions.totalOutstandingDebt>

export type TotalSupplyParams = FunctionArguments<typeof functions.totalSupply>
export type TotalSupplyReturn = FunctionReturn<typeof functions.totalSupply>

export type TransferParams = FunctionArguments<typeof functions.transfer>
export type TransferReturn = FunctionReturn<typeof functions.transfer>

export type TransferFromParams = FunctionArguments<typeof functions.transferFrom>
export type TransferFromReturn = FunctionReturn<typeof functions.transferFrom>

export type TransferOwnershipParams = FunctionArguments<typeof functions.transferOwnership>
export type TransferOwnershipReturn = FunctionReturn<typeof functions.transferOwnership>

export type UnlockedSharesParams = FunctionArguments<typeof functions.unlockedShares>
export type UnlockedSharesReturn = FunctionReturn<typeof functions.unlockedShares>

export type UpdateDebtParams = FunctionArguments<typeof functions.updateDebt>
export type UpdateDebtReturn = FunctionReturn<typeof functions.updateDebt>

export type UpdateStrategyMaxDebtParams = FunctionArguments<typeof functions.updateStrategyMaxDebt>
export type UpdateStrategyMaxDebtReturn = FunctionReturn<typeof functions.updateStrategyMaxDebt>

export type VaultRouterParams = FunctionArguments<typeof functions.vaultRouter>
export type VaultRouterReturn = FunctionReturn<typeof functions.vaultRouter>

export type WithdrawParams = FunctionArguments<typeof functions.withdraw>
export type WithdrawReturn = FunctionReturn<typeof functions.withdraw>

export type WithdrawLimitParams = FunctionArguments<typeof functions.withdrawLimit>
export type WithdrawLimitReturn = FunctionReturn<typeof functions.withdrawLimit>

export type WithdrawQueueParams = FunctionArguments<typeof functions.withdrawQueue>
export type WithdrawQueueReturn = FunctionReturn<typeof functions.withdrawQueue>

