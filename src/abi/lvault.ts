import * as p from '@subsquid/evm-codec'
import { event, fun, viewFun, indexed, ContractBase } from '@subsquid/evm-abi'
import type { EventParams as EParams, FunctionArguments, FunctionReturn } from '@subsquid/evm-abi'

export const events = {
    AssetRedeemedWithMarginToken: event("0xf364e0a28f9a8aafaf506d9afb875c3c563242a31e7aa6a29049be7d514822b5", "AssetRedeemedWithMarginToken(address,uint256,uint256,uint256,uint256)", {"user": indexed(p.address), "marginTokenAmount": p.uint256, "assetAmount": p.uint256, "assetTokenPrice": p.uint256, "assetTokenPriceDecimals": p.uint256}),
    AssetRedeemedWithPairs: event("0x5975ae134530356ba04a9728ddefa4c6676e1433c72bf75970c7775d4771a762", "AssetRedeemedWithPairs(address,uint256,uint256,uint256,uint256,uint256)", {"user": indexed(p.address), "usdAmount": p.uint256, "marginTokenAmount": p.uint256, "assetAmount": p.uint256, "assetTokenPrice": p.uint256, "assetTokenPriceDecimals": p.uint256}),
    AssetRedeemedWithUSD: event("0x641856ace7b1cf08f3a259abc282f90c9d39c4256d062ad911135c9a5d84f1f5", "AssetRedeemedWithUSD(address,uint256,uint256,uint256,uint256)", {"user": indexed(p.address), "usdAmount": p.uint256, "assetAmount": p.uint256, "assetTokenPrice": p.uint256, "assetTokenPriceDecimals": p.uint256}),
    MarginTokenBurned: event("0x3b931001c0728420650d0922e385dcd2dbcf634aee98dc541642fe27358da458", "MarginTokenBurned(address,uint256,uint256,uint256)", {"user": indexed(p.address), "marginTokenAmount": p.uint256, "assetTokenPrice": p.uint256, "assetTokenPriceDecimals": p.uint256}),
    MarginTokenMinted: event("0xe79d2400774c9ceba50645590d91414af42f277c27641bd9cba2f5b92db83ad5", "MarginTokenMinted(address,uint256,uint256,uint256,uint256)", {"user": indexed(p.address), "assetTokenAmount": p.uint256, "marginTokenAmount": p.uint256, "assetTokenPrice": p.uint256, "assetTokenPriceDecimals": p.uint256}),
    MintPaused: event("0xd7d248ba47bac931be252275aff92303dd610ca36c92c05dbac783fde1662a0e", "MintPaused()", {}),
    MintUnpaused: event("0xd76d4045ba8d223490b9c6a5657cfdaa2316ac28a5a65274870bfe66a33ea0c4", "MintUnpaused()", {}),
    RedeemPaused: event("0x60b78ed2d882d2d2387ad2b7119495f7c99dd9a9c191d3d02c35982a0750bcc6", "RedeemPaused()", {}),
    RedeemUnpaused: event("0x687bf6e69dbabcc95e11041b4816a83f36dcf6ef647f6acf63e7469d28f5ea73", "RedeemUnpaused()", {}),
    UsdBurned: event("0x8540519bf613025d73c7f645ff861f3ac63a45e116db909ca68c6382e6c71900", "UsdBurned(address,uint256,uint256,uint256,uint256)", {"user": indexed(p.address), "usdTokenAmount": p.uint256, "usdSharesAmount": p.uint256, "assetTokenPrice": p.uint256, "assetTokenPriceDecimals": p.uint256}),
    UsdMinted: event("0x94a8568a4677aaed62f81333438bb45c3ae467efe9bcf1b68b143c8a98cff026", "UsdMinted(address,uint256,uint256,uint256,uint256,uint256)", {"user": indexed(p.address), "assetTokenAmount": p.uint256, "usdTokenAmount": p.uint256, "usdSharesAmount": p.uint256, "assetTokenPrice": p.uint256, "assetTokenPriceDecimals": p.uint256}),
    UsdToMarginTokens: event("0x1f8bb2f58069e44f6e3f45aa4da757805b9f6680d3d79c423298d7842072bf85", "UsdToMarginTokens(address,uint256,uint256,uint256,uint256)", {"user": indexed(p.address), "usdAmount": p.uint256, "marginTokenAmount": p.uint256, "assetTokenPrice": p.uint256, "assetTokenPriceDecimals": p.uint256}),
    UsdToMarginTokensPaused: event("0xdf4646ee3d5527d62b3723595de3d1fc6ce20ae9cad63c4b2b28d6932e5a1c92", "UsdToMarginTokensPaused()", {}),
    UsdToMarginTokensUnpaused: event("0x5b4db034573646ee8a83928f9f8058156ca94385602aaf7c669a55b19e173297", "UsdToMarginTokensUnpaused()", {}),
    YieldsSettlement: event("0x55de42fd7838b64e6e196dc82f1aa2e87ad5c13ea8fc85ab51095bad26b754ab", "YieldsSettlement(uint256,uint256)", {"usdYieldsAmount": p.uint256, "marginTokenYieldsAmount": p.uint256}),
}

