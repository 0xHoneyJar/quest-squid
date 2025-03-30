import * as p from '@subsquid/evm-codec'
import { event, fun, viewFun, indexed, ContractBase } from '@subsquid/evm-abi'
import type { EventParams as EParams, FunctionArguments, FunctionReturn } from '@subsquid/evm-abi'

export const events = {
    Approval: event("0x8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925", "Approval(address,address,uint256)", {"owner": indexed(p.address), "spender": indexed(p.address), "value": p.uint256}),
    Deposit: event("0xdcbc1c05240f31ff3ad067ef1ee35ce4997762752e3a095284754544f4c709d7", "Deposit(address,address,uint256,uint256)", {"sender": indexed(p.address), "owner": indexed(p.address), "assets": p.uint256, "shares": p.uint256}),
    Initialized: event("0xc7f505b2f371ae2175ee4913f4499e1f2633a7b5936321eed1cdaeb6115181d2", "Initialized(uint64)", {"version": p.uint64}),
    Paused: event("0x62e78cea01bee320cd4e420270b5ea74000d11b0c9f74754ebdbfc544b05a258", "Paused(address)", {"account": p.address}),
    RewardAdded: event("0xac24935fd910bc682b5ccb1a07b718cadf8cf2f6d1404c4f3ddc3662dae40e29", "RewardAdded(address,uint256)", {"token": indexed(p.address), "rewardAmount": p.uint256}),
    RewardsDurationUpdated: event("0xad2f86b01ed93b4b3a150d448c61a4f5d8d38075d3c0c64cc0a26fd6e1f49545", "RewardsDurationUpdated(address,uint256)", {"token": indexed(p.address), "newDuration": p.uint256}),
    RoleAdminChanged: event("0xbd79b86ffe0ab8e8776151514217cd7cacd52c909f66475c3af44e129f0b00ff", "RoleAdminChanged(bytes32,bytes32,bytes32)", {"role": indexed(p.bytes32), "previousAdminRole": indexed(p.bytes32), "newAdminRole": indexed(p.bytes32)}),
    RoleGranted: event("0x2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d", "RoleGranted(bytes32,address,address)", {"role": indexed(p.bytes32), "account": indexed(p.address), "sender": indexed(p.address)}),
    RoleRevoked: event("0xf6391f5c32d9c69d2a47ea670b442974b53935d1edc7fd64eb21e047a839171b", "RoleRevoked(bytes32,address,address)", {"role": indexed(p.bytes32), "account": indexed(p.address), "sender": indexed(p.address)}),
    Transfer: event("0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef", "Transfer(address,address,uint256)", {"from": indexed(p.address), "to": indexed(p.address), "value": p.uint256}),
    Unpaused: event("0x5db9ee0a495bf2e6ff9c91a7834c1ba4fdd244a5e8aa4e537bd38aeae4b073aa", "Unpaused(address)", {"account": p.address}),
    Upgraded: event("0xbc7cd75a20ee27fd9adebab32041f755214dbc6bffa90cc0225b39da2e5c2d3b", "Upgraded(address)", {"implementation": indexed(p.address)}),
    Withdraw: event("0xfbde797d201c681b91056529119e0b02407c7bb96a4a2c75c01fc9667232c8db", "Withdraw(address,address,address,uint256,uint256)", {"sender": indexed(p.address), "receiver": indexed(p.address), "owner": indexed(p.address), "assets": p.uint256, "shares": p.uint256}),
}

