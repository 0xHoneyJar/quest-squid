import * as p from '@subsquid/evm-codec'
import { event, fun, viewFun, indexed, ContractBase } from '@subsquid/evm-abi'
import type { EventParams as EParams, FunctionArguments, FunctionReturn } from '@subsquid/evm-abi'

export const events = {
    EnforcedOptionSet: event("0xbe4864a8e820971c0247f5992e2da559595f7bf076a21cb5928d443d2a13b674", "EnforcedOptionSet((uint32,uint16,bytes)[])", {"_enforcedOptions": p.array(p.struct({"eid": p.uint32, "msgType": p.uint16, "options": p.bytes}))}),
    KingdomlyFeeContractChanged: event("0x65b193217dd691927510cfa45296799f4dc5a6b0d113a7f1863661cd57b1587f", "KingdomlyFeeContractChanged(address)", {"feeContractAddress": p.address}),
    MsgInspectorSet: event("0xf0be4f1e87349231d80c36b33f9e8639658eeaf474014dee15a3e6a4d4414197", "MsgInspectorSet(address)", {"inspector": p.address}),
    ONFTReceived: event("0x7883fa30ea56937810e36990b0bbb8d629d0cf59f68baf8431ff657cebe7eef5", "ONFTReceived(bytes32,uint32,address,uint256)", {"guid": indexed(p.bytes32), "srcEid": p.uint32, "toAddress": indexed(p.address), "tokenId": p.uint256}),
    ONFTSent: event("0x986156872b2ee0022b9585231dbbfde457f87f8a16b6c45e1a81c54c4ad8351f", "ONFTSent(bytes32,uint32,address,uint256)", {"guid": indexed(p.bytes32), "dstEid": p.uint32, "fromAddress": indexed(p.address), "tokenId": p.uint256}),
    OwnershipTransferred: event("0x8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0", "OwnershipTransferred(address,address)", {"previousOwner": indexed(p.address), "newOwner": indexed(p.address)}),
    PeerSet: event("0x238399d427b947898edb290f5ff0f9109849b1c3ba196a42e35f00c50a54b98b", "PeerSet(uint32,bytes32)", {"eid": p.uint32, "peer": p.bytes32}),
    PreCrimeSet: event("0xd48d879cef83a1c0bdda516f27b13ddb1b3f8bbac1c9e1511bb2a659c2427760", "PreCrimeSet(address)", {"preCrimeAddress": p.address}),
}

