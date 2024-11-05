import * as p from '@subsquid/evm-codec'
import { event, fun, viewFun, indexed, ContractBase } from '@subsquid/evm-abi'
import type { EventParams as EParams, FunctionArguments, FunctionReturn } from '@subsquid/evm-abi'

export const events = {
    Approval: event("0x8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925", "Approval(address,address,uint256)", {"owner": indexed(p.address), "spender": indexed(p.address), "value": p.uint256}),
    AssetsWithdraw: event("0x86bcb277da75a9fbb738b8bb82beb731d82a0a89516b848730df92849f966bf0", "AssetsWithdraw(address,uint256,address[],uint256[])", {"receiver": indexed(p.address), "shares": p.uint256, "tokens": p.array(p.address), "amounts": p.array(p.uint256)}),
    CollateralOverwritten: event("0x9e147d339c63698deb55c3d0d44ed3eba29bac2a068a88c4bc5bde17d6331e19", "CollateralOverwritten(address,address)", {"oldCollateral": p.address, "newCollateral": p.address}),
    Deposit: event("0xdcbc1c05240f31ff3ad067ef1ee35ce4997762752e3a095284754544f4c709d7", "Deposit(address,address,uint256,uint256)", {"sender": indexed(p.address), "owner": indexed(p.address), "assets": p.uint256, "shares": p.uint256}),
    EmissionsAdded: event("0x693ffe037fd29f4846b006bd3ada57d4fd4c3622277227342f0e4fed9011dc20", "EmissionsAdded(address,uint128)", {"token": indexed(p.address), "amount": p.uint128}),
    ExtraAssetAdded: event("0x252fb22f1e5dcdba04908f13259852204aead54fea1342d028eb2f49510bee97", "ExtraAssetAdded(address)", {"token": p.address}),
    ExtraAssetRemoved: event("0xfc9138846a97b86614d19b78419b88e555c50bbd80b03feffd6264cd43064380", "ExtraAssetRemoved(address)", {"token": p.address}),
    Initialized: event("0xc7f505b2f371ae2175ee4913f4499e1f2633a7b5936321eed1cdaeb6115181d2", "Initialized(uint64)", {"version": p.uint64}),
    OwnershipTransferStarted: event("0x38d16b8cac22d99fc7c124b9cd0de2d3fa1faef420bfe791d8c362d765e22700", "OwnershipTransferStarted(address,address)", {"previousOwner": indexed(p.address), "newOwner": indexed(p.address)}),
    OwnershipTransferred: event("0x8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0", "OwnershipTransferred(address,address)", {"previousOwner": indexed(p.address), "newOwner": indexed(p.address)}),
    Transfer: event("0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef", "Transfer(address,address,uint256)", {"from": indexed(p.address), "to": indexed(p.address), "value": p.uint256}),
    Withdraw: event("0xfbde797d201c681b91056529119e0b02407c7bb96a4a2c75c01fc9667232c8db", "Withdraw(address,address,address,uint256,uint256)", {"sender": indexed(p.address), "receiver": indexed(p.address), "owner": indexed(p.address), "assets": p.uint256, "shares": p.uint256}),
}

