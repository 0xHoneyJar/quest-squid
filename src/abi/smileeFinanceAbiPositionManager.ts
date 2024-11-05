import * as p from '@subsquid/evm-codec'
import { event, fun, viewFun, indexed, ContractBase } from '@subsquid/evm-abi'
import type { EventParams as EParams, FunctionArguments, FunctionReturn } from '@subsquid/evm-abi'

export const events = {
    Approval: event("0x8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925", "Approval(address,address,uint256)", {"owner": indexed(p.address), "approved": indexed(p.address), "tokenId": indexed(p.uint256)}),
    ApprovalForAll: event("0x17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31", "ApprovalForAll(address,address,bool)", {"owner": indexed(p.address), "operator": indexed(p.address), "approved": p.bool}),
    Buy: event("0xf152feb5fe7641aae5c7f8e8187c26eef1a9d970f7c3794ac442f0842282d93f", "Buy(address,uint256,uint256,address)", {"dvp": p.address, "epoch": p.uint256, "premium": p.uint256, "creditor": p.address}),
    BuyDVP: event("0x0ca9ee3a325cde280bc438cf6169770175007cf53c67b4436a63d0c8f34d265a", "BuyDVP(uint256,uint256,uint256)", {"tokenId": indexed(p.uint256), "expiry": p.uint256, "notional": p.uint256}),
    RoleAdminChanged: event("0xbd79b86ffe0ab8e8776151514217cd7cacd52c909f66475c3af44e129f0b00ff", "RoleAdminChanged(bytes32,bytes32,bytes32)", {"role": indexed(p.bytes32), "previousAdminRole": indexed(p.bytes32), "newAdminRole": indexed(p.bytes32)}),
    RoleGranted: event("0x2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d", "RoleGranted(bytes32,address,address)", {"role": indexed(p.bytes32), "account": indexed(p.address), "sender": indexed(p.address)}),
    RoleRevoked: event("0xf6391f5c32d9c69d2a47ea670b442974b53935d1edc7fd64eb21e047a839171b", "RoleRevoked(bytes32,address,address)", {"role": indexed(p.bytes32), "account": indexed(p.address), "sender": indexed(p.address)}),
    Sell: event("0xed7a144fad14804d5c249145e3e0e2b63a9eb455b76aee5bc92d711e9bba3e4a", "Sell(address,uint256,uint256)", {"dvp": p.address, "epoch": p.uint256, "payoff": p.uint256}),
    SellDVP: event("0x935a7b5c4cb1c511ef29f6cd04d39c180ba3dec624cba64ef9d4e0053865aecc", "SellDVP(uint256,uint256,uint256)", {"tokenId": indexed(p.uint256), "notional": p.uint256, "payoff": p.uint256}),
    Transfer: event("0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef", "Transfer(address,address,uint256)", {"from": indexed(p.address), "to": indexed(p.address), "tokenId": indexed(p.uint256)}),
}

