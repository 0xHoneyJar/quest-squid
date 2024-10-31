import * as p from "@subsquid/evm-codec";
import { event, fun, viewFun, indexed, ContractBase } from "@subsquid/evm-abi";
import type {
  EventParams as EParams,
  FunctionArguments,
  FunctionReturn,
} from "@subsquid/evm-abi";

export const events = {
  "Approval(address indexed,address indexed,uint256)": event(
    "0x8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925",
    "Approval(address,address,uint256)",
    { owner: indexed(p.address), spender: indexed(p.address), value: p.uint256 }
  ),
  "AssetsWithdraw(address indexed,uint256,address[],uint256[])": event(
    "0x86bcb277da75a9fbb738b8bb82beb731d82a0a89516b848730df92849f966bf0",
    "AssetsWithdraw(address,uint256,address[],uint256[])",
    {
      receiver: indexed(p.address),
      shares: p.uint256,
      tokens: p.array(p.address),
      amounts: p.array(p.uint256),
    }
  ),
  "CollateralOverwritten(address,address)": event(
    "0x9e147d339c63698deb55c3d0d44ed3eba29bac2a068a88c4bc5bde17d6331e19",
    "CollateralOverwritten(address,address)",
    { oldCollateral: p.address, newCollateral: p.address }
  ),
  "Deposit(address indexed,address indexed,uint256,uint256)": event(
    "0xdcbc1c05240f31ff3ad067ef1ee35ce4997762752e3a095284754544f4c709d7",
    "Deposit(address,address,uint256,uint256)",
    {
      sender: indexed(p.address),
      owner: indexed(p.address),
      assets: p.uint256,
      shares: p.uint256,
    }
  ),
  "EmissionsAdded(address indexed,uint128)": event(
    "0x693ffe037fd29f4846b006bd3ada57d4fd4c3622277227342f0e4fed9011dc20",
    "EmissionsAdded(address,uint128)",
    { token: indexed(p.address), amount: p.uint128 }
  ),
  "ExtraAssetAdded(address)": event(
    "0x252fb22f1e5dcdba04908f13259852204aead54fea1342d028eb2f49510bee97",
    "ExtraAssetAdded(address)",
    { token: p.address }
  ),
  "ExtraAssetRemoved(address)": event(
    "0xfc9138846a97b86614d19b78419b88e555c50bbd80b03feffd6264cd43064380",
    "ExtraAssetRemoved(address)",
    { token: p.address }
  ),
  "Initialized(uint64)": event(
    "0xc7f505b2f371ae2175ee4913f4499e1f2633a7b5936321eed1cdaeb6115181d2",
    "Initialized(uint64)",
    { version: p.uint64 }
  ),
  "OwnershipTransferStarted(address indexed,address indexed)": event(
    "0x38d16b8cac22d99fc7c124b9cd0de2d3fa1faef420bfe791d8c362d765e22700",
    "OwnershipTransferStarted(address,address)",
    { previousOwner: indexed(p.address), newOwner: indexed(p.address) }
  ),
  "OwnershipTransferred(address indexed,address indexed)": event(
    "0x8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0",
    "OwnershipTransferred(address,address)",
    { previousOwner: indexed(p.address), newOwner: indexed(p.address) }
  ),
  "Transfer(address indexed,address indexed,uint256)": event(
    "0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef",
    "Transfer(address,address,uint256)",
    { from: indexed(p.address), to: indexed(p.address), value: p.uint256 }
  ),
  "Withdraw(address indexed,address indexed,address indexed,uint256,uint256)":
    event(
      "0xfbde797d201c681b91056529119e0b02407c7bb96a4a2c75c01fc9667232c8db",
      "Withdraw(address,address,address,uint256,uint256)",
      {
        sender: indexed(p.address),
        receiver: indexed(p.address),
        owner: indexed(p.address),
        assets: p.uint256,
        shares: p.uint256,
      }
    ),
};