export const functions = {
    AARBelowCircuitBreakerLineTime: viewFun("0x8d93fb21", "AARBelowCircuitBreakerLineTime()", {}, p.uint256),
    AARBelowSafeLineTime: viewFun("0x02b0dbd7", "AARBelowSafeLineTime()", {}, p.uint256),
    AARDecimals: viewFun("0x6a8f6ebb", "AARDecimals()", {}, p.uint256),
    assetBalance: viewFun("0xc66f2455", "assetBalance()", {}, p.uint256),
    assetToken: viewFun("0x1083f761", "assetToken()", {}, p.address),
    assetTokenDecimals: viewFun("0x00b190d9", "assetTokenDecimals()", {}, p.uint8),
    assetTokenPrice: viewFun("0xe13a4fe9", "assetTokenPrice()", {}, {"_0": p.uint256, "_1": p.uint256}),
    marginToken: viewFun("0x6685ed87", "marginToken()", {}, p.address),
    mintMarginTokensBelowAARS: fun("0xbd4f7c57", "mintMarginTokensBelowAARS(uint256)", {"assetAmount": p.uint256}, ),
    mintPairs: fun("0x50eb741c", "mintPairs(uint256)", {"assetAmount": p.uint256}, ),
    mintUsdAboveAARU: fun("0xee3b07a6", "mintUsdAboveAARU(uint256)", {"assetAmount": p.uint256}, ),
    owner: viewFun("0x8da5cb5b", "owner()", {}, p.address),
    paramValue: viewFun("0xeaee8425", "paramValue(bytes32)", {"param": p.bytes32}, p.uint256),
    pauseMint: fun("0xcd85cdb5", "pauseMint()", {}, ),
    pauseRedeem: fun("0x32ec84d2", "pauseRedeem()", {}, ),
    pauseUsdToMarginTokens: fun("0xf7c8715a", "pauseUsdToMarginTokens()", {}, ),
    paused: viewFun("0x5c975abb", "paused()", {}, {"_0": p.bool, "_1": p.bool, "_2": p.bool}),
    priceFeed: viewFun("0x741bef1a", "priceFeed()", {}, p.address),
    protocol: viewFun("0x8ce74426", "protocol()", {}, p.address),
    ptyPoolBuyLow: viewFun("0x1f6ac4a3", "ptyPoolBuyLow()", {}, p.address),
    ptyPoolSellHigh: viewFun("0xdbbfedf2", "ptyPoolSellHigh()", {}, p.address),
    redeemByMarginTokenAboveAARU: fun("0x9136bd47", "redeemByMarginTokenAboveAARU(uint256)", {"marginTokenAmount": p.uint256}, ),
    redeemByPairsWithExpectedMarginTokenAmount: fun("0x9e3141d3", "redeemByPairsWithExpectedMarginTokenAmount(uint256)", {"marginTokenAmount": p.uint256}, ),
    redeemByPairsWithExpectedUsdAmount: fun("0xae263e83", "redeemByPairsWithExpectedUsdAmount(uint256)", {"usdAmount": p.uint256}, ),
    redeemByUsdBelowAARS: fun("0xda340597", "redeemByUsdBelowAARS(uint256)", {"usdAmount": p.uint256}, ),
    setPtyPools: fun("0xd189b8a1", "setPtyPools(address,address)", {"_ptyPoolBuyLow": p.address, "_ptyPoolSellHigh": p.address}, ),
    settings: viewFun("0xe06174e4", "settings()", {}, p.address),
    tokenPot: viewFun("0xf7a17d93", "tokenPot()", {}, p.address),
    unpauseMint: fun("0x1a8bd2da", "unpauseMint()", {}, ),
    unpauseRedeem: fun("0xaf3345d1", "unpauseRedeem()", {}, ),
    unpauseUsdToMarginTokens: fun("0x575f5878", "unpauseUsdToMarginTokens()", {}, ),
    updatePriceFeed: fun("0x95877f78", "updatePriceFeed(address)", {"_assetTokenPriceFeed_": p.address}, ),
    usdToMarginTokens: fun("0xe47629b9", "usdToMarginTokens(uint256)", {"usdAmount": p.uint256}, ),
    usdToken: viewFun("0xf897a22b", "usdToken()", {}, p.address),
    usdTotalSupply: viewFun("0xf6b4d56a", "usdTotalSupply()", {}, p.uint256),
    vaultMode: viewFun("0xe0851a88", "vaultMode()", {}, p.uint8),
    vaultType: viewFun("0x4ac032be", "vaultType()", {}, p.uint8),
}

