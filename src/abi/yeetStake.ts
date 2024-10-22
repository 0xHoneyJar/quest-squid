import * as p from '@subsquid/evm-codec'
import { event, fun, viewFun, indexed, ContractBase } from '@subsquid/evm-abi'
import type { EventParams as EParams, FunctionArguments, FunctionReturn } from '@subsquid/evm-abi'

export const events = {
    Claimed: event("0xd8138f8a3f377c5259ca548e70e4c2de94f129f5a11036a15b69513cba2b426a", "Claimed(address,uint256)", {"addr": indexed(p.address), "amount": p.uint256}),
    RageQuit: event("0xb088e0e42256d4d847ad0f34ab4c61ce0cb3e1a7438e4235a3360a84a28cca51", "RageQuit(address,uint256,uint256,uint256)", {"addr": indexed(p.address), "amount": p.uint256, "amountBurned": p.uint256, "index": p.uint256}),
    RewardDeposited: event("0x630e4c9c62b2386aa5f29def4bdcf3208d4a77aa359ce0414aaddde09ba039a9", "RewardDeposited(address,uint256,uint256)", {"sender": indexed(p.address), "amount": p.uint256, "rewardIndex": p.uint256}),
    Stake: event("0xebedb8b3c678666e7f36970bc8f57abf6d8fa2e828c0da91ea5b75bf68ed101a", "Stake(address,uint256)", {"addr": indexed(p.address), "amount": p.uint256}),
    Unstake: event("0xf960dbf9e5d0682f7a298ed974e33a28b4464914b7a2bfac12ae419a9afeb280", "Unstake(address,uint256,uint256)", {"addr": indexed(p.address), "amount": p.uint256, "index": p.uint256}),
    VestingStarted: event("0x8fe19f160f86d04fb1a90dde93e5e1a47df0810685adf4b990153c107d7b3924", "VestingStarted(address,uint256,uint256)", {"addr": indexed(p.address), "amount": p.uint256, "index": p.uint256}),
}

export const functions = {
    STAKING_LIMIT: viewFun("0x28a237d9", "STAKING_LIMIT()", {}, p.uint256),
    balanceOf: viewFun("0x70a08231", "balanceOf(address)", {"_0": p.address}, p.uint256),
    calculateRewardsEarned: viewFun("0x8b086764", "calculateRewardsEarned(address)", {"account": p.address}, p.uint256),
    calculateVesting: viewFun("0xa18b0064", "calculateVesting((uint256,uint256,uint256))", {"vesting": p.struct({"amount": p.uint256, "start": p.uint256, "end": p.uint256})}, {"_0": p.uint256, "_1": p.uint256}),
    claim: fun("0x4e71d92d", "claim()", {}, ),
    depositReward: fun("0x5ec2dc8d", "depositReward()", {}, ),
    getRewardIndex: viewFun("0xf21c150c", "getRewardIndex()", {}, p.uint256),
    getVestings: viewFun("0x7a0c6dc0", "getVestings(address)", {"addr": p.address}, p.array(p.struct({"amount": p.uint256, "start": p.uint256, "end": p.uint256}))),
    rageQuit: fun("0x65f969f6", "rageQuit(uint256)", {"index": p.uint256}, ),
    stake: fun("0xa694fc3a", "stake(uint256)", {"amount": p.uint256}, ),
    stakedTimes: viewFun("0x6ad2fb77", "stakedTimes(address)", {"_0": p.address}, p.uint256),
    stakingToken: viewFun("0x72f702f3", "stakingToken()", {}, p.address),
    startUnstake: fun("0x34dfb268", "startUnstake(uint256)", {"unStakeAmount": p.uint256}, ),
    totalSupply: viewFun("0x18160ddd", "totalSupply()", {}, p.uint256),
    unstake: fun("0x2e17de78", "unstake(uint256)", {"index": p.uint256}, ),
    vestings: viewFun("0xbd84477d", "vestings(address,uint256)", {"_0": p.address, "_1": p.uint256}, {"amount": p.uint256, "start": p.uint256, "end": p.uint256}),
}

export class Contract extends ContractBase {

    STAKING_LIMIT() {
        return this.eth_call(functions.STAKING_LIMIT, {})
    }

