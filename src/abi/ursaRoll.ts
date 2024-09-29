import * as p from '@subsquid/evm-codec'
import { event, fun, viewFun, indexed, ContractBase } from '@subsquid/evm-abi'
import type { EventParams as EParams, FunctionArguments, FunctionReturn } from '@subsquid/evm-abi'

export const events = {
    DepositETH: event("0x9217dd089bc5a19236dda6f7f479dcc9140ec5b42b1f22ddb03110004842f931", "DepositETH(uint256,address,uint256)", {"roundIndex": indexed(p.uint256), "player": indexed(p.address), "amount": p.uint256}),
    DrawingWinner: event("0x64c01f097d427b019bcdb696c7330a9ccb3afe6e62c99b5aae6e9f1922b0fc86", "DrawingWinner(uint256,bytes32,uint64)", {"roundIndex": indexed(p.uint256), "userRandomNumber": p.bytes32, "sequenceNumber": indexed(p.uint64)}),
    Initialized: event("0xc7f505b2f371ae2175ee4913f4499e1f2633a7b5936321eed1cdaeb6115181d2", "Initialized(uint64)", {"version": p.uint64}),
    OwnershipTransferred: event("0x8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0", "OwnershipTransferred(address,address)", {"previousOwner": indexed(p.address), "newOwner": indexed(p.address)}),
    RoundCancelled: event("0xbf7aeff89cf7a4c3d0145879e39aa6a19e8e64ed585090ef86bf31f4d2ae57bf", "RoundCancelled(uint256)", {"roundIndex": indexed(p.uint256)}),
    RoundStarted: event("0x33a701182892fd888ed152ca2ac23771a32e814469b7cd255965471e1af3a659", "RoundStarted(uint256)", {"roundIndex": indexed(p.uint256)}),
    RoundSuccess: event("0x06c6aa13dffddf0439795f9de38474c9dc0fbb00f757a105723e0708317ba742", "RoundSuccess(uint256,address,uint256,uint64)", {"roundIndex": indexed(p.uint256), "winner": indexed(p.address), "prize": p.uint256, "sequenceNumber": indexed(p.uint64)}),
}

export const functions = {
    _entropyCallback: fun("0x52a5f1f8", "_entropyCallback(uint64,address,bytes32)", {"sequence": p.uint64, "provider": p.address, "randomNumber": p.bytes32}, ),
    cancelRound: fun("0x7e07ab09", "cancelRound(uint256)", {"roundIndex": p.uint256}, ),
    currentRoundIndex: viewFun("0x6896ef4b", "currentRoundIndex()", {}, p.uint256),
    deposit: fun("0xd0e30db0", "deposit()", {}, ),
    depositMulti: fun("0x66a70259", "depositMulti(uint8)", {"count": p.uint8}, ),
    drawWinner: fun("0x9edc64f5", "drawWinner(bytes32)", {"userRandomNumber": p.bytes32}, ),
    entropy: viewFun("0x47ce07cc", "entropy()", {}, p.address),
    entropyProvider: viewFun("0x5bf414ac", "entropyProvider()", {}, p.address),
    getCurrentRound: viewFun("0xa32bf597", "getCurrentRound()", {}, p.struct({"winner": p.address, "protocolFeeOwed": p.uint256, "status": p.uint8, "deposits": p.array(p.struct({"wager": p.uint256, "depositor": p.address, "userTicketNumber": p.uint256})), "currentTicketNumber": p.uint256, "sequenceNumber": p.uint64, "currentRoundIndex": p.uint256})),
    getDeposit: viewFun("0x4e4a7fa3", "getDeposit(uint256,uint256)", {"roundIndex": p.uint256, "depositIndex": p.uint256}, p.struct({"wager": p.uint256, "depositor": p.address, "userTicketNumber": p.uint256})),
    getRound: viewFun("0x8f1327c0", "getRound(uint256)", {"roundIndex": p.uint256}, p.struct({"winner": p.address, "protocolFeeOwed": p.uint256, "status": p.uint8, "deposits": p.array(p.struct({"wager": p.uint256, "depositor": p.address, "userTicketNumber": p.uint256})), "currentTicketNumber": p.uint256, "sequenceNumber": p.uint64, "currentRoundIndex": p.uint256})),
    initialize: fun("0x485cc955", "initialize(address,address)", {"entropyAddress": p.address, "entropyProviderAddress": p.address}, ),
    maxPlayers: viewFun("0x4c2412a2", "maxPlayers()", {}, p.uint256),
    owner: viewFun("0x8da5cb5b", "owner()", {}, p.address),
    pendingWithdrawals: viewFun("0xf3f43703", "pendingWithdrawals(address)", {"_0": p.address}, p.uint256),
    protocolFeeRecipient: viewFun("0x64df049e", "protocolFeeRecipient()", {}, p.address),
    renounceOwnership: fun("0x715018a6", "renounceOwnership()", {}, ),
    setMaxPlayers: fun("0x288dee3b", "setMaxPlayers(uint256)", {"newMaxPlayers": p.uint256}, ),
    setNewEntropy: fun("0x1607ec63", "setNewEntropy(address)", {"_entropy": p.address}, ),
    setTicketPrice: fun("0x15981650", "setTicketPrice(uint256)", {"newPrice": p.uint256}, ),
    setVictoryFee: fun("0x6ca22877", "setVictoryFee(uint256)", {"newFee": p.uint256}, ),
    startNewRound: fun("0xbd85948c", "startNewRound()", {}, ),
    ticketPrice: viewFun("0x1209b1f6", "ticketPrice()", {}, p.uint256),
    transferOwnership: fun("0xf2fde38b", "transferOwnership(address)", {"newOwner": p.address}, ),
    victoryFee: viewFun("0xcbe41281", "victoryFee()", {}, p.uint256),
    withdraw: fun("0x3ccfd60b", "withdraw()", {}, ),
    withdrawFromCanceled: fun("0x4b44d202", "withdrawFromCanceled()", {}, ),
}