export const functions = {
    DEFAULT_ADMIN_ROLE: viewFun("0xa217fddf", "DEFAULT_ADMIN_ROLE()", {}, p.bytes32),
    MAX_REWARDS_TOKENS: viewFun("0xc4830210", "MAX_REWARDS_TOKENS()", {}, p.uint256),
    PAUSER_ROLE: viewFun("0xe63ab1e9", "PAUSER_ROLE()", {}, p.bytes32),
    REWARD_NOTIFIER_ROLE: viewFun("0xb46ee10d", "REWARD_NOTIFIER_ROLE()", {}, p.bytes32),
    UPGRADE_INTERFACE_VERSION: viewFun("0xad3cb1cc", "UPGRADE_INTERFACE_VERSION()", {}, p.string),
    allowance: viewFun("0xdd62ed3e", "allowance(address,address)", {"owner": p.address, "spender": p.address}, p.uint256),
    approve: fun("0x095ea7b3", "approve(address,uint256)", {"spender": p.address, "value": p.uint256}, p.bool),
    asset: viewFun("0x38d52e0f", "asset()", {}, p.address),
    balanceOf: viewFun("0x70a08231", "balanceOf(address)", {"account": p.address}, p.uint256),
    'claimRewards(address)': fun("0xef5cfb8c", "claimRewards(address)", {"receiver": p.address}, ),
    'claimRewards(address,address)': fun("0xf1e42ccd", "claimRewards(address,address)", {"token": p.address, "receiver": p.address}, ),
    convertToAssets: viewFun("0x07a2d13a", "convertToAssets(uint256)", {"shares": p.uint256}, p.uint256),
    convertToShares: viewFun("0xc6e6f592", "convertToShares(uint256)", {"assets": p.uint256}, p.uint256),
    decimals: viewFun("0x313ce567", "decimals()", {}, p.uint8),
    deposit: fun("0x6e553f65", "deposit(uint256,address)", {"assets": p.uint256, "receiver": p.address}, p.uint256),
    depositNative: fun("0x33bb7f91", "depositNative(address)", {"receiver": p.address}, p.uint256),
    depositPrincipal: viewFun("0xecc38817", "depositPrincipal()", {}, p.uint256),
    effectiveBalance: viewFun("0x16a398f7", "effectiveBalance(address)", {"account": p.address}, p.uint256),
    getRewardTokens: viewFun("0xc4f59f9b", "getRewardTokens()", {}, p.array(p.address)),
    getRoleAdmin: viewFun("0x248a9ca3", "getRoleAdmin(bytes32)", {"role": p.bytes32}, p.bytes32),
    grantRole: fun("0x2f2ff15d", "grantRole(bytes32,address)", {"role": p.bytes32, "account": p.address}, ),
    hasRole: viewFun("0x91d14854", "hasRole(bytes32,address)", {"role": p.bytes32, "account": p.address}, p.bool),
    initialize: fun("0x1794bb3c", "initialize(address,address,uint256)", {"_asset": p.address, "_owner": p.address, "_maxDeposits": p.uint256}, ),
    isRewardToken: viewFun("0xb5fd73f8", "isRewardToken(address)", {"_0": p.address}, p.bool),
    isWhitelistedVault: viewFun("0xa2ce2773", "isWhitelistedVault(address)", {"_0": p.address}, p.bool),
    maxDeposit: viewFun("0x402d267d", "maxDeposit(address)", {"_0": p.address}, p.uint256),
    maxDeposits: viewFun("0x354d594b", "maxDeposits()", {}, p.uint256),
    maxMint: viewFun("0xc63d75b6", "maxMint(address)", {"receiver": p.address}, p.uint256),
    maxRedeem: viewFun("0xd905777e", "maxRedeem(address)", {"_0": p.address}, p.uint256),
    maxWithdraw: viewFun("0xce96cb77", "maxWithdraw(address)", {"_0": p.address}, p.uint256),
    mint: fun("0x94bf804d", "mint(uint256,address)", {"shares": p.uint256, "receiver": p.address}, p.uint256),
    name: viewFun("0x06fdde03", "name()", {}, p.string),
    notifyRewardAmount: fun("0xb66503cf", "notifyRewardAmount(address,uint256)", {"token": p.address, "rewardAmount": p.uint256}, ),
    pause: fun("0x8456cb59", "pause()", {}, ),
    paused: viewFun("0x5c975abb", "paused()", {}, p.bool),
    previewDeposit: viewFun("0xef8b30f7", "previewDeposit(uint256)", {"assets": p.uint256}, p.uint256),
    previewMint: viewFun("0xb3d7f6b9", "previewMint(uint256)", {"shares": p.uint256}, p.uint256),
    previewRedeem: viewFun("0x4cdad506", "previewRedeem(uint256)", {"shares": p.uint256}, p.uint256),
    previewRewards: viewFun("0xdacf1a3e", "previewRewards(address,address)", {"account": p.address, "token": p.address}, p.uint256),
    previewWithdraw: viewFun("0x0a28a477", "previewWithdraw(uint256)", {"assets": p.uint256}, p.uint256),
    proxiableUUID: viewFun("0x52d1902d", "proxiableUUID()", {}, p.bytes32),
    redeem: fun("0xba087652", "redeem(uint256,address,address)", {"shares": p.uint256, "receiver": p.address, "owner": p.address}, p.uint256),
    renounceRole: fun("0x36568abe", "renounceRole(bytes32,address)", {"role": p.bytes32, "callerConfirmation": p.address}, ),
    revokeRole: fun("0xd547741f", "revokeRole(bytes32,address)", {"role": p.bytes32, "account": p.address}, ),
    rewardData: viewFun("0x48e5d9f8", "rewardData(address)", {"_0": p.address}, {"rewardPerShareStored": p.uint256, "totalRewards": p.uint256, "rewardsDuration": p.uint256, "periodFinish": p.uint256, "rewardRate": p.uint256, "lastUpdateTime": p.uint256, "remainingRewards": p.uint256}),
    rewardTokens: viewFun("0x7bb7bed1", "rewardTokens(uint256)", {"_0": p.uint256}, p.address),
    rewards: viewFun("0xe70b9e27", "rewards(address,address)", {"_0": p.address, "_1": p.address}, p.uint256),
    setMaxDeposits: fun("0x00fed902", "setMaxDeposits(uint256)", {"newMax": p.uint256}, ),
    setMaxRewardsTokens: fun("0x5210469c", "setMaxRewardsTokens(uint256)", {"newMax": p.uint256}, ),
    setRewardsDuration: fun("0x2378bea6", "setRewardsDuration(address,uint256)", {"token": p.address, "duration": p.uint256}, ),
    setWhitelistedVault: fun("0xc599a317", "setWhitelistedVault(address,bool)", {"vaultAddress": p.address, "status": p.bool}, ),
    supportsInterface: viewFun("0x01ffc9a7", "supportsInterface(bytes4)", {"interfaceId": p.bytes4}, p.bool),
    symbol: viewFun("0x95d89b41", "symbol()", {}, p.string),
    totalAssets: viewFun("0x01e1d114", "totalAssets()", {}, p.uint256),
    totalSupply: viewFun("0x18160ddd", "totalSupply()", {}, p.uint256),
    transfer: fun("0xa9059cbb", "transfer(address,uint256)", {"to": p.address, "value": p.uint256}, p.bool),
    transferFrom: fun("0x23b872dd", "transferFrom(address,address,uint256)", {"from": p.address, "to": p.address, "value": p.uint256}, p.bool),
    unpause: fun("0x3f4ba83a", "unpause()", {}, ),
    upgradeToAndCall: fun("0x4f1ef286", "upgradeToAndCall(address,bytes)", {"newImplementation": p.address, "data": p.bytes}, ),
    userRewardPerSharePaid: viewFun("0x65cbcb96", "userRewardPerSharePaid(address,address)", {"_0": p.address, "_1": p.address}, p.uint256),
    vaultedShares: viewFun("0x05131572", "vaultedShares(address)", {"_0": p.address}, p.uint256),
    withdraw: fun("0xb460af94", "withdraw(uint256,address,address)", {"assets": p.uint256, "receiver": p.address, "owner": p.address}, p.uint256),
    withdrawPrincipal: fun("0x884e17f3", "withdrawPrincipal(uint256,address)", {"assets": p.uint256, "receiver": p.address}, ),
    withdrawRemainingRewards: fun("0xfe6a2ea9", "withdrawRemainingRewards(address,address)", {"token": p.address, "receiver": p.address}, ),
}

