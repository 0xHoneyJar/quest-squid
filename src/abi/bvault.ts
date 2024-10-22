import * as p from '@subsquid/evm-codec'
import { event, fun, viewFun, indexed, ContractBase } from '@subsquid/evm-abi'
import type { EventParams as EParams, FunctionArguments, FunctionReturn } from '@subsquid/evm-abi'

export const events = {
    BribeTokenAdded: event("0xd6e9fd7ab75f909bf813d4155f33ebc31c9f494a894fa8b629271bd3b38606e0", "BribeTokenAdded(uint256,address,address)", {"epochId": indexed(p.uint256), "bribeToken": indexed(p.address), "source": p.address}),
    BribesAdded: event("0x533a2d97b6ee34b7b9be252d8d8bf150e670f4d49169e061ef05ff4d0340d181", "BribesAdded(uint256,address,uint256,address)", {"epochId": indexed(p.uint256), "bribeToken": indexed(p.address), "amount": p.uint256, "source": p.address}),
    BribesClaimed: event("0xa8eb56e5bd5d32d04078dc27677b0439cc15e260aca59e19ca9799816213bd20", "BribesClaimed(address,address,uint256)", {"bribeToken": indexed(p.address), "user": indexed(p.address), "amount": p.uint256}),
    Closed: event("0x1cdde67b72a90f19919ac732a437ac2f7a10fc128d28c2a6e525d89ce5cd9d3a", "Closed()", {}),
    Deposit: event("0x996a417e6461fc8f287ec9a6c2e9afb764a1d6fbdaa6570826ae99855b453aff", "Deposit(uint256,address,uint256,uint256,uint256)", {"epochId": indexed(p.uint256), "user": indexed(p.address), "assetAmount": p.uint256, "pTokenAmount": p.uint256, "yTokenAmount": p.uint256}),
    EpochStarted: event("0x906c46179c233ae479129004d69faeb4fe0960f64d1ecb8619c73a3ece70d643", "EpochStarted(uint256,uint256,uint256,address)", {"epochId": p.uint256, "startTime": p.uint256, "duration": p.uint256, "redeemPool": p.address}),
    PTokenBurned: event("0x03e11a9872902541ac619e7857facb9550b53e465e0dabbdafe95ec0013af365", "PTokenBurned(address,uint256,uint256)", {"user": indexed(p.address), "pTokenAmount": p.uint256, "pTokenSharesAmount": p.uint256}),
    PTokenMinted: event("0x82ab991b9e0742492b0bd01e68056848d79497d22d1e55de75e1a27986af387e", "PTokenMinted(address,uint256,uint256,uint256)", {"user": indexed(p.address), "assetTokenAmount": p.uint256, "pTokenAmount": p.uint256, "pTokenSharesAmount": p.uint256}),
    Paused: event("0x62e78cea01bee320cd4e420270b5ea74000d11b0c9f74754ebdbfc544b05a258", "Paused(address)", {"account": p.address}),
    Redeem: event("0xe5b754fb1abb7f01b499791d0b820ae3b6af3424ac1c59768edb53f4ec31a929", "Redeem(address,uint256,uint256)", {"user": indexed(p.address), "pTokenAmount": p.uint256, "pTokenSharesAmount": p.uint256}),
    Swap: event("0x3f36f05d7e1f3328a15927be220bd3f8816fd5bea8af2e5c893a4cd5510e4d5b", "Swap(uint256,address,uint256,uint256,uint256,uint256)", {"epochId": indexed(p.uint256), "user": indexed(p.address), "assetAmount": p.uint256, "fees": p.uint256, "pTokenAmount": p.uint256, "yTokenAmount": p.uint256}),
    Unpaused: event("0x5db9ee0a495bf2e6ff9c91a7834c1ba4fdd244a5e8aa4e537bd38aeae4b073aa", "Unpaused(address)", {"account": p.address}),
    UpdateBriber: event("0x78859e1884f00668b022f51958236ff58e5cf859f54ff8349a9c303b1041e6d8", "UpdateBriber(address,bool)", {"account": indexed(p.address), "briber": p.bool}),
    YTokenDummyBurned: event("0xffa118f8077458a4746a2ef54718f6b7eab846143b523ee7e09b3dff8fc3b6d3", "YTokenDummyBurned(uint256,address,uint256)", {"epochId": indexed(p.uint256), "user": indexed(p.address), "yTokenAmount": p.uint256}),
    YTokenDummyMinted: event("0x45ed2323d260781ebceb5e2631406c5cffc992b7c8e88d3184fe8c3ee708eb1f", "YTokenDummyMinted(uint256,address,uint256,uint256)", {"epochId": indexed(p.uint256), "user": indexed(p.address), "assetTokenAmount": p.uint256, "yTokenAmount": p.uint256}),
}

