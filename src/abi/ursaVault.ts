import * as p from '@subsquid/evm-codec'
import { event, fun, viewFun, indexed, ContractBase } from '@subsquid/evm-abi'
import type { EventParams as EParams, FunctionArguments, FunctionReturn } from '@subsquid/evm-abi'

export const events = {
    GameResult: event("0x2411364aba5a01e505ec0db89f7797ec95b07ed5aa9a61702a376428ef738f0a", "GameResult(address,uint256,bytes32,uint8,uint8,address)", {"player": indexed(p.address), "payout": p.uint256, "randomNumber": indexed(p.bytes32), "wonCount": p.uint8, "totalCount": p.uint8, "token": indexed(p.address)}),
    GameStarted: event("0x55523b392929e95430d6b23b94fd06bcd7e81430ca6e97ba40e82dedbb3b0614", "GameStarted(uint64,address,uint256,uint8,address)", {"sequenceNumber": p.uint64, "player": indexed(p.address), "wager": p.uint256, "count": p.uint8, "token": indexed(p.address)}),
    Initialized: event("0xc7f505b2f371ae2175ee4913f4499e1f2633a7b5936321eed1cdaeb6115181d2", "Initialized(uint64)", {"version": p.uint64}),
    LiquidityAdded: event("0x36f3b2e1a21c19137dd82ec243b0708a1d26b3d1fa1dc49c44c4c366a5878138", "LiquidityAdded(address,address,uint256,uint256)", {"user": indexed(p.address), "liqTokenAddress": indexed(p.address), "amount": p.uint256, "vaultTokens": p.uint256}),
    LiquidityRemoved: event("0x3b5c196aff80bb96c03b41c96906b66827014de931d1b36e0ede6ee8caeb4bf9", "LiquidityRemoved(address,address,uint256,uint256)", {"user": indexed(p.address), "liqTokenAddress": indexed(p.address), "amount": p.uint256, "vaultTokens": p.uint256}),
    OwnershipTransferred: event("0x8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0", "OwnershipTransferred(address,address)", {"previousOwner": indexed(p.address), "newOwner": indexed(p.address)}),
    VaultCreated: event("0x5d9c31ffa0fecffd7cf379989a3c7af252f0335e0d2a1320b55245912c781f53", "VaultCreated(address,address)", {"liqTokenAddress": indexed(p.address), "vaultTokenAddress": indexed(p.address)}),
}

export const functions = {
    _entropyCallback: fun("0x52a5f1f8", "_entropyCallback(uint64,address,bytes32)", {"sequence": p.uint64, "provider": p.address, "randomNumber": p.bytes32}, ),
    addLiquidity: fun("0x56688700", "addLiquidity(address,uint256)", {"liqTokenAddress": p.address, "amount": p.uint256}, ),
    createVault: fun("0xfbd4834c", "createVault(string,string,address)", {"name": p.string, "symbol": p.string, "liqTokenAddress": p.address}, p.address),
    entropy: viewFun("0x47ce07cc", "entropy()", {}, p.address),
    entropyProvider: viewFun("0x5bf414ac", "entropyProvider()", {}, p.address),
    games: viewFun("0xf54815b4", "games(uint64)", {"sequenceNumber": p.uint64}, p.bytes),
    getAllVaults: viewFun("0x97331bf9", "getAllVaults()", {}, p.array(p.struct({"vaultTokenAddress": p.address, "liqTokenAddress": p.address, "totalBalance": p.uint256, "totalVaultTokens": p.uint256, "vaultTokenPrice": p.uint256}))),
    getGame: viewFun("0x49041903", "getGame(uint64)", {"sequenceNumber": p.uint64}, p.struct({"player": p.address, "token": p.address, "wager": p.uint256, "userRandomNumber": p.bytes32, "extra": p.uint8, "count": p.uint8})),
    getVault: viewFun("0x0eb9af38", "getVault(address)", {"liqTokenAddress": p.address}, p.struct({"vaultTokenAddress": p.address, "liqTokenAddress": p.address, "totalBalance": p.uint256, "totalVaultTokens": p.uint256, "vaultTokenPrice": p.uint256})),
    getVaultTokenPrice: viewFun("0x112f7b40", "getVaultTokenPrice(address)", {"liqTokenAddress": p.address}, p.uint256),
    houseEdge: viewFun("0xd667dcd7", "houseEdge()", {}, p.uint256),
    initialize: fun("0xc0c53b8b", "initialize(address,address,address)", {"treasuryAddress": p.address, "entropyAddress": p.address, "entropyProviderAddress": p.address}, ),
    minAmount: viewFun("0x9b2cb5d8", "minAmount()", {}, p.uint256),
    owner: viewFun("0x8da5cb5b", "owner()", {}, p.address),
    removeLiquidity: fun("0xa201ccf6", "removeLiquidity(address,uint256)", {"liqTokenAddress": p.address, "vaultTokens": p.uint256}, ),
    renounceOwnership: fun("0x715018a6", "renounceOwnership()", {}, ),
    setHouseEdge: fun("0x6cd0f102", "setHouseEdge(uint256)", {"newEdge": p.uint256}, ),
    setMinAmount: fun("0x897b0637", "setMinAmount(uint256)", {"_minAmount": p.uint256}, ),
    setTreasuryContract: fun("0x1ed65110", "setTreasuryContract(address)", {"newTreasury": p.address}, ),
    transferOwnership: fun("0xf2fde38b", "transferOwnership(address)", {"newOwner": p.address}, ),
    treasury: viewFun("0x61d027b3", "treasury()", {}, p.address),
    userDeposits: viewFun("0x436d8039", "userDeposits(address,address)", {"_0": p.address, "_1": p.address}, {"initialAmount": p.uint256, "vaultTokens": p.uint256}),
}