export const functions = {
  "FEE_DISCOUNT_BP()": viewFun("0x34fc7de6", "FEE_DISCOUNT_BP()", {}, p.uint16),
  "SUNSET_DURATION()": viewFun(
    "0xa7528a03",
    "SUNSET_DURATION()",
    {},
    p.uint128
  ),
  "acceptOwnership()": fun("0x79ba5097", "acceptOwnership()", {}),
  "addNewExtraAsset(address,uint64)": fun(
    "0xfcb99905",
    "addNewExtraAsset(address,uint64)",
    { token: p.address, _unlockRatePerSecond: p.uint64 }
  ),
  "allowance(address,address)": viewFun(
    "0xdd62ed3e",
    "allowance(address,address)",
    { owner: p.address, spender: p.address },
    p.uint256
  ),
  "approve(address,uint256)": fun(
    "0x095ea7b3",
    "approve(address,uint256)",
    { spender: p.address, value: p.uint256 },
    p.bool
  ),
  "asset()": viewFun("0x38d52e0f", "asset()", {}, p.address),
  "balanceOf(address)": viewFun(
    "0x70a08231",
    "balanceOf(address)",
    { account: p.address },
    p.uint256
  ),
  "convertToAssets(uint256)": viewFun(
    "0x07a2d13a",
    "convertToAssets(uint256)",
    { shares: p.uint256 },
    p.uint256
  ),
  "convertToShares(uint256)": viewFun(
    "0xc6e6f592",
    "convertToShares(uint256)",
    { assets: p.uint256 },
    p.uint256
  ),
  "decimals()": viewFun("0x313ce567", "decimals()", {}, p.uint8),
  "deposit(uint256,address)": fun(
    "0x6e553f65",
    "deposit(uint256,address)",
    { assets: p.uint256, receiver: p.address },
    p.uint256
  ),
  "enableCollateral(address,uint64)": fun(
    "0xee59d540",
    "enableCollateral(address,uint64)",
    { _collateral: p.address, _unlockRatePerSecond: p.uint64 }
  ),
  "extSloads(bytes32[])": viewFun(
    "0x7784c685",
    "extSloads(bytes32[])",
    { slots: p.array(p.bytes32) },
    p.array(p.bytes32)
  ),
  "getCollateralTokenAt(uint256)": viewFun(
    "0xb5cafaaa",
    "getCollateralTokenAt(uint256)",
    { index: p.uint256 },
    p.address
  ),
  "getCollateralTokens()": viewFun(
    "0xb58eb63f",
    "getCollateralTokens()",
    {},
    p.array(p.address)
  ),
  "getLockedEmissions(address)": viewFun(
    "0x403dd3bc",
    "getLockedEmissions(address)",
    { token: p.address },
    p.uint256
  ),
  "getPrice(address)": viewFun(
    "0x41976e09",
    "getPrice(address)",
    { token: p.address },
    p.uint256
  ),
  "getTotalDebtTokenDeposits()": viewFun(
    "0x0d9a6b35",
    "getTotalDebtTokenDeposits()",
    {},
    p.uint256
  ),
  "initialize((address,string,string,address,address,address,uint16,uint16,address,address))":
    fun(
      "0x00fb18a6",
      "initialize((address,string,string,address,address,address,uint16,uint16,address,address))",
      {
        params: p.struct({
          _asset: p.address,
          _sharesName: p.string,
          _sharesSymbol: p.string,
          _beraborrowCore: p.address,
          _liquidationManager: p.address,
          _factory: p.address,
          _entryFee: p.uint16,
          _exitFee: p.uint16,
          _feeReceiver: p.address,
          _admin: p.address,
        }),
      }
    ),
  "linearVestingExtraAssets(address,address,address,uint96,uint64,uint64)": fun(
    "0xf3f94e0e",
    "linearVestingExtraAssets(address,address,address,uint96,uint64,uint64)",
    {
      token: p.address,
      _owner: p.address,
      recipient: p.address,
      rate: p.uint96,
      start: p.uint64,
      end: p.uint64,
    }
  ),
  "maxDeposit(address)": viewFun(
    "0x402d267d",
    "maxDeposit(address)",
    { _0: p.address },
    p.uint256
  ),
  "maxMint(address)": viewFun(
    "0xc63d75b6",
    "maxMint(address)",
    { _0: p.address },
    p.uint256
  ),
  "maxRedeem(address)": viewFun(
    "0xd905777e",
    "maxRedeem(address)",
    { owner: p.address },
    p.uint256
  ),
  "maxWithdraw(address)": viewFun(
    "0xce96cb77",
    "maxWithdraw(address)",
    { _owner: p.address },
    p.uint256
  ),
  "mint(uint256,address)": fun(
    "0x94bf804d",
    "mint(uint256,address)",
    { shares: p.uint256, receiver: p.address },
    p.uint256
  ),
  "name()": viewFun("0x06fdde03", "name()", {}, p.string),
  "offset(address,uint256,uint256)": fun(
    "0xe6666733",
    "offset(address,uint256,uint256)",
    { collateral: p.address, _debtToOffset: p.uint256, _collToAdd: p.uint256 }
  ),
  "owner()": viewFun("0x8da5cb5b", "owner()", {}, p.address),
  "pendingOwner()": viewFun("0xe30c3978", "pendingOwner()", {}, p.address),
  "previewDeposit(uint256)": viewFun(
    "0xef8b30f7",
    "previewDeposit(uint256)",
    { assets: p.uint256 },
    p.uint256
  ),
  "previewMint(uint256)": viewFun(
    "0xb3d7f6b9",
    "previewMint(uint256)",
    { shares: p.uint256 },
    p.uint256
  ),
  "previewRedeem(uint256)": viewFun(
    "0x4cdad506",
    "previewRedeem(uint256)",
    { shares: p.uint256 },
    p.uint256
  ),
  "previewWithdraw(uint256)": viewFun(
    "0x0a28a477",
    "previewWithdraw(uint256)",
    { assets: p.uint256 },
    p.uint256
  ),
  "rebalance((address,uint256,address,address,bytes))": fun(
    "0x7facd79b",
    "rebalance((address,uint256,address,address,bytes))",
    {
      p: p.struct({
        sentCurrency: p.address,
        sentAmount: p.uint256,
        receivedCurrency: p.address,
        swapper: p.address,
        payload: p.bytes,
      }),
    }
  ),
  "receiveDonations(address)": fun("0x62edd2f5", "receiveDonations(address)", {
    receiver: p.address,
  }),
  "redeem(uint256,address[],address,address)": fun(
    "0x31e95162",
    "redeem(uint256,address[],address,address)",
    {
      shares: p.uint256,
      preferredUnderlyingTokens: p.array(p.address),
      receiver: p.address,
      _owner: p.address,
    },
    p.uint256
  ),
  "redeem(uint256,address,address)": fun(
    "0xba087652",
    "redeem(uint256,address,address)",
    { shares: p.uint256, receiver: p.address, _owner: p.address },
    p.uint256
  ),
  "removeExtraAsset(address)": fun("0x6cd611be", "removeExtraAsset(address)", {
    token: p.address,
  }),
  "renounceOwnership()": fun("0x715018a6", "renounceOwnership()", {}),
  "setPairThreshold(address,address,uint256)": fun(
    "0xbadd8b2d",
    "setPairThreshold(address,address,uint256)",
    { tokenIn: p.address, tokenOut: p.address, thresholdInBP: p.uint256 }
  ),
  "setRebalancer(address,bool)": fun(
    "0xfe5198a4",
    "setRebalancer(address,bool)",
    { rebalancer: p.address, isRebalancer: p.bool }
  ),
  "setUnlockRatePerSecond(address,uint64)": fun(
    "0x0b983a74",
    "setUnlockRatePerSecond(address,uint64)",
    { token: p.address, _unlockRatePerSecond: p.uint64 }
  ),
  "startCollateralSunset(address)": fun(
    "0x19f27b3b",
    "startCollateralSunset(address)",
    { collateral: p.address }
  ),
  "symbol()": viewFun("0x95d89b41", "symbol()", {}, p.string),
  "totalAssets()": viewFun("0x01e1d114", "totalAssets()", {}, p.uint256),
  "totalAssetsUnlocked()": viewFun(
    "0xe56fc243",
    "totalAssetsUnlocked()",
    {},
    p.uint256
  ),
  "totalSupply()": viewFun("0x18160ddd", "totalSupply()", {}, p.uint256),
  "transfer(address,uint256)": fun(
    "0xa9059cbb",
    "transfer(address,uint256)",
    { to: p.address, value: p.uint256 },
    p.bool
  ),
  "transferFrom(address,address,uint256)": fun(
    "0x23b872dd",
    "transferFrom(address,address,uint256)",
    { from: p.address, to: p.address, value: p.uint256 },
    p.bool
  ),
  "transferOwnership(address)": fun(
    "0xf2fde38b",
    "transferOwnership(address)",
    { newOwner: p.address }
  ),
  "unclaimedUnvestedAmount(address)": viewFun(
    "0x1c3d033f",
    "unclaimedUnvestedAmount(address)",
    { token: p.address },
    p.uint256
  ),
  "vestedAmount(address)": viewFun(
    "0x384711cc",
    "vestedAmount(address)",
    { token: p.address },
    p.uint256
  ),
  "withdraw(uint256,address,address)": fun(
    "0xb460af94",
    "withdraw(uint256,address,address)",
    { assets: p.uint256, receiver: p.address, _owner: p.address },
    p.uint256
  ),
  "withdraw(uint256,address[],address,address)": fun(
    "0xddda679b",
    "withdraw(uint256,address[],address,address)",
    {
      assets: p.uint256,
      preferredUnderlyingTokens: p.array(p.address),
      receiver: p.address,
      _owner: p.address,
    },
    p.uint256
  ),
};