export class Contract extends ContractBase {

    AARBelowCircuitBreakerLineTime() {
        return this.eth_call(functions.AARBelowCircuitBreakerLineTime, {})
    }

    AARBelowSafeLineTime() {
        return this.eth_call(functions.AARBelowSafeLineTime, {})
    }

    AARDecimals() {
        return this.eth_call(functions.AARDecimals, {})
    }

    assetBalance() {
        return this.eth_call(functions.assetBalance, {})
    }

    assetToken() {
        return this.eth_call(functions.assetToken, {})
    }

    assetTokenDecimals() {
        return this.eth_call(functions.assetTokenDecimals, {})
    }

    assetTokenPrice() {
        return this.eth_call(functions.assetTokenPrice, {})
    }

    marginToken() {
        return this.eth_call(functions.marginToken, {})
    }

    owner() {
        return this.eth_call(functions.owner, {})
    }

    paramValue(param: ParamValueParams["param"]) {
        return this.eth_call(functions.paramValue, {param})
    }

    paused() {
        return this.eth_call(functions.paused, {})
    }

    priceFeed() {
        return this.eth_call(functions.priceFeed, {})
    }

    protocol() {
        return this.eth_call(functions.protocol, {})
    }

    ptyPoolBuyLow() {
        return this.eth_call(functions.ptyPoolBuyLow, {})
    }

    ptyPoolSellHigh() {
        return this.eth_call(functions.ptyPoolSellHigh, {})
    }

    settings() {
        return this.eth_call(functions.settings, {})
    }

    tokenPot() {
        return this.eth_call(functions.tokenPot, {})
    }

    usdToken() {
        return this.eth_call(functions.usdToken, {})
    }

    usdTotalSupply() {
        return this.eth_call(functions.usdTotalSupply, {})
    }

    vaultMode() {
        return this.eth_call(functions.vaultMode, {})
    }

    vaultType() {
        return this.eth_call(functions.vaultType, {})
    }
}