export class Contract extends ContractBase {

    currentRoundIndex() {
        return this.eth_call(functions.currentRoundIndex, {})
    }

    entropy() {
        return this.eth_call(functions.entropy, {})
    }

    entropyProvider() {
        return this.eth_call(functions.entropyProvider, {})
    }

    getCurrentRound() {
        return this.eth_call(functions.getCurrentRound, {})
    }

    getDeposit(roundIndex: GetDepositParams["roundIndex"], depositIndex: GetDepositParams["depositIndex"]) {
        return this.eth_call(functions.getDeposit, {roundIndex, depositIndex})
    }

    getRound(roundIndex: GetRoundParams["roundIndex"]) {
        return this.eth_call(functions.getRound, {roundIndex})
    }

    maxPlayers() {
        return this.eth_call(functions.maxPlayers, {})
    }

    owner() {
        return this.eth_call(functions.owner, {})
    }

    pendingWithdrawals(_0: PendingWithdrawalsParams["_0"]) {
        return this.eth_call(functions.pendingWithdrawals, {_0})
    }

    protocolFeeRecipient() {
        return this.eth_call(functions.protocolFeeRecipient, {})
    }

    ticketPrice() {
        return this.eth_call(functions.ticketPrice, {})
    }

    victoryFee() {
        return this.eth_call(functions.victoryFee, {})
    }
}

/// Event types
export type DepositETHEventArgs = EParams<typeof events.DepositETH>
export type DrawingWinnerEventArgs = EParams<typeof events.DrawingWinner>
export type InitializedEventArgs = EParams<typeof events.Initialized>
export type OwnershipTransferredEventArgs = EParams<typeof events.OwnershipTransferred>
export type RoundCancelledEventArgs = EParams<typeof events.RoundCancelled>
export type RoundStartedEventArgs = EParams<typeof events.RoundStarted>
export type RoundSuccessEventArgs = EParams<typeof events.RoundSuccess>

/// Function types
export type _entropyCallbackParams = FunctionArguments<typeof functions._entropyCallback>
export type _entropyCallbackReturn = FunctionReturn<typeof functions._entropyCallback>

export type CancelRoundParams = FunctionArguments<typeof functions.cancelRound>
export type CancelRoundReturn = FunctionReturn<typeof functions.cancelRound>

export type CurrentRoundIndexParams = FunctionArguments<typeof functions.currentRoundIndex>
export type CurrentRoundIndexReturn = FunctionReturn<typeof functions.currentRoundIndex>