export const functions = {
    DEFAULT_ADMIN_ROLE: viewFun("0xa217fddf", "DEFAULT_ADMIN_ROLE()", {}, p.bytes32),
    ROLE_ADMIN: viewFun("0xd391014b", "ROLE_ADMIN()", {}, p.bytes32),
    ROLE_GOD: viewFun("0x7afa7c9f", "ROLE_GOD()", {}, p.bytes32),
    approve: fun("0x095ea7b3", "approve(address,uint256)", {"to": p.address, "tokenId": p.uint256}, ),
    balanceOf: viewFun("0x70a08231", "balanceOf(address)", {"owner": p.address}, p.uint256),
    getApproved: viewFun("0x081812fc", "getApproved(uint256)", {"tokenId": p.uint256}, p.address),
    getRoleAdmin: viewFun("0x248a9ca3", "getRoleAdmin(bytes32)", {"role": p.bytes32}, p.bytes32),
    grantRole: fun("0x2f2ff15d", "grantRole(bytes32,address)", {"role": p.bytes32, "account": p.address}, ),
    hasRole: viewFun("0x91d14854", "hasRole(bytes32,address)", {"role": p.bytes32, "account": p.address}, p.bool),
    isApprovedForAll: viewFun("0xe985e9c5", "isApprovedForAll(address,address)", {"owner": p.address, "operator": p.address}, p.bool),
    mint: fun("0x6f430a5b", "mint((uint256,address,uint256,uint256,uint256,address,uint256,uint256,uint256))", {"params": p.struct({"tokenId": p.uint256, "dvpAddr": p.address, "notionalUp": p.uint256, "notionalDown": p.uint256, "strike": p.uint256, "recipient": p.address, "expectedPremium": p.uint256, "maxSlippage": p.uint256, "nftAccessTokenId": p.uint256})}, {"tokenId": p.uint256, "premium": p.uint256}),
    name: viewFun("0x06fdde03", "name()", {}, p.string),
    nftAccessFlag: viewFun("0xb0b37e86", "nftAccessFlag()", {}, p.bool),
    ownerOf: viewFun("0x6352211e", "ownerOf(uint256)", {"tokenId": p.uint256}, p.address),
    payoff: viewFun("0xc3fead01", "payoff(uint256,uint256,uint256)", {"tokenId": p.uint256, "notionalUp": p.uint256, "notionalDown": p.uint256}, {"payoff_": p.uint256, "fee": p.uint256}),
    positionDetail: viewFun("0xfd02dbda", "positionDetail(uint256)", {"tokenId": p.uint256}, p.struct({"dvpAddr": p.address, "baseToken": p.address, "sideToken": p.address, "dvpFreq": p.uint256, "dvpType": p.bool, "strike": p.uint256, "expiry": p.uint256, "premium": p.uint256, "leverage": p.uint256, "notionalUp": p.uint256, "notionalDown": p.uint256, "cumulatedPayoff": p.uint256})),
    renounceRole: fun("0x36568abe", "renounceRole(bytes32,address)", {"role": p.bytes32, "account": p.address}, ),
    revokeRole: fun("0xd547741f", "revokeRole(bytes32,address)", {"role": p.bytes32, "account": p.address}, ),
    'safeTransferFrom(address,address,uint256)': fun("0x42842e0e", "safeTransferFrom(address,address,uint256)", {"from": p.address, "to": p.address, "tokenId": p.uint256}, ),
    'safeTransferFrom(address,address,uint256,bytes)': fun("0xb88d4fde", "safeTransferFrom(address,address,uint256,bytes)", {"from": p.address, "to": p.address, "tokenId": p.uint256, "data": p.bytes}, ),
    sell: fun("0x87d59919", "sell((uint256,uint256,uint256,uint256,uint256))", {"params": p.struct({"tokenId": p.uint256, "notionalUp": p.uint256, "notionalDown": p.uint256, "expectedMarketValue": p.uint256, "maxSlippage": p.uint256})}, p.uint256),
    sellAll: fun("0x2ea21c12", "sellAll((uint256,uint256,uint256,uint256,uint256)[])", {"params": p.array(p.struct({"tokenId": p.uint256, "notionalUp": p.uint256, "notionalDown": p.uint256, "expectedMarketValue": p.uint256, "maxSlippage": p.uint256}))}, p.uint256),
    setApprovalForAll: fun("0xa22cb465", "setApprovalForAll(address,bool)", {"operator": p.address, "approved": p.bool}, ),
    setNftAccessFlag: fun("0xb70d5394", "setNftAccessFlag(bool)", {"flag": p.bool}, ),
    supportsInterface: viewFun("0x01ffc9a7", "supportsInterface(bytes4)", {"interfaceId": p.bytes4}, p.bool),
    symbol: viewFun("0x95d89b41", "symbol()", {}, p.string),
    tokenByIndex: viewFun("0x4f6ccce7", "tokenByIndex(uint256)", {"index": p.uint256}, p.uint256),
    tokenOfOwnerByIndex: viewFun("0x2f745c59", "tokenOfOwnerByIndex(address,uint256)", {"owner": p.address, "index": p.uint256}, p.uint256),
    tokenURI: viewFun("0xc87b56dd", "tokenURI(uint256)", {"tokenId": p.uint256}, p.string),
    totalSupply: viewFun("0x18160ddd", "totalSupply()", {}, p.uint256),
    transferFrom: fun("0x23b872dd", "transferFrom(address,address,uint256)", {"from": p.address, "to": p.address, "tokenId": p.uint256}, ),
}

export class Contract extends ContractBase {

    DEFAULT_ADMIN_ROLE() {
        return this.eth_call(functions.DEFAULT_ADMIN_ROLE, {})
    }

    ROLE_ADMIN() {
        return this.eth_call(functions.ROLE_ADMIN, {})
    }

