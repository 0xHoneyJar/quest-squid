import * as p from "@subsquid/evm-codec";
import { event, fun, viewFun, indexed, ContractBase } from "@subsquid/evm-abi";
import type {
  EventParams as EParams,
  FunctionArguments,
  FunctionReturn,
} from "@subsquid/evm-abi";

export const events = {
  BorrowingFeePaid: event(
    "0x5d032cf8244d18503d44f7171954f352ff41fa2df69660eb897f4db36efe808e",
    "BorrowingFeePaid(address,uint256)",
    { borrower: indexed(p.address), amount: p.uint256 }
  ),
  CollateralConfigured: event(
    "0xf6e0528dc0c0ef50525339faff44940d57e7897bee18b67dd0aa23bba1749ad2",
    "CollateralConfigured(address,address)",
    { denManager: p.address, collateralToken: p.address }
  ),
  DenCreated: event(
    "0x73017475992b98c48eac202376ae6c3dca84d34dc71a576a7b1dad8db1a5a2ec",
    "DenCreated(address,uint256)",
    { _borrower: indexed(p.address), arrayIndex: p.uint256 }
  ),
  DenManagerRemoved: event(
    "0x0976427987372be71f71cdb9609fe7befaf3c1f99a5d2c28b3ade09d5b8d8fe4",
    "DenManagerRemoved(address)",
    { denManager: p.address }
  ),
  DenUpdated: event(
    "0xb7b60c56fcc3be82ec23b060a712c9965dc949031c4df56c6228335a0b48d915",
    "DenUpdated(address,uint256,uint256,uint256,uint8)",
    {
      _borrower: indexed(p.address),
      _debt: p.uint256,
      _coll: p.uint256,
      stake: p.uint256,
      operation: p.uint8,
    }
  ),
};

export const functions = {
  BERABORROW_CORE: viewFun("0x39a07acc", "BERABORROW_CORE()", {}, p.address),
  CCR: viewFun("0x5733d58f", "CCR()", {}, p.uint256),
  DEBT_GAS_COMPENSATION: viewFun(
    "0x4ba4a28b",
    "DEBT_GAS_COMPENSATION()",
    {},
    p.uint256
  ),
  DECIMAL_PRECISION: viewFun(
    "0xa20baee6",
    "DECIMAL_PRECISION()",
    {},
    p.uint256
  ),
  PERCENT_DIVISOR: viewFun("0x4870dd9a", "PERCENT_DIVISOR()", {}, p.uint256),
  addColl: fun(
    "0xfded3d35",
    "addColl(address,address,uint256,address,address)",
    {
      denManager: p.address,
      account: p.address,
      _collateralAmount: p.uint256,
      _upperHint: p.address,
      _lowerHint: p.address,
    }
  ),
  adjustDen: fun(
    "0x022a4ab1",
    "adjustDen(address,address,uint256,uint256,uint256,uint256,bool,address,address)",
    {
      denManager: p.address,
      account: p.address,
      _maxFeePercentage: p.uint256,
      _collDeposit: p.uint256,
      _collWithdrawal: p.uint256,
      _debtChange: p.uint256,
      _isDebtIncrease: p.bool,
      _upperHint: p.address,
      _lowerHint: p.address,
    }
  ),
  checkRecoveryMode: viewFun(
    "0x4e443d9e",
    "checkRecoveryMode(uint256)",
    { TCR: p.uint256 },
    p.bool
  ),
  closeDen: fun("0xd326aee3", "closeDen(address,address)", {
    denManager: p.address,
    account: p.address,
  }),
  configureCollateral: fun(
    "0x778c5c64",
    "configureCollateral(address,address)",
    { denManager: p.address, collateralToken: p.address }
  ),
  debtToken: viewFun("0xf8d89898", "debtToken()", {}, p.address),
  denManagersData: viewFun(
    "0x8429c52d",
    "denManagersData(address)",
    { _0: p.address },
    { collateralToken: p.address, index: p.uint16 }
  ),
  factory: viewFun("0xc45a0155", "factory()", {}, p.address),
  fetchBalances: fun(
    "0xb51237a9",
    "fetchBalances()",
    {},
    p.struct({
      collaterals: p.array(p.uint256),
      debts: p.array(p.uint256),
      prices: p.array(p.uint256),
    })
  ),
  getCompositeDebt: viewFun(
    "0x4ff81443",
    "getCompositeDebt(uint256)",
    { _debt: p.uint256 },
    p.uint256
  ),
  getGlobalSystemBalances: fun(
    "0x716c53c2",
    "getGlobalSystemBalances()",
    {},
    { totalPricedCollateral: p.uint256, totalDebt: p.uint256 }
  ),
  getTCR: viewFun("0xb620115d", "getTCR()", {}, p.uint256),
  guardian: viewFun("0x452a9320", "guardian()", {}, p.address),
  isApprovedDelegate: viewFun(
    "0x1930e825",
    "isApprovedDelegate(address,address)",
    { owner: p.address, caller: p.address },
    p.bool
  ),
  minNetDebt: viewFun("0x969c2452", "minNetDebt()", {}, p.uint256),
  openDen: fun(
    "0xfd2e3a5e",
    "openDen(address,address,uint256,uint256,uint256,address,address)",
    {
      denManager: p.address,
      account: p.address,
      _maxFeePercentage: p.uint256,
      _collateralAmount: p.uint256,
      _debtAmount: p.uint256,
      _upperHint: p.address,
      _lowerHint: p.address,
    }
  ),
  owner: viewFun("0x8da5cb5b", "owner()", {}, p.address),
  removeDenManager: fun("0xf9538b48", "removeDenManager(address)", {
    denManager: p.address,
  }),
  repayDebt: fun(
    "0xa2e8dc0a",
    "repayDebt(address,address,uint256,address,address)",
    {
      denManager: p.address,
      account: p.address,
      _debtAmount: p.uint256,
      _upperHint: p.address,
      _lowerHint: p.address,
    }
  ),
  setDelegateApproval: fun("0xc3c854b6", "setDelegateApproval(address,bool)", {
    _delegate: p.address,
    _isApproved: p.bool,
  }),
  setMinNetDebt: fun("0x438d641a", "setMinNetDebt(uint256)", {
    _minNetDebt: p.uint256,
  }),
  withdrawColl: fun(
    "0xa6b6c8ee",
    "withdrawColl(address,address,uint256,address,address)",
    {
      denManager: p.address,
      account: p.address,
      _collWithdrawal: p.uint256,
      _upperHint: p.address,
      _lowerHint: p.address,
    }
  ),
  withdrawDebt: fun(
    "0xc2af1eca",
    "withdrawDebt(address,address,uint256,uint256,address,address)",
    {
      denManager: p.address,
      account: p.address,
      _maxFeePercentage: p.uint256,
      _debtAmount: p.uint256,
      _upperHint: p.address,
      _lowerHint: p.address,
    }
  ),
};

