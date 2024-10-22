import * as p from '@subsquid/evm-codec'
import { event, fun, viewFun, indexed, ContractBase } from '@subsquid/evm-abi'
import type { EventParams as EParams, FunctionArguments, FunctionReturn } from '@subsquid/evm-abi'

export const events = {
    ApprovalForAll: event("0x17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31", "ApprovalForAll(address,address,bool)", {"owner": indexed(p.address), "operator": indexed(p.address), "approved": p.bool}),
    AuthorityUpdated: event("0xa3396fd7f6e0a21b50e5089d2da70d5ac0a3bbbd1f617a93f134b76389980198", "AuthorityUpdated(address,address)", {"user": indexed(p.address), "newAuthority": indexed(p.address)}),
    Bonded: event("0x3ae5efadaccde413bdfcb3a4626babecd844c502ee4c2c9b340f28cd9d552732", "Bonded(uint256,address,uint256,uint256)", {"id": indexed(p.uint256), "referrer": indexed(p.address), "amount": p.uint256, "payout": p.uint256}),
    ERC1155BondTokenCreated: event("0xd5a20d99fad8d4fec2eae3eb7d21c0bebeaecce7cf87b698ddba05071e7bde27", "ERC1155BondTokenCreated(uint256,address,uint48)", {"tokenId": p.uint256, "underlying": indexed(p.address), "expiry": indexed(p.uint48)}),
    OwnerUpdated: event("0x8292fce18fa69edf4db7b94ea2e58241df0ae57f97e0a6c9b29067028bf92d76", "OwnerUpdated(address,address)", {"user": indexed(p.address), "newOwner": indexed(p.address)}),
    TransferBatch: event("0x4a39dc06d4c0dbc64b70af90fd698a233a518aa5d07e595d983b8c0526c8f7fb", "TransferBatch(address,address,address,uint256[],uint256[])", {"operator": indexed(p.address), "from": indexed(p.address), "to": indexed(p.address), "ids": p.array(p.uint256), "amounts": p.array(p.uint256)}),
    TransferSingle: event("0xc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f62", "TransferSingle(address,address,address,uint256,uint256)", {"operator": indexed(p.address), "from": indexed(p.address), "to": indexed(p.address), "id": p.uint256, "amount": p.uint256}),
}

export const functions = {
    FEE_DECIMALS: viewFun("0xccf288c6", "FEE_DECIMALS()", {}, p.uint48),
    authority: viewFun("0xbf7e214f", "authority()", {}, p.address),
    balanceOf: viewFun("0x00fdd58e", "balanceOf(address,uint256)", {"_0": p.address, "_1": p.uint256}, p.uint256),
    balanceOfBatch: viewFun("0x4e1273f4", "balanceOfBatch(address[],uint256[])", {"owners": p.array(p.address), "ids": p.array(p.uint256)}, p.array(p.uint256)),
    batchRedeem: fun("0xe9dc30f3", "batchRedeem(uint256[],uint256[])", {"tokenIds_": p.array(p.uint256), "amounts_": p.array(p.uint256)}, ),
    claimFees: fun("0x2f6fa94e", "claimFees(address[],address)", {"tokens_": p.array(p.address), "to_": p.address}, ),
    create: fun("0xb7314ef9", "create(address,uint48,uint256)", {"underlying_": p.address, "expiry_": p.uint48, "amount_": p.uint256}, {"_0": p.uint256, "_1": p.uint256}),
    createFeeDiscount: viewFun("0x06692a37", "createFeeDiscount()", {}, p.uint48),
    deploy: fun("0xc6e38a4b", "deploy(address,uint48)", {"underlying_": p.address, "expiry_": p.uint48}, p.uint256),
    getFee: viewFun("0xb88c9148", "getFee(address)", {"referrer_": p.address}, p.uint48),
    getTokenId: viewFun("0x92593277", "getTokenId(address,uint48)", {"underlying_": p.address, "expiry_": p.uint48}, p.uint256),
    getTokenNameAndSymbol: viewFun("0x35312c85", "getTokenNameAndSymbol(uint256)", {"tokenId_": p.uint256}, {"_0": p.string, "_1": p.string}),
    isApprovedForAll: viewFun("0xe985e9c5", "isApprovedForAll(address,address)", {"_0": p.address, "_1": p.address}, p.bool),
    owner: viewFun("0x8da5cb5b", "owner()", {}, p.address),
    protocolFee: viewFun("0xb0e21e8a", "protocolFee()", {}, p.uint48),
    purchase: fun("0x6de5b4cd", "purchase(address,address,uint256,uint256,uint256)", {"recipient_": p.address, "referrer_": p.address, "id_": p.uint256, "amount_": p.uint256, "minAmountOut_": p.uint256}, {"_0": p.uint256, "_1": p.uint48}),
    redeem: fun("0x7cbc2373", "redeem(uint256,uint256)", {"tokenId_": p.uint256, "amount_": p.uint256}, ),
    referrerFees: viewFun("0xc23135dd", "referrerFees(address)", {"_0": p.address}, p.uint48),
    rewards: viewFun("0xe70b9e27", "rewards(address,address)", {"_0": p.address, "_1": p.address}, p.uint256),
    safeBatchTransferFrom: fun("0x2eb2c2d6", "safeBatchTransferFrom(address,address,uint256[],uint256[],bytes)", {"from": p.address, "to": p.address, "ids": p.array(p.uint256), "amounts": p.array(p.uint256), "data": p.bytes}, ),
    safeTransferFrom: fun("0xf242432a", "safeTransferFrom(address,address,uint256,uint256,bytes)", {"from": p.address, "to": p.address, "id": p.uint256, "amount": p.uint256, "data": p.bytes}, ),
    setApprovalForAll: fun("0xa22cb465", "setApprovalForAll(address,bool)", {"operator": p.address, "approved": p.bool}, ),
    setAuthority: fun("0x7a9e5e4b", "setAuthority(address)", {"newAuthority": p.address}, ),
    setCreateFeeDiscount: fun("0x81690927", "setCreateFeeDiscount(uint48)", {"discount_": p.uint48}, ),
    setOwner: fun("0x13af4035", "setOwner(address)", {"newOwner": p.address}, ),
    setProtocolFee: fun("0xb1e55529", "setProtocolFee(uint48)", {"fee_": p.uint48}, ),
    setReferrerFee: fun("0x0d4dfc21", "setReferrerFee(uint48)", {"fee_": p.uint48}, ),
    supportsInterface: viewFun("0x01ffc9a7", "supportsInterface(bytes4)", {"interfaceId": p.bytes4}, p.bool),
    tokenMetadata: viewFun("0x6914db60", "tokenMetadata(uint256)", {"_0": p.uint256}, {"active": p.bool, "underlying": p.address, "decimals": p.uint8, "expiry": p.uint48, "supply": p.uint256}),
}