export class Contract extends ContractBase {
  "FEE_DISCOUNT_BP()"() {
    return this.eth_call(functions["FEE_DISCOUNT_BP()"], {});
  }

  "SUNSET_DURATION()"() {
    return this.eth_call(functions["SUNSET_DURATION()"], {});
  }

  "allowance(address,address)"(
    owner: AllowanceParams_0["owner"],
    spender: AllowanceParams_0["spender"]
  ) {
    return this.eth_call(functions["allowance(address,address)"], {
      owner,
      spender,
    });
  }

  "asset()"() {
    return this.eth_call(functions["asset()"], {});
  }

  "balanceOf(address)"(account: BalanceOfParams_0["account"]) {
    return this.eth_call(functions["balanceOf(address)"], { account });
  }

  "convertToAssets(uint256)"(shares: ConvertToAssetsParams_0["shares"]) {
    return this.eth_call(functions["convertToAssets(uint256)"], { shares });
  }

  "convertToShares(uint256)"(assets: ConvertToSharesParams_0["assets"]) {
    return this.eth_call(functions["convertToShares(uint256)"], { assets });
  }

  "decimals()"() {
    return this.eth_call(functions["decimals()"], {});
  }

  "extSloads(bytes32[])"(slots: ExtSloadsParams_0["slots"]) {
    return this.eth_call(functions["extSloads(bytes32[])"], { slots });
  }

  "getCollateralTokenAt(uint256)"(
    index: GetCollateralTokenAtParams_0["index"]
  ) {
    return this.eth_call(functions["getCollateralTokenAt(uint256)"], { index });
  }

  "getCollateralTokens()"() {
    return this.eth_call(functions["getCollateralTokens()"], {});
  }

  "getLockedEmissions(address)"(token: GetLockedEmissionsParams_0["token"]) {
    return this.eth_call(functions["getLockedEmissions(address)"], { token });
  }

  "getPrice(address)"(token: GetPriceParams_0["token"]) {
    return this.eth_call(functions["getPrice(address)"], { token });
  }

  "getTotalDebtTokenDeposits()"() {
    return this.eth_call(functions["getTotalDebtTokenDeposits()"], {});
  }

  "maxDeposit(address)"(_0: MaxDepositParams_0["_0"]) {
    return this.eth_call(functions["maxDeposit(address)"], { _0 });
  }

  "maxMint(address)"(_0: MaxMintParams_0["_0"]) {
    return this.eth_call(functions["maxMint(address)"], { _0 });
  }

  "maxRedeem(address)"(owner: MaxRedeemParams_0["owner"]) {
    return this.eth_call(functions["maxRedeem(address)"], { owner });
  }

  "maxWithdraw(address)"(_owner: MaxWithdrawParams_0["_owner"]) {
    return this.eth_call(functions["maxWithdraw(address)"], { _owner });
  }

  "name()"() {
    return this.eth_call(functions["name()"], {});
  }

  "owner()"() {
    return this.eth_call(functions["owner()"], {});
  }

  "pendingOwner()"() {
    return this.eth_call(functions["pendingOwner()"], {});
  }

  "previewDeposit(uint256)"(assets: PreviewDepositParams_0["assets"]) {
    return this.eth_call(functions["previewDeposit(uint256)"], { assets });
  }

  "previewMint(uint256)"(shares: PreviewMintParams_0["shares"]) {
    return this.eth_call(functions["previewMint(uint256)"], { shares });
  }

  "previewRedeem(uint256)"(shares: PreviewRedeemParams_0["shares"]) {
    return this.eth_call(functions["previewRedeem(uint256)"], { shares });
  }

  "previewWithdraw(uint256)"(assets: PreviewWithdrawParams_0["assets"]) {
    return this.eth_call(functions["previewWithdraw(uint256)"], { assets });
  }

  "symbol()"() {
    return this.eth_call(functions["symbol()"], {});
  }

  "totalAssets()"() {
    return this.eth_call(functions["totalAssets()"], {});
  }

  "totalAssetsUnlocked()"() {
    return this.eth_call(functions["totalAssetsUnlocked()"], {});
  }

  "totalSupply()"() {
    return this.eth_call(functions["totalSupply()"], {});
  }

  "unclaimedUnvestedAmount(address)"(
    token: UnclaimedUnvestedAmountParams_0["token"]
  ) {
    return this.eth_call(functions["unclaimedUnvestedAmount(address)"], {
      token,
    });
  }

  "vestedAmount(address)"(token: VestedAmountParams_0["token"]) {
    return this.eth_call(functions["vestedAmount(address)"], { token });
  }
}

/// Event types
export type ApprovalEventArgs_0 = EParams<
  (typeof events)["Approval(address indexed,address indexed,uint256)"]
>;
export type AssetsWithdrawEventArgs_0 = EParams<
  (typeof events)["AssetsWithdraw(address indexed,uint256,address[],uint256[])"]
