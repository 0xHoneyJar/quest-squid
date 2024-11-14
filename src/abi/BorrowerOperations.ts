import * as p from '@subsquid/evm-codec'
import { event, fun, viewFun, indexed, ContractBase } from '@subsquid/evm-abi'
import type { EventParams as EParams, FunctionArguments, FunctionReturn } from '@subsquid/evm-abi'

export const events = {
    CollSurplusPoolAddressChanged: event("0xe67f36a6e961157d6eff83b91f3af5a62131ceb6f04954ef74f51c1c05e7f88d", "CollSurplusPoolAddressChanged(address)", {"_collSurplusPoolAddress": p.address}),
    GasPoolAddressChanged: event("0xcfb07d791fcafc032b35837b50eb84b74df518cf4cc287e8084f47630fa70fa0", "GasPoolAddressChanged(address)", {"_gasPoolAddress": p.address}),
    OwnershipTransferred: event("0x8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0", "OwnershipTransferred(address,address)", {"previousOwner": indexed(p.address), "newOwner": indexed(p.address)}),
    SortedTrovesAddressChanged: event("0x65f4cf077bc01e4742eb5ad98326f6e95b63548ea24b17f8d5e823111fe78800", "SortedTrovesAddressChanged(address)", {"_sortedTrovesAddress": p.address}),
    StabilityPoolAddressChanged: event("0x82966d27eea39b038ee0fa30cd16532bb24f6e65d31cb58fb227aa5766cdcc7f", "StabilityPoolAddressChanged(address)", {"_stabilityPoolAddress": p.address}),
    TroveCreated: event("0xc78aeff453faf39d5a4a56acb99641aa471118956e00bdf4ca3e08ee6687fef6", "TroveCreated(address,address,uint256)", {"_asset": indexed(p.address), "_borrower": indexed(p.address), "arrayIndex": p.uint256}),
    TroveManagerAddressChanged: event("0x143219c9e69b09e07e095fcc889b43d8f46ca892bba65f08dc3a0050869a5678", "TroveManagerAddressChanged(address)", {"_newTroveManagerAddress": p.address}),
    TroveUpdated: event("0x100d2512a463b515ea8d03a69afbcc791f1bd9139132e820631bec236f524ec1", "TroveUpdated(address,address,uint256,uint256,uint256,uint8)", {"_asset": indexed(p.address), "_borrower": indexed(p.address), "_debt": p.uint256, "_coll": p.uint256, "stake": p.uint256, "operation": p.uint8}),
    VSTAStakingAddressChanged: event("0x515ad2c11633fc3fe333e64fad74a6a9b0d044cef442e4cb8000b402065dfc22", "VSTAStakingAddressChanged(address)", {"_VSTAStakingAddress": p.address}),
    VSTBorrowingFeePaid: event("0x150276cb173fff450b089197a2ff8a9b82d3efbf988df82ba90a00bbe48602f5", "VSTBorrowingFeePaid(address,address,uint256)", {"_asset": indexed(p.address), "_borrower": indexed(p.address), "_VSTFee": p.uint256}),
    VaultParametersBaseChanged: event("0x98c5e303d085e26fdf8af6a41184b0937ed01142ae7fdfa02dcc87e7079c3253", "VaultParametersBaseChanged(address)", {"newAddress": indexed(p.address)}),
    meadTokenAddressChanged: event("0x6ab85a19c15259da8618b7521661e98eabd71a58059e2b73d7699e0cf038f881", "meadTokenAddressChanged(address)", {"_meadTokenAddress": p.address}),
}