    ROLE_GOD() {
        return this.eth_call(functions.ROLE_GOD, {})
    }

    balanceOf(owner: BalanceOfParams["owner"]) {
        return this.eth_call(functions.balanceOf, {owner})
    }

    getApproved(tokenId: GetApprovedParams["tokenId"]) {
        return this.eth_call(functions.getApproved, {tokenId})
    }

    getRoleAdmin(role: GetRoleAdminParams["role"]) {
        return this.eth_call(functions.getRoleAdmin, {role})
    }

    hasRole(role: HasRoleParams["role"], account: HasRoleParams["account"]) {
        return this.eth_call(functions.hasRole, {role, account})
    }

    isApprovedForAll(owner: IsApprovedForAllParams["owner"], operator: IsApprovedForAllParams["operator"]) {
        return this.eth_call(functions.isApprovedForAll, {owner, operator})
    }

    name() {
        return this.eth_call(functions.name, {})
    }

    nftAccessFlag() {
        return this.eth_call(functions.nftAccessFlag, {})
    }

    ownerOf(tokenId: OwnerOfParams["tokenId"]) {
        return this.eth_call(functions.ownerOf, {tokenId})
    }

    payoff(tokenId: PayoffParams["tokenId"], notionalUp: PayoffParams["notionalUp"], notionalDown: PayoffParams["notionalDown"]) {
        return this.eth_call(functions.payoff, {tokenId, notionalUp, notionalDown})
    }

    positionDetail(tokenId: PositionDetailParams["tokenId"]) {
        return this.eth_call(functions.positionDetail, {tokenId})
    }

    supportsInterface(interfaceId: SupportsInterfaceParams["interfaceId"]) {
        return this.eth_call(functions.supportsInterface, {interfaceId})
    }

    symbol() {
        return this.eth_call(functions.symbol, {})
    }

    tokenByIndex(index: TokenByIndexParams["index"]) {
        return this.eth_call(functions.tokenByIndex, {index})
    }

    tokenOfOwnerByIndex(owner: TokenOfOwnerByIndexParams["owner"], index: TokenOfOwnerByIndexParams["index"]) {
        return this.eth_call(functions.tokenOfOwnerByIndex, {owner, index})
    }

    tokenURI(tokenId: TokenURIParams["tokenId"]) {
        return this.eth_call(functions.tokenURI, {tokenId})
    }

    totalSupply() {
        return this.eth_call(functions.totalSupply, {})
    }
}

/// Event types
export type ApprovalEventArgs = EParams<typeof events.Approval>
export type ApprovalForAllEventArgs = EParams<typeof events.ApprovalForAll>
export type BuyEventArgs = EParams<typeof events.Buy>
export type BuyDVPEventArgs = EParams<typeof events.BuyDVP>
export type RoleAdminChangedEventArgs = EParams<typeof events.RoleAdminChanged>
export type RoleGrantedEventArgs = EParams<typeof events.RoleGranted>
export type RoleRevokedEventArgs = EParams<typeof events.RoleRevoked>
export type SellEventArgs = EParams<typeof events.Sell>
export type SellDVPEventArgs = EParams<typeof events.SellDVP>
export type TransferEventArgs = EParams<typeof events.Transfer>

/// Function types
export type DEFAULT_ADMIN_ROLEParams = FunctionArguments<typeof functions.DEFAULT_ADMIN_ROLE>
export type DEFAULT_ADMIN_ROLEReturn = FunctionReturn<typeof functions.DEFAULT_ADMIN_ROLE>

export type ROLE_ADMINParams = FunctionArguments<typeof functions.ROLE_ADMIN>
export type ROLE_ADMINReturn = FunctionReturn<typeof functions.ROLE_ADMIN>

export type ROLE_GODParams = FunctionArguments<typeof functions.ROLE_GOD>
export type ROLE_GODReturn = FunctionReturn<typeof functions.ROLE_GOD>

export type ApproveParams = FunctionArguments<typeof functions.approve>
export type ApproveReturn = FunctionReturn<typeof functions.approve>

export type BalanceOfParams = FunctionArguments<typeof functions.balanceOf>
export type BalanceOfReturn = FunctionReturn<typeof functions.balanceOf>

export type GetApprovedParams = FunctionArguments<typeof functions.getApproved>
export type GetApprovedReturn = FunctionReturn<typeof functions.getApproved>