export const functions = {
    SEND: viewFun("0x1f5e1334", "SEND()", {}, p.uint16),
    SEND_AND_COMPOSE: viewFun("0xb21a33e4", "SEND_AND_COMPOSE()", {}, p.uint16),
    allowInitializePath: viewFun("0xff7bd03d", "allowInitializePath((uint32,bytes32,uint64))", {"origin": p.struct({"srcEid": p.uint32, "sender": p.bytes32, "nonce": p.uint64})}, p.bool),
    approvalRequired: viewFun("0x9f68b964", "approvalRequired()", {}, p.bool),
    batchSend: fun("0x34bfbf04", "batchSend((uint32,bytes32,uint256,bytes,bytes,bytes)[],(uint256,uint256),address,bool)", {"_sendParams": p.array(p.struct({"dstEid": p.uint32, "to": p.bytes32, "tokenId": p.uint256, "extraOptions": p.bytes, "composeMsg": p.bytes, "onftCmd": p.bytes})), "_fee": p.struct({"nativeFee": p.uint256, "lzTokenFee": p.uint256}), "_refundAddress": p.address, "_payInLzToken": p.bool}, ),
    bridgeFeeInCents: viewFun("0x642a1edf", "bridgeFeeInCents()", {}, p.uint256),
    combineOptions: viewFun("0xbc70b354", "combineOptions(uint32,uint16,bytes)", {"_eid": p.uint32, "_msgType": p.uint16, "_extraOptions": p.bytes}, p.bytes),
    endpoint: viewFun("0x5e280f11", "endpoint()", {}, p.address),
    enforcedOptions: viewFun("0x5535d461", "enforcedOptions(uint32,uint16)", {"eid": p.uint32, "msgType": p.uint16}, p.bytes),
    feeCollectionAddress: viewFun("0x377c50d4", "feeCollectionAddress()", {}, p.address),
    getBridgeNativeFee: viewFun("0xac28dbdc", "getBridgeNativeFee()", {}, p.uint256),
    getKingdomlyFeeContract: viewFun("0x93a24841", "getKingdomlyFeeContract()", {}, p.address),
    hasPeer: viewFun("0xd1563aed", "hasPeer(uint32)", {"_eid": p.uint32}, p.bool),
    isComposeMsgSender: viewFun("0x82413eac", "isComposeMsgSender((uint32,bytes32,uint64),bytes,address)", {"_0": p.struct({"srcEid": p.uint32, "sender": p.bytes32, "nonce": p.uint64}), "_1": p.bytes, "_sender": p.address}, p.bool),
    isPeer: viewFun("0x5a0dfe4d", "isPeer(uint32,bytes32)", {"_eid": p.uint32, "_peer": p.bytes32}, p.bool),
    kingdomlyAdmin: viewFun("0x63691c93", "kingdomlyAdmin()", {}, p.address),
    kingdomlyFeeContract: viewFun("0xefe82328", "kingdomlyFeeContract()", {}, p.address),
    lzReceive: fun("0x13137d65", "lzReceive((uint32,bytes32,uint64),bytes32,bytes,address,bytes)", {"_origin": p.struct({"srcEid": p.uint32, "sender": p.bytes32, "nonce": p.uint64}), "_guid": p.bytes32, "_message": p.bytes, "_executor": p.address, "_extraData": p.bytes}, ),
    lzReceiveAndRevert: fun("0xbd815db0", "lzReceiveAndRevert(((uint32,bytes32,uint64),uint32,address,bytes32,uint256,address,bytes,bytes)[])", {"_packets": p.array(p.struct({"origin": p.struct({"srcEid": p.uint32, "sender": p.bytes32, "nonce": p.uint64}), "dstEid": p.uint32, "receiver": p.address, "guid": p.bytes32, "value": p.uint256, "executor": p.address, "message": p.bytes, "extraData": p.bytes}))}, ),
    lzReceiveSimulate: fun("0xd045a0dc", "lzReceiveSimulate((uint32,bytes32,uint64),bytes32,bytes,address,bytes)", {"_origin": p.struct({"srcEid": p.uint32, "sender": p.bytes32, "nonce": p.uint64}), "_guid": p.bytes32, "_message": p.bytes, "_executor": p.address, "_extraData": p.bytes}, ),
    msgInspector: viewFun("0x111ecdad", "msgInspector()", {}, p.address),
    nextNonce: viewFun("0x7d25a05e", "nextNonce(uint32,bytes32)", {"_0": p.uint32, "_1": p.bytes32}, p.uint64),
    oApp: viewFun("0x52ae2879", "oApp()", {}, p.address),
    oAppVersion: viewFun("0x17442b70", "oAppVersion()", {}, {"senderVersion": p.uint64, "receiverVersion": p.uint64}),
    onftVersion: viewFun("0xa72f5dd8", "onftVersion()", {}, {"interfaceId": p.bytes4, "version": p.uint64}),
    owner: viewFun("0x8da5cb5b", "owner()", {}, p.address),
    peers: viewFun("0xbb0b6a53", "peers(uint32)", {"eid": p.uint32}, p.bytes32),
    preCrime: viewFun("0xb731ea0a", "preCrime()", {}, p.address),
    quoteBatchSend: viewFun("0x71e5716a", "quoteBatchSend((uint32,bytes32,uint256,bytes,bytes,bytes)[],bool)", {"_sendParams": p.array(p.struct({"dstEid": p.uint32, "to": p.bytes32, "tokenId": p.uint256, "extraOptions": p.bytes, "composeMsg": p.bytes, "onftCmd": p.bytes})), "_payInLzToken": p.bool}, {"totalBatchMsgFee": p.struct({"nativeFee": p.uint256, "lzTokenFee": p.uint256}), "msgFees": p.array(p.struct({"nativeFee": p.uint256, "lzTokenFee": p.uint256}))}),
    quoteSend: viewFun("0xc6414e7b", "quoteSend((uint32,bytes32,uint256,bytes,bytes,bytes),bool)", {"_sendParam": p.struct({"dstEid": p.uint32, "to": p.bytes32, "tokenId": p.uint256, "extraOptions": p.bytes, "composeMsg": p.bytes, "onftCmd": p.bytes}), "_payInLzToken": p.bool}, p.struct({"nativeFee": p.uint256, "lzTokenFee": p.uint256})),
    renounceOwnership: fun("0x715018a6", "renounceOwnership()", {}, ),
    send: fun("0x21eb730b", "send((uint32,bytes32,uint256,bytes,bytes,bytes),(uint256,uint256),address)", {"_sendParam": p.struct({"dstEid": p.uint32, "to": p.bytes32, "tokenId": p.uint256, "extraOptions": p.bytes, "composeMsg": p.bytes, "onftCmd": p.bytes}), "_fee": p.struct({"nativeFee": p.uint256, "lzTokenFee": p.uint256}), "_refundAddress": p.address}, p.struct({"guid": p.bytes32, "nonce": p.uint64, "fee": p.struct({"nativeFee": p.uint256, "lzTokenFee": p.uint256})})),
    setDelegate: fun("0xca5eb5e1", "setDelegate(address)", {"_delegate": p.address}, ),
    setEnforcedOptions: fun("0xb98bd070", "setEnforcedOptions((uint32,uint16,bytes)[])", {"_enforcedOptions": p.array(p.struct({"eid": p.uint32, "msgType": p.uint16, "options": p.bytes}))}, ),
    setMsgInspector: fun("0x6fc1b31e", "setMsgInspector(address)", {"_msgInspector": p.address}, ),
    setNewKingdomlyFeeContract: fun("0x1f466342", "setNewKingdomlyFeeContract(address)", {"_kingdomlyFeeContract": p.address}, ),
    setPeer: fun("0x3400288b", "setPeer(uint32,bytes32)", {"_eid": p.uint32, "_peer": p.bytes32}, ),
    setPreCrime: fun("0xd4243885", "setPreCrime(address)", {"_preCrime": p.address}, ),
    token: viewFun("0xfc0c546a", "token()", {}, p.address),
    transferOwnership: fun("0xf2fde38b", "transferOwnership(address)", {"newOwner": p.address}, ),
}