>;
export type CollateralOverwrittenEventArgs_0 = EParams<
  (typeof events)["CollateralOverwritten(address,address)"]
>;
export type DepositEventArgs_0 = EParams<
  (typeof events)["Deposit(address indexed,address indexed,uint256,uint256)"]
>;
export type EmissionsAddedEventArgs_0 = EParams<
  (typeof events)["EmissionsAdded(address indexed,uint128)"]
>;
export type ExtraAssetAddedEventArgs_0 = EParams<
  (typeof events)["ExtraAssetAdded(address)"]
>;
export type ExtraAssetRemovedEventArgs_0 = EParams<
  (typeof events)["ExtraAssetRemoved(address)"]
>;
export type InitializedEventArgs_0 = EParams<
  (typeof events)["Initialized(uint64)"]
>;
export type OwnershipTransferStartedEventArgs_0 = EParams<
  (typeof events)["OwnershipTransferStarted(address indexed,address indexed)"]
>;
export type OwnershipTransferredEventArgs_0 = EParams<
  (typeof events)["OwnershipTransferred(address indexed,address indexed)"]
>;
export type TransferEventArgs_0 = EParams<
  (typeof events)["Transfer(address indexed,address indexed,uint256)"]
>;
export type WithdrawEventArgs_0 = EParams<
  (typeof events)["Withdraw(address indexed,address indexed,address indexed,uint256,uint256)"]
>;
export type ApprovalEventArgs_1 = EParams<
  (typeof events)["Approval(address indexed,address indexed,uint256)"]
>;
export type AssetsWithdrawEventArgs_1 = EParams<
  (typeof events)["AssetsWithdraw(address indexed,uint256,address[],uint256[])"]
>;
export type CollateralOverwrittenEventArgs_1 = EParams<
  (typeof events)["CollateralOverwritten(address,address)"]
>;
export type DepositEventArgs_1 = EParams<
  (typeof events)["Deposit(address indexed,address indexed,uint256,uint256)"]
>;
export type EmissionsAddedEventArgs_1 = EParams<
  (typeof events)["EmissionsAdded(address indexed,uint128)"]
>;
export type ExtraAssetAddedEventArgs_1 = EParams<
  (typeof events)["ExtraAssetAdded(address)"]
>;
export type ExtraAssetRemovedEventArgs_1 = EParams<
  (typeof events)["ExtraAssetRemoved(address)"]
>;
export type InitializedEventArgs_1 = EParams<
  (typeof events)["Initialized(uint64)"]
>;
export type OwnershipTransferStartedEventArgs_1 = EParams<
  (typeof events)["OwnershipTransferStarted(address indexed,address indexed)"]
>;
export type OwnershipTransferredEventArgs_1 = EParams<
  (typeof events)["OwnershipTransferred(address indexed,address indexed)"]
>;
export type TransferEventArgs_1 = EParams<
  (typeof events)["Transfer(address indexed,address indexed,uint256)"]
>;
export type WithdrawEventArgs_1 = EParams<
  (typeof events)["Withdraw(address indexed,address indexed,address indexed,uint256,uint256)"]
>;

/// Function types
export type FEE_DISCOUNT_BPParams_0 = FunctionArguments<
  (typeof functions)["FEE_DISCOUNT_BP()"]
>;
export type FEE_DISCOUNT_BPReturn_0 = FunctionReturn<
  (typeof functions)["FEE_DISCOUNT_BP()"]
>;

export type SUNSET_DURATIONParams_0 = FunctionArguments<
  (typeof functions)["SUNSET_DURATION()"]
>;
export type SUNSET_DURATIONReturn_0 = FunctionReturn<
  (typeof functions)["SUNSET_DURATION()"]
>;

export type AcceptOwnershipParams_0 = FunctionArguments<
  (typeof functions)["acceptOwnership()"]
>;
export type AcceptOwnershipReturn_0 = FunctionReturn<
  (typeof functions)["acceptOwnership()"]
>;

export type AddNewExtraAssetParams_0 = FunctionArguments<
  (typeof functions)["addNewExtraAsset(address,uint64)"]
>;
export type AddNewExtraAssetReturn_0 = FunctionReturn<
  (typeof functions)["addNewExtraAsset(address,uint64)"]
>;

export type AllowanceParams_0 = FunctionArguments<
  (typeof functions)["allowance(address,address)"]
>;
export type AllowanceReturn_0 = FunctionReturn<
  (typeof functions)["allowance(address,address)"]
>;

export type ApproveParams_0 = FunctionArguments<
  (typeof functions)["approve(address,uint256)"]
>;
export type ApproveReturn_0 = FunctionReturn<
  (typeof functions)["approve(address,uint256)"]
>;

export type AssetParams_0 = FunctionArguments<(typeof functions)["asset()"]>;
export type AssetReturn_0 = FunctionReturn<(typeof functions)["asset()"]>;

export type BalanceOfParams_0 = FunctionArguments<
  (typeof functions)["balanceOf(address)"]
>;
export type BalanceOfReturn_0 = FunctionReturn<
  (typeof functions)["balanceOf(address)"]
>;

export type ConvertToAssetsParams_0 = FunctionArguments<
  (typeof functions)["convertToAssets(uint256)"]
>;
export type ConvertToAssetsReturn_0 = FunctionReturn<
  (typeof functions)["convertToAssets(uint256)"]
>;

export type ConvertToSharesParams_0 = FunctionArguments<
  (typeof functions)["convertToShares(uint256)"]
>;
export type ConvertToSharesReturn_0 = FunctionReturn<
  (typeof functions)["convertToShares(uint256)"]
>;

export type DecimalsParams_0 = FunctionArguments<
  (typeof functions)["decimals()"]
>;
export type DecimalsReturn_0 = FunctionReturn<(typeof functions)["decimals()"]>;

export type DepositParams_0 = FunctionArguments<
  (typeof functions)["deposit(uint256,address)"]
>;
export type DepositReturn_0 = FunctionReturn<
  (typeof functions)["deposit(uint256,address)"]
>;

export type EnableCollateralParams_0 = FunctionArguments<
  (typeof functions)["enableCollateral(address,uint64)"]