export class Contract extends ContractBase {

    FEE_DECIMALS() {
        return this.eth_call(functions.FEE_DECIMALS, {})
    }

    authority() {
        return this.eth_call(functions.authority, {})
    }

    balanceOf(_0: BalanceOfParams["_0"], _1: BalanceOfParams["_1"]) {
        return this.eth_call(functions.balanceOf, {_0, _1})
    }

    balanceOfBatch(owners: BalanceOfBatchParams["owners"], ids: BalanceOfBatchParams["ids"]) {
        return this.eth_call(functions.balanceOfBatch, {owners, ids})
    }

    createFeeDiscount() {
        return this.eth_call(functions.createFeeDiscount, {})
    }

    getFee(referrer_: GetFeeParams["referrer_"]) {
        return this.eth_call(functions.getFee, {referrer_})
    }

    getTokenId(underlying_: GetTokenIdParams["underlying_"], expiry_: GetTokenIdParams["expiry_"]) {
        return this.eth_call(functions.getTokenId, {underlying_, expiry_})
    }

    getTokenNameAndSymbol(tokenId_: GetTokenNameAndSymbolParams["tokenId_"]) {
        return this.eth_call(functions.getTokenNameAndSymbol, {tokenId_})
    }

    isApprovedForAll(_0: IsApprovedForAllParams["_0"], _1: IsApprovedForAllParams["_1"]) {
        return this.eth_call(functions.isApprovedForAll, {_0, _1})
    }

    owner() {
        return this.eth_call(functions.owner, {})
    }

    protocolFee() {
        return this.eth_call(functions.protocolFee, {})
    }

    referrerFees(_0: ReferrerFeesParams["_0"]) {
        return this.eth_call(functions.referrerFees, {_0})
    }

    rewards(_0: RewardsParams["_0"], _1: RewardsParams["_1"]) {
        return this.eth_call(functions.rewards, {_0, _1})
    }

    supportsInterface(interfaceId: SupportsInterfaceParams["interfaceId"]) {
        return this.eth_call(functions.supportsInterface, {interfaceId})
    }

    tokenMetadata(_0: TokenMetadataParams["_0"]) {
        return this.eth_call(functions.tokenMetadata, {_0})
    }
}

/// Event types
export type ApprovalForAllEventArgs = EParams<typeof events.ApprovalForAll>
export type AuthorityUpdatedEventArgs = EParams<typeof events.AuthorityUpdated>
export type BondedEventArgs = EParams<typeof events.Bonded>
export type ERC1155BondTokenCreatedEventArgs = EParams<typeof events.ERC1155BondTokenCreated>
export type OwnerUpdatedEventArgs = EParams<typeof events.OwnerUpdated>
export type TransferBatchEventArgs = EParams<typeof events.TransferBatch>
export type TransferSingleEventArgs = EParams<typeof events.TransferSingle>

/// Function types
export type FEE_DECIMALSParams = FunctionArguments<typeof functions.FEE_DECIMALS>
export type FEE_DECIMALSReturn = FunctionReturn<typeof functions.FEE_DECIMALS>

