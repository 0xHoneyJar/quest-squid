import * as p from '@subsquid/evm-codec'
import { event, fun, viewFun, indexed, ContractBase } from '@subsquid/evm-abi'
import type { EventParams as EParams, FunctionArguments, FunctionReturn } from '@subsquid/evm-abi'

export const events = {
    NativeTransfer: event("0x88479153c5a43e333375e4daf2e98cddbb4cb43428c64efdab6e987c263b6620", "NativeTransfer(address,uint256)", {"receiver": indexed(p.address), "amount": p.uint256}),
    Settlement: event("0x7a70845dec8dc098eecb16e760b0c1569874487f0459ae689c738e281b28ed38", "Settlement(uint256)", {"nonce": indexed(p.uint256)}),
}

export const functions = {
    DOMAIN_SEPARATOR: viewFun("0x3644e515", "DOMAIN_SEPARATOR()", {}, p.bytes32),
    EIP712_DOMAIN_TYPEHASH: viewFun("0xc7977be7", "EIP712_DOMAIN_TYPEHASH()", {}, p.bytes32),
    JAM_ORDER_TYPE_HASH: viewFun("0x2b7280ae", "JAM_ORDER_TYPE_HASH()", {}, p.bytes32),
    balanceManager: viewFun("0x416e6d5e", "balanceManager()", {}, p.address),
    cancelLimitOrder: fun("0xa5cdc8fc", "cancelLimitOrder(uint256)", {"nonce": p.uint256}, ),
    hashHooks: viewFun("0xf80b26e3", "hashHooks(((bool,address,uint256,bytes)[],(bool,address,uint256,bytes)[]))", {"hooks": p.struct({"beforeSettle": p.array(p.struct({"result": p.bool, "to": p.address, "value": p.uint256, "data": p.bytes})), "afterSettle": p.array(p.struct({"result": p.bool, "to": p.address, "value": p.uint256, "data": p.bytes}))})}, p.bytes32),
    hashOrder: viewFun("0xbfab1fc6", "hashOrder((address,address,uint256,uint256,address,uint16,bytes32,address[],address[],uint256[],uint256[],uint256[],uint256[],bytes,bytes),bytes32)", {"order": p.struct({"taker": p.address, "receiver": p.address, "expiry": p.uint256, "nonce": p.uint256, "executor": p.address, "minFillPercent": p.uint16, "hooksHash": p.bytes32, "sellTokens": p.array(p.address), "buyTokens": p.array(p.address), "sellAmounts": p.array(p.uint256), "buyAmounts": p.array(p.uint256), "sellNFTIds": p.array(p.uint256), "buyNFTIds": p.array(p.uint256), "sellTokenTransfers": p.bytes, "buyTokenTransfers": p.bytes}), "hooksHash": p.bytes32}, p.bytes32),
    isLimitOrderNonceValid: viewFun("0x7eea39f2", "isLimitOrderNonceValid(address,uint256)", {"taker": p.address, "nonce": p.uint256}, p.bool),
    onERC1155BatchReceived: fun("0xbc197c81", "onERC1155BatchReceived(address,address,uint256[],uint256[],bytes)", {"_0": p.address, "_1": p.address, "_2": p.array(p.uint256), "_3": p.array(p.uint256), "_4": p.bytes}, p.bytes4),
    onERC1155Received: fun("0xf23a6e61", "onERC1155Received(address,address,uint256,uint256,bytes)", {"_0": p.address, "_1": p.address, "_2": p.uint256, "_3": p.uint256, "_4": p.bytes}, p.bytes4),
    onERC721Received: fun("0x150b7a02", "onERC721Received(address,address,uint256,bytes)", {"_0": p.address, "_1": p.address, "_2": p.uint256, "_3": p.bytes}, p.bytes4),
    settle: fun("0x87528f13", "settle((address,address,uint256,uint256,address,uint16,bytes32,address[],address[],uint256[],uint256[],uint256[],uint256[],bytes,bytes),(uint8,bytes),(bool,address,uint256,bytes)[],((bool,address,uint256,bytes)[],(bool,address,uint256,bytes)[]),(address,uint16))", {"order": p.struct({"taker": p.address, "receiver": p.address, "expiry": p.uint256, "nonce": p.uint256, "executor": p.address, "minFillPercent": p.uint16, "hooksHash": p.bytes32, "sellTokens": p.array(p.address), "buyTokens": p.array(p.address), "sellAmounts": p.array(p.uint256), "buyAmounts": p.array(p.uint256), "sellNFTIds": p.array(p.uint256), "buyNFTIds": p.array(p.uint256), "sellTokenTransfers": p.bytes, "buyTokenTransfers": p.bytes}), "signature": p.struct({"signatureType": p.uint8, "signatureBytes": p.bytes}), "interactions": p.array(p.struct({"result": p.bool, "to": p.address, "value": p.uint256, "data": p.bytes})), "hooks": p.struct({"beforeSettle": p.array(p.struct({"result": p.bool, "to": p.address, "value": p.uint256, "data": p.bytes})), "afterSettle": p.array(p.struct({"result": p.bool, "to": p.address, "value": p.uint256, "data": p.bytes}))}), "solverData": p.struct({"balanceRecipient": p.address, "curFillPercent": p.uint16})}, ),
    settleBatch: fun("0x460dd949", "settleBatch((address,address,uint256,uint256,address,uint16,bytes32,address[],address[],uint256[],uint256[],uint256[],uint256[],bytes,bytes)[],(uint8,bytes)[],(bytes[],bytes,uint48[],uint48)[],(bool,address,uint256,bytes)[],((bool,address,uint256,bytes)[],(bool,address,uint256,bytes)[])[],(address,uint16[],bool[],bool))", {"orders": p.array(p.struct({"taker": p.address, "receiver": p.address, "expiry": p.uint256, "nonce": p.uint256, "executor": p.address, "minFillPercent": p.uint16, "hooksHash": p.bytes32, "sellTokens": p.array(p.address), "buyTokens": p.array(p.address), "sellAmounts": p.array(p.uint256), "buyAmounts": p.array(p.uint256), "sellNFTIds": p.array(p.uint256), "buyNFTIds": p.array(p.uint256), "sellTokenTransfers": p.bytes, "buyTokenTransfers": p.bytes})), "signatures": p.array(p.struct({"signatureType": p.uint8, "signatureBytes": p.bytes})), "takersPermitsInfo": p.array(p.struct({"permitSignatures": p.array(p.bytes), "signatureBytesPermit2": p.bytes, "noncesPermit2": p.array(p.uint48), "deadline": p.uint48})), "interactions": p.array(p.struct({"result": p.bool, "to": p.address, "value": p.uint256, "data": p.bytes})), "hooks": p.array(p.struct({"beforeSettle": p.array(p.struct({"result": p.bool, "to": p.address, "value": p.uint256, "data": p.bytes})), "afterSettle": p.array(p.struct({"result": p.bool, "to": p.address, "value": p.uint256, "data": p.bytes}))})), "solverData": p.struct({"balanceRecipient": p.address, "curFillPercents": p.array(p.uint16), "takersPermitsUsage": p.array(p.bool), "transferExactAmounts": p.bool})}, ),
    settleInternal: fun("0x173260eb", "settleInternal((address,address,uint256,uint256,address,uint16,bytes32,address[],address[],uint256[],uint256[],uint256[],uint256[],bytes,bytes),(uint8,bytes),((bool,address,uint256,bytes)[],(bool,address,uint256,bytes)[]),(uint256[],uint16))", {"order": p.struct({"taker": p.address, "receiver": p.address, "expiry": p.uint256, "nonce": p.uint256, "executor": p.address, "minFillPercent": p.uint16, "hooksHash": p.bytes32, "sellTokens": p.array(p.address), "buyTokens": p.array(p.address), "sellAmounts": p.array(p.uint256), "buyAmounts": p.array(p.uint256), "sellNFTIds": p.array(p.uint256), "buyNFTIds": p.array(p.uint256), "sellTokenTransfers": p.bytes, "buyTokenTransfers": p.bytes}), "signature": p.struct({"signatureType": p.uint8, "signatureBytes": p.bytes}), "hooks": p.struct({"beforeSettle": p.array(p.struct({"result": p.bool, "to": p.address, "value": p.uint256, "data": p.bytes})), "afterSettle": p.array(p.struct({"result": p.bool, "to": p.address, "value": p.uint256, "data": p.bytes}))}), "makerData": p.struct({"increasedBuyAmounts": p.array(p.uint256), "curFillPercent": p.uint16})}, ),
    settleInternalWithPermitsSignatures: fun("0x28b2a796", "settleInternalWithPermitsSignatures((address,address,uint256,uint256,address,uint16,bytes32,address[],address[],uint256[],uint256[],uint256[],uint256[],bytes,bytes),(uint8,bytes),(bytes[],bytes,uint48[],uint48),((bool,address,uint256,bytes)[],(bool,address,uint256,bytes)[]),(uint256[],uint16))", {"order": p.struct({"taker": p.address, "receiver": p.address, "expiry": p.uint256, "nonce": p.uint256, "executor": p.address, "minFillPercent": p.uint16, "hooksHash": p.bytes32, "sellTokens": p.array(p.address), "buyTokens": p.array(p.address), "sellAmounts": p.array(p.uint256), "buyAmounts": p.array(p.uint256), "sellNFTIds": p.array(p.uint256), "buyNFTIds": p.array(p.uint256), "sellTokenTransfers": p.bytes, "buyTokenTransfers": p.bytes}), "signature": p.struct({"signatureType": p.uint8, "signatureBytes": p.bytes}), "takerPermitsInfo": p.struct({"permitSignatures": p.array(p.bytes), "signatureBytesPermit2": p.bytes, "noncesPermit2": p.array(p.uint48), "deadline": p.uint48}), "hooks": p.struct({"beforeSettle": p.array(p.struct({"result": p.bool, "to": p.address, "value": p.uint256, "data": p.bytes})), "afterSettle": p.array(p.struct({"result": p.bool, "to": p.address, "value": p.uint256, "data": p.bytes}))}), "makerData": p.struct({"increasedBuyAmounts": p.array(p.uint256), "curFillPercent": p.uint16})}, ),
    settleWithPermitsSignatures: fun("0xec983776", "settleWithPermitsSignatures((address,address,uint256,uint256,address,uint16,bytes32,address[],address[],uint256[],uint256[],uint256[],uint256[],bytes,bytes),(uint8,bytes),(bytes[],bytes,uint48[],uint48),(bool,address,uint256,bytes)[],((bool,address,uint256,bytes)[],(bool,address,uint256,bytes)[]),(address,uint16))", {"order": p.struct({"taker": p.address, "receiver": p.address, "expiry": p.uint256, "nonce": p.uint256, "executor": p.address, "minFillPercent": p.uint16, "hooksHash": p.bytes32, "sellTokens": p.array(p.address), "buyTokens": p.array(p.address), "sellAmounts": p.array(p.uint256), "buyAmounts": p.array(p.uint256), "sellNFTIds": p.array(p.uint256), "buyNFTIds": p.array(p.uint256), "sellTokenTransfers": p.bytes, "buyTokenTransfers": p.bytes}), "signature": p.struct({"signatureType": p.uint8, "signatureBytes": p.bytes}), "takerPermitsInfo": p.struct({"permitSignatures": p.array(p.bytes), "signatureBytesPermit2": p.bytes, "noncesPermit2": p.array(p.uint48), "deadline": p.uint48}), "interactions": p.array(p.struct({"result": p.bool, "to": p.address, "value": p.uint256, "data": p.bytes})), "hooks": p.struct({"beforeSettle": p.array(p.struct({"result": p.bool, "to": p.address, "value": p.uint256, "data": p.bytes})), "afterSettle": p.array(p.struct({"result": p.bool, "to": p.address, "value": p.uint256, "data": p.bytes}))}), "solverData": p.struct({"balanceRecipient": p.address, "curFillPercent": p.uint16})}, ),
    supportsInterface: viewFun("0x01ffc9a7", "supportsInterface(bytes4)", {"interfaceId": p.bytes4}, p.bool),
    transferNativeFromContract: fun("0x7c317e0f", "transferNativeFromContract(address,uint256)", {"receiver": p.address, "amount": p.uint256}, ),
    validateSignature: viewFun("0xaf2ad510", "validateSignature(address,bytes32,(uint8,bytes))", {"validationAddress": p.address, "hash": p.bytes32, "signature": p.struct({"signatureType": p.uint8, "signatureBytes": p.bytes})}, ),
}

