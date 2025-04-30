import * as p from '@subsquid/evm-codec'
import { event, fun, viewFun, indexed, ContractBase } from '@subsquid/evm-abi'
import type { EventParams as EParams, FunctionArguments, FunctionReturn } from '@subsquid/evm-abi'

export const events = {
    Deployed: event("0x09e48df7857bd0c1e0d31bb8a85d42cf1874817895f171c917f6ee2cea73ec20", "Deployed(address,address)", {"_ICHIVaultFactory": p.address, "_WETH": p.address}),
    DepositForwarded: event("0x425e9f077f9db249ef795bd139f30608e86b0b6c06f049e167ddee551b8c891d", "DepositForwarded(address,address,address,uint256,uint256,address)", {"sender": indexed(p.address), "vault": indexed(p.address), "token": indexed(p.address), "amount": p.uint256, "shares": p.uint256, "to": p.address}),
}

export const functions = {
    ICHIVaultFactory: viewFun("0x56e6004b", "ICHIVaultFactory()", {}, p.address),
    WRAPPED_NATIVE: viewFun("0xd999984d", "WRAPPED_NATIVE()", {}, p.address),
    forwardDepositToICHIVault: fun("0x5d123e3f", "forwardDepositToICHIVault(address,address,address,uint256,uint256,address)", {"vault": p.address, "vaultDeployer": p.address, "token": p.address, "amount": p.uint256, "minimumProceeds": p.uint256, "to": p.address}, p.uint256),
    forwardNativeDepositToICHIVault: fun("0x9b6470e3", "forwardNativeDepositToICHIVault(address,address,uint256,address)", {"vault": p.address, "vaultDeployer": p.address, "minimumProceeds": p.uint256, "to": p.address}, p.uint256),
    forwardNativeWithdrawFromICHIVault: fun("0x8f44f0ee", "forwardNativeWithdrawFromICHIVault(address,address,uint256,address,uint256,uint256)", {"vault": p.address, "vaultDeployer": p.address, "shares": p.uint256, "to": p.address, "minAmount0": p.uint256, "minAmount1": p.uint256}, {"amount0": p.uint256, "amount1": p.uint256}),
    forwardWithdrawFromICHIVault: fun("0x1a0e8cdf", "forwardWithdrawFromICHIVault(address,address,uint256,address,uint256,uint256)", {"vault": p.address, "vaultDeployer": p.address, "shares": p.uint256, "to": p.address, "minAmount0": p.uint256, "minAmount1": p.uint256}, {"amount0": p.uint256, "amount1": p.uint256}),
    vaultKey: viewFun("0x828239ab", "vaultKey(address,address,address,uint24,bool,bool)", {"vaultDeployer": p.address, "token0": p.address, "token1": p.address, "fee": p.uint24, "allowToken0": p.bool, "allowToken1": p.bool}, p.bytes32),
}

export class Contract extends ContractBase {

    ICHIVaultFactory() {
        return this.eth_call(functions.ICHIVaultFactory, {})
    }

    WRAPPED_NATIVE() {
        return this.eth_call(functions.WRAPPED_NATIVE, {})
    }

    vaultKey(vaultDeployer: VaultKeyParams["vaultDeployer"], token0: VaultKeyParams["token0"], token1: VaultKeyParams["token1"], fee: VaultKeyParams["fee"], allowToken0: VaultKeyParams["allowToken0"], allowToken1: VaultKeyParams["allowToken1"]) {
        return this.eth_call(functions.vaultKey, {vaultDeployer, token0, token1, fee, allowToken0, allowToken1})
    }
}

/// Event types
export type DeployedEventArgs = EParams<typeof events.Deployed>
export type DepositForwardedEventArgs = EParams<typeof events.DepositForwarded>

/// Function types
export type ICHIVaultFactoryParams = FunctionArguments<typeof functions.ICHIVaultFactory>
export type ICHIVaultFactoryReturn = FunctionReturn<typeof functions.ICHIVaultFactory>

export type WRAPPED_NATIVEParams = FunctionArguments<typeof functions.WRAPPED_NATIVE>
export type WRAPPED_NATIVEReturn = FunctionReturn<typeof functions.WRAPPED_NATIVE>

export type ForwardDepositToICHIVaultParams = FunctionArguments<typeof functions.forwardDepositToICHIVault>
export type ForwardDepositToICHIVaultReturn = FunctionReturn<typeof functions.forwardDepositToICHIVault>

export type ForwardNativeDepositToICHIVaultParams = FunctionArguments<typeof functions.forwardNativeDepositToICHIVault>
export type ForwardNativeDepositToICHIVaultReturn = FunctionReturn<typeof functions.forwardNativeDepositToICHIVault>

export type ForwardNativeWithdrawFromICHIVaultParams = FunctionArguments<typeof functions.forwardNativeWithdrawFromICHIVault>
export type ForwardNativeWithdrawFromICHIVaultReturn = FunctionReturn<typeof functions.forwardNativeWithdrawFromICHIVault>

export type ForwardWithdrawFromICHIVaultParams = FunctionArguments<typeof functions.forwardWithdrawFromICHIVault>
export type ForwardWithdrawFromICHIVaultReturn = FunctionReturn<typeof functions.forwardWithdrawFromICHIVault>

export type VaultKeyParams = FunctionArguments<typeof functions.vaultKey>
export type VaultKeyReturn = FunctionReturn<typeof functions.vaultKey>