/// Event types
export type AssetRedeemedWithMarginTokenEventArgs = EParams<typeof events.AssetRedeemedWithMarginToken>
export type AssetRedeemedWithPairsEventArgs = EParams<typeof events.AssetRedeemedWithPairs>
export type AssetRedeemedWithUSDEventArgs = EParams<typeof events.AssetRedeemedWithUSD>
export type MarginTokenBurnedEventArgs = EParams<typeof events.MarginTokenBurned>
export type MarginTokenMintedEventArgs = EParams<typeof events.MarginTokenMinted>
export type MintPausedEventArgs = EParams<typeof events.MintPaused>
export type MintUnpausedEventArgs = EParams<typeof events.MintUnpaused>
export type RedeemPausedEventArgs = EParams<typeof events.RedeemPaused>
export type RedeemUnpausedEventArgs = EParams<typeof events.RedeemUnpaused>
export type UsdBurnedEventArgs = EParams<typeof events.UsdBurned>
export type UsdMintedEventArgs = EParams<typeof events.UsdMinted>
export type UsdToMarginTokensEventArgs = EParams<typeof events.UsdToMarginTokens>
export type UsdToMarginTokensPausedEventArgs = EParams<typeof events.UsdToMarginTokensPaused>
export type UsdToMarginTokensUnpausedEventArgs = EParams<typeof events.UsdToMarginTokensUnpaused>
export type YieldsSettlementEventArgs = EParams<typeof events.YieldsSettlement>

/// Function types
export type AARBelowCircuitBreakerLineTimeParams = FunctionArguments<typeof functions.AARBelowCircuitBreakerLineTime>
export type AARBelowCircuitBreakerLineTimeReturn = FunctionReturn<typeof functions.AARBelowCircuitBreakerLineTime>

export type AARBelowSafeLineTimeParams = FunctionArguments<typeof functions.AARBelowSafeLineTime>
export type AARBelowSafeLineTimeReturn = FunctionReturn<typeof functions.AARBelowSafeLineTime>

export type AARDecimalsParams = FunctionArguments<typeof functions.AARDecimals>
export type AARDecimalsReturn = FunctionReturn<typeof functions.AARDecimals>

export type AssetBalanceParams = FunctionArguments<typeof functions.assetBalance>
export type AssetBalanceReturn = FunctionReturn<typeof functions.assetBalance>

export type AssetTokenParams = FunctionArguments<typeof functions.assetToken>
export type AssetTokenReturn = FunctionReturn<typeof functions.assetToken>

export type AssetTokenDecimalsParams = FunctionArguments<typeof functions.assetTokenDecimals>
export type AssetTokenDecimalsReturn = FunctionReturn<typeof functions.assetTokenDecimals>

export type AssetTokenPriceParams = FunctionArguments<typeof functions.assetTokenPrice>
export type AssetTokenPriceReturn = FunctionReturn<typeof functions.assetTokenPrice>

export type MarginTokenParams = FunctionArguments<typeof functions.marginToken>
export type MarginTokenReturn = FunctionReturn<typeof functions.marginToken>

export type MintMarginTokensBelowAARSParams = FunctionArguments<typeof functions.mintMarginTokensBelowAARS>
export type MintMarginTokensBelowAARSReturn = FunctionReturn<typeof functions.mintMarginTokensBelowAARS>

export type MintPairsParams = FunctionArguments<typeof functions.mintPairs>
export type MintPairsReturn = FunctionReturn<typeof functions.mintPairs>

export type MintUsdAboveAARUParams = FunctionArguments<typeof functions.mintUsdAboveAARU>
export type MintUsdAboveAARUReturn = FunctionReturn<typeof functions.mintUsdAboveAARU>

export type OwnerParams = FunctionArguments<typeof functions.owner>
export type OwnerReturn = FunctionReturn<typeof functions.owner>

export type ParamValueParams = FunctionArguments<typeof functions.paramValue>
export type ParamValueReturn = FunctionReturn<typeof functions.paramValue>

export type PauseMintParams = FunctionArguments<typeof functions.pauseMint>
export type PauseMintReturn = FunctionReturn<typeof functions.pauseMint>

export type PauseRedeemParams = FunctionArguments<typeof functions.pauseRedeem>
export type PauseRedeemReturn = FunctionReturn<typeof functions.pauseRedeem>

export type PauseUsdToMarginTokensParams = FunctionArguments<typeof functions.pauseUsdToMarginTokens>
export type PauseUsdToMarginTokensReturn = FunctionReturn<typeof functions.pauseUsdToMarginTokens>

export type PausedParams = FunctionArguments<typeof functions.paused>
export type PausedReturn = FunctionReturn<typeof functions.paused>