export class Contract extends ContractBase {

    SEND() {
        return this.eth_call(functions.SEND, {})
    }

    SEND_AND_COMPOSE() {
        return this.eth_call(functions.SEND_AND_COMPOSE, {})
    }

    allowInitializePath(origin: AllowInitializePathParams["origin"]) {
        return this.eth_call(functions.allowInitializePath, {origin})
    }

    approvalRequired() {
        return this.eth_call(functions.approvalRequired, {})
    }

    bridgeFeeInCents() {
        return this.eth_call(functions.bridgeFeeInCents, {})
    }

    combineOptions(_eid: CombineOptionsParams["_eid"], _msgType: CombineOptionsParams["_msgType"], _extraOptions: CombineOptionsParams["_extraOptions"]) {
        return this.eth_call(functions.combineOptions, {_eid, _msgType, _extraOptions})
    }

    endpoint() {
        return this.eth_call(functions.endpoint, {})
    }

    enforcedOptions(eid: EnforcedOptionsParams["eid"], msgType: EnforcedOptionsParams["msgType"]) {
        return this.eth_call(functions.enforcedOptions, {eid, msgType})
    }

    feeCollectionAddress() {
        return this.eth_call(functions.feeCollectionAddress, {})
    }

    getBridgeNativeFee() {
        return this.eth_call(functions.getBridgeNativeFee, {})
    }

    getKingdomlyFeeContract() {
        return this.eth_call(functions.getKingdomlyFeeContract, {})
    }

    hasPeer(_eid: HasPeerParams["_eid"]) {
        return this.eth_call(functions.hasPeer, {_eid})
    }

    isComposeMsgSender(_0: IsComposeMsgSenderParams["_0"], _1: IsComposeMsgSenderParams["_1"], _sender: IsComposeMsgSenderParams["_sender"]) {
        return this.eth_call(functions.isComposeMsgSender, {_0, _1, _sender})
    }

    isPeer(_eid: IsPeerParams["_eid"], _peer: IsPeerParams["_peer"]) {
        return this.eth_call(functions.isPeer, {_eid, _peer})
    }

    kingdomlyAdmin() {
        return this.eth_call(functions.kingdomlyAdmin, {})
    }

    kingdomlyFeeContract() {
        return this.eth_call(functions.kingdomlyFeeContract, {})
    }

    msgInspector() {
        return this.eth_call(functions.msgInspector, {})
    }

    nextNonce(_0: NextNonceParams["_0"], _1: NextNonceParams["_1"]) {
        return this.eth_call(functions.nextNonce, {_0, _1})
    }

    oApp() {
        return this.eth_call(functions.oApp, {})
    }

