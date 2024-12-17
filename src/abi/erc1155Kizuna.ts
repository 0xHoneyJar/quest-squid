import * as p from '@subsquid/evm-codec'
import { event, fun, viewFun, indexed, ContractBase } from '@subsquid/evm-abi'
import type { EventParams as EParams, FunctionArguments, FunctionReturn } from '@subsquid/evm-abi'

export const events = {
    ApprovalForAll: event("0x17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31", "ApprovalForAll(address,address,bool)", {"account": indexed(p.address), "operator": indexed(p.address), "approved": p.bool}),
    ContractURIUpdated: event("0xa5d4097edda6d87cb9329af83fb3712ef77eeb13738ffe43cc35a4ce305ad962", "ContractURIUpdated()", {}),
    Initialized: event("0xc7f505b2f371ae2175ee4913f4499e1f2633a7b5936321eed1cdaeb6115181d2", "Initialized(uint64)", {"version": p.uint64}),
    OwnershipTransferred: event("0x8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0", "OwnershipTransferred(address,address)", {"previousOwner": indexed(p.address), "newOwner": indexed(p.address)}),
    TransferBatch: event("0x4a39dc06d4c0dbc64b70af90fd698a233a518aa5d07e595d983b8c0526c8f7fb", "TransferBatch(address,address,address,uint256[],uint256[])", {"operator": indexed(p.address), "from": indexed(p.address), "to": indexed(p.address), "ids": p.array(p.uint256), "values": p.array(p.uint256)}),
    TransferSingle: event("0xc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f62", "TransferSingle(address,address,address,uint256,uint256)", {"operator": indexed(p.address), "from": indexed(p.address), "to": indexed(p.address), "id": p.uint256, "value": p.uint256}),
    URI: event("0x6bb7ff708619ba0610cba295a58592e0451dee2622938c8755667688daf3529b", "URI(string,uint256)", {"value": p.string, "id": indexed(p.uint256)}),
}

export const functions = {
    MINTER: viewFun("0xfe6d8124", "MINTER()", {}, p.address),
    VERSION: viewFun("0xffa1ad74", "VERSION()", {}, p.string),
    balanceOf: viewFun("0x00fdd58e", "balanceOf(address,uint256)", {"account": p.address, "id": p.uint256}, p.uint256),
    balanceOfBatch: viewFun("0x4e1273f4", "balanceOfBatch(address[],uint256[])", {"accounts": p.array(p.address), "ids": p.array(p.uint256)}, p.array(p.uint256)),
    bannerURI: viewFun("0x66087e23", "bannerURI()", {}, p.string),
    contractURI: viewFun("0xe8a3d485", "contractURI()", {}, p.string),
    description: viewFun("0x7284e416", "description()", {}, p.string),
    editions: viewFun("0x279c806e", "editions(uint256)", {"_0": p.uint256}, {"name": p.string, "imageURI": p.string, "percentChance": p.uint256}),
    exists: viewFun("0x4f558e79", "exists(uint256)", {"id": p.uint256}, p.bool),
    getAllEditions: viewFun("0x83e36e0f", "getAllEditions()", {}, p.array(p.struct({"name": p.string, "imageURI": p.string, "percentChance": p.uint256, "attributes": p.array(p.struct({"traitType": p.string, "value": p.string}))}))),
    getPercentChances: viewFun("0x635280f5", "getPercentChances()", {}, p.array(p.uint256)),
    imageURI: viewFun("0x135d088d", "imageURI()", {}, p.string),
    initialize: fun("0x29051383", "initialize(address,string,string,string,(string,string,uint256,(string,string)[])[],uint16)", {"owner_": p.address, "name_": p.string, "imageURI_": p.string, "description_": p.string, "editions_": p.array(p.struct({"name": p.string, "imageURI": p.string, "percentChance": p.uint256, "attributes": p.array(p.struct({"traitType": p.string, "value": p.string}))})), "royaltyAmountBps": p.uint16}, ),
    isApprovedForAll: viewFun("0xe985e9c5", "isApprovedForAll(address,address)", {"account": p.address, "operator": p.address}, p.bool),
    mintBatch: fun("0xd81d0a15", "mintBatch(address,uint256[],uint256[])", {"to": p.address, "ids": p.array(p.uint256), "amounts": p.array(p.uint256)}, ),
    name: viewFun("0x06fdde03", "name()", {}, p.string),
    owner: viewFun("0x8da5cb5b", "owner()", {}, p.address),
    renounceOwnership: fun("0x715018a6", "renounceOwnership()", {}, ),
    royaltyInfo: viewFun("0x2a55205a", "royaltyInfo(uint256,uint256)", {"tokenId": p.uint256, "salePrice": p.uint256}, {"_0": p.address, "_1": p.uint256}),
    safeBatchTransferFrom: fun("0x2eb2c2d6", "safeBatchTransferFrom(address,address,uint256[],uint256[],bytes)", {"from": p.address, "to": p.address, "ids": p.array(p.uint256), "values": p.array(p.uint256), "data": p.bytes}, ),
    safeTransferAcceptanceCheckOnMint: viewFun("0xc19c3043", "safeTransferAcceptanceCheckOnMint(address)", {"to": p.address}, p.bool),
    safeTransferFrom: fun("0xf242432a", "safeTransferFrom(address,address,uint256,uint256,bytes)", {"from": p.address, "to": p.address, "id": p.uint256, "value": p.uint256, "data": p.bytes}, ),
    setApprovalForAll: fun("0xa22cb465", "setApprovalForAll(address,bool)", {"operator": p.address, "approved": p.bool}, ),
    setContractInfo: fun("0x457f0740", "setContractInfo(string,string,string,string,address,uint16)", {"name_": p.string, "imageURI_": p.string, "description_": p.string, "bannerURI_": p.string, "royaltyReceiver": p.address, "royaltyAmountBps": p.uint16}, ),
    supportsInterface: viewFun("0x01ffc9a7", "supportsInterface(bytes4)", {"interfaceId": p.bytes4}, p.bool),
    totalEditions: viewFun("0x51d329dc", "totalEditions()", {}, p.uint256),
    'totalSupply()': viewFun("0x18160ddd", "totalSupply()", {}, p.uint256),
    'totalSupply(uint256)': viewFun("0xbd85b039", "totalSupply(uint256)", {"id": p.uint256}, p.uint256),
    transferOwnership: fun("0xf2fde38b", "transferOwnership(address)", {"newOwner": p.address}, ),
    uri: viewFun("0x0e89341c", "uri(uint256)", {"tokenId": p.uint256}, p.string),
}