export class Contract extends ContractBase {
  BERABORROW_CORE() {
    return this.eth_call(functions.BERABORROW_CORE, {});
  }

  CCR() {
    return this.eth_call(functions.CCR, {});
  }

  DEBT_GAS_COMPENSATION() {
    return this.eth_call(functions.DEBT_GAS_COMPENSATION, {});
  }

  DECIMAL_PRECISION() {
    return this.eth_call(functions.DECIMAL_PRECISION, {});
  }

  PERCENT_DIVISOR() {
    return this.eth_call(functions.PERCENT_DIVISOR, {});
  }

  checkRecoveryMode(TCR: CheckRecoveryModeParams["TCR"]) {
    return this.eth_call(functions.checkRecoveryMode, { TCR });
  }

  debtToken() {
    return this.eth_call(functions.debtToken, {});
  }

  denManagersData(_0: DenManagersDataParams["_0"]) {
    return this.eth_call(functions.denManagersData, { _0 });
  }

  factory() {
    return this.eth_call(functions.factory, {});
  }

  getCompositeDebt(_debt: GetCompositeDebtParams["_debt"]) {
    return this.eth_call(functions.getCompositeDebt, { _debt });
  }

  getTCR() {
    return this.eth_call(functions.getTCR, {});
  }

  guardian() {
    return this.eth_call(functions.guardian, {});
  }

  isApprovedDelegate(
    owner: IsApprovedDelegateParams["owner"],
    caller: IsApprovedDelegateParams["caller"]
  ) {
    return this.eth_call(functions.isApprovedDelegate, { owner, caller });
  }

  minNetDebt() {
    return this.eth_call(functions.minNetDebt, {});
  }

  owner() {
    return this.eth_call(functions.owner, {});
  }
}

/// Event types
export type BorrowingFeePaidEventArgs = EParams<typeof events.BorrowingFeePaid>;
export type CollateralConfiguredEventArgs = EParams<
  typeof events.CollateralConfigured
>;
export type DenCreatedEventArgs = EParams<typeof events.DenCreated>;
export type DenManagerRemovedEventArgs = EParams<
  typeof events.DenManagerRemoved
>;
export type DenUpdatedEventArgs = EParams<typeof events.DenUpdated>;

/// Function types
export type BERABORROW_COREParams = FunctionArguments<
  typeof functions.BERABORROW_CORE
>;
export type BERABORROW_COREReturn = FunctionReturn<
  typeof functions.BERABORROW_CORE
>;

export type CCRParams = FunctionArguments<typeof functions.CCR>;
export type CCRReturn = FunctionReturn<typeof functions.CCR>;

export type DEBT_GAS_COMPENSATIONParams = FunctionArguments<
  typeof functions.DEBT_GAS_COMPENSATION