export const functions = {
    DECIMAL_PRECISION: viewFun("0xa20baee6", "DECIMAL_PRECISION()", {}, p.uint256),
    ETH_REF_ADDRESS: viewFun("0x72141e63", "ETH_REF_ADDRESS()", {}, p.address),
    MEADToken: viewFun("0x928fc754", "MEADToken()", {}, p.address),
    NAME: viewFun("0xa3f4df7e", "NAME()", {}, p.string),
    VSTAStaking: viewFun("0xd923074d", "VSTAStaking()", {}, p.address),
    VSTAStakingAddress: viewFun("0xae0ebf36", "VSTAStakingAddress()", {}, p.address),
    WETH: viewFun("0xad5c4648", "WETH()", {}, p.address),
    adjustTrove: fun("0x74399021", "adjustTrove(address,uint256,uint256,uint256,uint256,bool,address,address)", {"_asset": p.address, "_assetSent": p.uint256, "_maxFeePercentage": p.uint256, "_collWithdrawal": p.uint256, "_VSTChange": p.uint256, "_isDebtIncrease": p.bool, "_upperHint": p.address, "_lowerHint": p.address}, ),
    burn: fun("0x9dc29fac", "burn(address,uint256)", {"_from": p.address, "_amount": p.uint256}, ),
    claimCollateral: fun("0x8235b284", "claimCollateral(address)", {"_asset": p.address}, ),
    claimCollaterals: fun("0xae04e1e2", "claimCollaterals(address[])", {"_assets": p.array(p.address)}, ),
    closeTrove: fun("0xcbd138ae", "closeTrove(address)", {"_asset": p.address}, ),
    closeTroveWithDexTrader: fun("0x11d2ee15", "closeTroveWithDexTrader(address,uint256,(bytes16,address[2],bytes)[])", {"_asset": p.address, "_amountIn": p.uint256, "_manualExchange": p.array(p.struct({"traderSelector": p.bytes16, "tokenInOut": p.fixedSizeArray(p.address, 2), "data": p.bytes}))}, ),
    dexTrader: viewFun("0x9d5bdeff", "dexTrader()", {}, p.address),
    getCompositeDebt: viewFun("0x02540e48", "getCompositeDebt(address,uint256)", {"_asset": p.address, "_debt": p.uint256}, p.uint256),
    getEntireSystemColl: viewFun("0x9e86d0c4", "getEntireSystemColl(address)", {"_asset": p.address}, p.uint256),
    getEntireSystemDebt: viewFun("0x27d04b35", "getEntireSystemDebt(address)", {"_asset": p.address}, p.uint256),
    interestManager: viewFun("0xee065e11", "interestManager()", {}, p.address),
    isInitialized: viewFun("0x392e53cd", "isInitialized()", {}, p.bool),
    mint: fun("0x40c10f19", "mint(address,uint256)", {"_to": p.address, "_amount": p.uint256}, ),
    moveETHGainToTrove: fun("0x501414f5", "moveETHGainToTrove(address,uint256,address,address,address)", {"_asset": p.address, "_amountMoved": p.uint256, "_borrower": p.address, "_upperHint": p.address, "_lowerHint": p.address}, ),
    openTrove: fun("0x7da0b1fa", "openTrove(address,uint256,uint256,uint256,address,address)", {"_asset": p.address, "_tokenAmount": p.uint256, "_maxFeePercentage": p.uint256, "_MEADAmount": p.uint256, "_upperHint": p.address, "_lowerHint": p.address}, ),
    owner: viewFun("0x8da5cb5b", "owner()", {}, p.address),
    renounceOwnership: fun("0x715018a6", "renounceOwnership()", {}, ),
    rootsParams: viewFun("0x4d45cbff", "rootsParams()", {}, p.address),
    setAddresses: fun("0xd733cfd0", "setAddresses(address,address,address,address,address,address,address,address)", {"_troveManagerAddress": p.address, "_stabilityPoolManagerAddress": p.address, "_gasPoolAddress": p.address, "_collSurplusPoolAddress": p.address, "_sortedTrovesAddress": p.address, "_meadTokenAddress": p.address, "_VSTAStakingAddress": p.address, "_rootsParamsAddress": p.address}, ),
    setDexTrader: fun("0xb7094eb8", "setDexTrader(address)", {"_dexTrader": p.address}, ),
    setInterestManager: fun("0x8b29d2bc", "setInterestManager(address)", {"_interestManager": p.address}, ),
    setVSTAccess: fun("0x415b9cbe", "setVSTAccess(address,bool)", {"_of": p.address, "_enable": p.bool}, ),
    setVestaParameters: fun("0x5cc4d148", "setVestaParameters(address)", {"_vaultParams": p.address}, ),
    sortedTroves: viewFun("0xae918754", "sortedTroves()", {}, p.address),
    stabilityPool: viewFun("0x048c661d", "stabilityPool()", {}, p.address),
    transferOwnership: fun("0xf2fde38b", "transferOwnership(address)", {"newOwner": p.address}, ),
    troveManager: viewFun("0x3d83908a", "troveManager()", {}, p.address),
}

export class Contract extends ContractBase {

    DECIMAL_PRECISION() {
        return this.eth_call(functions.DECIMAL_PRECISION, {})
    }

    ETH_REF_ADDRESS() {
        return this.eth_call(functions.ETH_REF_ADDRESS, {})
    }

