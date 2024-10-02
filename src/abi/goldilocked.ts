import * as p from '@subsquid/evm-codec'
import { event, fun, viewFun, indexed, ContractBase } from '@subsquid/evm-abi'
import type { EventParams as EParams, FunctionArguments, FunctionReturn } from '@subsquid/evm-abi'

export const events = {
    Approval: event("0x8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925", "Approval(address,address,uint256)", {"owner": indexed(p.address), "spender": indexed(p.address), "amount": p.uint256}),
    Borrow: event("0xcbc04eca7e9da35cb1393a6135a199ca52e450d5e9251cbd99f7847d33a36750", "Borrow(address,uint256)", {"user": indexed(p.address), "amount": p.uint256}),
    Claim: event("0x47cee97cb7acd717b3c0aa1435d004cd5b3c8c57d70dbceb4e4458bbd60e39d4", "Claim(address,uint256)", {"user": indexed(p.address), "amount": p.uint256}),
    Repay: event("0x5c16de4f8b59bd9caf0f49a545f25819a895ed223294290b408242e72a594231", "Repay(address,uint256)", {"user": indexed(p.address), "amount": p.uint256}),
    Stake: event("0xebedb8b3c678666e7f36970bc8f57abf6d8fa2e828c0da91ea5b75bf68ed101a", "Stake(address,uint256)", {"user": indexed(p.address), "amount": p.uint256}),
    Stir: event("0x91e25da09ecdd0ad73908577e734cf946bad7e05db91892b94e53a79c9ff3248", "Stir(address,uint256)", {"user": indexed(p.address), "amount": p.uint256}),
    Transfer: event("0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef", "Transfer(address,address,uint256)", {"from": indexed(p.address), "to": indexed(p.address), "amount": p.uint256}),
    Unstake: event("0x85082129d87b2fe11527cb1b3b7a520aeb5aa6913f88a3d8757fe40d1db02fdd", "Unstake(address,uint256)", {"user": indexed(p.address), "amount": p.uint256}),
}