export type DepositParams = FunctionArguments<typeof functions.deposit>
export type DepositReturn = FunctionReturn<typeof functions.deposit>

export type DepositMultiParams = FunctionArguments<typeof functions.depositMulti>
export type DepositMultiReturn = FunctionReturn<typeof functions.depositMulti>

export type DrawWinnerParams = FunctionArguments<typeof functions.drawWinner>
export type DrawWinnerReturn = FunctionReturn<typeof functions.drawWinner>

export type EntropyParams = FunctionArguments<typeof functions.entropy>
export type EntropyReturn = FunctionReturn<typeof functions.entropy>

export type EntropyProviderParams = FunctionArguments<typeof functions.entropyProvider>
export type EntropyProviderReturn = FunctionReturn<typeof functions.entropyProvider>

export type GetCurrentRoundParams = FunctionArguments<typeof functions.getCurrentRound>
export type GetCurrentRoundReturn = FunctionReturn<typeof functions.getCurrentRound>

export type GetDepositParams = FunctionArguments<typeof functions.getDeposit>
export type GetDepositReturn = FunctionReturn<typeof functions.getDeposit>

export type GetRoundParams = FunctionArguments<typeof functions.getRound>
export type GetRoundReturn = FunctionReturn<typeof functions.getRound>

export type InitializeParams = FunctionArguments<typeof functions.initialize>
export type InitializeReturn = FunctionReturn<typeof functions.initialize>

export type MaxPlayersParams = FunctionArguments<typeof functions.maxPlayers>
export type MaxPlayersReturn = FunctionReturn<typeof functions.maxPlayers>

export type OwnerParams = FunctionArguments<typeof functions.owner>
export type OwnerReturn = FunctionReturn<typeof functions.owner>

export type PendingWithdrawalsParams = FunctionArguments<typeof functions.pendingWithdrawals>
export type PendingWithdrawalsReturn = FunctionReturn<typeof functions.pendingWithdrawals>

export type ProtocolFeeRecipientParams = FunctionArguments<typeof functions.protocolFeeRecipient>
export type ProtocolFeeRecipientReturn = FunctionReturn<typeof functions.protocolFeeRecipient>

export type RenounceOwnershipParams = FunctionArguments<typeof functions.renounceOwnership>
export type RenounceOwnershipReturn = FunctionReturn<typeof functions.renounceOwnership>

export type SetMaxPlayersParams = FunctionArguments<typeof functions.setMaxPlayers>
export type SetMaxPlayersReturn = FunctionReturn<typeof functions.setMaxPlayers>

export type SetNewEntropyParams = FunctionArguments<typeof functions.setNewEntropy>
export type SetNewEntropyReturn = FunctionReturn<typeof functions.setNewEntropy>

export type SetTicketPriceParams = FunctionArguments<typeof functions.setTicketPrice>
export type SetTicketPriceReturn = FunctionReturn<typeof functions.setTicketPrice>

export type SetVictoryFeeParams = FunctionArguments<typeof functions.setVictoryFee>
export type SetVictoryFeeReturn = FunctionReturn<typeof functions.setVictoryFee>

export type StartNewRoundParams = FunctionArguments<typeof functions.startNewRound>
export type StartNewRoundReturn = FunctionReturn<typeof functions.startNewRound>

export type TicketPriceParams = FunctionArguments<typeof functions.ticketPrice>
export type TicketPriceReturn = FunctionReturn<typeof functions.ticketPrice>

export type TransferOwnershipParams = FunctionArguments<typeof functions.transferOwnership>
export type TransferOwnershipReturn = FunctionReturn<typeof functions.transferOwnership>

export type VictoryFeeParams = FunctionArguments<typeof functions.victoryFee>
export type VictoryFeeReturn = FunctionReturn<typeof functions.victoryFee>

export type WithdrawParams = FunctionArguments<typeof functions.withdraw>
export type WithdrawReturn = FunctionReturn<typeof functions.withdraw>

export type WithdrawFromCanceledParams = FunctionArguments<typeof functions.withdrawFromCanceled>
export type WithdrawFromCanceledReturn = FunctionReturn<typeof functions.withdrawFromCanceled>