export const functions = {
    Y: viewFun("0x45b3fe42", "Y()", {}, p.uint256),
    addBribeToken: fun("0x023df767", "addBribeToken(address)", {"bribeToken": p.address}, ),
    addBribes: fun("0x47a367b5", "addBribes(address,uint256)", {"bribeToken": p.address, "amount": p.uint256}, ),
    assetBalance: viewFun("0xc66f2455", "assetBalance()", {}, p.uint256),
    assetToken: viewFun("0x1083f761", "assetToken()", {}, p.address),
    assetTotalSwapAmount: viewFun("0xb63c3ae7", "assetTotalSwapAmount(uint256)", {"epochId": p.uint256}, p.uint256),
    batchClaimRedeemAssets: fun("0x770a6df2", "batchClaimRedeemAssets(uint256[])", {"epochIds": p.array(p.uint256)}, ),
    bribeTokens: viewFun("0xf5ae2240", "bribeTokens(uint256)", {"epochId": p.uint256}, p.array(p.address)),
    bribeTotalAmount: viewFun("0x8ae3c908", "bribeTotalAmount(uint256,address)", {"epochId": p.uint256, "bribeToken": p.address}, p.uint256),
    calcBribes: viewFun("0xb4cb17f6", "calcBribes(uint256,address)", {"epochId": p.uint256, "account": p.address}, p.array(p.struct({"epochId": p.uint256, "bribeToken": p.address, "bribeAmount": p.uint256}))),
    calcSwap: viewFun("0x8573c96c", "calcSwap(uint256)", {"assetAmount": p.uint256}, {"_0": p.uint256, "_1": p.uint256}),
    claimBribes: fun("0x6c256980", "claimBribes(uint256)", {"epochId": p.uint256}, ),
    close: fun("0x43d726d6", "close()", {}, ),
    closed: viewFun("0x597e1fb5", "closed()", {}, p.bool),
    currentEpochId: viewFun("0xeacdc5ff", "currentEpochId()", {}, p.uint256),
    deposit: fun("0xb6b55f25", "deposit(uint256)", {"amount": p.uint256}, ),
    epochIdAt: viewFun("0xd9f50fb5", "epochIdAt(uint256)", {"index": p.uint256}, p.uint256),
    epochIdCount: viewFun("0xcfc42a66", "epochIdCount()", {}, p.uint256),
    epochInfoById: viewFun("0x67c0b220", "epochInfoById(uint256)", {"epochId": p.uint256}, p.struct({"epochId": p.uint256, "startTime": p.uint256, "duration": p.uint256, "redeemPool": p.address})),
    epochNextSwapK0: viewFun("0x465aadad", "epochNextSwapK0(uint256)", {"epochId": p.uint256}, p.uint256),
    epochNextSwapX: viewFun("0xc3a01e20", "epochNextSwapX(uint256)", {"epochId": p.uint256}, p.uint256),
    getBriber: viewFun("0x811a9975", "getBriber(uint256)", {"index": p.uint256}, p.address),
    getBribersCount: viewFun("0x97a0f9f8", "getBribersCount()", {}, p.uint256),
    isBriber: viewFun("0x0213adc9", "isBriber(address)", {"account": p.address}, p.bool),
    owner: viewFun("0x8da5cb5b", "owner()", {}, p.address),
    pToken: viewFun("0x58a06f07", "pToken()", {}, p.address),
    paramValue: viewFun("0xeaee8425", "paramValue(bytes32)", {"param": p.bytes32}, p.uint256),
    pause: fun("0x8456cb59", "pause()", {}, ),
    pauseRedeemPool: fun("0x732f277c", "pauseRedeemPool(uint256)", {"epochId": p.uint256}, ),
    paused: viewFun("0x5c975abb", "paused()", {}, p.bool),
    protocol: viewFun("0x8ce74426", "protocol()", {}, p.address),
    redeem: fun("0xdb006a75", "redeem(uint256)", {"amount": p.uint256}, ),
    redeemPoolFactory: viewFun("0xed50d65a", "redeemPoolFactory()", {}, p.address),
    setBriber: fun("0x0b060278", "setBriber(address,bool)", {"account": p.address, "briber": p.bool}, ),
    settings: viewFun("0xe06174e4", "settings()", {}, p.address),
    stakingPool: viewFun("0x0c56ae3b", "stakingPool()", {}, p.address),
    swap: fun("0x94b918de", "swap(uint256)", {"amount": p.uint256}, ),
    unpause: fun("0x3f4ba83a", "unpause()", {}, ),
    unpauseRedeemPool: fun("0x986f7d25", "unpauseRedeemPool(uint256)", {"epochId": p.uint256}, ),
    updateRedeemPoolFactory: fun("0x66a38386", "updateRedeemPoolFactory(address)", {"newRedeemPoolFactory": p.address}, ),
    yTokenTotalSupply: viewFun("0x1fb19991", "yTokenTotalSupply(uint256)", {"epochId": p.uint256}, p.uint256),
    yTokenTotalSupplySynthetic: viewFun("0x37b7b5d7", "yTokenTotalSupplySynthetic(uint256)", {"epochId": p.uint256}, p.uint256),
    yTokenUserBalance: viewFun("0x3f9bb2e9", "yTokenUserBalance(uint256,address)", {"epochId": p.uint256, "user": p.address}, p.uint256),
    yTokenUserBalanceSynthetic: viewFun("0x1acd8c4c", "yTokenUserBalanceSynthetic(uint256,address)", {"epochId": p.uint256, "user": p.address}, p.uint256),
}