export const functions = {
    DOMAIN_SEPARATOR: viewFun("0x3644e515", "DOMAIN_SEPARATOR()", {}, p.bytes32),
    allowance: viewFun("0xdd62ed3e", "allowance(address,address)", {"owner": p.address, "spender": p.address}, p.uint256),
    annualPrgEmissions: viewFun("0x4d3a1a61", "annualPrgEmissions()", {}, p.uint256),
    approve: fun("0x095ea7b3", "approve(address,uint256)", {"spender": p.address, "amount": p.uint256}, p.bool),
    balanceOf: viewFun("0x70a08231", "balanceOf(address)", {"owner": p.address}, p.uint256),
    borrow: fun("0xc5ebeaec", "borrow(uint256)", {"amount": p.uint256}, ),
    borrowedHoney: viewFun("0x3a2c92ab", "borrowedHoney(address)", {"_0": p.address}, p.uint256),
    changePrgEmissions: fun("0x590ad7f8", "changePrgEmissions(uint256)", {"newPrgEmissions": p.uint256}, ),
    claim: fun("0x4e71d92d", "claim()", {}, ),
    claimablePrg: viewFun("0xa8c9eaff", "claimablePrg(address)", {"_0": p.address}, p.uint256),
    claimablePrgPerLocksStored: viewFun("0x23be6d64", "claimablePrgPerLocksStored()", {}, p.uint256),
    decimals: viewFun("0x313ce567", "decimals()", {}, p.uint8),
    deployTime: viewFun("0x7a40624b", "deployTime()", {}, p.uint256),
    goldilend: viewFun("0xda64ea72", "goldilend()", {}, p.address),
    goldilendMint: fun("0x714b00c3", "goldilendMint(address,uint256)", {"to": p.address, "amount": p.uint256}, ),
    goldiswap: viewFun("0x5bcd135a", "goldiswap()", {}, p.address),
    govlocks: viewFun("0xa960bdc4", "govlocks()", {}, p.address),
    honey: viewFun("0x36b2c4b2", "honey()", {}, p.address),
    lastUpdateTime: viewFun("0xc8f33c91", "lastUpdateTime()", {}, p.uint256),
    mintPorridge: fun("0xa30432b4", "mintPorridge(uint256)", {"newPorridge": p.uint256}, ),
    multisig: viewFun("0x4783c35b", "multisig()", {}, p.address),
    name: viewFun("0x06fdde03", "name()", {}, p.string),
    nonces: viewFun("0x7ecebe00", "nonces(address)", {"owner": p.address}, p.uint256),
    permit: fun("0xd505accf", "permit(address,address,uint256,uint256,uint8,bytes32,bytes32)", {"owner": p.address, "spender": p.address, "value": p.uint256, "deadline": p.uint256, "v": p.uint8, "r": p.bytes32, "s": p.bytes32}, ),
    prgPerTokenDebt: viewFun("0x3d8be12d", "prgPerTokenDebt(address)", {"_0": p.address}, p.uint256),
    repay: fun("0x371fd8e6", "repay(uint256)", {"amount": p.uint256}, ),
    seedAllocations: viewFun("0x2d110cf6", "seedAllocations(address)", {"_0": p.address}, p.uint256),
    setGoldilendAddress: fun("0xf3a29503", "setGoldilendAddress(address)", {"_goldilend": p.address}, ),
    stake: fun("0xa694fc3a", "stake(uint256)", {"amount": p.uint256}, ),
    stakedLocks: viewFun("0xf024a75b", "stakedLocks(address)", {"_0": p.address}, p.uint256),
    stir: fun("0xa8d8b173", "stir(uint256)", {"amount": p.uint256}, ),
    symbol: viewFun("0x95d89b41", "symbol()", {}, p.string),
    teamAllocations: viewFun("0x3ca3c782", "teamAllocations(address)", {"_0": p.address}, p.uint256),
    timelock: viewFun("0xd33219b4", "timelock()", {}, p.address),
    totalSupply: viewFun("0x18160ddd", "totalSupply()", {}, p.uint256),
    transfer: fun("0xa9059cbb", "transfer(address,uint256)", {"to": p.address, "amount": p.uint256}, p.bool),
    transferFrom: fun("0x23b872dd", "transferFrom(address,address,uint256)", {"from": p.address, "to": p.address, "amount": p.uint256}, p.bool),
    unstake: fun("0x2e17de78", "unstake(uint256)", {"amount": p.uint256}, ),
    userBorrowLimit: viewFun("0xfaf2bc9b", "userBorrowLimit(address)", {"user": p.address}, p.uint256),
    userBorrowedHoney: viewFun("0xb3eec02c", "userBorrowedHoney(address)", {"user": p.address}, p.uint256),
    userClaimablePrg: viewFun("0x8ad13a2e", "userClaimablePrg(address)", {"user": p.address}, p.uint256),
    userLockedLocks: viewFun("0x0e8b1c31", "userLockedLocks(address)", {"user": p.address}, p.uint256),
    userStakedLocks: viewFun("0x70f4405a", "userStakedLocks(address)", {"user": p.address}, p.uint256),
    userVestingCheck: viewFun("0x52ad68b3", "userVestingCheck(address)", {"user": p.address}, p.uint256),
    vestingEnd: viewFun("0x84a1931f", "vestingEnd()", {}, p.uint256),
    vestingStart: viewFun("0x254800d4", "vestingStart()", {}, p.uint256),
}

export class Contract extends ContractBase {

    DOMAIN_SEPARATOR() {
        return this.eth_call(functions.DOMAIN_SEPARATOR, {})
    }

    allowance(owner: AllowanceParams["owner"], spender: AllowanceParams["spender"]) {
        return this.eth_call(functions.allowance, {owner, spender})
    }