export type GetRoleAdminParams = FunctionArguments<typeof functions.getRoleAdmin>
export type GetRoleAdminReturn = FunctionReturn<typeof functions.getRoleAdmin>

export type GrantRoleParams = FunctionArguments<typeof functions.grantRole>
export type GrantRoleReturn = FunctionReturn<typeof functions.grantRole>

export type HasRoleParams = FunctionArguments<typeof functions.hasRole>
export type HasRoleReturn = FunctionReturn<typeof functions.hasRole>

export type IsApprovedForAllParams = FunctionArguments<typeof functions.isApprovedForAll>
export type IsApprovedForAllReturn = FunctionReturn<typeof functions.isApprovedForAll>

export type MintParams = FunctionArguments<typeof functions.mint>
export type MintReturn = FunctionReturn<typeof functions.mint>

export type NameParams = FunctionArguments<typeof functions.name>
export type NameReturn = FunctionReturn<typeof functions.name>

export type NftAccessFlagParams = FunctionArguments<typeof functions.nftAccessFlag>
export type NftAccessFlagReturn = FunctionReturn<typeof functions.nftAccessFlag>

export type OwnerOfParams = FunctionArguments<typeof functions.ownerOf>
export type OwnerOfReturn = FunctionReturn<typeof functions.ownerOf>

export type PayoffParams = FunctionArguments<typeof functions.payoff>
export type PayoffReturn = FunctionReturn<typeof functions.payoff>

export type PositionDetailParams = FunctionArguments<typeof functions.positionDetail>
export type PositionDetailReturn = FunctionReturn<typeof functions.positionDetail>

export type RenounceRoleParams = FunctionArguments<typeof functions.renounceRole>
export type RenounceRoleReturn = FunctionReturn<typeof functions.renounceRole>

export type RevokeRoleParams = FunctionArguments<typeof functions.revokeRole>
export type RevokeRoleReturn = FunctionReturn<typeof functions.revokeRole>

export type SafeTransferFromParams_0 = FunctionArguments<typeof functions['safeTransferFrom(address,address,uint256)']>
export type SafeTransferFromReturn_0 = FunctionReturn<typeof functions['safeTransferFrom(address,address,uint256)']>

export type SafeTransferFromParams_1 = FunctionArguments<typeof functions['safeTransferFrom(address,address,uint256,bytes)']>
export type SafeTransferFromReturn_1 = FunctionReturn<typeof functions['safeTransferFrom(address,address,uint256,bytes)']>

export type SellParams = FunctionArguments<typeof functions.sell>
export type SellReturn = FunctionReturn<typeof functions.sell>

export type SellAllParams = FunctionArguments<typeof functions.sellAll>
export type SellAllReturn = FunctionReturn<typeof functions.sellAll>

export type SetApprovalForAllParams = FunctionArguments<typeof functions.setApprovalForAll>
export type SetApprovalForAllReturn = FunctionReturn<typeof functions.setApprovalForAll>

export type SetNftAccessFlagParams = FunctionArguments<typeof functions.setNftAccessFlag>
export type SetNftAccessFlagReturn = FunctionReturn<typeof functions.setNftAccessFlag>

export type SupportsInterfaceParams = FunctionArguments<typeof functions.supportsInterface>
export type SupportsInterfaceReturn = FunctionReturn<typeof functions.supportsInterface>

export type SymbolParams = FunctionArguments<typeof functions.symbol>
export type SymbolReturn = FunctionReturn<typeof functions.symbol>

export type TokenByIndexParams = FunctionArguments<typeof functions.tokenByIndex>
export type TokenByIndexReturn = FunctionReturn<typeof functions.tokenByIndex>

export type TokenOfOwnerByIndexParams = FunctionArguments<typeof functions.tokenOfOwnerByIndex>
export type TokenOfOwnerByIndexReturn = FunctionReturn<typeof functions.tokenOfOwnerByIndex>

export type TokenURIParams = FunctionArguments<typeof functions.tokenURI>
export type TokenURIReturn = FunctionReturn<typeof functions.tokenURI>

export type TotalSupplyParams = FunctionArguments<typeof functions.totalSupply>
export type TotalSupplyReturn = FunctionReturn<typeof functions.totalSupply>

export type TransferFromParams = FunctionArguments<typeof functions.transferFrom>
export type TransferFromReturn = FunctionReturn<typeof functions.transferFrom>