export class Contract extends ContractBase {

    Y() {
        return this.eth_call(functions.Y, {})
    }

    assetBalance() {
        return this.eth_call(functions.assetBalance, {})
    }

    assetToken() {
        return this.eth_call(functions.assetToken, {})
    }

    assetTotalSwapAmount(epochId: AssetTotalSwapAmountParams["epochId"]) {
        return this.eth_call(functions.assetTotalSwapAmount, {epochId})
    }

    bribeTokens(epochId: BribeTokensParams["epochId"]) {
        return this.eth_call(functions.bribeTokens, {epochId})
    }

    bribeTotalAmount(epochId: BribeTotalAmountParams["epochId"], bribeToken: BribeTotalAmountParams["bribeToken"]) {
        return this.eth_call(functions.bribeTotalAmount, {epochId, bribeToken})
    }

    calcBribes(epochId: CalcBribesParams["epochId"], account: CalcBribesParams["account"]) {
        return this.eth_call(functions.calcBribes, {epochId, account})
    }

    calcSwap(assetAmount: CalcSwapParams["assetAmount"]) {
        return this.eth_call(functions.calcSwap, {assetAmount})
    }

    closed() {
        return this.eth_call(functions.closed, {})
    }

    currentEpochId() {
        return this.eth_call(functions.currentEpochId, {})
    }

    epochIdAt(index: EpochIdAtParams["index"]) {
        return this.eth_call(functions.epochIdAt, {index})
    }

    epochIdCount() {
        return this.eth_call(functions.epochIdCount, {})
    }

    epochInfoById(epochId: EpochInfoByIdParams["epochId"]) {
        return this.eth_call(functions.epochInfoById, {epochId})
    }

    epochNextSwapK0(epochId: EpochNextSwapK0Params["epochId"]) {
        return this.eth_call(functions.epochNextSwapK0, {epochId})
    }

    epochNextSwapX(epochId: EpochNextSwapXParams["epochId"]) {
        return this.eth_call(functions.epochNextSwapX, {epochId})
    }

    getBriber(index: GetBriberParams["index"]) {
        return this.eth_call(functions.getBriber, {index})
    }

    getBribersCount() {
        return this.eth_call(functions.getBribersCount, {})
    }

    isBriber(account: IsBriberParams["account"]) {
        return this.eth_call(functions.isBriber, {account})
    }

    owner() {
        return this.eth_call(functions.owner, {})
    }

    pToken() {
        return this.eth_call(functions.pToken, {})
    }

    paramValue(param: ParamValueParams["param"]) {
        return this.eth_call(functions.paramValue, {param})
    }

    paused() {
        return this.eth_call(functions.paused, {})
    }

    protocol() {
        return this.eth_call(functions.protocol, {})
    }

    redeemPoolFactory() {
        return this.eth_call(functions.redeemPoolFactory, {})
    }

    settings() {
        return this.eth_call(functions.settings, {})
    }

    stakingPool() {
        return this.eth_call(functions.stakingPool, {})
    }

    yTokenTotalSupply(epochId: YTokenTotalSupplyParams["epochId"]) {
        return this.eth_call(functions.yTokenTotalSupply, {epochId})
    }

    yTokenTotalSupplySynthetic(epochId: YTokenTotalSupplySyntheticParams["epochId"]) {
        return this.eth_call(functions.yTokenTotalSupplySynthetic, {epochId})
    }

    yTokenUserBalance(epochId: YTokenUserBalanceParams["epochId"], user: YTokenUserBalanceParams["user"]) {
        return this.eth_call(functions.yTokenUserBalance, {epochId, user})
    }