    annualPrgEmissions() {
        return this.eth_call(functions.annualPrgEmissions, {})
    }

    balanceOf(owner: BalanceOfParams["owner"]) {
        return this.eth_call(functions.balanceOf, {owner})
    }

    borrowedHoney(_0: BorrowedHoneyParams["_0"]) {
        return this.eth_call(functions.borrowedHoney, {_0})
    }

    claimablePrg(_0: ClaimablePrgParams["_0"]) {
        return this.eth_call(functions.claimablePrg, {_0})
    }

    claimablePrgPerLocksStored() {
        return this.eth_call(functions.claimablePrgPerLocksStored, {})
    }

    decimals() {
        return this.eth_call(functions.decimals, {})
    }

    deployTime() {
        return this.eth_call(functions.deployTime, {})
    }

    goldilend() {
        return this.eth_call(functions.goldilend, {})
    }

    goldiswap() {
        return this.eth_call(functions.goldiswap, {})
    }

    govlocks() {
        return this.eth_call(functions.govlocks, {})
    }

    honey() {
        return this.eth_call(functions.honey, {})
    }

    lastUpdateTime() {
        return this.eth_call(functions.lastUpdateTime, {})
    }

    multisig() {
        return this.eth_call(functions.multisig, {})
    }

    name() {
        return this.eth_call(functions.name, {})
    }

    nonces(owner: NoncesParams["owner"]) {
        return this.eth_call(functions.nonces, {owner})
    }

    prgPerTokenDebt(_0: PrgPerTokenDebtParams["_0"]) {
        return this.eth_call(functions.prgPerTokenDebt, {_0})
    }

    seedAllocations(_0: SeedAllocationsParams["_0"]) {
        return this.eth_call(functions.seedAllocations, {_0})
    }

    stakedLocks(_0: StakedLocksParams["_0"]) {
        return this.eth_call(functions.stakedLocks, {_0})
    }

    symbol() {
        return this.eth_call(functions.symbol, {})
    }

    teamAllocations(_0: TeamAllocationsParams["_0"]) {
        return this.eth_call(functions.teamAllocations, {_0})
    }

    timelock() {
        return this.eth_call(functions.timelock, {})
    }

    totalSupply() {
        return this.eth_call(functions.totalSupply, {})
    }

    userBorrowLimit(user: UserBorrowLimitParams["user"]) {
        return this.eth_call(functions.userBorrowLimit, {user})
    }

    userBorrowedHoney(user: UserBorrowedHoneyParams["user"]) {
        return this.eth_call(functions.userBorrowedHoney, {user})
    }

    userClaimablePrg(user: UserClaimablePrgParams["user"]) {
        return this.eth_call(functions.userClaimablePrg, {user})
    }

    userLockedLocks(user: UserLockedLocksParams["user"]) {
        return this.eth_call(functions.userLockedLocks, {user})
    }

    userStakedLocks(user: UserStakedLocksParams["user"]) {
        return this.eth_call(functions.userStakedLocks, {user})
    }

    userVestingCheck(user: UserVestingCheckParams["user"]) {
        return this.eth_call(functions.userVestingCheck, {user})
    }

    vestingEnd() {
        return this.eth_call(functions.vestingEnd, {})
    }

    vestingStart() {
        return this.eth_call(functions.vestingStart, {})
    }
}

/// Event types
export type ApprovalEventArgs = EParams<typeof events.Approval>
export type BorrowEventArgs = EParams<typeof events.Borrow>
export type ClaimEventArgs = EParams<typeof events.Claim>
export type RepayEventArgs = EParams<typeof events.Repay>
export type StakeEventArgs = EParams<typeof events.Stake>
export type StirEventArgs = EParams<typeof events.Stir>
export type TransferEventArgs = EParams<typeof events.Transfer>
export type UnstakeEventArgs = EParams<typeof events.Unstake>