export class Contract extends ContractBase {

    DEFAULT_ADMIN_ROLE() {
        return this.eth_call(functions.DEFAULT_ADMIN_ROLE, {})
    }

    MAX_REWARDS_TOKENS() {
        return this.eth_call(functions.MAX_REWARDS_TOKENS, {})
    }

    PAUSER_ROLE() {
        return this.eth_call(functions.PAUSER_ROLE, {})
    }

    REWARD_NOTIFIER_ROLE() {
        return this.eth_call(functions.REWARD_NOTIFIER_ROLE, {})
    }

    UPGRADE_INTERFACE_VERSION() {
        return this.eth_call(functions.UPGRADE_INTERFACE_VERSION, {})
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

    depositPrincipal() {
        return this.eth_call(functions.depositPrincipal, {})
    }

    effectiveBalance(account: EffectiveBalanceParams["account"]) {
        return this.eth_call(functions.effectiveBalance, {account})
    }

    getRewardTokens() {
        return this.eth_call(functions.getRewardTokens, {})
    }

    getRoleAdmin(role: GetRoleAdminParams["role"]) {
        return this.eth_call(functions.getRoleAdmin, {role})
    }

    hasRole(role: HasRoleParams["role"], account: HasRoleParams["account"]) {
        return this.eth_call(functions.hasRole, {role, account})
    }

    isRewardToken(_0: IsRewardTokenParams["_0"]) {
        return this.eth_call(functions.isRewardToken, {_0})
    }

    isWhitelistedVault(_0: IsWhitelistedVaultParams["_0"]) {
        return this.eth_call(functions.isWhitelistedVault, {_0})
    }

    maxDeposit(_0: MaxDepositParams["_0"]) {
        return this.eth_call(functions.maxDeposit, {_0})
    }

    maxDeposits() {
        return this.eth_call(functions.maxDeposits, {})
    }

    maxMint(receiver: MaxMintParams["receiver"]) {
        return this.eth_call(functions.maxMint, {receiver})
    }

    maxRedeem(_0: MaxRedeemParams["_0"]) {
        return this.eth_call(functions.maxRedeem, {_0})
    }

    maxWithdraw(_0: MaxWithdrawParams["_0"]) {
        return this.eth_call(functions.maxWithdraw, {_0})
    }

    name() {
        return this.eth_call(functions.name, {})
    }

    paused() {
        return this.eth_call(functions.paused, {})
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

    previewRewards(account: PreviewRewardsParams["account"], token: PreviewRewardsParams["token"]) {
        return this.eth_call(functions.previewRewards, {account, token})
    }

    previewWithdraw(assets: PreviewWithdrawParams["assets"]) {
        return this.eth_call(functions.previewWithdraw, {assets})
    }

    proxiableUUID() {
        return this.eth_call(functions.proxiableUUID, {})
    }

    rewardData(_0: RewardDataParams["_0"]) {
        return this.eth_call(functions.rewardData, {_0})
    }

    rewardTokens(_0: RewardTokensParams["_0"]) {
        return this.eth_call(functions.rewardTokens, {_0})
    }

    rewards(_0: RewardsParams["_0"], _1: RewardsParams["_1"]) {
        return this.eth_call(functions.rewards, {_0, _1})
    }

    supportsInterface(interfaceId: SupportsInterfaceParams["interfaceId"]) {
        return this.eth_call(functions.supportsInterface, {interfaceId})
    }

    symbol() {
        return this.eth_call(functions.symbol, {})
    }

    totalAssets() {
        return this.eth_call(functions.totalAssets, {})
    }

    totalSupply() {
        return this.eth_call(functions.totalSupply, {})
    }

    userRewardPerSharePaid(_0: UserRewardPerSharePaidParams["_0"], _1: UserRewardPerSharePaidParams["_1"]) {
        return this.eth_call(functions.userRewardPerSharePaid, {_0, _1})
    }

    vaultedShares(_0: VaultedSharesParams["_0"]) {
        return this.eth_call(functions.vaultedShares, {_0})
    }
}

/// Event types
export type ApprovalEventArgs = EParams<typeof events.Approval>
export type DepositEventArgs = EParams<typeof events.Deposit>
export type InitializedEventArgs = EParams<typeof events.Initialized>
export type PausedEventArgs = EParams<typeof events.Paused>
export type RewardAddedEventArgs = EParams<typeof events.RewardAdded>
export type RewardsDurationUpdatedEventArgs = EParams<typeof events.RewardsDurationUpdated>
export type RoleAdminChangedEventArgs = EParams<typeof events.RoleAdminChanged>
export type RoleGrantedEventArgs = EParams<typeof events.RoleGranted>
export type RoleRevokedEventArgs = EParams<typeof events.RoleRevoked>
export type TransferEventArgs = EParams<typeof events.Transfer>
export type UnpausedEventArgs = EParams<typeof events.Unpaused>
export type UpgradedEventArgs = EParams<typeof events.Upgraded>
export type WithdrawEventArgs = EParams<typeof events.Withdraw>

/// Function types
export type DEFAULT_ADMIN_ROLEParams = FunctionArguments<typeof functions.DEFAULT_ADMIN_ROLE>
export type DEFAULT_ADMIN_ROLEReturn = FunctionReturn<typeof functions.DEFAULT_ADMIN_ROLE>

export type MAX_REWARDS_TOKENSParams = FunctionArguments<typeof functions.MAX_REWARDS_TOKENS>
export type MAX_REWARDS_TOKENSReturn = FunctionReturn<typeof functions.MAX_REWARDS_TOKENS>

export type PAUSER_ROLEParams = FunctionArguments<typeof functions.PAUSER_ROLE>
export type PAUSER_ROLEReturn = FunctionReturn<typeof functions.PAUSER_ROLE>

export type REWARD_NOTIFIER_ROLEParams = FunctionArguments<typeof functions.REWARD_NOTIFIER_ROLE>
export type REWARD_NOTIFIER_ROLEReturn = FunctionReturn<typeof functions.REWARD_NOTIFIER_ROLE>

export type UPGRADE_INTERFACE_VERSIONParams = FunctionArguments<typeof functions.UPGRADE_INTERFACE_VERSION>
export type UPGRADE_INTERFACE_VERSIONReturn = FunctionReturn<typeof functions.UPGRADE_INTERFACE_VERSION>

export type AllowanceParams = FunctionArguments<typeof functions.allowance>
export type AllowanceReturn = FunctionReturn<typeof functions.allowance>

export type ApproveParams = FunctionArguments<typeof functions.approve>
export type ApproveReturn = FunctionReturn<typeof functions.approve>

export type AssetParams = FunctionArguments<typeof functions.asset>
export type AssetReturn = FunctionReturn<typeof functions.asset>

export type BalanceOfParams = FunctionArguments<typeof functions.balanceOf>
export type BalanceOfReturn = FunctionReturn<typeof functions.balanceOf>

export type ClaimRewardsParams_0 = FunctionArguments<typeof functions['claimRewards(address)']>
export type ClaimRewardsReturn_0 = FunctionReturn<typeof functions['claimRewards(address)']>

export type ClaimRewardsParams_1 = FunctionArguments<typeof functions['claimRewards(address,address)']>
export type ClaimRewardsReturn_1 = FunctionReturn<typeof functions['claimRewards(address,address)']>

export type ConvertToAssetsParams = FunctionArguments<typeof functions.convertToAssets>
export type ConvertToAssetsReturn = FunctionReturn<typeof functions.convertToAssets>

export type ConvertToSharesParams = FunctionArguments<typeof functions.convertToShares>
export type ConvertToSharesReturn = FunctionReturn<typeof functions.convertToShares>

export type DecimalsParams = FunctionArguments<typeof functions.decimals>
export type DecimalsReturn = FunctionReturn<typeof functions.decimals>

export type DepositParams = FunctionArguments<typeof functions.deposit>
export type DepositReturn = FunctionReturn<typeof functions.deposit>

export type DepositNativeParams = FunctionArguments<typeof functions.depositNative>
export type DepositNativeReturn = FunctionReturn<typeof functions.depositNative>

export type DepositPrincipalParams = FunctionArguments<typeof functions.depositPrincipal>
export type DepositPrincipalReturn = FunctionReturn<typeof functions.depositPrincipal>

export type EffectiveBalanceParams = FunctionArguments<typeof functions.effectiveBalance>
export type EffectiveBalanceReturn = FunctionReturn<typeof functions.effectiveBalance>

export type GetRewardTokensParams = FunctionArguments<typeof functions.getRewardTokens>
export type GetRewardTokensReturn = FunctionReturn<typeof functions.getRewardTokens>

export type GetRoleAdminParams = FunctionArguments<typeof functions.getRoleAdmin>
export type GetRoleAdminReturn = FunctionReturn<typeof functions.getRoleAdmin>

export type GrantRoleParams = FunctionArguments<typeof functions.grantRole>
export type GrantRoleReturn = FunctionReturn<typeof functions.grantRole>

export type HasRoleParams = FunctionArguments<typeof functions.hasRole>
export type HasRoleReturn = FunctionReturn<typeof functions.hasRole>

export type InitializeParams = FunctionArguments<typeof functions.initialize>
export type InitializeReturn = FunctionReturn<typeof functions.initialize>

export type IsRewardTokenParams = FunctionArguments<typeof functions.isRewardToken>
export type IsRewardTokenReturn = FunctionReturn<typeof functions.isRewardToken>

export type IsWhitelistedVaultParams = FunctionArguments<typeof functions.isWhitelistedVault>
export type IsWhitelistedVaultReturn = FunctionReturn<typeof functions.isWhitelistedVault>

export type MaxDepositParams = FunctionArguments<typeof functions.maxDeposit>
export type MaxDepositReturn = FunctionReturn<typeof functions.maxDeposit>

export type MaxDepositsParams = FunctionArguments<typeof functions.maxDeposits>
export type MaxDepositsReturn = FunctionReturn<typeof functions.maxDeposits>

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

export type NotifyRewardAmountParams = FunctionArguments<typeof functions.notifyRewardAmount>
export type NotifyRewardAmountReturn = FunctionReturn<typeof functions.notifyRewardAmount>

export type PauseParams = FunctionArguments<typeof functions.pause>
export type PauseReturn = FunctionReturn<typeof functions.pause>

export type PausedParams = FunctionArguments<typeof functions.paused>
export type PausedReturn = FunctionReturn<typeof functions.paused>

export type PreviewDepositParams = FunctionArguments<typeof functions.previewDeposit>
export type PreviewDepositReturn = FunctionReturn<typeof functions.previewDeposit>

export type PreviewMintParams = FunctionArguments<typeof functions.previewMint>
export type PreviewMintReturn = FunctionReturn<typeof functions.previewMint>

export type PreviewRedeemParams = FunctionArguments<typeof functions.previewRedeem>
export type PreviewRedeemReturn = FunctionReturn<typeof functions.previewRedeem>

export type PreviewRewardsParams = FunctionArguments<typeof functions.previewRewards>
export type PreviewRewardsReturn = FunctionReturn<typeof functions.previewRewards>

export type PreviewWithdrawParams = FunctionArguments<typeof functions.previewWithdraw>
export type PreviewWithdrawReturn = FunctionReturn<typeof functions.previewWithdraw>

export type ProxiableUUIDParams = FunctionArguments<typeof functions.proxiableUUID>
export type ProxiableUUIDReturn = FunctionReturn<typeof functions.proxiableUUID>

export type RedeemParams = FunctionArguments<typeof functions.redeem>
export type RedeemReturn = FunctionReturn<typeof functions.redeem>

export type RenounceRoleParams = FunctionArguments<typeof functions.renounceRole>
export type RenounceRoleReturn = FunctionReturn<typeof functions.renounceRole>

export type RevokeRoleParams = FunctionArguments<typeof functions.revokeRole>
export type RevokeRoleReturn = FunctionReturn<typeof functions.revokeRole>

export type RewardDataParams = FunctionArguments<typeof functions.rewardData>
export type RewardDataReturn = FunctionReturn<typeof functions.rewardData>

export type RewardTokensParams = FunctionArguments<typeof functions.rewardTokens>
export type RewardTokensReturn = FunctionReturn<typeof functions.rewardTokens>

export type RewardsParams = FunctionArguments<typeof functions.rewards>
export type RewardsReturn = FunctionReturn<typeof functions.rewards>

export type SetMaxDepositsParams = FunctionArguments<typeof functions.setMaxDeposits>
export type SetMaxDepositsReturn = FunctionReturn<typeof functions.setMaxDeposits>

export type SetMaxRewardsTokensParams = FunctionArguments<typeof functions.setMaxRewardsTokens>
export type SetMaxRewardsTokensReturn = FunctionReturn<typeof functions.setMaxRewardsTokens>

export type SetRewardsDurationParams = FunctionArguments<typeof functions.setRewardsDuration>
export type SetRewardsDurationReturn = FunctionReturn<typeof functions.setRewardsDuration>

export type SetWhitelistedVaultParams = FunctionArguments<typeof functions.setWhitelistedVault>
export type SetWhitelistedVaultReturn = FunctionReturn<typeof functions.setWhitelistedVault>

export type SupportsInterfaceParams = FunctionArguments<typeof functions.supportsInterface>
export type SupportsInterfaceReturn = FunctionReturn<typeof functions.supportsInterface>

export type SymbolParams = FunctionArguments<typeof functions.symbol>
export type SymbolReturn = FunctionReturn<typeof functions.symbol>

export type TotalAssetsParams = FunctionArguments<typeof functions.totalAssets>
export type TotalAssetsReturn = FunctionReturn<typeof functions.totalAssets>

export type TotalSupplyParams = FunctionArguments<typeof functions.totalSupply>
export type TotalSupplyReturn = FunctionReturn<typeof functions.totalSupply>

export type TransferParams = FunctionArguments<typeof functions.transfer>
export type TransferReturn = FunctionReturn<typeof functions.transfer>

export type TransferFromParams = FunctionArguments<typeof functions.transferFrom>
export type TransferFromReturn = FunctionReturn<typeof functions.transferFrom>

export type UnpauseParams = FunctionArguments<typeof functions.unpause>
export type UnpauseReturn = FunctionReturn<typeof functions.unpause>

export type UpgradeToAndCallParams = FunctionArguments<typeof functions.upgradeToAndCall>
export type UpgradeToAndCallReturn = FunctionReturn<typeof functions.upgradeToAndCall>

export type UserRewardPerSharePaidParams = FunctionArguments<typeof functions.userRewardPerSharePaid>
export type UserRewardPerSharePaidReturn = FunctionReturn<typeof functions.userRewardPerSharePaid>

export type VaultedSharesParams = FunctionArguments<typeof functions.vaultedShares>
export type VaultedSharesReturn = FunctionReturn<typeof functions.vaultedShares>

export type WithdrawParams = FunctionArguments<typeof functions.withdraw>
export type WithdrawReturn = FunctionReturn<typeof functions.withdraw>

export type WithdrawPrincipalParams = FunctionArguments<typeof functions.withdrawPrincipal>
export type WithdrawPrincipalReturn = FunctionReturn<typeof functions.withdrawPrincipal>

export type WithdrawRemainingRewardsParams = FunctionArguments<typeof functions.withdrawRemainingRewards>
export type WithdrawRemainingRewardsReturn = FunctionReturn<typeof functions.withdrawRemainingRewards>