>;
export type EnableCollateralReturn_0 = FunctionReturn<
  (typeof functions)["enableCollateral(address,uint64)"]
>;

export type ExtSloadsParams_0 = FunctionArguments<
  (typeof functions)["extSloads(bytes32[])"]
>;
export type ExtSloadsReturn_0 = FunctionReturn<
  (typeof functions)["extSloads(bytes32[])"]
>;

export type GetCollateralTokenAtParams_0 = FunctionArguments<
  (typeof functions)["getCollateralTokenAt(uint256)"]
>;
export type GetCollateralTokenAtReturn_0 = FunctionReturn<
  (typeof functions)["getCollateralTokenAt(uint256)"]
>;

export type GetCollateralTokensParams_0 = FunctionArguments<
  (typeof functions)["getCollateralTokens()"]
>;
export type GetCollateralTokensReturn_0 = FunctionReturn<
  (typeof functions)["getCollateralTokens()"]
>;

export type GetLockedEmissionsParams_0 = FunctionArguments<
  (typeof functions)["getLockedEmissions(address)"]
>;
export type GetLockedEmissionsReturn_0 = FunctionReturn<
  (typeof functions)["getLockedEmissions(address)"]
>;

export type GetPriceParams_0 = FunctionArguments<
  (typeof functions)["getPrice(address)"]
>;
export type GetPriceReturn_0 = FunctionReturn<
  (typeof functions)["getPrice(address)"]
>;

export type GetTotalDebtTokenDepositsParams_0 = FunctionArguments<
  (typeof functions)["getTotalDebtTokenDeposits()"]
>;
export type GetTotalDebtTokenDepositsReturn_0 = FunctionReturn<
  (typeof functions)["getTotalDebtTokenDeposits()"]
>;

export type InitializeParams_0 = FunctionArguments<
  (typeof functions)["initialize((address,string,string,address,address,address,uint16,uint16,address,address))"]
>;
export type InitializeReturn_0 = FunctionReturn<
  (typeof functions)["initialize((address,string,string,address,address,address,uint16,uint16,address,address))"]
>;

export type LinearVestingExtraAssetsParams_0 = FunctionArguments<
  (typeof functions)["linearVestingExtraAssets(address,address,address,uint96,uint64,uint64)"]
>;
export type LinearVestingExtraAssetsReturn_0 = FunctionReturn<
  (typeof functions)["linearVestingExtraAssets(address,address,address,uint96,uint64,uint64)"]
>;

export type MaxDepositParams_0 = FunctionArguments<
  (typeof functions)["maxDeposit(address)"]
>;
export type MaxDepositReturn_0 = FunctionReturn<
  (typeof functions)["maxDeposit(address)"]
>;

export type MaxMintParams_0 = FunctionArguments<
  (typeof functions)["maxMint(address)"]
>;
export type MaxMintReturn_0 = FunctionReturn<
  (typeof functions)["maxMint(address)"]
>;

export type MaxRedeemParams_0 = FunctionArguments<
  (typeof functions)["maxRedeem(address)"]
>;
export type MaxRedeemReturn_0 = FunctionReturn<
  (typeof functions)["maxRedeem(address)"]
>;

export type MaxWithdrawParams_0 = FunctionArguments<
  (typeof functions)["maxWithdraw(address)"]
>;
export type MaxWithdrawReturn_0 = FunctionReturn<
  (typeof functions)["maxWithdraw(address)"]
>;

export type MintParams_0 = FunctionArguments<
  (typeof functions)["mint(uint256,address)"]
>;
export type MintReturn_0 = FunctionReturn<
  (typeof functions)["mint(uint256,address)"]
>;

export type NameParams_0 = FunctionArguments<(typeof functions)["name()"]>;
export type NameReturn_0 = FunctionReturn<(typeof functions)["name()"]>;

export type OffsetParams_0 = FunctionArguments<
  (typeof functions)["offset(address,uint256,uint256)"]
>;
export type OffsetReturn_0 = FunctionReturn<
  (typeof functions)["offset(address,uint256,uint256)"]
>;

export type OwnerParams_0 = FunctionArguments<(typeof functions)["owner()"]>;
export type OwnerReturn_0 = FunctionReturn<(typeof functions)["owner()"]>;

export type PendingOwnerParams_0 = FunctionArguments<
  (typeof functions)["pendingOwner()"]
>;
export type PendingOwnerReturn_0 = FunctionReturn<
  (typeof functions)["pendingOwner()"]
>;

export type PreviewDepositParams_0 = FunctionArguments<
  (typeof functions)["previewDeposit(uint256)"]
>;
export type PreviewDepositReturn_0 = FunctionReturn<
  (typeof functions)["previewDeposit(uint256)"]
>;

export type PreviewMintParams_0 = FunctionArguments<
  (typeof functions)["previewMint(uint256)"]
>;
export type PreviewMintReturn_0 = FunctionReturn<
  (typeof functions)["previewMint(uint256)"]
>;

export type PreviewRedeemParams_0 = FunctionArguments<
  (typeof functions)["previewRedeem(uint256)"]
>;
export type PreviewRedeemReturn_0 = FunctionReturn<
  (typeof functions)["previewRedeem(uint256)"]
>;

export type PreviewWithdrawParams_0 = FunctionArguments<
  (typeof functions)["previewWithdraw(uint256)"]
>;
export type PreviewWithdrawReturn_0 = FunctionReturn<
  (typeof functions)["previewWithdraw(uint256)"]
>;

export type RebalanceParams_0 = FunctionArguments<
  (typeof functions)["rebalance((address,uint256,address,address,bytes))"]
>;
export type RebalanceReturn_0 = FunctionReturn<
  (typeof functions)["rebalance((address,uint256,address,address,bytes))"]
>;

export type ReceiveDonationsParams_0 = FunctionArguments<
  (typeof functions)["receiveDonations(address)"]
>;
export type ReceiveDonationsReturn_0 = FunctionReturn<
  (typeof functions)["receiveDonations(address)"]
>;

export type RedeemParams_0 = FunctionArguments<
  (typeof functions)["redeem(uint256,address[],address,address)"]
>;
export type RedeemReturn_0 = FunctionReturn<
  (typeof functions)["redeem(uint256,address[],address,address)"]
