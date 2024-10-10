import * as p from '@subsquid/evm-codec'
import { event, fun, viewFun, indexed, ContractBase } from '@subsquid/evm-abi'
import type { EventParams as EParams, FunctionArguments, FunctionReturn } from '@subsquid/evm-abi'

export const events = {
    BridgeCallTriggered: event("0x2d9d115ef3e4a606d698913b1eae831a3cdfe20d9a83d48007b0526749c3d466", "BridgeCallTriggered(address,address,uint256,bytes)", {"outbox": indexed(p.address), "to": indexed(p.address), "value": p.uint256, "data": p.bytes}),
    InboxToggle: event("0x6675ce8882cb71637de5903a193d218cc0544be9c0650cb83e0955f6aa2bf521", "InboxToggle(address,bool)", {"inbox": indexed(p.address), "enabled": p.bool}),
    MessageDelivered: event("0x5e3c1311ea442664e8b1611bfabef659120ea7a0a2cfc0667700bebc69cbffe1", "MessageDelivered(uint256,bytes32,address,uint8,address,bytes32,uint256,uint64)", {"messageIndex": indexed(p.uint256), "beforeInboxAcc": indexed(p.bytes32), "inbox": p.address, "kind": p.uint8, "sender": p.address, "messageDataHash": p.bytes32, "baseFeeL1": p.uint256, "timestamp": p.uint64}),
    OutboxToggle: event("0x49477e7356dbcb654ab85d7534b50126772d938130d1350e23e2540370c8dffa", "OutboxToggle(address,bool)", {"outbox": indexed(p.address), "enabled": p.bool}),
    RollupUpdated: event("0xae1f5aa15f6ff844896347ceca2a3c24c8d3a27785efdeacd581a0a95172784a", "RollupUpdated(address)", {"rollup": p.address}),
    SequencerInboxUpdated: event("0x8c1e6003ed33ca6748d4ad3dd4ecc949065c89dceb31fdf546a5289202763c6a", "SequencerInboxUpdated(address)", {"newSequencerInbox": p.address}),
}

export const functions = {
    acceptFundsFromOldBridge: fun("0xe77145f4", "acceptFundsFromOldBridge()", {}, ),
    activeOutbox: viewFun("0xab5d8943", "activeOutbox()", {}, p.address),
    allowedDelayedInboxList: viewFun("0xe76f5c8d", "allowedDelayedInboxList(uint256)", {"_0": p.uint256}, p.address),
    allowedDelayedInboxes: viewFun("0xae60bd13", "allowedDelayedInboxes(address)", {"inbox": p.address}, p.bool),
    allowedOutboxList: viewFun("0x945e1147", "allowedOutboxList(uint256)", {"_0": p.uint256}, p.address),
    allowedOutboxes: viewFun("0x413b35bd", "allowedOutboxes(address)", {"outbox": p.address}, p.bool),
    delayedInboxAccs: viewFun("0xd5719dc2", "delayedInboxAccs(uint256)", {"_0": p.uint256}, p.bytes32),
    delayedMessageCount: viewFun("0xeca067ad", "delayedMessageCount()", {}, p.uint256),
    enqueueDelayedMessage: fun("0x8db5993b", "enqueueDelayedMessage(uint8,address,bytes32)", {"kind": p.uint8, "sender": p.address, "messageDataHash": p.bytes32}, p.uint256),
    enqueueSequencerMessage: fun("0x86598a56", "enqueueSequencerMessage(bytes32,uint256,uint256,uint256)", {"dataHash": p.bytes32, "afterDelayedMessagesRead": p.uint256, "prevMessageCount": p.uint256, "newMessageCount": p.uint256}, {"seqMessageIndex": p.uint256, "beforeAcc": p.bytes32, "delayedAcc": p.bytes32, "acc": p.bytes32}),
    executeCall: fun("0x9e5d4c49", "executeCall(address,uint256,bytes)", {"to": p.address, "value": p.uint256, "data": p.bytes}, {"success": p.bool, "returnData": p.bytes}),
    initialize: fun("0xc4d66de8", "initialize(address)", {"rollup_": p.address}, ),
    rollup: viewFun("0xcb23bcb5", "rollup()", {}, p.address),
    sequencerInbox: viewFun("0xee35f327", "sequencerInbox()", {}, p.address),
    sequencerInboxAccs: viewFun("0x16bf5579", "sequencerInboxAccs(uint256)", {"_0": p.uint256}, p.bytes32),
    sequencerMessageCount: viewFun("0x0084120c", "sequencerMessageCount()", {}, p.uint256),
    sequencerReportedSubMessageCount: viewFun("0x5fca4a16", "sequencerReportedSubMessageCount()", {}, p.uint256),
    setDelayedInbox: fun("0x47fb24c5", "setDelayedInbox(address,bool)", {"inbox": p.address, "enabled": p.bool}, ),
    setOutbox: fun("0xcee3d728", "setOutbox(address,bool)", {"outbox": p.address, "enabled": p.bool}, ),
    setSequencerInbox: fun("0x4f61f850", "setSequencerInbox(address)", {"_sequencerInbox": p.address}, ),
    setSequencerReportedSubMessageCount: fun("0xf81ff3b3", "setSequencerReportedSubMessageCount(uint256)", {"newMsgCount": p.uint256}, ),
    submitBatchSpendingReport: fun("0x7a88b107", "submitBatchSpendingReport(address,bytes32)", {"sender": p.address, "messageDataHash": p.bytes32}, p.uint256),
    updateRollupAddress: fun("0x919cc706", "updateRollupAddress(address)", {"_rollup": p.address}, ),
}