    oAppVersion() {
        return this.eth_call(functions.oAppVersion, {})
    }

    onftVersion() {
        return this.eth_call(functions.onftVersion, {})
    }

    owner() {
        return this.eth_call(functions.owner, {})
    }

    peers(eid: PeersParams["eid"]) {
        return this.eth_call(functions.peers, {eid})
    }

    preCrime() {
        return this.eth_call(functions.preCrime, {})
    }

    quoteBatchSend(_sendParams: QuoteBatchSendParams["_sendParams"], _payInLzToken: QuoteBatchSendParams["_payInLzToken"]) {
        return this.eth_call(functions.quoteBatchSend, {_sendParams, _payInLzToken})
    }

    quoteSend(_sendParam: QuoteSendParams["_sendParam"], _payInLzToken: QuoteSendParams["_payInLzToken"]) {
        return this.eth_call(functions.quoteSend, {_sendParam, _payInLzToken})
    }

    token() {
        return this.eth_call(functions.token, {})
    }
}

/// Event types
export type EnforcedOptionSetEventArgs = EParams<typeof events.EnforcedOptionSet>
export type KingdomlyFeeContractChangedEventArgs = EParams<typeof events.KingdomlyFeeContractChanged>
export type MsgInspectorSetEventArgs = EParams<typeof events.MsgInspectorSet>
export type ONFTReceivedEventArgs = EParams<typeof events.ONFTReceived>
export type ONFTSentEventArgs = EParams<typeof events.ONFTSent>
export type OwnershipTransferredEventArgs = EParams<typeof events.OwnershipTransferred>
export type PeerSetEventArgs = EParams<typeof events.PeerSet>
export type PreCrimeSetEventArgs = EParams<typeof events.PreCrimeSet>

/// Function types
export type SENDParams = FunctionArguments<typeof functions.SEND>
export type SENDReturn = FunctionReturn<typeof functions.SEND>

export type SEND_AND_COMPOSEParams = FunctionArguments<typeof functions.SEND_AND_COMPOSE>
export type SEND_AND_COMPOSEReturn = FunctionReturn<typeof functions.SEND_AND_COMPOSE>

export type AllowInitializePathParams = FunctionArguments<typeof functions.allowInitializePath>
export type AllowInitializePathReturn = FunctionReturn<typeof functions.allowInitializePath>

export type ApprovalRequiredParams = FunctionArguments<typeof functions.approvalRequired>
export type ApprovalRequiredReturn = FunctionReturn<typeof functions.approvalRequired>

export type BatchSendParams = FunctionArguments<typeof functions.batchSend>
export type BatchSendReturn = FunctionReturn<typeof functions.batchSend>

export type BridgeFeeInCentsParams = FunctionArguments<typeof functions.bridgeFeeInCents>
export type BridgeFeeInCentsReturn = FunctionReturn<typeof functions.bridgeFeeInCents>

export type CombineOptionsParams = FunctionArguments<typeof functions.combineOptions>
export type CombineOptionsReturn = FunctionReturn<typeof functions.combineOptions>

export type EndpointParams = FunctionArguments<typeof functions.endpoint>
export type EndpointReturn = FunctionReturn<typeof functions.endpoint>

export type EnforcedOptionsParams = FunctionArguments<typeof functions.enforcedOptions>
export type EnforcedOptionsReturn = FunctionReturn<typeof functions.enforcedOptions>

export type FeeCollectionAddressParams = FunctionArguments<typeof functions.feeCollectionAddress>
export type FeeCollectionAddressReturn = FunctionReturn<typeof functions.feeCollectionAddress>

export type GetBridgeNativeFeeParams = FunctionArguments<typeof functions.getBridgeNativeFee>
export type GetBridgeNativeFeeReturn = FunctionReturn<typeof functions.getBridgeNativeFee>

export type GetKingdomlyFeeContractParams = FunctionArguments<typeof functions.getKingdomlyFeeContract>
export type GetKingdomlyFeeContractReturn = FunctionReturn<typeof functions.getKingdomlyFeeContract>

export type HasPeerParams = FunctionArguments<typeof functions.hasPeer>
export type HasPeerReturn = FunctionReturn<typeof functions.hasPeer>

export type IsComposeMsgSenderParams = FunctionArguments<typeof functions.isComposeMsgSender>
export type IsComposeMsgSenderReturn = FunctionReturn<typeof functions.isComposeMsgSender>

export type IsPeerParams = FunctionArguments<typeof functions.isPeer>
export type IsPeerReturn = FunctionReturn<typeof functions.isPeer>

