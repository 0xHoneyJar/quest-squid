import * as p from '@subsquid/evm-codec'
import { event, fun, viewFun, indexed, ContractBase } from '@subsquid/evm-abi'
import type { EventParams as EParams, FunctionArguments, FunctionReturn } from '@subsquid/evm-abi'

export const events = {
    Claimed: event("0xd8138f8a3f377c5259ca548e70e4c2de94f129f5a11036a15b69513cba2b426a", "Claimed(address,uint256)", {"addr": indexed(p.address), "amount": p.uint256}),
    OwnershipTransferred: event("0x8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0", "OwnershipTransferred(address,address)", {"previousOwner": indexed(p.address), "newOwner": indexed(p.address)}),
    RageQuit: event("0xb088e0e42256d4d847ad0f34ab4c61ce0cb3e1a7438e4235a3360a84a28cca51", "RageQuit(address,uint256,uint256,uint256)", {"addr": indexed(p.address), "amount": p.uint256, "amountBurned": p.uint256, "index": p.uint256}),
    RageQuitEnabled: event("0xa745ec6f6525e5a318ebe9a4fc0e6ac4dcf6330f89c6c0eca0e6d3b738b49b93", "RageQuitEnabled(bool)", {"enabled": p.bool}),
    RewardDeposited: event("0x7dbc080e4530c8bcf265eb5c9a35ae096ca1eb607b7e802b96581ef4c5e1a703", "RewardDeposited(address,uint256)", {"sender": indexed(p.address), "amount": p.uint256}),
    RewardsDistributed: event("0x29e98ba00d07f171959c4ddcd2f3020debc7c52cf537a034d7e664340d098c6c", "RewardsDistributed(uint256,uint256)", {"amount": p.uint256, "rewardIndex": p.uint256}),
    RewardsDistributedToken0: event("0xb64d618877ad6f470553f7ddd0204ee0be80ecde31ebf868b91129aaeea2e99a", "RewardsDistributedToken0(uint256,uint256)", {"amount": p.uint256, "rewardIndex": p.uint256}),
    Stake: event("0xebedb8b3c678666e7f36970bc8f57abf6d8fa2e828c0da91ea5b75bf68ed101a", "Stake(address,uint256)", {"addr": indexed(p.address), "amount": p.uint256}),
    Unstake: event("0xf960dbf9e5d0682f7a298ed974e33a28b4464914b7a2bfac12ae419a9afeb280", "Unstake(address,uint256,uint256)", {"addr": indexed(p.address), "amount": p.uint256, "index": p.uint256}),
    VestingStarted: event("0x8fe19f160f86d04fb1a90dde93e5e1a47df0810685adf4b990153c107d7b3924", "VestingStarted(address,uint256,uint256)", {"addr": indexed(p.address), "amount": p.uint256, "index": p.uint256}),
}

