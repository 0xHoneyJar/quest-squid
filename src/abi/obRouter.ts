import * as p from '@subsquid/evm-codec'
import { event, fun, viewFun, indexed, ContractBase } from '@subsquid/evm-abi'
import type { EventParams as EParams, FunctionArguments, FunctionReturn } from '@subsquid/evm-abi'

export const events = {
    OwnershipTransferred: event("0x8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0", "OwnershipTransferred(address,address)", {"previousOwner": indexed(p.address), "newOwner": indexed(p.address)}),
    Paused: event("0x62e78cea01bee320cd4e420270b5ea74000d11b0c9f74754ebdbfc544b05a258", "Paused(address)", {"account": p.address}),
    Swap: event("0xbe8d53b75ac1d2225422895f1bbce48684ecdb57a7c77e0a89982bee7674f7c5", "Swap(address,uint256,address,uint256,address,int256,uint32,address)", {"sender": indexed(p.address), "inputAmount": p.uint256, "inputToken": indexed(p.address), "amountOut": p.uint256, "outputToken": indexed(p.address), "slippage": p.int256, "referralCode": p.uint32, "to": p.address}),
    Unpaused: event("0x5db9ee0a495bf2e6ff9c91a7834c1ba4fdd244a5e8aa4e537bd38aeae4b073aa", "Unpaused(address)", {"account": p.address}),
}

export const functions = {
    FEE_DENOM: viewFun("0x4886c675", "FEE_DENOM()", {}, p.uint256),
    REFERRAL_WITH_FEE_THRESHOLD: viewFun("0x6c082c13", "REFERRAL_WITH_FEE_THRESHOLD()", {}, p.uint256),
    WETH: viewFun("0xad5c4648", "WETH()", {}, p.address),
    addApprovedAddress: fun("0xd2ac1c8e", "addApprovedAddress(address)", {"_address": p.address}, ),
    isApproved: viewFun("0x673448dd", "isApproved(address)", {"_address": p.address}, p.bool),
    owner: viewFun("0x8da5cb5b", "owner()", {}, p.address),
    pause: fun("0x8456cb59", "pause()", {}, ),
    paused: viewFun("0x5c975abb", "paused()", {}, p.bool),
    referralLookup: viewFun("0xf827065e", "referralLookup(uint32)", {"_0": p.uint32}, {"referralFee": p.uint64, "beneficiary": p.address, "registered": p.bool}),
    registerReferralCode: fun("0xe10895f9", "registerReferralCode(uint32,uint64,address)", {"_referralCode": p.uint32, "_referralFee": p.uint64, "_beneficiary": p.address}, ),
    removeApprovedAddress: fun("0x20f1d85b", "removeApprovedAddress(address)", {"_address": p.address}, ),
    renounceOwnership: fun("0x715018a6", "renounceOwnership()", {}, ),
    swap: fun("0xd46cadbc", "swap((address,uint256,address,uint256,uint256,address),bytes,address,uint32)", {"tokenInfo": p.struct({"inputToken": p.address, "inputAmount": p.uint256, "outputToken": p.address, "outputQuote": p.uint256, "outputMin": p.uint256, "outputReceiver": p.address}), "pathDefinition": p.bytes, "executor": p.address, "referralCode": p.uint32}, p.uint256),
    swapPermit2: fun("0x56fda29b", "swapPermit2((address,uint256,uint256,bytes),(address,uint256,address,uint256,uint256,address),bytes,address,uint32)", {"permit2": p.struct({"contractAddress": p.address, "nonce": p.uint256, "deadline": p.uint256, "signature": p.bytes}), "tokenInfo": p.struct({"inputToken": p.address, "inputAmount": p.uint256, "outputToken": p.address, "outputQuote": p.uint256, "outputMin": p.uint256, "outputReceiver": p.address}), "pathDefinition": p.bytes, "executor": p.address, "referralCode": p.uint32}, p.uint256),
    transferOwnership: fun("0xf2fde38b", "transferOwnership(address)", {"newOwner": p.address}, ),
    transferRouterFunds: fun("0x174da621", "transferRouterFunds(address[],uint256[],address)", {"tokens": p.array(p.address), "amounts": p.array(p.uint256), "dest": p.address}, ),
    unpause: fun("0x3f4ba83a", "unpause()", {}, ),
}