>;
export type DEBT_GAS_COMPENSATIONReturn = FunctionReturn<
  typeof functions.DEBT_GAS_COMPENSATION
>;

export type DECIMAL_PRECISIONParams = FunctionArguments<
  typeof functions.DECIMAL_PRECISION
>;
export type DECIMAL_PRECISIONReturn = FunctionReturn<
  typeof functions.DECIMAL_PRECISION
>;

export type PERCENT_DIVISORParams = FunctionArguments<
  typeof functions.PERCENT_DIVISOR
>;
export type PERCENT_DIVISORReturn = FunctionReturn<
  typeof functions.PERCENT_DIVISOR
>;

export type AddCollParams = FunctionArguments<typeof functions.addColl>;
export type AddCollReturn = FunctionReturn<typeof functions.addColl>;

export type AdjustDenParams = FunctionArguments<typeof functions.adjustDen>;
export type AdjustDenReturn = FunctionReturn<typeof functions.adjustDen>;

export type CheckRecoveryModeParams = FunctionArguments<
  typeof functions.checkRecoveryMode
>;
export type CheckRecoveryModeReturn = FunctionReturn<
  typeof functions.checkRecoveryMode
>;

export type CloseDenParams = FunctionArguments<typeof functions.closeDen>;
export type CloseDenReturn = FunctionReturn<typeof functions.closeDen>;

export type ConfigureCollateralParams = FunctionArguments<
  typeof functions.configureCollateral
>;
export type ConfigureCollateralReturn = FunctionReturn<
  typeof functions.configureCollateral
>;

export type DebtTokenParams = FunctionArguments<typeof functions.debtToken>;
export type DebtTokenReturn = FunctionReturn<typeof functions.debtToken>;

export type DenManagersDataParams = FunctionArguments<
  typeof functions.denManagersData
>;
export type DenManagersDataReturn = FunctionReturn<
  typeof functions.denManagersData
>;

export type FactoryParams = FunctionArguments<typeof functions.factory>;
export type FactoryReturn = FunctionReturn<typeof functions.factory>;

export type FetchBalancesParams = FunctionArguments<
  typeof functions.fetchBalances
>;
export type FetchBalancesReturn = FunctionReturn<
  typeof functions.fetchBalances
>;

export type GetCompositeDebtParams = FunctionArguments<
  typeof functions.getCompositeDebt
>;
export type GetCompositeDebtReturn = FunctionReturn<
  typeof functions.getCompositeDebt
>;

export type GetGlobalSystemBalancesParams = FunctionArguments<
  typeof functions.getGlobalSystemBalances
>;
export type GetGlobalSystemBalancesReturn = FunctionReturn<
  typeof functions.getGlobalSystemBalances
>;

export type GetTCRParams = FunctionArguments<typeof functions.getTCR>;
export type GetTCRReturn = FunctionReturn<typeof functions.getTCR>;

export type GuardianParams = FunctionArguments<typeof functions.guardian>;
export type GuardianReturn = FunctionReturn<typeof functions.guardian>;

export type IsApprovedDelegateParams = FunctionArguments<
  typeof functions.isApprovedDelegate
>;
export type IsApprovedDelegateReturn = FunctionReturn<
  typeof functions.isApprovedDelegate
>;

export type MinNetDebtParams = FunctionArguments<typeof functions.minNetDebt>;
export type MinNetDebtReturn = FunctionReturn<typeof functions.minNetDebt>;

export type OpenDenParams = FunctionArguments<typeof functions.openDen>;
export type OpenDenReturn = FunctionReturn<typeof functions.openDen>;

export type OwnerParams = FunctionArguments<typeof functions.owner>;
export type OwnerReturn = FunctionReturn<typeof functions.owner>;

export type RemoveDenManagerParams = FunctionArguments<
  typeof functions.removeDenManager
>;
export type RemoveDenManagerReturn = FunctionReturn<
  typeof functions.removeDenManager
>;

export type RepayDebtParams = FunctionArguments<typeof functions.repayDebt>;
export type RepayDebtReturn = FunctionReturn<typeof functions.repayDebt>;

export type SetDelegateApprovalParams = FunctionArguments<
  typeof functions.setDelegateApproval
>;
export type SetDelegateApprovalReturn = FunctionReturn<
  typeof functions.setDelegateApproval
>;

export type SetMinNetDebtParams = FunctionArguments<
  typeof functions.setMinNetDebt
>;
export type SetMinNetDebtReturn = FunctionReturn<
  typeof functions.setMinNetDebt
>;

export type WithdrawCollParams = FunctionArguments<
  typeof functions.withdrawColl
>;
export type WithdrawCollReturn = FunctionReturn<typeof functions.withdrawColl>;

export type WithdrawDebtParams = FunctionArguments<
  typeof functions.withdrawDebt
>;
export type WithdrawDebtReturn = FunctionReturn<typeof functions.withdrawDebt>;