export const functions = {
    STAKING_LIMIT: viewFun("0x28a237d9", "STAKING_LIMIT()", {}, p.uint256),
    accumulatedDeptRewardsYeet: viewFun("0xf1c7ff5f", "accumulatedDeptRewardsYeet()", {}, p.uint256),
    accumulatedRewards: viewFun("0x9c81ff6b", "accumulatedRewards()", {}, p.uint256),
    addManager: fun("0x2d06177a", "addManager(address)", {"_manager": p.address}, ),
    balanceOf: viewFun("0x70a08231", "balanceOf(address)", {"_0": p.address}, p.uint256),
    calculateRewardsEarned: viewFun("0x8b086764", "calculateRewardsEarned(address)", {"account": p.address}, p.uint256),
    calculateVesting: viewFun("0xa18b0064", "calculateVesting((uint256,uint256,uint256))", {"vesting": p.struct({"amount": p.uint256, "start": p.uint256, "end": p.uint256})}, {"_0": p.uint256, "_1": p.uint256}),
    claimRewardsInNative: fun("0x8ee2aba4", "claimRewardsInNative(uint256,(uint256,uint256,uint256,address,bytes),(uint256,uint256,uint256,address,bytes),(address,uint256,uint256,address),(address,address,uint256,uint256))", {"amountToWithdraw": p.uint256, "swapData0": p.struct({"inputAmount": p.uint256, "outputQuote": p.uint256, "outputMin": p.uint256, "executor": p.address, "path": p.bytes}), "swapData1": p.struct({"inputAmount": p.uint256, "outputQuote": p.uint256, "outputMin": p.uint256, "executor": p.address, "path": p.bytes}), "unstakeParams": p.struct({"kodiakVault": p.address, "amount0Min": p.uint256, "amount1Min": p.uint256, "receiver": p.address}), "redeemParams": p.struct({"vault": p.address, "receiver": p.address, "shares": p.uint256, "minAssets": p.uint256})}, ),
    claimRewardsInToken: fun("0x690c9987", "claimRewardsInToken(uint256,address,(uint256,uint256,uint256,address,bytes),(uint256,uint256,uint256,address,bytes),(address,uint256,uint256,address),(address,address,uint256,uint256))", {"amountToWithdraw": p.uint256, "outputToken": p.address, "swap0": p.struct({"inputAmount": p.uint256, "outputQuote": p.uint256, "outputMin": p.uint256, "executor": p.address, "path": p.bytes}), "swap1": p.struct({"inputAmount": p.uint256, "outputQuote": p.uint256, "outputMin": p.uint256, "executor": p.address, "path": p.bytes}), "unstakeParams": p.struct({"kodiakVault": p.address, "amount0Min": p.uint256, "amount1Min": p.uint256, "receiver": p.address}), "redeemParams": p.struct({"vault": p.address, "receiver": p.address, "shares": p.uint256, "minAssets": p.uint256})}, ),
    claimRewardsInToken0: fun("0xee30748a", "claimRewardsInToken0(uint256,(uint256,uint256,uint256,address,bytes),(address,uint256,uint256,address),(address,address,uint256,uint256))", {"amountToWithdraw": p.uint256, "swapData": p.struct({"inputAmount": p.uint256, "outputQuote": p.uint256, "outputMin": p.uint256, "executor": p.address, "path": p.bytes}), "unstakeParams": p.struct({"kodiakVault": p.address, "amount0Min": p.uint256, "amount1Min": p.uint256, "receiver": p.address}), "redeemParams": p.struct({"vault": p.address, "receiver": p.address, "shares": p.uint256, "minAssets": p.uint256})}, ),
    claimRewardsInToken1: fun("0x30f8d165", "claimRewardsInToken1(uint256,(uint256,uint256,uint256,address,bytes),(address,uint256,uint256,address),(address,address,uint256,uint256))", {"amountToWithdraw": p.uint256, "swapData": p.struct({"inputAmount": p.uint256, "outputQuote": p.uint256, "outputMin": p.uint256, "executor": p.address, "path": p.bytes}), "unstakeParams": p.struct({"kodiakVault": p.address, "amount0Min": p.uint256, "amount1Min": p.uint256, "receiver": p.address}), "redeemParams": p.struct({"vault": p.address, "receiver": p.address, "shares": p.uint256, "minAssets": p.uint256})}, ),
    depositReward: fun("0x5ec2dc8d", "depositReward()", {}, ),
    depositWBERA: fun("0x5ebdaf1b", "depositWBERA(uint256)", {"amount": p.uint256}, ),
    executeRewardDistribution: fun("0xf71fc752", "executeRewardDistribution((uint256,uint256,uint256,address,bytes),(uint256,uint256,uint256,address,bytes),(address,uint256,uint256,uint256,uint256,uint256,address),(address,address,uint256))", {"swap0": p.struct({"inputAmount": p.uint256, "outputQuote": p.uint256, "outputMin": p.uint256, "executor": p.address, "path": p.bytes}), "swap1": p.struct({"inputAmount": p.uint256, "outputQuote": p.uint256, "outputMin": p.uint256, "executor": p.address, "path": p.bytes}), "stakingParams": p.struct({"kodiakVault": p.address, "amount0Max": p.uint256, "amount1Max": p.uint256, "amount0Min": p.uint256, "amount1Min": p.uint256, "amountSharesMin": p.uint256, "receiver": p.address}), "vaultParams": p.struct({"vault": p.address, "receiver": p.address, "minShares": p.uint256})}, ),
    executeRewardDistributionYeet: fun("0x855f9549", "executeRewardDistributionYeet((uint256,uint256,uint256,address,bytes),(address,uint256,uint256,uint256,uint256,uint256,address),(address,address,uint256))", {"swap": p.struct({"inputAmount": p.uint256, "outputQuote": p.uint256, "outputMin": p.uint256, "executor": p.address, "path": p.bytes}), "stakingParams": p.struct({"kodiakVault": p.address, "amount0Max": p.uint256, "amount1Max": p.uint256, "amount0Min": p.uint256, "amount1Min": p.uint256, "amountSharesMin": p.uint256, "receiver": p.address}), "vaultParams": p.struct({"vault": p.address, "receiver": p.address, "minShares": p.uint256})}, ),
    getRewardIndex: viewFun("0xf21c150c", "getRewardIndex()", {}, p.uint256),
    getVestings: viewFun("0x7a0c6dc0", "getVestings(address)", {"addr": p.address}, p.array(p.struct({"amount": p.uint256, "start": p.uint256, "end": p.uint256}))),
    managers: viewFun("0xfdff9b4d", "managers(address)", {"_0": p.address}, p.bool),
    owner: viewFun("0x8da5cb5b", "owner()", {}, p.address),
    rageQuit: fun("0x65f969f6", "rageQuit(uint256)", {"index": p.uint256}, ),
    removeManager: fun("0xac18de43", "removeManager(address)", {"_manager": p.address}, ),
    renounceOwnership: fun("0x715018a6", "renounceOwnership()", {}, ),
    rewardIndex: viewFun("0xe9ee2fa9", "rewardIndex()", {}, p.uint256),
    stake: fun("0xa694fc3a", "stake(uint256)", {"amount": p.uint256}, ),
    stakedTimes: viewFun("0x6ad2fb77", "stakedTimes(address)", {"_0": p.address}, p.uint256),
    stakingToken: viewFun("0x72f702f3", "stakingToken()", {}, p.address),
    startUnstake: fun("0x34dfb268", "startUnstake(uint256)", {"unStakeAmount": p.uint256}, ),
    totalSupply: viewFun("0x18160ddd", "totalSupply()", {}, p.uint256),
    totalVaultShares: viewFun("0x728a1611", "totalVaultShares()", {}, p.uint256),
    transferOwnership: fun("0xf2fde38b", "transferOwnership(address)", {"newOwner": p.address}, ),
    unstake: fun("0x2e17de78", "unstake(uint256)", {"index": p.uint256}, ),
    vestings: viewFun("0xbd84477d", "vestings(address,uint256)", {"_0": p.address, "_1": p.uint256}, {"amount": p.uint256, "start": p.uint256, "end": p.uint256}),
    wbera: viewFun("0x31f41a33", "wbera()", {}, p.address),
    zapper: viewFun("0xa7a21712", "zapper()", {}, p.address),
}