export class Contract extends ContractBase {

    DOMAIN_SEPARATOR() {
        return this.eth_call(functions.DOMAIN_SEPARATOR, {})
    }

    EIP712_DOMAIN_TYPEHASH() {
        return this.eth_call(functions.EIP712_DOMAIN_TYPEHASH, {})
    }

    JAM_ORDER_TYPE_HASH() {
        return this.eth_call(functions.JAM_ORDER_TYPE_HASH, {})
    }

    balanceManager() {
        return this.eth_call(functions.balanceManager, {})
    }

    hashHooks(hooks: HashHooksParams["hooks"]) {
        return this.eth_call(functions.hashHooks, {hooks})
    }

    hashOrder(order: HashOrderParams["order"], hooksHash: HashOrderParams["hooksHash"]) {
        return this.eth_call(functions.hashOrder, {order, hooksHash})
    }

    isLimitOrderNonceValid(taker: IsLimitOrderNonceValidParams["taker"], nonce: IsLimitOrderNonceValidParams["nonce"]) {
        return this.eth_call(functions.isLimitOrderNonceValid, {taker, nonce})
    }

    supportsInterface(interfaceId: SupportsInterfaceParams["interfaceId"]) {
        return this.eth_call(functions.supportsInterface, {interfaceId})
    }
}