export class Contract extends ContractBase {

    MINTER() {
        return this.eth_call(functions.MINTER, {})
    }

    VERSION() {
        return this.eth_call(functions.VERSION, {})
    }

    balanceOf(account: BalanceOfParams["account"], id: BalanceOfParams["id"]) {
        return this.eth_call(functions.balanceOf, {account, id})
    }

    balanceOfBatch(accounts: BalanceOfBatchParams["accounts"], ids: BalanceOfBatchParams["ids"]) {
        return this.eth_call(functions.balanceOfBatch, {accounts, ids})
    }

    bannerURI() {
        return this.eth_call(functions.bannerURI, {})
    }

    contractURI() {
        return this.eth_call(functions.contractURI, {})
    }

    description() {
        return this.eth_call(functions.description, {})
    }

    editions(_0: EditionsParams["_0"]) {
        return this.eth_call(functions.editions, {_0})
    }

    exists(id: ExistsParams["id"]) {
        return this.eth_call(functions.exists, {id})
    }

    getAllEditions() {
        return this.eth_call(functions.getAllEditions, {})
    }

    getPercentChances() {
        return this.eth_call(functions.getPercentChances, {})
    }

    imageURI() {
        return this.eth_call(functions.imageURI, {})
    }

    isApprovedForAll(account: IsApprovedForAllParams["account"], operator: IsApprovedForAllParams["operator"]) {
        return this.eth_call(functions.isApprovedForAll, {account, operator})
    }

    name() {
        return this.eth_call(functions.name, {})
    }

    owner() {
        return this.eth_call(functions.owner, {})
    }

    royaltyInfo(tokenId: RoyaltyInfoParams["tokenId"], salePrice: RoyaltyInfoParams["salePrice"]) {
        return this.eth_call(functions.royaltyInfo, {tokenId, salePrice})
    }

    safeTransferAcceptanceCheckOnMint(to: SafeTransferAcceptanceCheckOnMintParams["to"]) {
        return this.eth_call(functions.safeTransferAcceptanceCheckOnMint, {to})
    }

    supportsInterface(interfaceId: SupportsInterfaceParams["interfaceId"]) {
        return this.eth_call(functions.supportsInterface, {interfaceId})
    }

    totalEditions() {
        return this.eth_call(functions.totalEditions, {})
    }

    'totalSupply()'() {
        return this.eth_call(functions['totalSupply()'], {})
    }

    'totalSupply(uint256)'(id: TotalSupplyParams_1["id"]) {
        return this.eth_call(functions['totalSupply(uint256)'], {id})
    }

    uri(tokenId: UriParams["tokenId"]) {
        return this.eth_call(functions.uri, {tokenId})
    }
}

/// Event types
export type ApprovalForAllEventArgs = EParams<typeof events.ApprovalForAll>
export type ContractURIUpdatedEventArgs = EParams<typeof events.ContractURIUpdated>
export type InitializedEventArgs = EParams<typeof events.Initialized>
export type OwnershipTransferredEventArgs = EParams<typeof events.OwnershipTransferred>
export type TransferBatchEventArgs = EParams<typeof events.TransferBatch>
export type TransferSingleEventArgs = EParams<typeof events.TransferSingle>
export type URIEventArgs = EParams<typeof events.URI>

/// Function types
export type MINTERParams = FunctionArguments<typeof functions.MINTER>
export type MINTERReturn = FunctionReturn<typeof functions.MINTER>