export class Contract extends ContractBase {

    entropy() {
        return this.eth_call(functions.entropy, {})
    }

    entropyProvider() {
        return this.eth_call(functions.entropyProvider, {})
    }

    games(sequenceNumber: GamesParams["sequenceNumber"]) {
        return this.eth_call(functions.games, {sequenceNumber})
    }

    getAllVaults() {
        return this.eth_call(functions.getAllVaults, {})
    }

    getGame(sequenceNumber: GetGameParams["sequenceNumber"]) {
        return this.eth_call(functions.getGame, {sequenceNumber})
    }

    getVault(liqTokenAddress: GetVaultParams["liqTokenAddress"]) {
        return this.eth_call(functions.getVault, {liqTokenAddress})
    }

    getVaultTokenPrice(liqTokenAddress: GetVaultTokenPriceParams["liqTokenAddress"]) {
        return this.eth_call(functions.getVaultTokenPrice, {liqTokenAddress})
    }

    houseEdge() {
        return this.eth_call(functions.houseEdge, {})
    }

    minAmount() {
        return this.eth_call(functions.minAmount, {})
    }

    owner() {
        return this.eth_call(functions.owner, {})
    }

    treasury() {
        return this.eth_call(functions.treasury, {})
    }

    userDeposits(_0: UserDepositsParams["_0"], _1: UserDepositsParams["_1"]) {
        return this.eth_call(functions.userDeposits, {_0, _1})
    }
}

/// Event types
export type GameResultEventArgs = EParams<typeof events.GameResult>
export type GameStartedEventArgs = EParams<typeof events.GameStarted>
export type InitializedEventArgs = EParams<typeof events.Initialized>
export type LiquidityAddedEventArgs = EParams<typeof events.LiquidityAdded>
export type LiquidityRemovedEventArgs = EParams<typeof events.LiquidityRemoved>
export type OwnershipTransferredEventArgs = EParams<typeof events.OwnershipTransferred>
export type VaultCreatedEventArgs = EParams<typeof events.VaultCreated>

/// Function types
export type _entropyCallbackParams = FunctionArguments<typeof functions._entropyCallback>
export type _entropyCallbackReturn = FunctionReturn<typeof functions._entropyCallback>

export type AddLiquidityParams = FunctionArguments<typeof functions.addLiquidity>
export type AddLiquidityReturn = FunctionReturn<typeof functions.addLiquidity>

export type CreateVaultParams = FunctionArguments<typeof functions.createVault>
export type CreateVaultReturn = FunctionReturn<typeof functions.createVault>

export type EntropyParams = FunctionArguments<typeof functions.entropy>
export type EntropyReturn = FunctionReturn<typeof functions.entropy>

export type EntropyProviderParams = FunctionArguments<typeof functions.entropyProvider>
export type EntropyProviderReturn = FunctionReturn<typeof functions.entropyProvider>

export type GamesParams = FunctionArguments<typeof functions.games>
export type GamesReturn = FunctionReturn<typeof functions.games>

export type GetAllVaultsParams = FunctionArguments<typeof functions.getAllVaults>
export type GetAllVaultsReturn = FunctionReturn<typeof functions.getAllVaults>

export type GetGameParams = FunctionArguments<typeof functions.getGame>
export type GetGameReturn = FunctionReturn<typeof functions.getGame>

export type GetVaultParams = FunctionArguments<typeof functions.getVault>
export type GetVaultReturn = FunctionReturn<typeof functions.getVault>

export type GetVaultTokenPriceParams = FunctionArguments<typeof functions.getVaultTokenPrice>
export type GetVaultTokenPriceReturn = FunctionReturn<typeof functions.getVaultTokenPrice>

export type HouseEdgeParams = FunctionArguments<typeof functions.houseEdge>
export type HouseEdgeReturn = FunctionReturn<typeof functions.houseEdge>

export type InitializeParams = FunctionArguments<typeof functions.initialize>
export type InitializeReturn = FunctionReturn<typeof functions.initialize>

export type MinAmountParams = FunctionArguments<typeof functions.minAmount>
export type MinAmountReturn = FunctionReturn<typeof functions.minAmount>

export type OwnerParams = FunctionArguments<typeof functions.owner>
export type OwnerReturn = FunctionReturn<typeof functions.owner>

export type RemoveLiquidityParams = FunctionArguments<typeof functions.removeLiquidity>
export type RemoveLiquidityReturn = FunctionReturn<typeof functions.removeLiquidity>

export type RenounceOwnershipParams = FunctionArguments<typeof functions.renounceOwnership>
export type RenounceOwnershipReturn = FunctionReturn<typeof functions.renounceOwnership>

export type SetHouseEdgeParams = FunctionArguments<typeof functions.setHouseEdge>
export type SetHouseEdgeReturn = FunctionReturn<typeof functions.setHouseEdge>

export type SetMinAmountParams = FunctionArguments<typeof functions.setMinAmount>
export type SetMinAmountReturn = FunctionReturn<typeof functions.setMinAmount>

export type SetTreasuryContractParams = FunctionArguments<typeof functions.setTreasuryContract>
export type SetTreasuryContractReturn = FunctionReturn<typeof functions.setTreasuryContract>

export type TransferOwnershipParams = FunctionArguments<typeof functions.transferOwnership>
export type TransferOwnershipReturn = FunctionReturn<typeof functions.transferOwnership>

export type TreasuryParams = FunctionArguments<typeof functions.treasury>
export type TreasuryReturn = FunctionReturn<typeof functions.treasury>

export type UserDepositsParams = FunctionArguments<typeof functions.userDeposits>
export type UserDepositsReturn = FunctionReturn<typeof functions.userDeposits>