    MEADToken() {
        return this.eth_call(functions.MEADToken, {})
    }

    NAME() {
        return this.eth_call(functions.NAME, {})
    }

    VSTAStaking() {
        return this.eth_call(functions.VSTAStaking, {})
    }

    VSTAStakingAddress() {
        return this.eth_call(functions.VSTAStakingAddress, {})
    }

    WETH() {
        return this.eth_call(functions.WETH, {})
    }

    dexTrader() {
        return this.eth_call(functions.dexTrader, {})
    }

    getCompositeDebt(_asset: GetCompositeDebtParams["_asset"], _debt: GetCompositeDebtParams["_debt"]) {
        return this.eth_call(functions.getCompositeDebt, {_asset, _debt})
    }

    getEntireSystemColl(_asset: GetEntireSystemCollParams["_asset"]) {
        return this.eth_call(functions.getEntireSystemColl, {_asset})
    }

    getEntireSystemDebt(_asset: GetEntireSystemDebtParams["_asset"]) {
        return this.eth_call(functions.getEntireSystemDebt, {_asset})
    }

    interestManager() {
        return this.eth_call(functions.interestManager, {})
    }

    isInitialized() {
        return this.eth_call(functions.isInitialized, {})
    }

    owner() {
        return this.eth_call(functions.owner, {})
    }

    rootsParams() {
        return this.eth_call(functions.rootsParams, {})
    }

    sortedTroves() {
        return this.eth_call(functions.sortedTroves, {})
    }

    stabilityPool() {
        return this.eth_call(functions.stabilityPool, {})
    }

    troveManager() {
        return this.eth_call(functions.troveManager, {})
    }
}

/// Event types
export type CollSurplusPoolAddressChangedEventArgs = EParams<typeof events.CollSurplusPoolAddressChanged>
export type GasPoolAddressChangedEventArgs = EParams<typeof events.GasPoolAddressChanged>
export type OwnershipTransferredEventArgs = EParams<typeof events.OwnershipTransferred>
export type SortedTrovesAddressChangedEventArgs = EParams<typeof events.SortedTrovesAddressChanged>
export type StabilityPoolAddressChangedEventArgs = EParams<typeof events.StabilityPoolAddressChanged>
export type TroveCreatedEventArgs = EParams<typeof events.TroveCreated>
export type TroveManagerAddressChangedEventArgs = EParams<typeof events.TroveManagerAddressChanged>
export type TroveUpdatedEventArgs = EParams<typeof events.TroveUpdated>
export type VSTAStakingAddressChangedEventArgs = EParams<typeof events.VSTAStakingAddressChanged>
export type VSTBorrowingFeePaidEventArgs = EParams<typeof events.VSTBorrowingFeePaid>
export type VaultParametersBaseChangedEventArgs = EParams<typeof events.VaultParametersBaseChanged>
export type MeadTokenAddressChangedEventArgs = EParams<typeof events.meadTokenAddressChanged>

/// Function types
export type DECIMAL_PRECISIONParams = FunctionArguments<typeof functions.DECIMAL_PRECISION>
export type DECIMAL_PRECISIONReturn = FunctionReturn<typeof functions.DECIMAL_PRECISION>

export type ETH_REF_ADDRESSParams = FunctionArguments<typeof functions.ETH_REF_ADDRESS>
export type ETH_REF_ADDRESSReturn = FunctionReturn<typeof functions.ETH_REF_ADDRESS>

export type MEADTokenParams = FunctionArguments<typeof functions.MEADToken>
export type MEADTokenReturn = FunctionReturn<typeof functions.MEADToken>

export type NAMEParams = FunctionArguments<typeof functions.NAME>
export type NAMEReturn = FunctionReturn<typeof functions.NAME>

export type VSTAStakingParams = FunctionArguments<typeof functions.VSTAStaking>
export type VSTAStakingReturn = FunctionReturn<typeof functions.VSTAStaking>

export type VSTAStakingAddressParams = FunctionArguments<typeof functions.VSTAStakingAddress>
export type VSTAStakingAddressReturn = FunctionReturn<typeof functions.VSTAStakingAddress>

export type WETHParams = FunctionArguments<typeof functions.WETH>
export type WETHReturn = FunctionReturn<typeof functions.WETH>

export type AdjustTroveParams = FunctionArguments<typeof functions.adjustTrove>
export type AdjustTroveReturn = FunctionReturn<typeof functions.adjustTrove>

export type BurnParams = FunctionArguments<typeof functions.burn>
export type BurnReturn = FunctionReturn<typeof functions.burn>