export type PriceFeedParams = FunctionArguments<typeof functions.priceFeed>
export type PriceFeedReturn = FunctionReturn<typeof functions.priceFeed>

export type ProtocolParams = FunctionArguments<typeof functions.protocol>
export type ProtocolReturn = FunctionReturn<typeof functions.protocol>

export type PtyPoolBuyLowParams = FunctionArguments<typeof functions.ptyPoolBuyLow>
export type PtyPoolBuyLowReturn = FunctionReturn<typeof functions.ptyPoolBuyLow>

export type PtyPoolSellHighParams = FunctionArguments<typeof functions.ptyPoolSellHigh>
export type PtyPoolSellHighReturn = FunctionReturn<typeof functions.ptyPoolSellHigh>

export type RedeemByMarginTokenAboveAARUParams = FunctionArguments<typeof functions.redeemByMarginTokenAboveAARU>
export type RedeemByMarginTokenAboveAARUReturn = FunctionReturn<typeof functions.redeemByMarginTokenAboveAARU>

export type RedeemByPairsWithExpectedMarginTokenAmountParams = FunctionArguments<typeof functions.redeemByPairsWithExpectedMarginTokenAmount>
export type RedeemByPairsWithExpectedMarginTokenAmountReturn = FunctionReturn<typeof functions.redeemByPairsWithExpectedMarginTokenAmount>

export type RedeemByPairsWithExpectedUsdAmountParams = FunctionArguments<typeof functions.redeemByPairsWithExpectedUsdAmount>
export type RedeemByPairsWithExpectedUsdAmountReturn = FunctionReturn<typeof functions.redeemByPairsWithExpectedUsdAmount>

export type RedeemByUsdBelowAARSParams = FunctionArguments<typeof functions.redeemByUsdBelowAARS>
export type RedeemByUsdBelowAARSReturn = FunctionReturn<typeof functions.redeemByUsdBelowAARS>

export type SetPtyPoolsParams = FunctionArguments<typeof functions.setPtyPools>
export type SetPtyPoolsReturn = FunctionReturn<typeof functions.setPtyPools>

export type SettingsParams = FunctionArguments<typeof functions.settings>
export type SettingsReturn = FunctionReturn<typeof functions.settings>

export type TokenPotParams = FunctionArguments<typeof functions.tokenPot>
export type TokenPotReturn = FunctionReturn<typeof functions.tokenPot>

export type UnpauseMintParams = FunctionArguments<typeof functions.unpauseMint>
export type UnpauseMintReturn = FunctionReturn<typeof functions.unpauseMint>

export type UnpauseRedeemParams = FunctionArguments<typeof functions.unpauseRedeem>
export type UnpauseRedeemReturn = FunctionReturn<typeof functions.unpauseRedeem>

export type UnpauseUsdToMarginTokensParams = FunctionArguments<typeof functions.unpauseUsdToMarginTokens>
export type UnpauseUsdToMarginTokensReturn = FunctionReturn<typeof functions.unpauseUsdToMarginTokens>

export type UpdatePriceFeedParams = FunctionArguments<typeof functions.updatePriceFeed>
export type UpdatePriceFeedReturn = FunctionReturn<typeof functions.updatePriceFeed>

export type UsdToMarginTokensParams = FunctionArguments<typeof functions.usdToMarginTokens>
export type UsdToMarginTokensReturn = FunctionReturn<typeof functions.usdToMarginTokens>

export type UsdTokenParams = FunctionArguments<typeof functions.usdToken>
export type UsdTokenReturn = FunctionReturn<typeof functions.usdToken>

export type UsdTotalSupplyParams = FunctionArguments<typeof functions.usdTotalSupply>
export type UsdTotalSupplyReturn = FunctionReturn<typeof functions.usdTotalSupply>

export type VaultModeParams = FunctionArguments<typeof functions.vaultMode>
export type VaultModeReturn = FunctionReturn<typeof functions.vaultMode>

export type VaultTypeParams = FunctionArguments<typeof functions.vaultType>
export type VaultTypeReturn = FunctionReturn<typeof functions.vaultType>