export class Contract extends ContractBase {

    activeOutbox() {
        return this.eth_call(functions.activeOutbox, {})
    }

    allowedDelayedInboxList(_0: AllowedDelayedInboxListParams["_0"]) {
        return this.eth_call(functions.allowedDelayedInboxList, {_0})
    }

    allowedDelayedInboxes(inbox: AllowedDelayedInboxesParams["inbox"]) {
        return this.eth_call(functions.allowedDelayedInboxes, {inbox})
    }

    allowedOutboxList(_0: AllowedOutboxListParams["_0"]) {
        return this.eth_call(functions.allowedOutboxList, {_0})
    }

    allowedOutboxes(outbox: AllowedOutboxesParams["outbox"]) {
        return this.eth_call(functions.allowedOutboxes, {outbox})
    }

    delayedInboxAccs(_0: DelayedInboxAccsParams["_0"]) {
        return this.eth_call(functions.delayedInboxAccs, {_0})
    }

    delayedMessageCount() {
        return this.eth_call(functions.delayedMessageCount, {})
    }

    rollup() {
        return this.eth_call(functions.rollup, {})
    }

    sequencerInbox() {
        return this.eth_call(functions.sequencerInbox, {})
    }

    sequencerInboxAccs(_0: SequencerInboxAccsParams["_0"]) {
        return this.eth_call(functions.sequencerInboxAccs, {_0})
    }

    sequencerMessageCount() {
        return this.eth_call(functions.sequencerMessageCount, {})
    }

    sequencerReportedSubMessageCount() {
        return this.eth_call(functions.sequencerReportedSubMessageCount, {})
    }
}

/// Event types
export type BridgeCallTriggeredEventArgs = EParams<typeof events.BridgeCallTriggered>
export type InboxToggleEventArgs = EParams<typeof events.InboxToggle>
export type MessageDeliveredEventArgs = EParams<typeof events.MessageDelivered>
export type OutboxToggleEventArgs = EParams<typeof events.OutboxToggle>
export type RollupUpdatedEventArgs = EParams<typeof events.RollupUpdated>
export type SequencerInboxUpdatedEventArgs = EParams<typeof events.SequencerInboxUpdated>

/// Function types
export type AcceptFundsFromOldBridgeParams = FunctionArguments<typeof functions.acceptFundsFromOldBridge>
export type AcceptFundsFromOldBridgeReturn = FunctionReturn<typeof functions.acceptFundsFromOldBridge>

export type ActiveOutboxParams = FunctionArguments<typeof functions.activeOutbox>
export type ActiveOutboxReturn = FunctionReturn<typeof functions.activeOutbox>