    balanceOf(_0: BalanceOfParams["_0"]) {
        return this.eth_call(functions.balanceOf, {_0})
    }

    calculateRewardsEarned(account: CalculateRewardsEarnedParams["account"]) {
        return this.eth_call(functions.calculateRewardsEarned, {account})
    }

    calculateVesting(vesting: CalculateVestingParams["vesting"]) {
        return this.eth_call(functions.calculateVesting, {vesting})
    }

    getRewardIndex() {
        return this.eth_call(functions.getRewardIndex, {})
    }

    getVestings(addr: GetVestingsParams["addr"]) {
        return this.eth_call(functions.getVestings, {addr})
    }

    stakedTimes(_0: StakedTimesParams["_0"]) {
        return this.eth_call(functions.stakedTimes, {_0})
    }

    stakingToken() {
        return this.eth_call(functions.stakingToken, {})
    }

    totalSupply() {
        return this.eth_call(functions.totalSupply, {})
    }

    vestings(_0: VestingsParams["_0"], _1: VestingsParams["_1"]) {
        return this.eth_call(functions.vestings, {_0, _1})
    }
}

/// Event types
export type ClaimedEventArgs = EParams<typeof events.Claimed>
export type RageQuitEventArgs = EParams<typeof events.RageQuit>
export type RewardDepositedEventArgs = EParams<typeof events.RewardDeposited>
export type StakeEventArgs = EParams<typeof events.Stake>
export type UnstakeEventArgs = EParams<typeof events.Unstake>
export type VestingStartedEventArgs = EParams<typeof events.VestingStarted>

/// Function types
export type STAKING_LIMITParams = FunctionArguments<typeof functions.STAKING_LIMIT>
export type STAKING_LIMITReturn = FunctionReturn<typeof functions.STAKING_LIMIT>

export type BalanceOfParams = FunctionArguments<typeof functions.balanceOf>
export type BalanceOfReturn = FunctionReturn<typeof functions.balanceOf>

export type CalculateRewardsEarnedParams = FunctionArguments<typeof functions.calculateRewardsEarned>
export type CalculateRewardsEarnedReturn = FunctionReturn<typeof functions.calculateRewardsEarned>

export type CalculateVestingParams = FunctionArguments<typeof functions.calculateVesting>
export type CalculateVestingReturn = FunctionReturn<typeof functions.calculateVesting>

export type ClaimParams = FunctionArguments<typeof functions.claim>
export type ClaimReturn = FunctionReturn<typeof functions.claim>

export type DepositRewardParams = FunctionArguments<typeof functions.depositReward>
export type DepositRewardReturn = FunctionReturn<typeof functions.depositReward>

export type GetRewardIndexParams = FunctionArguments<typeof functions.getRewardIndex>
export type GetRewardIndexReturn = FunctionReturn<typeof functions.getRewardIndex>

export type GetVestingsParams = FunctionArguments<typeof functions.getVestings>
export type GetVestingsReturn = FunctionReturn<typeof functions.getVestings>

export type RageQuitParams = FunctionArguments<typeof functions.rageQuit>
export type RageQuitReturn = FunctionReturn<typeof functions.rageQuit>

export type StakeParams = FunctionArguments<typeof functions.stake>
export type StakeReturn = FunctionReturn<typeof functions.stake>

export type StakedTimesParams = FunctionArguments<typeof functions.stakedTimes>
export type StakedTimesReturn = FunctionReturn<typeof functions.stakedTimes>

export type StakingTokenParams = FunctionArguments<typeof functions.stakingToken>
export type StakingTokenReturn = FunctionReturn<typeof functions.stakingToken>

export type StartUnstakeParams = FunctionArguments<typeof functions.startUnstake>
export type StartUnstakeReturn = FunctionReturn<typeof functions.startUnstake>

export type TotalSupplyParams = FunctionArguments<typeof functions.totalSupply>
export type TotalSupplyReturn = FunctionReturn<typeof functions.totalSupply>

export type UnstakeParams = FunctionArguments<typeof functions.unstake>
export type UnstakeReturn = FunctionReturn<typeof functions.unstake>

export type VestingsParams = FunctionArguments<typeof functions.vestings>
export type VestingsReturn = FunctionReturn<typeof functions.vestings>