export const functions = {
    FEE_DISCOUNT_BP: viewFun("0x34fc7de6", "FEE_DISCOUNT_BP()", {}, p.uint16),
    SUNSET_DURATION: viewFun("0xa7528a03", "SUNSET_DURATION()", {}, p.uint128),
    acceptOwnership: fun("0x79ba5097", "acceptOwnership()", {}, ),
    addNewExtraAsset: fun("0xfcb99905", "addNewExtraAsset(address,uint64)", {"token": p.address, "_unlockRatePerSecond": p.uint64}, ),
    allowance: viewFun("0xdd62ed3e", "allowance(address,address)", {"owner": p.address, "spender": p.address}, p.uint256),
    approve: fun("0x095ea7b3", "approve(address,uint256)", {"spender": p.address, "value": p.uint256}, p.bool),
    asset: viewFun("0x38d52e0f", "asset()", {}, p.address),
    balanceOf: viewFun("0x70a08231", "balanceOf(address)", {"account": p.address}, p.uint256),
    convertToAssets: viewFun("0x07a2d13a", "convertToAssets(uint256)", {"shares": p.uint256}, p.uint256),
    convertToShares: viewFun("0xc6e6f592", "convertToShares(uint256)", {"assets": p.uint256}, p.uint256),
    decimals: viewFun("0x313ce567", "decimals()", {}, p.uint8),
    deposit: fun("0x6e553f65", "deposit(uint256,address)", {"assets": p.uint256, "receiver": p.address}, p.uint256),
    enableCollateral: fun("0xee59d540", "enableCollateral(address,uint64)", {"_collateral": p.address, "_unlockRatePerSecond": p.uint64}, ),
    extSloads: viewFun("0x7784c685", "extSloads(bytes32[])", {"slots": p.array(p.bytes32)}, p.array(p.bytes32)),
    getCollateralTokenAt: viewFun("0xb5cafaaa", "getCollateralTokenAt(uint256)", {"index": p.uint256}, p.address),
    getCollateralTokens: viewFun("0xb58eb63f", "getCollateralTokens()", {}, p.array(p.address)),
    getLockedEmissions: viewFun("0x403dd3bc", "getLockedEmissions(address)", {"token": p.address}, p.uint256),
    getPrice: viewFun("0x41976e09", "getPrice(address)", {"token": p.address}, p.uint256),
    getTotalDebtTokenDeposits: viewFun("0x0d9a6b35", "getTotalDebtTokenDeposits()", {}, p.uint256),
    initialize: fun("0x00fb18a6", "initialize((address,string,string,address,address,address,uint16,uint16,address,address))", {"params": p.struct({"_asset": p.address, "_sharesName": p.string, "_sharesSymbol": p.string, "_beraborrowCore": p.address, "_liquidationManager": p.address, "_factory": p.address, "_entryFee": p.uint16, "_exitFee": p.uint16, "_feeReceiver": p.address, "_admin": p.address})}, ),
    linearVestingExtraAssets: fun("0x1db774d0", "linearVestingExtraAssets(address,address,address,uint128,uint64,uint64)", {"token": p.address, "_owner": p.address, "recipient": p.address, "rate": p.uint128, "start": p.uint64, "end": p.uint64}, ),
    maxDeposit: viewFun("0x402d267d", "maxDeposit(address)", {"_0": p.address}, p.uint256),
    maxMint: viewFun("0xc63d75b6", "maxMint(address)", {"_0": p.address}, p.uint256),
    maxRedeem: viewFun("0xd905777e", "maxRedeem(address)", {"owner": p.address}, p.uint256),
    maxWithdraw: viewFun("0xce96cb77", "maxWithdraw(address)", {"_owner": p.address}, p.uint256),
    mint: fun("0x94bf804d", "mint(uint256,address)", {"shares": p.uint256, "receiver": p.address}, p.uint256),
    name: viewFun("0x06fdde03", "name()", {}, p.string),
    offset: fun("0xe6666733", "offset(address,uint256,uint256)", {"collateral": p.address, "_debtToOffset": p.uint256, "_collToAdd": p.uint256}, ),
    owner: viewFun("0x8da5cb5b", "owner()", {}, p.address),
    pendingOwner: viewFun("0xe30c3978", "pendingOwner()", {}, p.address),
    previewDeposit: viewFun("0xef8b30f7", "previewDeposit(uint256)", {"assets": p.uint256}, p.uint256),
    previewMint: viewFun("0xb3d7f6b9", "previewMint(uint256)", {"shares": p.uint256}, p.uint256),
    previewRedeem: viewFun("0x4cdad506", "previewRedeem(uint256)", {"shares": p.uint256}, p.uint256),
    previewWithdraw: viewFun("0x0a28a477", "previewWithdraw(uint256)", {"assets": p.uint256}, p.uint256),
    rebalance: fun("0x7facd79b", "rebalance((address,uint256,address,address,bytes))", {"p": p.struct({"sentCurrency": p.address, "sentAmount": p.uint256, "receivedCurrency": p.address, "swapper": p.address, "payload": p.bytes})}, ),
    receiveDonations: fun("0x62edd2f5", "receiveDonations(address)", {"receiver": p.address}, ),
    'redeem(uint256,address[],address,address)': fun("0x31e95162", "redeem(uint256,address[],address,address)", {"shares": p.uint256, "preferredUnderlyingTokens": p.array(p.address), "receiver": p.address, "_owner": p.address}, p.uint256),
    'redeem(uint256,address,address)': fun("0xba087652", "redeem(uint256,address,address)", {"shares": p.uint256, "receiver": p.address, "_owner": p.address}, p.uint256),
    removeExtraAsset: fun("0x6cd611be", "removeExtraAsset(address)", {"token": p.address}, ),
    renounceOwnership: fun("0x715018a6", "renounceOwnership()", {}, ),
    setPairThreshold: fun("0xbadd8b2d", "setPairThreshold(address,address,uint256)", {"tokenIn": p.address, "tokenOut": p.address, "thresholdInBP": p.uint256}, ),
    setRebalancer: fun("0xfe5198a4", "setRebalancer(address,bool)", {"rebalancer": p.address, "isRebalancer": p.bool}, ),
    setUnlockRatePerSecond: fun("0x0b983a74", "setUnlockRatePerSecond(address,uint64)", {"token": p.address, "_unlockRatePerSecond": p.uint64}, ),
    startCollateralSunset: fun("0x19f27b3b", "startCollateralSunset(address)", {"collateral": p.address}, ),
    symbol: viewFun("0x95d89b41", "symbol()", {}, p.string),
    totalAssets: viewFun("0x01e1d114", "totalAssets()", {}, p.uint256),
    totalAssetsUnlocked: viewFun("0xe56fc243", "totalAssetsUnlocked()", {}, p.uint256),
    totalSupply: viewFun("0x18160ddd", "totalSupply()", {}, p.uint256),
    transfer: fun("0xa9059cbb", "transfer(address,uint256)", {"to": p.address, "value": p.uint256}, p.bool),
    transferFrom: fun("0x23b872dd", "transferFrom(address,address,uint256)", {"from": p.address, "to": p.address, "value": p.uint256}, p.bool),
    transferOwnership: fun("0xf2fde38b", "transferOwnership(address)", {"newOwner": p.address}, ),
    unclaimedUnvestedAmount: viewFun("0x1c3d033f", "unclaimedUnvestedAmount(address)", {"token": p.address}, p.uint256),
    vestedAmount: viewFun("0x384711cc", "vestedAmount(address)", {"token": p.address}, p.uint256),
    'withdraw(uint256,address,address)': fun("0xb460af94", "withdraw(uint256,address,address)", {"assets": p.uint256, "receiver": p.address, "_owner": p.address}, p.uint256),
    'withdraw(uint256,address[],address,address)': fun("0xddda679b", "withdraw(uint256,address[],address,address)", {"assets": p.uint256, "preferredUnderlyingTokens": p.array(p.address), "receiver": p.address, "_owner": p.address}, p.uint256),
}