export type AllowedDelayedInboxListParams = FunctionArguments<typeof functions.allowedDelayedInboxList>
export type AllowedDelayedInboxListReturn = FunctionReturn<typeof functions.allowedDelayedInboxList>

export type AllowedDelayedInboxesParams = FunctionArguments<typeof functions.allowedDelayedInboxes>
export type AllowedDelayedInboxesReturn = FunctionReturn<typeof functions.allowedDelayedInboxes>

export type AllowedOutboxListParams = FunctionArguments<typeof functions.allowedOutboxList>
export type AllowedOutboxListReturn = FunctionReturn<typeof functions.allowedOutboxList>

export type AllowedOutboxesParams = FunctionArguments<typeof functions.allowedOutboxes>
export type AllowedOutboxesReturn = FunctionReturn<typeof functions.allowedOutboxes>

export type DelayedInboxAccsParams = FunctionArguments<typeof functions.delayedInboxAccs>
export type DelayedInboxAccsReturn = FunctionReturn<typeof functions.delayedInboxAccs>

export type DelayedMessageCountParams = FunctionArguments<typeof functions.delayedMessageCount>
export type DelayedMessageCountReturn = FunctionReturn<typeof functions.delayedMessageCount>

export type EnqueueDelayedMessageParams = FunctionArguments<typeof functions.enqueueDelayedMessage>
export type EnqueueDelayedMessageReturn = FunctionReturn<typeof functions.enqueueDelayedMessage>

export type EnqueueSequencerMessageParams = FunctionArguments<typeof functions.enqueueSequencerMessage>
export type EnqueueSequencerMessageReturn = FunctionReturn<typeof functions.enqueueSequencerMessage>

export type ExecuteCallParams = FunctionArguments<typeof functions.executeCall>
export type ExecuteCallReturn = FunctionReturn<typeof functions.executeCall>

export type InitializeParams = FunctionArguments<typeof functions.initialize>
export type InitializeReturn = FunctionReturn<typeof functions.initialize>

export type RollupParams = FunctionArguments<typeof functions.rollup>
export type RollupReturn = FunctionReturn<typeof functions.rollup>

export type SequencerInboxParams = FunctionArguments<typeof functions.sequencerInbox>
export type SequencerInboxReturn = FunctionReturn<typeof functions.sequencerInbox>

export type SequencerInboxAccsParams = FunctionArguments<typeof functions.sequencerInboxAccs>
export type SequencerInboxAccsReturn = FunctionReturn<typeof functions.sequencerInboxAccs>

export type SequencerMessageCountParams = FunctionArguments<typeof functions.sequencerMessageCount>
export type SequencerMessageCountReturn = FunctionReturn<typeof functions.sequencerMessageCount>

export type SequencerReportedSubMessageCountParams = FunctionArguments<typeof functions.sequencerReportedSubMessageCount>
export type SequencerReportedSubMessageCountReturn = FunctionReturn<typeof functions.sequencerReportedSubMessageCount>

export type SetDelayedInboxParams = FunctionArguments<typeof functions.setDelayedInbox>
export type SetDelayedInboxReturn = FunctionReturn<typeof functions.setDelayedInbox>

export type SetOutboxParams = FunctionArguments<typeof functions.setOutbox>
export type SetOutboxReturn = FunctionReturn<typeof functions.setOutbox>

export type SetSequencerInboxParams = FunctionArguments<typeof functions.setSequencerInbox>
export type SetSequencerInboxReturn = FunctionReturn<typeof functions.setSequencerInbox>

export type SetSequencerReportedSubMessageCountParams = FunctionArguments<typeof functions.setSequencerReportedSubMessageCount>
export type SetSequencerReportedSubMessageCountReturn = FunctionReturn<typeof functions.setSequencerReportedSubMessageCount>

export type SubmitBatchSpendingReportParams = FunctionArguments<typeof functions.submitBatchSpendingReport>
export type SubmitBatchSpendingReportReturn = FunctionReturn<typeof functions.submitBatchSpendingReport>

export type UpdateRollupAddressParams = FunctionArguments<typeof functions.updateRollupAddress>
export type UpdateRollupAddressReturn = FunctionReturn<typeof functions.updateRollupAddress>