>;

export type RedeemParams_1 = FunctionArguments<
  (typeof functions)["redeem(uint256,address,address)"]
>;
export type RedeemReturn_1 = FunctionReturn<
  (typeof functions)["redeem(uint256,address,address)"]
>;

export type RemoveExtraAssetParams_0 = FunctionArguments<
  (typeof functions)["removeExtraAsset(address)"]
>;
export type RemoveExtraAssetReturn_0 = FunctionReturn<
  (typeof functions)["removeExtraAsset(address)"]
>;

export type RenounceOwnershipParams_0 = FunctionArguments<
  (typeof functions)["renounceOwnership()"]
>;
export type RenounceOwnershipReturn_0 = FunctionReturn<
  (typeof functions)["renounceOwnership()"]
>;

export type SetPairThresholdParams_0 = FunctionArguments<
  (typeof functions)["setPairThreshold(address,address,uint256)"]
>;
export type SetPairThresholdReturn_0 = FunctionReturn<
  (typeof functions)["setPairThreshold(address,address,uint256)"]
>;

export type SetRebalancerParams_0 = FunctionArguments<
  (typeof functions)["setRebalancer(address,bool)"]
>;
export type SetRebalancerReturn_0 = FunctionReturn<
  (typeof functions)["setRebalancer(address,bool)"]
>;

export type SetUnlockRatePerSecondParams_0 = FunctionArguments<
  (typeof functions)["setUnlockRatePerSecond(address,uint64)"]
>;
export type SetUnlockRatePerSecondReturn_0 = FunctionReturn<
  (typeof functions)["setUnlockRatePerSecond(address,uint64)"]
>;

export type StartCollateralSunsetParams_0 = FunctionArguments<
  (typeof functions)["startCollateralSunset(address)"]
>;
export type StartCollateralSunsetReturn_0 = FunctionReturn<
  (typeof functions)["startCollateralSunset(address)"]
>;

export type SymbolParams_0 = FunctionArguments<(typeof functions)["symbol()"]>;
export type SymbolReturn_0 = FunctionReturn<(typeof functions)["symbol()"]>;

export type TotalAssetsParams_0 = FunctionArguments<
  (typeof functions)["totalAssets()"]
>;
export type TotalAssetsReturn_0 = FunctionReturn<
  (typeof functions)["totalAssets()"]
>;

export type TotalAssetsUnlockedParams_0 = FunctionArguments<
  (typeof functions)["totalAssetsUnlocked()"]
>;
export type TotalAssetsUnlockedReturn_0 = FunctionReturn<
  (typeof functions)["totalAssetsUnlocked()"]
>;

export type TotalSupplyParams_0 = FunctionArguments<
  (typeof functions)["totalSupply()"]
>;
export type TotalSupplyReturn_0 = FunctionReturn<
  (typeof functions)["totalSupply()"]
>;

export type TransferParams_0 = FunctionArguments<
  (typeof functions)["transfer(address,uint256)"]
>;
export type TransferReturn_0 = FunctionReturn<
  (typeof functions)["transfer(address,uint256)"]
>;

export type TransferFromParams_0 = FunctionArguments<
  (typeof functions)["transferFrom(address,address,uint256)"]
>;
export type TransferFromReturn_0 = FunctionReturn<
  (typeof functions)["transferFrom(address,address,uint256)"]
>;

export type TransferOwnershipParams_0 = FunctionArguments<
  (typeof functions)["transferOwnership(address)"]
>;
export type TransferOwnershipReturn_0 = FunctionReturn<
  (typeof functions)["transferOwnership(address)"]
>;

export type UnclaimedUnvestedAmountParams_0 = FunctionArguments<
  (typeof functions)["unclaimedUnvestedAmount(address)"]
>;
export type UnclaimedUnvestedAmountReturn_0 = FunctionReturn<
  (typeof functions)["unclaimedUnvestedAmount(address)"]
>;

export type VestedAmountParams_0 = FunctionArguments<
  (typeof functions)["vestedAmount(address)"]
>;
export type VestedAmountReturn_0 = FunctionReturn<
  (typeof functions)["vestedAmount(address)"]
>;

export type WithdrawParams_0 = FunctionArguments<
  (typeof functions)["withdraw(uint256,address,address)"]
>;
export type WithdrawReturn_0 = FunctionReturn<
  (typeof functions)["withdraw(uint256,address,address)"]
>;

export type WithdrawParams_1 = FunctionArguments<
  (typeof functions)["withdraw(uint256,address[],address,address)"]
>;
export type WithdrawReturn_1 = FunctionReturn<
  (typeof functions)["withdraw(uint256,address[],address,address)"]
>;

export type FEE_DISCOUNT_BPParams_1 = FunctionArguments<
  (typeof functions)["FEE_DISCOUNT_BP()"]
>;
export type FEE_DISCOUNT_BPReturn_1 = FunctionReturn<
  (typeof functions)["FEE_DISCOUNT_BP()"]
>;

export type SUNSET_DURATIONParams_1 = FunctionArguments<
  (typeof functions)["SUNSET_DURATION()"]
>;
export type SUNSET_DURATIONReturn_1 = FunctionReturn<
  (typeof functions)["SUNSET_DURATION()"]
>;

export type AcceptOwnershipParams_1 = FunctionArguments<
  (typeof functions)["acceptOwnership()"]
>;
export type AcceptOwnershipReturn_1 = FunctionReturn<
  (typeof functions)["acceptOwnership()"]
>;

export type AddNewExtraAssetParams_1 = FunctionArguments<
  (typeof functions)["addNewExtraAsset(address,uint64)"]
>;
export type AddNewExtraAssetReturn_1 = FunctionReturn<
  (typeof functions)["addNewExtraAsset(address,uint64)"]
>;

export type AllowanceParams_1 = FunctionArguments<
  (typeof functions)["allowance(address,address)"]
>;
export type AllowanceReturn_1 = FunctionReturn<
  (typeof functions)["allowance(address,address)"]
>;

export type ApproveParams_1 = FunctionArguments<
  (typeof functions)["approve(address,uint256)"]
>;
export type ApproveReturn_1 = FunctionReturn<
  (typeof functions)["approve(address,uint256)"]