export class Contract extends ContractBase {

    STAKING_LIMIT() {
        return this.eth_call(functions.STAKING_LIMIT, {})
    }

    accumulatedDeptRewardsYeet() {
        return this.eth_call(functions.accumulatedDeptRewardsYeet, {})
    }

    accumulatedRewards() {
        return this.eth_call(functions.accumulatedRewards, {})
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

    managers(_0: ManagersParams["_0"]) {
        return this.eth_call(functions.managers, {_0})
    }

    owner() {
        return this.eth_call(functions.owner, {})
    }

    rewardIndex() {
        return this.eth_call(functions.rewardIndex, {})
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

    totalVaultShares() {
        return this.eth_call(functions.totalVaultShares, {})
    }

    vestings(_0: VestingsParams["_0"], _1: VestingsParams["_1"]) {
        return this.eth_call(functions.vestings, {_0, _1})
    }

    wbera() {
        return this.eth_call(functions.wbera, {})
    }

    zapper() {
        return this.eth_call(functions.zapper, {})
    }
}

/// Event types
export type ClaimedEventArgs = EParams<typeof events.Claimed>
export type OwnershipTransferredEventArgs = EParams<typeof events.OwnershipTransferred>
export type RageQuitEventArgs = EParams<typeof events.RageQuit>
export type RageQuitEnabledEventArgs = EParams<typeof events.RageQuitEnabled>
export type RewardDepositedEventArgs = EParams<typeof events.RewardDeposited>
export type RewardsDistributedEventArgs = EParams<typeof events.RewardsDistributed>
export type RewardsDistributedToken0EventArgs = EParams<typeof events.RewardsDistributedToken0>
export type StakeEventArgs = EParams<typeof events.Stake>
export type UnstakeEventArgs = EParams<typeof events.Unstake>
export type VestingStartedEventArgs = EParams<typeof events.VestingStarted>

/// Function types
export type STAKING_LIMITParams = FunctionArguments<typeof functions.STAKING_LIMIT>
export type STAKING_LIMITReturn = FunctionReturn<typeof functions.STAKING_LIMIT>

export type AccumulatedDeptRewardsYeetParams = FunctionArguments<typeof functions.accumulatedDeptRewardsYeet>
export type AccumulatedDeptRewardsYeetReturn = FunctionReturn<typeof functions.accumulatedDeptRewardsYeet>

export type AccumulatedRewardsParams = FunctionArguments<typeof functions.accumulatedRewards>
export type AccumulatedRewardsReturn = FunctionReturn<typeof functions.accumulatedRewards>

export type AddManagerParams = FunctionArguments<typeof functions.addManager>
export type AddManagerReturn = FunctionReturn<typeof functions.addManager>

export type BalanceOfParams = FunctionArguments<typeof functions.balanceOf>
export type BalanceOfReturn = FunctionReturn<typeof functions.balanceOf>

export type CalculateRewardsEarnedParams = FunctionArguments<typeof functions.calculateRewardsEarned>
export type CalculateRewardsEarnedReturn = FunctionReturn<typeof functions.calculateRewardsEarned>

export type CalculateVestingParams = FunctionArguments<typeof functions.calculateVesting>
export type CalculateVestingReturn = FunctionReturn<typeof functions.calculateVesting>

export type ClaimRewardsInNativeParams = FunctionArguments<typeof functions.claimRewardsInNative>
export type ClaimRewardsInNativeReturn = FunctionReturn<typeof functions.claimRewardsInNative>

export type ClaimRewardsInTokenParams = FunctionArguments<typeof functions.claimRewardsInToken>
export type ClaimRewardsInTokenReturn = FunctionReturn<typeof functions.claimRewardsInToken>

export type ClaimRewardsInToken0Params = FunctionArguments<typeof functions.claimRewardsInToken0>
export type ClaimRewardsInToken0Return = FunctionReturn<typeof functions.claimRewardsInToken0>

export type ClaimRewardsInToken1Params = FunctionArguments<typeof functions.claimRewardsInToken1>
export type ClaimRewardsInToken1Return = FunctionReturn<typeof functions.claimRewardsInToken1>

export type DepositRewardParams = FunctionArguments<typeof functions.depositReward>
export type DepositRewardReturn = FunctionReturn<typeof functions.depositReward>

export type DepositWBERAParams = FunctionArguments<typeof functions.depositWBERA>
export type DepositWBERAReturn = FunctionReturn<typeof functions.depositWBERA>

export type ExecuteRewardDistributionParams = FunctionArguments<typeof functions.executeRewardDistribution>
export type ExecuteRewardDistributionReturn = FunctionReturn<typeof functions.executeRewardDistribution>

export type ExecuteRewardDistributionYeetParams = FunctionArguments<typeof functions.executeRewardDistributionYeet>
export type ExecuteRewardDistributionYeetReturn = FunctionReturn<typeof functions.executeRewardDistributionYeet>

export type GetRewardIndexParams = FunctionArguments<typeof functions.getRewardIndex>
export type GetRewardIndexReturn = FunctionReturn<typeof functions.getRewardIndex>

export type GetVestingsParams = FunctionArguments<typeof functions.getVestings>
export type GetVestingsReturn = FunctionReturn<typeof functions.getVestings>

export type ManagersParams = FunctionArguments<typeof functions.managers>
export type ManagersReturn = FunctionReturn<typeof functions.managers>

export type OwnerParams = FunctionArguments<typeof functions.owner>
export type OwnerReturn = FunctionReturn<typeof functions.owner>

export type RageQuitParams = FunctionArguments<typeof functions.rageQuit>
export type RageQuitReturn = FunctionReturn<typeof functions.rageQuit>

export type RemoveManagerParams = FunctionArguments<typeof functions.removeManager>
export type RemoveManagerReturn = FunctionReturn<typeof functions.removeManager>

export type RenounceOwnershipParams = FunctionArguments<typeof functions.renounceOwnership>
export type RenounceOwnershipReturn = FunctionReturn<typeof functions.renounceOwnership>

export type RewardIndexParams = FunctionArguments<typeof functions.rewardIndex>
export type RewardIndexReturn = FunctionReturn<typeof functions.rewardIndex>

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

export type TotalVaultSharesParams = FunctionArguments<typeof functions.totalVaultShares>
export type TotalVaultSharesReturn = FunctionReturn<typeof functions.totalVaultShares>

export type TransferOwnershipParams = FunctionArguments<typeof functions.transferOwnership>
export type TransferOwnershipReturn = FunctionReturn<typeof functions.transferOwnership>

export type UnstakeParams = FunctionArguments<typeof functions.unstake>
export type UnstakeReturn = FunctionReturn<typeof functions.unstake>

export type VestingsParams = FunctionArguments<typeof functions.vestings>
export type VestingsReturn = FunctionReturn<typeof functions.vestings>

export type WberaParams = FunctionArguments<typeof functions.wbera>
export type WberaReturn = FunctionReturn<typeof functions.wbera>

export type ZapperParams = FunctionArguments<typeof functions.zapper>
export type ZapperReturn = FunctionReturn<typeof functions.zapper>