export type KingdomlyAdminParams = FunctionArguments<typeof functions.kingdomlyAdmin>
export type KingdomlyAdminReturn = FunctionReturn<typeof functions.kingdomlyAdmin>

export type KingdomlyFeeContractParams = FunctionArguments<typeof functions.kingdomlyFeeContract>
export type KingdomlyFeeContractReturn = FunctionReturn<typeof functions.kingdomlyFeeContract>

export type LzReceiveParams = FunctionArguments<typeof functions.lzReceive>
export type LzReceiveReturn = FunctionReturn<typeof functions.lzReceive>

export type LzReceiveAndRevertParams = FunctionArguments<typeof functions.lzReceiveAndRevert>
export type LzReceiveAndRevertReturn = FunctionReturn<typeof functions.lzReceiveAndRevert>

export type LzReceiveSimulateParams = FunctionArguments<typeof functions.lzReceiveSimulate>
export type LzReceiveSimulateReturn = FunctionReturn<typeof functions.lzReceiveSimulate>

export type MsgInspectorParams = FunctionArguments<typeof functions.msgInspector>
export type MsgInspectorReturn = FunctionReturn<typeof functions.msgInspector>

export type NextNonceParams = FunctionArguments<typeof functions.nextNonce>
export type NextNonceReturn = FunctionReturn<typeof functions.nextNonce>

export type OAppParams = FunctionArguments<typeof functions.oApp>
export type OAppReturn = FunctionReturn<typeof functions.oApp>

export type OAppVersionParams = FunctionArguments<typeof functions.oAppVersion>
export type OAppVersionReturn = FunctionReturn<typeof functions.oAppVersion>

export type OnftVersionParams = FunctionArguments<typeof functions.onftVersion>
export type OnftVersionReturn = FunctionReturn<typeof functions.onftVersion>

export type OwnerParams = FunctionArguments<typeof functions.owner>
export type OwnerReturn = FunctionReturn<typeof functions.owner>

export type PeersParams = FunctionArguments<typeof functions.peers>
export type PeersReturn = FunctionReturn<typeof functions.peers>

export type PreCrimeParams = FunctionArguments<typeof functions.preCrime>
export type PreCrimeReturn = FunctionReturn<typeof functions.preCrime>

export type QuoteBatchSendParams = FunctionArguments<typeof functions.quoteBatchSend>
export type QuoteBatchSendReturn = FunctionReturn<typeof functions.quoteBatchSend>

export type QuoteSendParams = FunctionArguments<typeof functions.quoteSend>
export type QuoteSendReturn = FunctionReturn<typeof functions.quoteSend>

export type RenounceOwnershipParams = FunctionArguments<typeof functions.renounceOwnership>
export type RenounceOwnershipReturn = FunctionReturn<typeof functions.renounceOwnership>

export type SendParams = FunctionArguments<typeof functions.send>
export type SendReturn = FunctionReturn<typeof functions.send>

export type SetDelegateParams = FunctionArguments<typeof functions.setDelegate>
export type SetDelegateReturn = FunctionReturn<typeof functions.setDelegate>

export type SetEnforcedOptionsParams = FunctionArguments<typeof functions.setEnforcedOptions>
export type SetEnforcedOptionsReturn = FunctionReturn<typeof functions.setEnforcedOptions>

export type SetMsgInspectorParams = FunctionArguments<typeof functions.setMsgInspector>
export type SetMsgInspectorReturn = FunctionReturn<typeof functions.setMsgInspector>

export type SetNewKingdomlyFeeContractParams = FunctionArguments<typeof functions.setNewKingdomlyFeeContract>
export type SetNewKingdomlyFeeContractReturn = FunctionReturn<typeof functions.setNewKingdomlyFeeContract>

export type SetPeerParams = FunctionArguments<typeof functions.setPeer>
export type SetPeerReturn = FunctionReturn<typeof functions.setPeer>

export type SetPreCrimeParams = FunctionArguments<typeof functions.setPreCrime>
export type SetPreCrimeReturn = FunctionReturn<typeof functions.setPreCrime>

export type TokenParams = FunctionArguments<typeof functions.token>
export type TokenReturn = FunctionReturn<typeof functions.token>

export type TransferOwnershipParams = FunctionArguments<typeof functions.transferOwnership>
export type TransferOwnershipReturn = FunctionReturn<typeof functions.transferOwnership>