>;

export type AssetParams_1 = FunctionArguments<(typeof functions)["asset()"]>;
export type AssetReturn_1 = FunctionReturn<(typeof functions)["asset()"]>;

export type BalanceOfParams_1 = FunctionArguments<
  (typeof functions)["balanceOf(address)"]
>;
export type BalanceOfReturn_1 = FunctionReturn<
  (typeof functions)["balanceOf(address)"]
>;

export type ConvertToAssetsParams_1 = FunctionArguments<
  (typeof functions)["convertToAssets(uint256)"]
>;
export type ConvertToAssetsReturn_1 = FunctionReturn<
  (typeof functions)["convertToAssets(uint256)"]
>;

export type ConvertToSharesParams_1 = FunctionArguments<
  (typeof functions)["convertToShares(uint256)"]
>;
export type ConvertToSharesReturn_1 = FunctionReturn<
  (typeof functions)["convertToShares(uint256)"]
>;

export type DecimalsParams_1 = FunctionArguments<
  (typeof functions)["decimals()"]
>;
export type DecimalsReturn_1 = FunctionReturn<(typeof functions)["decimals()"]>;

export type DepositParams_1 = FunctionArguments<
  (typeof functions)["deposit(uint256,address)"]
>;
export type DepositReturn_1 = FunctionReturn<
  (typeof functions)["deposit(uint256,address)"]
>;

export type EnableCollateralParams_1 = FunctionArguments<
  (typeof functions)["enableCollateral(address,uint64)"]
>;
export type EnableCollateralReturn_1 = FunctionReturn<
  (typeof functions)["enableCollateral(address,uint64)"]
>;

export type ExtSloadsParams_1 = FunctionArguments<
  (typeof functions)["extSloads(bytes32[])"]
>;
export type ExtSloadsReturn_1 = FunctionReturn<
  (typeof functions)["extSloads(bytes32[])"]
>;

export type GetCollateralTokenAtParams_1 = FunctionArguments<
  (typeof functions)["getCollateralTokenAt(uint256)"]
>;
export type GetCollateralTokenAtReturn_1 = FunctionReturn<
  (typeof functions)["getCollateralTokenAt(uint256)"]
>;

export type GetCollateralTokensParams_1 = FunctionArguments<
  (typeof functions)["getCollateralTokens()"]
>;
export type GetCollateralTokensReturn_1 = FunctionReturn<
  (typeof functions)["getCollateralTokens()"]
>;

export type GetLockedEmissionsParams_1 = FunctionArguments<
  (typeof functions)["getLockedEmissions(address)"]
>;
export type GetLockedEmissionsReturn_1 = FunctionReturn<
  (typeof functions)["getLockedEmissions(address)"]
>;

export type GetPriceParams_1 = FunctionArguments<
  (typeof functions)["getPrice(address)"]
>;
export type GetPriceReturn_1 = FunctionReturn<
  (typeof functions)["getPrice(address)"]
>;

export type GetTotalDebtTokenDepositsParams_1 = FunctionArguments<
  (typeof functions)["getTotalDebtTokenDeposits()"]
>;
export type GetTotalDebtTokenDepositsReturn_1 = FunctionReturn<
  (typeof functions)["getTotalDebtTokenDeposits()"]
>;

export type InitializeParams_1 = FunctionArguments<
  (typeof functions)["initialize((address,string,string,address,address,address,uint16,uint16,address,address))"]
>;
export type InitializeReturn_1 = FunctionReturn<
  (typeof functions)["initialize((address,string,string,address,address,address,uint16,uint16,address,address))"]
>;

export type LinearVestingExtraAssetsParams_1 = FunctionArguments<
  (typeof functions)["linearVestingExtraAssets(address,address,address,uint96,uint64,uint64)"]
>;
export type LinearVestingExtraAssetsReturn_1 = FunctionReturn<
  (typeof functions)["linearVestingExtraAssets(address,address,address,uint96,uint64,uint64)"]
>;

export type MaxDepositParams_1 = FunctionArguments<
  (typeof functions)["maxDeposit(address)"]
>;
export type MaxDepositReturn_1 = FunctionReturn<
  (typeof functions)["maxDeposit(address)"]
>;

export type MaxMintParams_1 = FunctionArguments<
  (typeof functions)["maxMint(address)"]
>;
export type MaxMintReturn_1 = FunctionReturn<
  (typeof functions)["maxMint(address)"]
>;

export type MaxRedeemParams_1 = FunctionArguments<
  (typeof functions)["maxRedeem(address)"]
>;
export type MaxRedeemReturn_1 = FunctionReturn<
  (typeof functions)["maxRedeem(address)"]
>;

export type MaxWithdrawParams_1 = FunctionArguments<
  (typeof functions)["maxWithdraw(address)"]
>;
export type MaxWithdrawReturn_1 = FunctionReturn<
  (typeof functions)["maxWithdraw(address)"]
>;

export type MintParams_1 = FunctionArguments<
  (typeof functions)["mint(uint256,address)"]
>;
export type MintReturn_1 = FunctionReturn<
  (typeof functions)["mint(uint256,address)"]
>;

export type NameParams_1 = FunctionArguments<(typeof functions)["name()"]>;
export type NameReturn_1 = FunctionReturn<(typeof functions)["name()"]>;

export type OffsetParams_1 = FunctionArguments<
  (typeof functions)["offset(address,uint256,uint256)"]
>;
export type OffsetReturn_1 = FunctionReturn<
  (typeof functions)["offset(address,uint256,uint256)"]
>;

export type OwnerParams_1 = FunctionArguments<(typeof functions)["owner()"]>;
export type OwnerReturn_1 = FunctionReturn<(typeof functions)["owner()"]>;

export type PendingOwnerParams_1 = FunctionArguments<
  (typeof functions)["pendingOwner()"]
>;
export type PendingOwnerReturn_1 = FunctionReturn<
  (typeof functions)["pendingOwner()"]
>;

export type PreviewDepositParams_1 = FunctionArguments<
  (typeof functions)["previewDeposit(uint256)"]
>;
export type PreviewDepositReturn_1 = FunctionReturn<
  (typeof functions)["previewDeposit(uint256)"]