/// Event types
export type NativeTransferEventArgs = EParams<typeof events.NativeTransfer>
export type SettlementEventArgs = EParams<typeof events.Settlement>

/// Function types
export type DOMAIN_SEPARATORParams = FunctionArguments<typeof functions.DOMAIN_SEPARATOR>
export type DOMAIN_SEPARATORReturn = FunctionReturn<typeof functions.DOMAIN_SEPARATOR>

export type EIP712_DOMAIN_TYPEHASHParams = FunctionArguments<typeof functions.EIP712_DOMAIN_TYPEHASH>
export type EIP712_DOMAIN_TYPEHASHReturn = FunctionReturn<typeof functions.EIP712_DOMAIN_TYPEHASH>

export type JAM_ORDER_TYPE_HASHParams = FunctionArguments<typeof functions.JAM_ORDER_TYPE_HASH>
export type JAM_ORDER_TYPE_HASHReturn = FunctionReturn<typeof functions.JAM_ORDER_TYPE_HASH>

export type BalanceManagerParams = FunctionArguments<typeof functions.balanceManager>
export type BalanceManagerReturn = FunctionReturn<typeof functions.balanceManager>

export type CancelLimitOrderParams = FunctionArguments<typeof functions.cancelLimitOrder>
export type CancelLimitOrderReturn = FunctionReturn<typeof functions.cancelLimitOrder>

