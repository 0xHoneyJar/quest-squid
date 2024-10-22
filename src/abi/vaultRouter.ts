import * as p from '@subsquid/evm-codec'
import { event, fun, viewFun, indexed, ContractBase } from '@subsquid/evm-abi'
import type { EventParams as EParams, FunctionArguments, FunctionReturn } from '@subsquid/evm-abi'

export const events = {
    Activity: event("0x3991762119141ecd9dc48794568afac3ee5c104ec914bbca86634e5397872e01", "Activity(uint8,address,address,address,uint256,uint256,uint256)", {"activity": indexed(p.uint8), "vault": indexed(p.address), "caller": indexed(p.address), "receiver": p.address, "assets": p.uint256, "shares": p.uint256, "timestamp": p.uint256}),
    Initialized: event("0xc7f505b2f371ae2175ee4913f4499e1f2633a7b5936321eed1cdaeb6115181d2", "Initialized(uint64)", {"version": p.uint64}),
    OwnershipTransferred: event("0x8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0", "OwnershipTransferred(address,address)", {"previousOwner": indexed(p.address), "newOwner": indexed(p.address)}),
    VaultAdded: event("0x7b7ef7a864d96a85497a1ed846adb39940dd6ccef678ff6ac8d55505e09b8cc4", "VaultAdded(address)", {"vault": indexed(p.address)}),
    VaultRemoved: event("0xe71f3a50e5ad81964f352c411f1d45e35438ecd1acecef59ac81d9fbbf6cbc0a", "VaultRemoved(address)", {"vault": indexed(p.address)}),
}

export const functions = {
    addSupportedAsset: fun("0xbffa067c", "addSupportedAsset(address,address,address)", {"vault_": p.address, "asset_": p.address, "router_": p.address}, ),
    addVault: fun("0x48b168da", "addVault(address,address[],address[])", {"vault_": p.address, "supportAssets_": p.array(p.address), "routers": p.array(p.address)}, ),
    addVaultManager: fun("0x5f80fcad", "addVaultManager(address)", {"vaultManager_": p.address}, ),
    claimReward: fun("0xd279c191", "claimReward(address)", {"vault": p.address}, p.uint256),
    deposit: fun("0x2e2d2984", "deposit(uint256,address,address)", {"amount_": p.uint256, "vault_": p.address, "fromAsset_": p.address}, p.uint256),
    emitEvent: fun("0x07544e4a", "emitEvent(uint8,address,address,address,uint256,uint256)", {"activity_": p.uint8, "vault_": p.address, "caller_": p.address, "receiver_": p.address, "assets_": p.uint256, "shares_": p.uint256}, ),
    getMaxWithdrawal: viewFun("0x003128e9", "getMaxWithdrawal(address,address,address)", {"vault_": p.address, "user_": p.address, "asset_": p.address}, p.uint256),
    honey: viewFun("0x36b2c4b2", "honey()", {}, p.address),
    honeyVaultRouter: viewFun("0x84b6cdb4", "honeyVaultRouter()", {}, p.address),
    initialize: fun("0x485cc955", "initialize(address,address)", {"honey_": p.address, "honeyVaultRouter_": p.address}, ),
    owner: viewFun("0x8da5cb5b", "owner()", {}, p.address),
    removeSupportAsset: fun("0x2dded23e", "removeSupportAsset(address,address)", {"vault_": p.address, "asset_": p.address}, ),
    removeVault: fun("0xceb68c23", "removeVault(address)", {"vault_": p.address}, ),
    removeVaultManager: fun("0x5290e6a6", "removeVaultManager(address)", {"vaultManager_": p.address}, ),
    renounceOwnership: fun("0x715018a6", "renounceOwnership()", {}, ),
    transferOwnership: fun("0xf2fde38b", "transferOwnership(address)", {"newOwner": p.address}, ),
    vaults: viewFun("0xa622ee7c", "vaults(address)", {"_0": p.address}, p.bool),
    vaultsManager: viewFun("0xd61ed0d6", "vaultsManager(address)", {"_0": p.address}, p.bool),
    withdraw: fun("0xb460af94", "withdraw(uint256,address,address)", {"toAssetAmount_": p.uint256, "vault_": p.address, "toAsset_": p.address}, ),
}

export class Contract extends ContractBase {