export class Contract extends ContractBase {

    FEE_DISCOUNT_BP() {
        return this.eth_call(functions.FEE_DISCOUNT_BP, {})
    }

    SUNSET_DURATION() {
        return this.eth_call(functions.SUNSET_DURATION, {})
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

    extSloads(slots: ExtSloadsParams["slots"]) {
        return this.eth_call(functions.extSloads, {slots})
    }

    getCollateralTokenAt(index: GetCollateralTokenAtParams["index"]) {
        return this.eth_call(functions.getCollateralTokenAt, {index})
    }

    getCollateralTokens() {
        return this.eth_call(functions.getCollateralTokens, {})
    }

    getLockedEmissions(token: GetLockedEmissionsParams["token"]) {
        return this.eth_call(functions.getLockedEmissions, {token})
    }

    getPrice(token: GetPriceParams["token"]) {
        return this.eth_call(functions.getPrice, {token})
    }

    getTotalDebtTokenDeposits() {
        return this.eth_call(functions.getTotalDebtTokenDeposits, {})
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

    maxWithdraw(_owner: MaxWithdrawParams["_owner"]) {
        return this.eth_call(functions.maxWithdraw, {_owner})
    }

    name() {
        return this.eth_call(functions.name, {})
    }

    owner() {
        return this.eth_call(functions.owner, {})
    }

    pendingOwner() {
        return this.eth_call(functions.pendingOwner, {})
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

    symbol() {
        return this.eth_call(functions.symbol, {})
    }

    totalAssets() {
        return this.eth_call(functions.totalAssets, {})
    }

    totalAssetsUnlocked() {
        return this.eth_call(functions.totalAssetsUnlocked, {})
    }

    totalSupply() {
        return this.eth_call(functions.totalSupply, {})
    }

    unclaimedUnvestedAmount(token: UnclaimedUnvestedAmountParams["token"]) {
        return this.eth_call(functions.unclaimedUnvestedAmount, {token})
    }

    vestedAmount(token: VestedAmountParams["token"]) {
        return this.eth_call(functions.vestedAmount, {token})
    }
}

/// Event types
export type ApprovalEventArgs = EParams<typeof events.Approval>
export type AssetsWithdrawEventArgs = EParams<typeof events.AssetsWithdraw>
export type CollateralOverwrittenEventArgs = EParams<typeof events.CollateralOverwritten>
export type DepositEventArgs = EParams<typeof events.Deposit>
export type EmissionsAddedEventArgs = EParams<typeof events.EmissionsAdded>
export type ExtraAssetAddedEventArgs = EParams<typeof events.ExtraAssetAdded>
export type ExtraAssetRemovedEventArgs = EParams<typeof events.ExtraAssetRemoved>
export type InitializedEventArgs = EParams<typeof events.Initialized>
export type OwnershipTransferStartedEventArgs = EParams<typeof events.OwnershipTransferStarted>
export type OwnershipTransferredEventArgs = EParams<typeof events.OwnershipTransferred>
export type TransferEventArgs = EParams<typeof events.Transfer>
export type WithdrawEventArgs = EParams<typeof events.Withdraw>

/// Function types
export type FEE_DISCOUNT_BPParams = FunctionArguments<typeof functions.FEE_DISCOUNT_BP>
export type FEE_DISCOUNT_BPReturn = FunctionReturn<typeof functions.FEE_DISCOUNT_BP>

export type SUNSET_DURATIONParams = FunctionArguments<typeof functions.SUNSET_DURATION>
export type SUNSET_DURATIONReturn = FunctionReturn<typeof functions.SUNSET_DURATION>

export type AcceptOwnershipParams = FunctionArguments<typeof functions.acceptOwnership>
export type AcceptOwnershipReturn = FunctionReturn<typeof functions.acceptOwnership>

export type AddNewExtraAssetParams = FunctionArguments<typeof functions.addNewExtraAsset>
export type AddNewExtraAssetReturn = FunctionReturn<typeof functions.addNewExtraAsset>

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

export type EnableCollateralParams = FunctionArguments<typeof functions.enableCollateral>
export type EnableCollateralReturn = FunctionReturn<typeof functions.enableCollateral>

export type ExtSloadsParams = FunctionArguments<typeof functions.extSloads>
export type ExtSloadsReturn = FunctionReturn<typeof functions.extSloads>

export type GetCollateralTokenAtParams = FunctionArguments<typeof functions.getCollateralTokenAt>
export type GetCollateralTokenAtReturn = FunctionReturn<typeof functions.getCollateralTokenAt>

export type GetCollateralTokensParams = FunctionArguments<typeof functions.getCollateralTokens>
export type GetCollateralTokensReturn = FunctionReturn<typeof functions.getCollateralTokens>

export type GetLockedEmissionsParams = FunctionArguments<typeof functions.getLockedEmissions>
export type GetLockedEmissionsReturn = FunctionReturn<typeof functions.getLockedEmissions>

export type GetPriceParams = FunctionArguments<typeof functions.getPrice>
export type GetPriceReturn = FunctionReturn<typeof functions.getPrice>

export type GetTotalDebtTokenDepositsParams = FunctionArguments<typeof functions.getTotalDebtTokenDeposits>
export type GetTotalDebtTokenDepositsReturn = FunctionReturn<typeof functions.getTotalDebtTokenDeposits>

export type InitializeParams = FunctionArguments<typeof functions.initialize>
export type InitializeReturn = FunctionReturn<typeof functions.initialize>

export type LinearVestingExtraAssetsParams = FunctionArguments<typeof functions.linearVestingExtraAssets>
export type LinearVestingExtraAssetsReturn = FunctionReturn<typeof functions.linearVestingExtraAssets>

export type MaxDepositParams = FunctionArguments<typeof functions.maxDeposit>
export type MaxDepositReturn = FunctionReturn<typeof functions.maxDeposit>

export type MaxMintParams = FunctionArguments<typeof functions.maxMint>
export type MaxMintReturn = FunctionReturn<typeof functions.maxMint>

export type MaxRedeemParams = FunctionArguments<typeof functions.maxRedeem>
export type MaxRedeemReturn = FunctionReturn<typeof functions.maxRedeem>

export type MaxWithdrawParams = FunctionArguments<typeof functions.maxWithdraw>
export type MaxWithdrawReturn = FunctionReturn<typeof functions.maxWithdraw>

export type MintParams = FunctionArguments<typeof functions.mint>
export type MintReturn = FunctionReturn<typeof functions.mint>

export type NameParams = FunctionArguments<typeof functions.name>
export type NameReturn = FunctionReturn<typeof functions.name>

export type OffsetParams = FunctionArguments<typeof functions.offset>
export type OffsetReturn = FunctionReturn<typeof functions.offset>

export type OwnerParams = FunctionArguments<typeof functions.owner>
export type OwnerReturn = FunctionReturn<typeof functions.owner>

export type PendingOwnerParams = FunctionArguments<typeof functions.pendingOwner>
export type PendingOwnerReturn = FunctionReturn<typeof functions.pendingOwner>

export type PreviewDepositParams = FunctionArguments<typeof functions.previewDeposit>
export type PreviewDepositReturn = FunctionReturn<typeof functions.previewDeposit>

export type PreviewMintParams = FunctionArguments<typeof functions.previewMint>
export type PreviewMintReturn = FunctionReturn<typeof functions.previewMint>

export type PreviewRedeemParams = FunctionArguments<typeof functions.previewRedeem>
export type PreviewRedeemReturn = FunctionReturn<typeof functions.previewRedeem>

export type PreviewWithdrawParams = FunctionArguments<typeof functions.previewWithdraw>
export type PreviewWithdrawReturn = FunctionReturn<typeof functions.previewWithdraw>

export type RebalanceParams = FunctionArguments<typeof functions.rebalance>
export type RebalanceReturn = FunctionReturn<typeof functions.rebalance>

export type ReceiveDonationsParams = FunctionArguments<typeof functions.receiveDonations>
export type ReceiveDonationsReturn = FunctionReturn<typeof functions.receiveDonations>

export type RedeemParams_0 = FunctionArguments<typeof functions['redeem(uint256,address[],address,address)']>
export type RedeemReturn_0 = FunctionReturn<typeof functions['redeem(uint256,address[],address,address)']>

export type RedeemParams_1 = FunctionArguments<typeof functions['redeem(uint256,address,address)']>
export type RedeemReturn_1 = FunctionReturn<typeof functions['redeem(uint256,address,address)']>

export type RemoveExtraAssetParams = FunctionArguments<typeof functions.removeExtraAsset>
export type RemoveExtraAssetReturn = FunctionReturn<typeof functions.removeExtraAsset>

export type RenounceOwnershipParams = FunctionArguments<typeof functions.renounceOwnership>
export type RenounceOwnershipReturn = FunctionReturn<typeof functions.renounceOwnership>

export type SetPairThresholdParams = FunctionArguments<typeof functions.setPairThreshold>
export type SetPairThresholdReturn = FunctionReturn<typeof functions.setPairThreshold>

export type SetRebalancerParams = FunctionArguments<typeof functions.setRebalancer>
export type SetRebalancerReturn = FunctionReturn<typeof functions.setRebalancer>

export type SetUnlockRatePerSecondParams = FunctionArguments<typeof functions.setUnlockRatePerSecond>
export type SetUnlockRatePerSecondReturn = FunctionReturn<typeof functions.setUnlockRatePerSecond>

export type StartCollateralSunsetParams = FunctionArguments<typeof functions.startCollateralSunset>
export type StartCollateralSunsetReturn = FunctionReturn<typeof functions.startCollateralSunset>

export type SymbolParams = FunctionArguments<typeof functions.symbol>
export type SymbolReturn = FunctionReturn<typeof functions.symbol>

export type TotalAssetsParams = FunctionArguments<typeof functions.totalAssets>
export type TotalAssetsReturn = FunctionReturn<typeof functions.totalAssets>

export type TotalAssetsUnlockedParams = FunctionArguments<typeof functions.totalAssetsUnlocked>
export type TotalAssetsUnlockedReturn = FunctionReturn<typeof functions.totalAssetsUnlocked>

export type TotalSupplyParams = FunctionArguments<typeof functions.totalSupply>
export type TotalSupplyReturn = FunctionReturn<typeof functions.totalSupply>

export type TransferParams = FunctionArguments<typeof functions.transfer>
export type TransferReturn = FunctionReturn<typeof functions.transfer>

export type TransferFromParams = FunctionArguments<typeof functions.transferFrom>
export type TransferFromReturn = FunctionReturn<typeof functions.transferFrom>

export type TransferOwnershipParams = FunctionArguments<typeof functions.transferOwnership>
export type TransferOwnershipReturn = FunctionReturn<typeof functions.transferOwnership>

export type UnclaimedUnvestedAmountParams = FunctionArguments<typeof functions.unclaimedUnvestedAmount>
export type UnclaimedUnvestedAmountReturn = FunctionReturn<typeof functions.unclaimedUnvestedAmount>

export type VestedAmountParams = FunctionArguments<typeof functions.vestedAmount>
export type VestedAmountReturn = FunctionReturn<typeof functions.vestedAmount>

export type WithdrawParams_0 = FunctionArguments<typeof functions['withdraw(uint256,address,address)']>
export type WithdrawReturn_0 = FunctionReturn<typeof functions['withdraw(uint256,address,address)']>

export type WithdrawParams_1 = FunctionArguments<typeof functions['withdraw(uint256,address[],address,address)']>
export type WithdrawReturn_1 = FunctionReturn<typeof functions['withdraw(uint256,address[],address,address)']>