export type AuthorityParams = FunctionArguments<typeof functions.authority>
export type AuthorityReturn = FunctionReturn<typeof functions.authority>

export type BalanceOfParams = FunctionArguments<typeof functions.balanceOf>
export type BalanceOfReturn = FunctionReturn<typeof functions.balanceOf>

export type BalanceOfBatchParams = FunctionArguments<typeof functions.balanceOfBatch>
export type BalanceOfBatchReturn = FunctionReturn<typeof functions.balanceOfBatch>

export type BatchRedeemParams = FunctionArguments<typeof functions.batchRedeem>
export type BatchRedeemReturn = FunctionReturn<typeof functions.batchRedeem>

export type ClaimFeesParams = FunctionArguments<typeof functions.claimFees>
export type ClaimFeesReturn = FunctionReturn<typeof functions.claimFees>

export type CreateParams = FunctionArguments<typeof functions.create>
export type CreateReturn = FunctionReturn<typeof functions.create>

export type CreateFeeDiscountParams = FunctionArguments<typeof functions.createFeeDiscount>
export type CreateFeeDiscountReturn = FunctionReturn<typeof functions.createFeeDiscount>

export type DeployParams = FunctionArguments<typeof functions.deploy>
export type DeployReturn = FunctionReturn<typeof functions.deploy>

export type GetFeeParams = FunctionArguments<typeof functions.getFee>
export type GetFeeReturn = FunctionReturn<typeof functions.getFee>

export type GetTokenIdParams = FunctionArguments<typeof functions.getTokenId>
export type GetTokenIdReturn = FunctionReturn<typeof functions.getTokenId>

export type GetTokenNameAndSymbolParams = FunctionArguments<typeof functions.getTokenNameAndSymbol>
export type GetTokenNameAndSymbolReturn = FunctionReturn<typeof functions.getTokenNameAndSymbol>

export type IsApprovedForAllParams = FunctionArguments<typeof functions.isApprovedForAll>
export type IsApprovedForAllReturn = FunctionReturn<typeof functions.isApprovedForAll>

export type OwnerParams = FunctionArguments<typeof functions.owner>
export type OwnerReturn = FunctionReturn<typeof functions.owner>

export type ProtocolFeeParams = FunctionArguments<typeof functions.protocolFee>
export type ProtocolFeeReturn = FunctionReturn<typeof functions.protocolFee>

export type PurchaseParams = FunctionArguments<typeof functions.purchase>
export type PurchaseReturn = FunctionReturn<typeof functions.purchase>

export type RedeemParams = FunctionArguments<typeof functions.redeem>
export type RedeemReturn = FunctionReturn<typeof functions.redeem>

export type ReferrerFeesParams = FunctionArguments<typeof functions.referrerFees>
export type ReferrerFeesReturn = FunctionReturn<typeof functions.referrerFees>

export type RewardsParams = FunctionArguments<typeof functions.rewards>
export type RewardsReturn = FunctionReturn<typeof functions.rewards>

export type SafeBatchTransferFromParams = FunctionArguments<typeof functions.safeBatchTransferFrom>
export type SafeBatchTransferFromReturn = FunctionReturn<typeof functions.safeBatchTransferFrom>

export type SafeTransferFromParams = FunctionArguments<typeof functions.safeTransferFrom>
export type SafeTransferFromReturn = FunctionReturn<typeof functions.safeTransferFrom>

export type SetApprovalForAllParams = FunctionArguments<typeof functions.setApprovalForAll>
export type SetApprovalForAllReturn = FunctionReturn<typeof functions.setApprovalForAll>

export type SetAuthorityParams = FunctionArguments<typeof functions.setAuthority>
export type SetAuthorityReturn = FunctionReturn<typeof functions.setAuthority>

export type SetCreateFeeDiscountParams = FunctionArguments<typeof functions.setCreateFeeDiscount>
export type SetCreateFeeDiscountReturn = FunctionReturn<typeof functions.setCreateFeeDiscount>

export type SetOwnerParams = FunctionArguments<typeof functions.setOwner>
export type SetOwnerReturn = FunctionReturn<typeof functions.setOwner>

export type SetProtocolFeeParams = FunctionArguments<typeof functions.setProtocolFee>
export type SetProtocolFeeReturn = FunctionReturn<typeof functions.setProtocolFee>

export type SetReferrerFeeParams = FunctionArguments<typeof functions.setReferrerFee>
export type SetReferrerFeeReturn = FunctionReturn<typeof functions.setReferrerFee>

export type SupportsInterfaceParams = FunctionArguments<typeof functions.supportsInterface>
export type SupportsInterfaceReturn = FunctionReturn<typeof functions.supportsInterface>

export type TokenMetadataParams = FunctionArguments<typeof functions.tokenMetadata>
export type TokenMetadataReturn = FunctionReturn<typeof functions.tokenMetadata>