>;

export type PreviewMintParams_1 = FunctionArguments<
  (typeof functions)["previewMint(uint256)"]
>;
export type PreviewMintReturn_1 = FunctionReturn<
  (typeof functions)["previewMint(uint256)"]
>;

export type PreviewRedeemParams_1 = FunctionArguments<
  (typeof functions)["previewRedeem(uint256)"]
>;
export type PreviewRedeemReturn_1 = FunctionReturn<
  (typeof functions)["previewRedeem(uint256)"]
>;

export type PreviewWithdrawParams_1 = FunctionArguments<
  (typeof functions)["previewWithdraw(uint256)"]
>;
export type PreviewWithdrawReturn_1 = FunctionReturn<
  (typeof functions)["previewWithdraw(uint256)"]
>;

export type RebalanceParams_1 = FunctionArguments<
  (typeof functions)["rebalance((address,uint256,address,address,bytes))"]
>;
export type RebalanceReturn_1 = FunctionReturn<
  (typeof functions)["rebalance((address,uint256,address,address,bytes))"]
>;

export type ReceiveDonationsParams_1 = FunctionArguments<
  (typeof functions)["receiveDonations(address)"]
>;
export type ReceiveDonationsReturn_1 = FunctionReturn<
  (typeof functions)["receiveDonations(address)"]
>;

export type RedeemParams_2 = FunctionArguments<
  (typeof functions)["redeem(uint256,address[],address,address)"]
>;
export type RedeemReturn_2 = FunctionReturn<
  (typeof functions)["redeem(uint256,address[],address,address)"]
>;

export type RedeemParams_3 = FunctionArguments<
  (typeof functions)["redeem(uint256,address,address)"]
>;
export type RedeemReturn_3 = FunctionReturn<
  (typeof functions)["redeem(uint256,address,address)"]
>;

export type RemoveExtraAssetParams_1 = FunctionArguments<
  (typeof functions)["removeExtraAsset(address)"]
>;
export type RemoveExtraAssetReturn_1 = FunctionReturn<
  (typeof functions)["removeExtraAsset(address)"]
>;

export type RenounceOwnershipParams_1 = FunctionArguments<
  (typeof functions)["renounceOwnership()"]
>;
export type RenounceOwnershipReturn_1 = FunctionReturn<
  (typeof functions)["renounceOwnership()"]
>;

export type SetPairThresholdParams_1 = FunctionArguments<
  (typeof functions)["setPairThreshold(address,address,uint256)"]
>;
export type SetPairThresholdReturn_1 = FunctionReturn<
  (typeof functions)["setPairThreshold(address,address,uint256)"]
>;

export type SetRebalancerParams_1 = FunctionArguments<
  (typeof functions)["setRebalancer(address,bool)"]
>;
export type SetRebalancerReturn_1 = FunctionReturn<
  (typeof functions)["setRebalancer(address,bool)"]
>;

export type SetUnlockRatePerSecondParams_1 = FunctionArguments<
  (typeof functions)["setUnlockRatePerSecond(address,uint64)"]
>;
export type SetUnlockRatePerSecondReturn_1 = FunctionReturn<
  (typeof functions)["setUnlockRatePerSecond(address,uint64)"]
>;

export type StartCollateralSunsetParams_1 = FunctionArguments<
  (typeof functions)["startCollateralSunset(address)"]
>;
export type StartCollateralSunsetReturn_1 = FunctionReturn<
  (typeof functions)["startCollateralSunset(address)"]
>;

export type SymbolParams_1 = FunctionArguments<(typeof functions)["symbol()"]>;
export type SymbolReturn_1 = FunctionReturn<(typeof functions)["symbol()"]>;

export type TotalAssetsParams_1 = FunctionArguments<
  (typeof functions)["totalAssets()"]
>;
export type TotalAssetsReturn_1 = FunctionReturn<
  (typeof functions)["totalAssets()"]
>;

export type TotalAssetsUnlockedParams_1 = FunctionArguments<
  (typeof functions)["totalAssetsUnlocked()"]
>;
export type TotalAssetsUnlockedReturn_1 = FunctionReturn<
  (typeof functions)["totalAssetsUnlocked()"]
>;

export type TotalSupplyParams_1 = FunctionArguments<
  (typeof functions)["totalSupply()"]
>;
export type TotalSupplyReturn_1 = FunctionReturn<
  (typeof functions)["totalSupply()"]
>;

export type TransferParams_1 = FunctionArguments<
  (typeof functions)["transfer(address,uint256)"]
>;
export type TransferReturn_1 = FunctionReturn<
  (typeof functions)["transfer(address,uint256)"]
>;

export type TransferFromParams_1 = FunctionArguments<
  (typeof functions)["transferFrom(address,address,uint256)"]
>;
export type TransferFromReturn_1 = FunctionReturn<
  (typeof functions)["transferFrom(address,address,uint256)"]
>;

export type TransferOwnershipParams_1 = FunctionArguments<
  (typeof functions)["transferOwnership(address)"]
>;
export type TransferOwnershipReturn_1 = FunctionReturn<
  (typeof functions)["transferOwnership(address)"]
>;

export type UnclaimedUnvestedAmountParams_1 = FunctionArguments<
  (typeof functions)["unclaimedUnvestedAmount(address)"]
>;
export type UnclaimedUnvestedAmountReturn_1 = FunctionReturn<
  (typeof functions)["unclaimedUnvestedAmount(address)"]
>;

export type VestedAmountParams_1 = FunctionArguments<
  (typeof functions)["vestedAmount(address)"]
>;
export type VestedAmountReturn_1 = FunctionReturn<
  (typeof functions)["vestedAmount(address)"]
>;

export type WithdrawParams_2 = FunctionArguments<
  (typeof functions)["withdraw(uint256,address,address)"]
>;
export type WithdrawReturn_2 = FunctionReturn<
  (typeof functions)["withdraw(uint256,address,address)"]
>;

export type WithdrawParams_3 = FunctionArguments<
  (typeof functions)["withdraw(uint256,address[],address,address)"]
>;
export type WithdrawReturn_3 = FunctionReturn<
  (typeof functions)["withdraw(uint256,address[],address,address)"]
>;