export type ClaimCollateralParams = FunctionArguments<typeof functions.claimCollateral>
export type ClaimCollateralReturn = FunctionReturn<typeof functions.claimCollateral>

export type ClaimCollateralsParams = FunctionArguments<typeof functions.claimCollaterals>
export type ClaimCollateralsReturn = FunctionReturn<typeof functions.claimCollaterals>

export type CloseTroveParams = FunctionArguments<typeof functions.closeTrove>
export type CloseTroveReturn = FunctionReturn<typeof functions.closeTrove>

export type CloseTroveWithDexTraderParams = FunctionArguments<typeof functions.closeTroveWithDexTrader>
export type CloseTroveWithDexTraderReturn = FunctionReturn<typeof functions.closeTroveWithDexTrader>

export type DexTraderParams = FunctionArguments<typeof functions.dexTrader>
export type DexTraderReturn = FunctionReturn<typeof functions.dexTrader>

export type GetCompositeDebtParams = FunctionArguments<typeof functions.getCompositeDebt>
export type GetCompositeDebtReturn = FunctionReturn<typeof functions.getCompositeDebt>

export type GetEntireSystemCollParams = FunctionArguments<typeof functions.getEntireSystemColl>
export type GetEntireSystemCollReturn = FunctionReturn<typeof functions.getEntireSystemColl>

export type GetEntireSystemDebtParams = FunctionArguments<typeof functions.getEntireSystemDebt>
export type GetEntireSystemDebtReturn = FunctionReturn<typeof functions.getEntireSystemDebt>

export type InterestManagerParams = FunctionArguments<typeof functions.interestManager>
export type InterestManagerReturn = FunctionReturn<typeof functions.interestManager>

export type IsInitializedParams = FunctionArguments<typeof functions.isInitialized>
export type IsInitializedReturn = FunctionReturn<typeof functions.isInitialized>

export type MintParams = FunctionArguments<typeof functions.mint>
export type MintReturn = FunctionReturn<typeof functions.mint>

export type MoveETHGainToTroveParams = FunctionArguments<typeof functions.moveETHGainToTrove>
export type MoveETHGainToTroveReturn = FunctionReturn<typeof functions.moveETHGainToTrove>

export type OpenTroveParams = FunctionArguments<typeof functions.openTrove>
export type OpenTroveReturn = FunctionReturn<typeof functions.openTrove>

export type OwnerParams = FunctionArguments<typeof functions.owner>
export type OwnerReturn = FunctionReturn<typeof functions.owner>

export type RenounceOwnershipParams = FunctionArguments<typeof functions.renounceOwnership>
export type RenounceOwnershipReturn = FunctionReturn<typeof functions.renounceOwnership>

export type RootsParamsParams = FunctionArguments<typeof functions.rootsParams>
export type RootsParamsReturn = FunctionReturn<typeof functions.rootsParams>

export type SetAddressesParams = FunctionArguments<typeof functions.setAddresses>
export type SetAddressesReturn = FunctionReturn<typeof functions.setAddresses>

export type SetDexTraderParams = FunctionArguments<typeof functions.setDexTrader>
export type SetDexTraderReturn = FunctionReturn<typeof functions.setDexTrader>

export type SetInterestManagerParams = FunctionArguments<typeof functions.setInterestManager>
export type SetInterestManagerReturn = FunctionReturn<typeof functions.setInterestManager>

export type SetVSTAccessParams = FunctionArguments<typeof functions.setVSTAccess>
export type SetVSTAccessReturn = FunctionReturn<typeof functions.setVSTAccess>

export type SetVestaParametersParams = FunctionArguments<typeof functions.setVestaParameters>
export type SetVestaParametersReturn = FunctionReturn<typeof functions.setVestaParameters>

export type SortedTrovesParams = FunctionArguments<typeof functions.sortedTroves>
export type SortedTrovesReturn = FunctionReturn<typeof functions.sortedTroves>

export type StabilityPoolParams = FunctionArguments<typeof functions.stabilityPool>
export type StabilityPoolReturn = FunctionReturn<typeof functions.stabilityPool>

export type TransferOwnershipParams = FunctionArguments<typeof functions.transferOwnership>
export type TransferOwnershipReturn = FunctionReturn<typeof functions.transferOwnership>

export type TroveManagerParams = FunctionArguments<typeof functions.troveManager>
export type TroveManagerReturn = FunctionReturn<typeof functions.troveManager>