export type VERSIONParams = FunctionArguments<typeof functions.VERSION>
export type VERSIONReturn = FunctionReturn<typeof functions.VERSION>

export type BalanceOfParams = FunctionArguments<typeof functions.balanceOf>
export type BalanceOfReturn = FunctionReturn<typeof functions.balanceOf>

export type BalanceOfBatchParams = FunctionArguments<typeof functions.balanceOfBatch>
export type BalanceOfBatchReturn = FunctionReturn<typeof functions.balanceOfBatch>

export type BannerURIParams = FunctionArguments<typeof functions.bannerURI>
export type BannerURIReturn = FunctionReturn<typeof functions.bannerURI>

export type ContractURIParams = FunctionArguments<typeof functions.contractURI>
export type ContractURIReturn = FunctionReturn<typeof functions.contractURI>

export type DescriptionParams = FunctionArguments<typeof functions.description>
export type DescriptionReturn = FunctionReturn<typeof functions.description>

export type EditionsParams = FunctionArguments<typeof functions.editions>
export type EditionsReturn = FunctionReturn<typeof functions.editions>

export type ExistsParams = FunctionArguments<typeof functions.exists>
export type ExistsReturn = FunctionReturn<typeof functions.exists>

export type GetAllEditionsParams = FunctionArguments<typeof functions.getAllEditions>
export type GetAllEditionsReturn = FunctionReturn<typeof functions.getAllEditions>

export type GetPercentChancesParams = FunctionArguments<typeof functions.getPercentChances>
export type GetPercentChancesReturn = FunctionReturn<typeof functions.getPercentChances>

export type ImageURIParams = FunctionArguments<typeof functions.imageURI>
export type ImageURIReturn = FunctionReturn<typeof functions.imageURI>

export type InitializeParams = FunctionArguments<typeof functions.initialize>
export type InitializeReturn = FunctionReturn<typeof functions.initialize>

export type IsApprovedForAllParams = FunctionArguments<typeof functions.isApprovedForAll>
export type IsApprovedForAllReturn = FunctionReturn<typeof functions.isApprovedForAll>

export type MintBatchParams = FunctionArguments<typeof functions.mintBatch>
export type MintBatchReturn = FunctionReturn<typeof functions.mintBatch>

export type NameParams = FunctionArguments<typeof functions.name>
export type NameReturn = FunctionReturn<typeof functions.name>

export type OwnerParams = FunctionArguments<typeof functions.owner>
export type OwnerReturn = FunctionReturn<typeof functions.owner>

export type RenounceOwnershipParams = FunctionArguments<typeof functions.renounceOwnership>
export type RenounceOwnershipReturn = FunctionReturn<typeof functions.renounceOwnership>

export type RoyaltyInfoParams = FunctionArguments<typeof functions.royaltyInfo>
export type RoyaltyInfoReturn = FunctionReturn<typeof functions.royaltyInfo>

export type SafeBatchTransferFromParams = FunctionArguments<typeof functions.safeBatchTransferFrom>
export type SafeBatchTransferFromReturn = FunctionReturn<typeof functions.safeBatchTransferFrom>

export type SafeTransferAcceptanceCheckOnMintParams = FunctionArguments<typeof functions.safeTransferAcceptanceCheckOnMint>
export type SafeTransferAcceptanceCheckOnMintReturn = FunctionReturn<typeof functions.safeTransferAcceptanceCheckOnMint>

export type SafeTransferFromParams = FunctionArguments<typeof functions.safeTransferFrom>
export type SafeTransferFromReturn = FunctionReturn<typeof functions.safeTransferFrom>

export type SetApprovalForAllParams = FunctionArguments<typeof functions.setApprovalForAll>
export type SetApprovalForAllReturn = FunctionReturn<typeof functions.setApprovalForAll>

export type SetContractInfoParams = FunctionArguments<typeof functions.setContractInfo>
export type SetContractInfoReturn = FunctionReturn<typeof functions.setContractInfo>

export type SupportsInterfaceParams = FunctionArguments<typeof functions.supportsInterface>
export type SupportsInterfaceReturn = FunctionReturn<typeof functions.supportsInterface>

export type TotalEditionsParams = FunctionArguments<typeof functions.totalEditions>
export type TotalEditionsReturn = FunctionReturn<typeof functions.totalEditions>

export type TotalSupplyParams_0 = FunctionArguments<typeof functions['totalSupply()']>
export type TotalSupplyReturn_0 = FunctionReturn<typeof functions['totalSupply()']>

export type TotalSupplyParams_1 = FunctionArguments<typeof functions['totalSupply(uint256)']>
export type TotalSupplyReturn_1 = FunctionReturn<typeof functions['totalSupply(uint256)']>

export type TransferOwnershipParams = FunctionArguments<typeof functions.transferOwnership>
export type TransferOwnershipReturn = FunctionReturn<typeof functions.transferOwnership>

export type UriParams = FunctionArguments<typeof functions.uri>
export type UriReturn = FunctionReturn<typeof functions.uri>