/// Function types
export type DOMAIN_SEPARATORParams = FunctionArguments<typeof functions.DOMAIN_SEPARATOR>
export type DOMAIN_SEPARATORReturn = FunctionReturn<typeof functions.DOMAIN_SEPARATOR>

export type AllowanceParams = FunctionArguments<typeof functions.allowance>
export type AllowanceReturn = FunctionReturn<typeof functions.allowance>

export type AnnualPrgEmissionsParams = FunctionArguments<typeof functions.annualPrgEmissions>
export type AnnualPrgEmissionsReturn = FunctionReturn<typeof functions.annualPrgEmissions>

export type ApproveParams = FunctionArguments<typeof functions.approve>
export type ApproveReturn = FunctionReturn<typeof functions.approve>

export type BalanceOfParams = FunctionArguments<typeof functions.balanceOf>
export type BalanceOfReturn = FunctionReturn<typeof functions.balanceOf>

export type BorrowParams = FunctionArguments<typeof functions.borrow>
export type BorrowReturn = FunctionReturn<typeof functions.borrow>

export type BorrowedHoneyParams = FunctionArguments<typeof functions.borrowedHoney>
export type BorrowedHoneyReturn = FunctionReturn<typeof functions.borrowedHoney>

export type ChangePrgEmissionsParams = FunctionArguments<typeof functions.changePrgEmissions>
export type ChangePrgEmissionsReturn = FunctionReturn<typeof functions.changePrgEmissions>

export type ClaimParams = FunctionArguments<typeof functions.claim>
export type ClaimReturn = FunctionReturn<typeof functions.claim>

export type ClaimablePrgParams = FunctionArguments<typeof functions.claimablePrg>
export type ClaimablePrgReturn = FunctionReturn<typeof functions.claimablePrg>

export type ClaimablePrgPerLocksStoredParams = FunctionArguments<typeof functions.claimablePrgPerLocksStored>
export type ClaimablePrgPerLocksStoredReturn = FunctionReturn<typeof functions.claimablePrgPerLocksStored>

export type DecimalsParams = FunctionArguments<typeof functions.decimals>
export type DecimalsReturn = FunctionReturn<typeof functions.decimals>

export type DeployTimeParams = FunctionArguments<typeof functions.deployTime>
export type DeployTimeReturn = FunctionReturn<typeof functions.deployTime>

export type GoldilendParams = FunctionArguments<typeof functions.goldilend>
export type GoldilendReturn = FunctionReturn<typeof functions.goldilend>

export type GoldilendMintParams = FunctionArguments<typeof functions.goldilendMint>
export type GoldilendMintReturn = FunctionReturn<typeof functions.goldilendMint>

export type GoldiswapParams = FunctionArguments<typeof functions.goldiswap>
export type GoldiswapReturn = FunctionReturn<typeof functions.goldiswap>

export type GovlocksParams = FunctionArguments<typeof functions.govlocks>
export type GovlocksReturn = FunctionReturn<typeof functions.govlocks>

export type HoneyParams = FunctionArguments<typeof functions.honey>
export type HoneyReturn = FunctionReturn<typeof functions.honey>

export type LastUpdateTimeParams = FunctionArguments<typeof functions.lastUpdateTime>
export type LastUpdateTimeReturn = FunctionReturn<typeof functions.lastUpdateTime>

export type MintPorridgeParams = FunctionArguments<typeof functions.mintPorridge>
export type MintPorridgeReturn = FunctionReturn<typeof functions.mintPorridge>

export type MultisigParams = FunctionArguments<typeof functions.multisig>
export type MultisigReturn = FunctionReturn<typeof functions.multisig>

export type NameParams = FunctionArguments<typeof functions.name>
export type NameReturn = FunctionReturn<typeof functions.name>

export type NoncesParams = FunctionArguments<typeof functions.nonces>
export type NoncesReturn = FunctionReturn<typeof functions.nonces>