export class Contract extends ContractBase {

    FEE_DENOM() {
        return this.eth_call(functions.FEE_DENOM, {})
    }

    REFERRAL_WITH_FEE_THRESHOLD() {
        return this.eth_call(functions.REFERRAL_WITH_FEE_THRESHOLD, {})
    }

    WETH() {
        return this.eth_call(functions.WETH, {})
    }

    isApproved(_address: IsApprovedParams["_address"]) {
        return this.eth_call(functions.isApproved, {_address})
    }

    owner() {
        return this.eth_call(functions.owner, {})
    }

    paused() {
        return this.eth_call(functions.paused, {})
    }

    referralLookup(_0: ReferralLookupParams["_0"]) {
        return this.eth_call(functions.referralLookup, {_0})
    }
}

/// Event types
export type OwnershipTransferredEventArgs = EParams<typeof events.OwnershipTransferred>
export type PausedEventArgs = EParams<typeof events.Paused>
export type SwapEventArgs = EParams<typeof events.Swap>
export type UnpausedEventArgs = EParams<typeof events.Unpaused>

/// Function types
export type FEE_DENOMParams = FunctionArguments<typeof functions.FEE_DENOM>
export type FEE_DENOMReturn = FunctionReturn<typeof functions.FEE_DENOM>

export type REFERRAL_WITH_FEE_THRESHOLDParams = FunctionArguments<typeof functions.REFERRAL_WITH_FEE_THRESHOLD>
export type REFERRAL_WITH_FEE_THRESHOLDReturn = FunctionReturn<typeof functions.REFERRAL_WITH_FEE_THRESHOLD>

export type WETHParams = FunctionArguments<typeof functions.WETH>
export type WETHReturn = FunctionReturn<typeof functions.WETH>

export type AddApprovedAddressParams = FunctionArguments<typeof functions.addApprovedAddress>
export type AddApprovedAddressReturn = FunctionReturn<typeof functions.addApprovedAddress>

export type IsApprovedParams = FunctionArguments<typeof functions.isApproved>
export type IsApprovedReturn = FunctionReturn<typeof functions.isApproved>

export type OwnerParams = FunctionArguments<typeof functions.owner>
export type OwnerReturn = FunctionReturn<typeof functions.owner>

export type PauseParams = FunctionArguments<typeof functions.pause>
export type PauseReturn = FunctionReturn<typeof functions.pause>

export type PausedParams = FunctionArguments<typeof functions.paused>
export type PausedReturn = FunctionReturn<typeof functions.paused>

export type ReferralLookupParams = FunctionArguments<typeof functions.referralLookup>
export type ReferralLookupReturn = FunctionReturn<typeof functions.referralLookup>

export type RegisterReferralCodeParams = FunctionArguments<typeof functions.registerReferralCode>
export type RegisterReferralCodeReturn = FunctionReturn<typeof functions.registerReferralCode>

export type RemoveApprovedAddressParams = FunctionArguments<typeof functions.removeApprovedAddress>
export type RemoveApprovedAddressReturn = FunctionReturn<typeof functions.removeApprovedAddress>

export type RenounceOwnershipParams = FunctionArguments<typeof functions.renounceOwnership>
export type RenounceOwnershipReturn = FunctionReturn<typeof functions.renounceOwnership>

export type SwapParams = FunctionArguments<typeof functions.swap>
export type SwapReturn = FunctionReturn<typeof functions.swap>

export type SwapPermit2Params = FunctionArguments<typeof functions.swapPermit2>
export type SwapPermit2Return = FunctionReturn<typeof functions.swapPermit2>

export type TransferOwnershipParams = FunctionArguments<typeof functions.transferOwnership>
export type TransferOwnershipReturn = FunctionReturn<typeof functions.transferOwnership>

export type TransferRouterFundsParams = FunctionArguments<typeof functions.transferRouterFunds>
export type TransferRouterFundsReturn = FunctionReturn<typeof functions.transferRouterFunds>

export type UnpauseParams = FunctionArguments<typeof functions.unpause>
export type UnpauseReturn = FunctionReturn<typeof functions.unpause>