    yTokenUserBalanceSynthetic(epochId: YTokenUserBalanceSyntheticParams["epochId"], user: YTokenUserBalanceSyntheticParams["user"]) {
        return this.eth_call(functions.yTokenUserBalanceSynthetic, {epochId, user})
    }
}

/// Event types
export type BribeTokenAddedEventArgs = EParams<typeof events.BribeTokenAdded>
export type BribesAddedEventArgs = EParams<typeof events.BribesAdded>
export type BribesClaimedEventArgs = EParams<typeof events.BribesClaimed>
export type ClosedEventArgs = EParams<typeof events.Closed>
export type DepositEventArgs = EParams<typeof events.Deposit>
export type EpochStartedEventArgs = EParams<typeof events.EpochStarted>
export type PTokenBurnedEventArgs = EParams<typeof events.PTokenBurned>
export type PTokenMintedEventArgs = EParams<typeof events.PTokenMinted>
export type PausedEventArgs = EParams<typeof events.Paused>
export type RedeemEventArgs = EParams<typeof events.Redeem>
export type SwapEventArgs = EParams<typeof events.Swap>
export type UnpausedEventArgs = EParams<typeof events.Unpaused>
export type UpdateBriberEventArgs = EParams<typeof events.UpdateBriber>
export type YTokenDummyBurnedEventArgs = EParams<typeof events.YTokenDummyBurned>
export type YTokenDummyMintedEventArgs = EParams<typeof events.YTokenDummyMinted>

/// Function types
export type YParams = FunctionArguments<typeof functions.Y>
export type YReturn = FunctionReturn<typeof functions.Y>

export type AddBribeTokenParams = FunctionArguments<typeof functions.addBribeToken>
export type AddBribeTokenReturn = FunctionReturn<typeof functions.addBribeToken>

export type AddBribesParams = FunctionArguments<typeof functions.addBribes>
export type AddBribesReturn = FunctionReturn<typeof functions.addBribes>

export type AssetBalanceParams = FunctionArguments<typeof functions.assetBalance>
export type AssetBalanceReturn = FunctionReturn<typeof functions.assetBalance>

export type AssetTokenParams = FunctionArguments<typeof functions.assetToken>
export type AssetTokenReturn = FunctionReturn<typeof functions.assetToken>

export type AssetTotalSwapAmountParams = FunctionArguments<typeof functions.assetTotalSwapAmount>
export type AssetTotalSwapAmountReturn = FunctionReturn<typeof functions.assetTotalSwapAmount>

export type BatchClaimRedeemAssetsParams = FunctionArguments<typeof functions.batchClaimRedeemAssets>
export type BatchClaimRedeemAssetsReturn = FunctionReturn<typeof functions.batchClaimRedeemAssets>

export type BribeTokensParams = FunctionArguments<typeof functions.bribeTokens>
export type BribeTokensReturn = FunctionReturn<typeof functions.bribeTokens>

export type BribeTotalAmountParams = FunctionArguments<typeof functions.bribeTotalAmount>
export type BribeTotalAmountReturn = FunctionReturn<typeof functions.bribeTotalAmount>

export type CalcBribesParams = FunctionArguments<typeof functions.calcBribes>
export type CalcBribesReturn = FunctionReturn<typeof functions.calcBribes>

export type CalcSwapParams = FunctionArguments<typeof functions.calcSwap>
export type CalcSwapReturn = FunctionReturn<typeof functions.calcSwap>

export type ClaimBribesParams = FunctionArguments<typeof functions.claimBribes>
export type ClaimBribesReturn = FunctionReturn<typeof functions.claimBribes>

export type CloseParams = FunctionArguments<typeof functions.close>
export type CloseReturn = FunctionReturn<typeof functions.close>

export type ClosedParams = FunctionArguments<typeof functions.closed>
export type ClosedReturn = FunctionReturn<typeof functions.closed>

export type CurrentEpochIdParams = FunctionArguments<typeof functions.currentEpochId>
export type CurrentEpochIdReturn = FunctionReturn<typeof functions.currentEpochId>

export type DepositParams = FunctionArguments<typeof functions.deposit>
export type DepositReturn = FunctionReturn<typeof functions.deposit>

export type EpochIdAtParams = FunctionArguments<typeof functions.epochIdAt>
export type EpochIdAtReturn = FunctionReturn<typeof functions.epochIdAt>

export type EpochIdCountParams = FunctionArguments<typeof functions.epochIdCount>
export type EpochIdCountReturn = FunctionReturn<typeof functions.epochIdCount>