export type HashHooksParams = FunctionArguments<typeof functions.hashHooks>
export type HashHooksReturn = FunctionReturn<typeof functions.hashHooks>

export type HashOrderParams = FunctionArguments<typeof functions.hashOrder>
export type HashOrderReturn = FunctionReturn<typeof functions.hashOrder>

export type IsLimitOrderNonceValidParams = FunctionArguments<typeof functions.isLimitOrderNonceValid>
export type IsLimitOrderNonceValidReturn = FunctionReturn<typeof functions.isLimitOrderNonceValid>

export type OnERC1155BatchReceivedParams = FunctionArguments<typeof functions.onERC1155BatchReceived>
export type OnERC1155BatchReceivedReturn = FunctionReturn<typeof functions.onERC1155BatchReceived>

export type OnERC1155ReceivedParams = FunctionArguments<typeof functions.onERC1155Received>
export type OnERC1155ReceivedReturn = FunctionReturn<typeof functions.onERC1155Received>

export type OnERC721ReceivedParams = FunctionArguments<typeof functions.onERC721Received>
export type OnERC721ReceivedReturn = FunctionReturn<typeof functions.onERC721Received>

export type SettleParams = FunctionArguments<typeof functions.settle>
export type SettleReturn = FunctionReturn<typeof functions.settle>

export type SettleBatchParams = FunctionArguments<typeof functions.settleBatch>
export type SettleBatchReturn = FunctionReturn<typeof functions.settleBatch>

export type SettleInternalParams = FunctionArguments<typeof functions.settleInternal>
export type SettleInternalReturn = FunctionReturn<typeof functions.settleInternal>

export type SettleInternalWithPermitsSignaturesParams = FunctionArguments<typeof functions.settleInternalWithPermitsSignatures>
export type SettleInternalWithPermitsSignaturesReturn = FunctionReturn<typeof functions.settleInternalWithPermitsSignatures>

export type SettleWithPermitsSignaturesParams = FunctionArguments<typeof functions.settleWithPermitsSignatures>
export type SettleWithPermitsSignaturesReturn = FunctionReturn<typeof functions.settleWithPermitsSignatures>

export type SupportsInterfaceParams = FunctionArguments<typeof functions.supportsInterface>
export type SupportsInterfaceReturn = FunctionReturn<typeof functions.supportsInterface>

export type TransferNativeFromContractParams = FunctionArguments<typeof functions.transferNativeFromContract>
export type TransferNativeFromContractReturn = FunctionReturn<typeof functions.transferNativeFromContract>

export type ValidateSignatureParams = FunctionArguments<typeof functions.validateSignature>
export type ValidateSignatureReturn = FunctionReturn<typeof functions.validateSignature>