    getMaxWithdrawal(vault_: GetMaxWithdrawalParams["vault_"], user_: GetMaxWithdrawalParams["user_"], asset_: GetMaxWithdrawalParams["asset_"]) {
        return this.eth_call(functions.getMaxWithdrawal, {vault_, user_, asset_})
    }

    honey() {
        return this.eth_call(functions.honey, {})
    }

    honeyVaultRouter() {
        return this.eth_call(functions.honeyVaultRouter, {})
    }

    owner() {
        return this.eth_call(functions.owner, {})
    }

    vaults(_0: VaultsParams["_0"]) {
        return this.eth_call(functions.vaults, {_0})
    }

    vaultsManager(_0: VaultsManagerParams["_0"]) {
        return this.eth_call(functions.vaultsManager, {_0})
    }
}

/// Event types
export type ActivityEventArgs = EParams<typeof events.Activity>
export type InitializedEventArgs = EParams<typeof events.Initialized>
export type OwnershipTransferredEventArgs = EParams<typeof events.OwnershipTransferred>
export type VaultAddedEventArgs = EParams<typeof events.VaultAdded>
export type VaultRemovedEventArgs = EParams<typeof events.VaultRemoved>

/// Function types
export type AddSupportedAssetParams = FunctionArguments<typeof functions.addSupportedAsset>
export type AddSupportedAssetReturn = FunctionReturn<typeof functions.addSupportedAsset>

export type AddVaultParams = FunctionArguments<typeof functions.addVault>
export type AddVaultReturn = FunctionReturn<typeof functions.addVault>

export type AddVaultManagerParams = FunctionArguments<typeof functions.addVaultManager>
export type AddVaultManagerReturn = FunctionReturn<typeof functions.addVaultManager>

export type ClaimRewardParams = FunctionArguments<typeof functions.claimReward>
export type ClaimRewardReturn = FunctionReturn<typeof functions.claimReward>

export type DepositParams = FunctionArguments<typeof functions.deposit>
export type DepositReturn = FunctionReturn<typeof functions.deposit>

export type EmitEventParams = FunctionArguments<typeof functions.emitEvent>
export type EmitEventReturn = FunctionReturn<typeof functions.emitEvent>

export type GetMaxWithdrawalParams = FunctionArguments<typeof functions.getMaxWithdrawal>
export type GetMaxWithdrawalReturn = FunctionReturn<typeof functions.getMaxWithdrawal>

export type HoneyParams = FunctionArguments<typeof functions.honey>
export type HoneyReturn = FunctionReturn<typeof functions.honey>

export type HoneyVaultRouterParams = FunctionArguments<typeof functions.honeyVaultRouter>
export type HoneyVaultRouterReturn = FunctionReturn<typeof functions.honeyVaultRouter>

export type InitializeParams = FunctionArguments<typeof functions.initialize>
export type InitializeReturn = FunctionReturn<typeof functions.initialize>

export type OwnerParams = FunctionArguments<typeof functions.owner>
export type OwnerReturn = FunctionReturn<typeof functions.owner>

export type RemoveSupportAssetParams = FunctionArguments<typeof functions.removeSupportAsset>
export type RemoveSupportAssetReturn = FunctionReturn<typeof functions.removeSupportAsset>

export type RemoveVaultParams = FunctionArguments<typeof functions.removeVault>
export type RemoveVaultReturn = FunctionReturn<typeof functions.removeVault>

export type RemoveVaultManagerParams = FunctionArguments<typeof functions.removeVaultManager>
export type RemoveVaultManagerReturn = FunctionReturn<typeof functions.removeVaultManager>

export type RenounceOwnershipParams = FunctionArguments<typeof functions.renounceOwnership>
export type RenounceOwnershipReturn = FunctionReturn<typeof functions.renounceOwnership>

export type TransferOwnershipParams = FunctionArguments<typeof functions.transferOwnership>
export type TransferOwnershipReturn = FunctionReturn<typeof functions.transferOwnership>

export type VaultsParams = FunctionArguments<typeof functions.vaults>
export type VaultsReturn = FunctionReturn<typeof functions.vaults>

export type VaultsManagerParams = FunctionArguments<typeof functions.vaultsManager>
export type VaultsManagerReturn = FunctionReturn<typeof functions.vaultsManager>

export type WithdrawParams = FunctionArguments<typeof functions.withdraw>
export type WithdrawReturn = FunctionReturn<typeof functions.withdraw>