export type EpochInfoByIdParams = FunctionArguments<typeof functions.epochInfoById>
export type EpochInfoByIdReturn = FunctionReturn<typeof functions.epochInfoById>

export type EpochNextSwapK0Params = FunctionArguments<typeof functions.epochNextSwapK0>
export type EpochNextSwapK0Return = FunctionReturn<typeof functions.epochNextSwapK0>

export type EpochNextSwapXParams = FunctionArguments<typeof functions.epochNextSwapX>
export type EpochNextSwapXReturn = FunctionReturn<typeof functions.epochNextSwapX>

export type GetBriberParams = FunctionArguments<typeof functions.getBriber>
export type GetBriberReturn = FunctionReturn<typeof functions.getBriber>

export type GetBribersCountParams = FunctionArguments<typeof functions.getBribersCount>
export type GetBribersCountReturn = FunctionReturn<typeof functions.getBribersCount>

export type IsBriberParams = FunctionArguments<typeof functions.isBriber>
export type IsBriberReturn = FunctionReturn<typeof functions.isBriber>

export type OwnerParams = FunctionArguments<typeof functions.owner>
export type OwnerReturn = FunctionReturn<typeof functions.owner>

export type PTokenParams = FunctionArguments<typeof functions.pToken>
export type PTokenReturn = FunctionReturn<typeof functions.pToken>

export type ParamValueParams = FunctionArguments<typeof functions.paramValue>
export type ParamValueReturn = FunctionReturn<typeof functions.paramValue>

export type PauseParams = FunctionArguments<typeof functions.pause>
export type PauseReturn = FunctionReturn<typeof functions.pause>

export type PauseRedeemPoolParams = FunctionArguments<typeof functions.pauseRedeemPool>
export type PauseRedeemPoolReturn = FunctionReturn<typeof functions.pauseRedeemPool>

export type PausedParams = FunctionArguments<typeof functions.paused>
export type PausedReturn = FunctionReturn<typeof functions.paused>

export type ProtocolParams = FunctionArguments<typeof functions.protocol>
export type ProtocolReturn = FunctionReturn<typeof functions.protocol>

export type RedeemParams = FunctionArguments<typeof functions.redeem>
export type RedeemReturn = FunctionReturn<typeof functions.redeem>

export type RedeemPoolFactoryParams = FunctionArguments<typeof functions.redeemPoolFactory>
export type RedeemPoolFactoryReturn = FunctionReturn<typeof functions.redeemPoolFactory>

export type SetBriberParams = FunctionArguments<typeof functions.setBriber>
export type SetBriberReturn = FunctionReturn<typeof functions.setBriber>

export type SettingsParams = FunctionArguments<typeof functions.settings>
export type SettingsReturn = FunctionReturn<typeof functions.settings>

export type StakingPoolParams = FunctionArguments<typeof functions.stakingPool>
export type StakingPoolReturn = FunctionReturn<typeof functions.stakingPool>

export type SwapParams = FunctionArguments<typeof functions.swap>
export type SwapReturn = FunctionReturn<typeof functions.swap>

export type UnpauseParams = FunctionArguments<typeof functions.unpause>
export type UnpauseReturn = FunctionReturn<typeof functions.unpause>

export type UnpauseRedeemPoolParams = FunctionArguments<typeof functions.unpauseRedeemPool>
export type UnpauseRedeemPoolReturn = FunctionReturn<typeof functions.unpauseRedeemPool>

export type UpdateRedeemPoolFactoryParams = FunctionArguments<typeof functions.updateRedeemPoolFactory>
export type UpdateRedeemPoolFactoryReturn = FunctionReturn<typeof functions.updateRedeemPoolFactory>

export type YTokenTotalSupplyParams = FunctionArguments<typeof functions.yTokenTotalSupply>
export type YTokenTotalSupplyReturn = FunctionReturn<typeof functions.yTokenTotalSupply>

export type YTokenTotalSupplySyntheticParams = FunctionArguments<typeof functions.yTokenTotalSupplySynthetic>
export type YTokenTotalSupplySyntheticReturn = FunctionReturn<typeof functions.yTokenTotalSupplySynthetic>

export type YTokenUserBalanceParams = FunctionArguments<typeof functions.yTokenUserBalance>
export type YTokenUserBalanceReturn = FunctionReturn<typeof functions.yTokenUserBalance>

export type YTokenUserBalanceSyntheticParams = FunctionArguments<typeof functions.yTokenUserBalanceSynthetic>
export type YTokenUserBalanceSyntheticReturn = FunctionReturn<typeof functions.yTokenUserBalanceSynthetic>