export type PermitParams = FunctionArguments<typeof functions.permit>
export type PermitReturn = FunctionReturn<typeof functions.permit>

export type PrgPerTokenDebtParams = FunctionArguments<typeof functions.prgPerTokenDebt>
export type PrgPerTokenDebtReturn = FunctionReturn<typeof functions.prgPerTokenDebt>

export type RepayParams = FunctionArguments<typeof functions.repay>
export type RepayReturn = FunctionReturn<typeof functions.repay>

export type SeedAllocationsParams = FunctionArguments<typeof functions.seedAllocations>
export type SeedAllocationsReturn = FunctionReturn<typeof functions.seedAllocations>

export type SetGoldilendAddressParams = FunctionArguments<typeof functions.setGoldilendAddress>
export type SetGoldilendAddressReturn = FunctionReturn<typeof functions.setGoldilendAddress>

export type StakeParams = FunctionArguments<typeof functions.stake>
export type StakeReturn = FunctionReturn<typeof functions.stake>

export type StakedLocksParams = FunctionArguments<typeof functions.stakedLocks>
export type StakedLocksReturn = FunctionReturn<typeof functions.stakedLocks>

export type StirParams = FunctionArguments<typeof functions.stir>
export type StirReturn = FunctionReturn<typeof functions.stir>

export type SymbolParams = FunctionArguments<typeof functions.symbol>
export type SymbolReturn = FunctionReturn<typeof functions.symbol>

export type TeamAllocationsParams = FunctionArguments<typeof functions.teamAllocations>
export type TeamAllocationsReturn = FunctionReturn<typeof functions.teamAllocations>

export type TimelockParams = FunctionArguments<typeof functions.timelock>
export type TimelockReturn = FunctionReturn<typeof functions.timelock>

export type TotalSupplyParams = FunctionArguments<typeof functions.totalSupply>
export type TotalSupplyReturn = FunctionReturn<typeof functions.totalSupply>

export type TransferParams = FunctionArguments<typeof functions.transfer>
export type TransferReturn = FunctionReturn<typeof functions.transfer>

export type TransferFromParams = FunctionArguments<typeof functions.transferFrom>
export type TransferFromReturn = FunctionReturn<typeof functions.transferFrom>

export type UnstakeParams = FunctionArguments<typeof functions.unstake>
export type UnstakeReturn = FunctionReturn<typeof functions.unstake>

export type UserBorrowLimitParams = FunctionArguments<typeof functions.userBorrowLimit>
export type UserBorrowLimitReturn = FunctionReturn<typeof functions.userBorrowLimit>

export type UserBorrowedHoneyParams = FunctionArguments<typeof functions.userBorrowedHoney>
export type UserBorrowedHoneyReturn = FunctionReturn<typeof functions.userBorrowedHoney>

export type UserClaimablePrgParams = FunctionArguments<typeof functions.userClaimablePrg>
export type UserClaimablePrgReturn = FunctionReturn<typeof functions.userClaimablePrg>

export type UserLockedLocksParams = FunctionArguments<typeof functions.userLockedLocks>
export type UserLockedLocksReturn = FunctionReturn<typeof functions.userLockedLocks>

export type UserStakedLocksParams = FunctionArguments<typeof functions.userStakedLocks>
export type UserStakedLocksReturn = FunctionReturn<typeof functions.userStakedLocks>

export type UserVestingCheckParams = FunctionArguments<typeof functions.userVestingCheck>
export type UserVestingCheckReturn = FunctionReturn<typeof functions.userVestingCheck>

export type VestingEndParams = FunctionArguments<typeof functions.vestingEnd>
export type VestingEndReturn = FunctionReturn<typeof functions.vestingEnd>

export type VestingStartParams = FunctionArguments<typeof functions.vestingStart>
export type VestingStartReturn = FunctionReturn<typeof functions.vestingStart>

