import * as p from '@subsquid/evm-codec'
import { event, fun, viewFun, indexed, ContractBase } from '@subsquid/evm-abi'
import type { EventParams as EParams, FunctionArguments, FunctionReturn } from '@subsquid/evm-abi'

export const events = {
    RewardPaid: event("0x540798df468d7b23d11f156fdb954cb19ad414d150722a7b6d55ba369dea792e", "RewardPaid(address,address,uint256)", {"user": indexed(p.address), "asset": indexed(p.address), "amount": p.uint256}),
    RewardClaimed: event("0x0aa4d283470c904c551d18bb894d37e17674920f3261a7f854be501e25f421b7", "RewardClaimed(address,address,uint256)", {"account": indexed(p.address), "recipient": indexed(p.address), "claimed": p.uint256}),
}

export const functions = {
    activateBoostBGT: fun("0xc3599da6", "activateBoostBGT()", {}, ),
    activePool: viewFun("0x7f7dde4a", "activePool()", {}, p.address),
    assetToGauge: viewFun("0xe0ffd4c5", "assetToGauge(address)", {"_0": p.address}, p.address),
    bera_validator: viewFun("0x82cda58e", "bera_validator()", {}, p.address),
    bgt: viewFun("0x9a6c31c4", "bgt()", {}, p.address),
    claimReward: fun("0xb88a802f", "claimReward()", {}, ),
    dropBoostBGT: fun("0xfc69021d", "dropBoostBGT(uint256)", {"_amount": p.uint256}, ),
    getAllRewards: fun("0x45b35f56", "getAllRewards()", {}, ),
    getGaugeFromAsset: viewFun("0xc7f56631", "getGaugeFromAsset(address)", {"_asset": p.address}, p.address),
    getHoneyRewardsByAddress: viewFun("0x11238145", "getHoneyRewardsByAddress(address)", {"_behalfOf": p.address}, p.uint256),
    getReward: fun("0xc00007b0", "getReward(address)", {"_asset": p.address}, ),
    getRewardsByAddress: viewFun("0x1a0af05c", "getRewardsByAddress(address)", {"_behalfOf": p.address}, p.uint256),
    getTotalVaultStake: viewFun("0xf881121d", "getTotalVaultStake(address)", {"_asset": p.address}, p.uint256),
    getUserStake: viewFun("0x3710d4c7", "getUserStake(address,address)", {"_asset": p.address, "_behalfOf": p.address}, p.uint256),
    getVaultStake: viewFun("0x11ce4f0a", "getVaultStake(address)", {"_asset": p.address}, p.uint256),
    honeyRewards: viewFun("0xc0884d7f", "honeyRewards(address)", {"_0": p.address}, p.uint256),
    ibgt: viewFun("0x3dafa4f3", "ibgt()", {}, p.address),
    lastClaimedRewardTotal: viewFun("0x02b082bd", "lastClaimedRewardTotal(address)", {"_0": p.address}, p.uint256),
    lastUpdated: viewFun("0x0a6f93e6", "lastUpdated(address)", {"_0": p.address}, p.uint256),
    lastUpdatedReward: viewFun("0x5684df1e", "lastUpdatedReward()", {}, p.uint256),
    priceFeed: viewFun("0x741bef1a", "priceFeed()", {}, p.address),
    queueBoostBGT: fun("0xde227d74", "queueBoostBGT(uint128)", {"_amount": p.uint128}, ),
    rewards: viewFun("0x0700037d", "rewards(address)", {"_0": p.address}, p.uint256),
    rewardsByAssets: viewFun("0x90047f9b", "rewardsByAssets(address)", {"_0": p.address}, p.uint256),
    setActivePool: fun("0xf7883a8b", "setActivePool(address)", {"_activePool": p.address}, ),
    setAssetToGauge: fun("0x37163646", "setAssetToGauge(address,address)", {"_asset": p.address, "_gauge": p.address}, ),
    setBGT: fun("0x2db4e348", "setBGT(address)", {"_bgt": p.address}, ),
    setBeraValidator: fun("0x26229193", "setBeraValidator(address)", {"_bera_validator": p.address}, ),
    setIbgt: fun("0x53f93e1c", "setIbgt(address)", {"_ibgt": p.address}, ),
    setPriceFeed: fun("0x724e78da", "setPriceFeed(address)", {"_priceFeed": p.address}, ),
    stake: fun("0xbf6eac2f", "stake(address,address,uint256)", {"_asset": p.address, "_behalfOf": p.address, "_amount": p.uint256}, ),
    stakes: viewFun("0xa4e47b66", "stakes(address,address)", {"_0": p.address, "_1": p.address}, p.uint256),
    totalIbgt: viewFun("0x9328a5e0", "totalIbgt()", {}, p.uint256),
    totalReward: viewFun("0x750142e6", "totalReward()", {}, p.uint256),
    totalStake: viewFun("0x8b0e9f3f", "totalStake()", {}, p.uint256),
    totalStakesByAddress: viewFun("0x65a51c16", "totalStakesByAddress(address)", {"_0": p.address}, p.uint256),
    unstake: fun("0x60829f8a", "unstake(address,address,uint256)", {"_asset": p.address, "_behalfOf": p.address, "_amount": p.uint256}, ),
    updateUserRewards: fun("0x6e7ed949", "updateUserRewards(address,address)", {"_asset": p.address, "_behalfOf": p.address}, p.uint256),
    userLastRewardPerToken: viewFun("0x3885dbd1", "userLastRewardPerToken(address,address)", {"_0": p.address, "_1": p.address}, p.uint256),
}

export class Contract extends ContractBase {

    activePool() {
        return this.eth_call(functions.activePool, {})
    }

    assetToGauge(_0: AssetToGaugeParams["_0"]) {
        return this.eth_call(functions.assetToGauge, {_0})
    }

    bera_validator() {
        return this.eth_call(functions.bera_validator, {})
    }

    bgt() {
        return this.eth_call(functions.bgt, {})
    }

    getGaugeFromAsset(_asset: GetGaugeFromAssetParams["_asset"]) {
        return this.eth_call(functions.getGaugeFromAsset, {_asset})
    }

    getHoneyRewardsByAddress(_behalfOf: GetHoneyRewardsByAddressParams["_behalfOf"]) {
        return this.eth_call(functions.getHoneyRewardsByAddress, {_behalfOf})
    }

    getRewardsByAddress(_behalfOf: GetRewardsByAddressParams["_behalfOf"]) {
        return this.eth_call(functions.getRewardsByAddress, {_behalfOf})
    }

    getTotalVaultStake(_asset: GetTotalVaultStakeParams["_asset"]) {
        return this.eth_call(functions.getTotalVaultStake, {_asset})
    }

    getUserStake(_asset: GetUserStakeParams["_asset"], _behalfOf: GetUserStakeParams["_behalfOf"]) {
        return this.eth_call(functions.getUserStake, {_asset, _behalfOf})
    }

    getVaultStake(_asset: GetVaultStakeParams["_asset"]) {
        return this.eth_call(functions.getVaultStake, {_asset})
    }

    honeyRewards(_0: HoneyRewardsParams["_0"]) {
        return this.eth_call(functions.honeyRewards, {_0})
    }

    ibgt() {
        return this.eth_call(functions.ibgt, {})
    }

    lastClaimedRewardTotal(_0: LastClaimedRewardTotalParams["_0"]) {
        return this.eth_call(functions.lastClaimedRewardTotal, {_0})
    }

    lastUpdated(_0: LastUpdatedParams["_0"]) {
        return this.eth_call(functions.lastUpdated, {_0})
    }

    lastUpdatedReward() {
        return this.eth_call(functions.lastUpdatedReward, {})
    }

    priceFeed() {
        return this.eth_call(functions.priceFeed, {})
    }

    rewards(_0: RewardsParams["_0"]) {
        return this.eth_call(functions.rewards, {_0})
    }

    rewardsByAssets(_0: RewardsByAssetsParams["_0"]) {
        return this.eth_call(functions.rewardsByAssets, {_0})
    }

    stakes(_0: StakesParams["_0"], _1: StakesParams["_1"]) {
        return this.eth_call(functions.stakes, {_0, _1})
    }

    totalIbgt() {
        return this.eth_call(functions.totalIbgt, {})
    }

    totalReward() {
        return this.eth_call(functions.totalReward, {})
    }

    totalStake() {
        return this.eth_call(functions.totalStake, {})
    }

    totalStakesByAddress(_0: TotalStakesByAddressParams["_0"]) {
        return this.eth_call(functions.totalStakesByAddress, {_0})
    }

    userLastRewardPerToken(_0: UserLastRewardPerTokenParams["_0"], _1: UserLastRewardPerTokenParams["_1"]) {
        return this.eth_call(functions.userLastRewardPerToken, {_0, _1})
    }
}

/// Event types
export type RewardPaidEventArgs = EParams<typeof events.RewardPaid>
export type RewardClaimedEventArgs = EParams<typeof events.RewardClaimed>

/// Function types
export type ActivateBoostBGTParams = FunctionArguments<typeof functions.activateBoostBGT>
export type ActivateBoostBGTReturn = FunctionReturn<typeof functions.activateBoostBGT>

export type ActivePoolParams = FunctionArguments<typeof functions.activePool>
export type ActivePoolReturn = FunctionReturn<typeof functions.activePool>

export type AssetToGaugeParams = FunctionArguments<typeof functions.assetToGauge>
export type AssetToGaugeReturn = FunctionReturn<typeof functions.assetToGauge>

export type Bera_validatorParams = FunctionArguments<typeof functions.bera_validator>
export type Bera_validatorReturn = FunctionReturn<typeof functions.bera_validator>

export type BgtParams = FunctionArguments<typeof functions.bgt>
export type BgtReturn = FunctionReturn<typeof functions.bgt>

export type ClaimRewardParams = FunctionArguments<typeof functions.claimReward>
export type ClaimRewardReturn = FunctionReturn<typeof functions.claimReward>

export type DropBoostBGTParams = FunctionArguments<typeof functions.dropBoostBGT>
export type DropBoostBGTReturn = FunctionReturn<typeof functions.dropBoostBGT>

export type GetAllRewardsParams = FunctionArguments<typeof functions.getAllRewards>
export type GetAllRewardsReturn = FunctionReturn<typeof functions.getAllRewards>

export type GetGaugeFromAssetParams = FunctionArguments<typeof functions.getGaugeFromAsset>
export type GetGaugeFromAssetReturn = FunctionReturn<typeof functions.getGaugeFromAsset>

export type GetHoneyRewardsByAddressParams = FunctionArguments<typeof functions.getHoneyRewardsByAddress>
export type GetHoneyRewardsByAddressReturn = FunctionReturn<typeof functions.getHoneyRewardsByAddress>

export type GetRewardParams = FunctionArguments<typeof functions.getReward>
export type GetRewardReturn = FunctionReturn<typeof functions.getReward>

export type GetRewardsByAddressParams = FunctionArguments<typeof functions.getRewardsByAddress>
export type GetRewardsByAddressReturn = FunctionReturn<typeof functions.getRewardsByAddress>

export type GetTotalVaultStakeParams = FunctionArguments<typeof functions.getTotalVaultStake>
export type GetTotalVaultStakeReturn = FunctionReturn<typeof functions.getTotalVaultStake>

export type GetUserStakeParams = FunctionArguments<typeof functions.getUserStake>
export type GetUserStakeReturn = FunctionReturn<typeof functions.getUserStake>

export type GetVaultStakeParams = FunctionArguments<typeof functions.getVaultStake>
export type GetVaultStakeReturn = FunctionReturn<typeof functions.getVaultStake>

export type HoneyRewardsParams = FunctionArguments<typeof functions.honeyRewards>
export type HoneyRewardsReturn = FunctionReturn<typeof functions.honeyRewards>

export type IbgtParams = FunctionArguments<typeof functions.ibgt>
export type IbgtReturn = FunctionReturn<typeof functions.ibgt>

export type LastClaimedRewardTotalParams = FunctionArguments<typeof functions.lastClaimedRewardTotal>
export type LastClaimedRewardTotalReturn = FunctionReturn<typeof functions.lastClaimedRewardTotal>

export type LastUpdatedParams = FunctionArguments<typeof functions.lastUpdated>
export type LastUpdatedReturn = FunctionReturn<typeof functions.lastUpdated>

export type LastUpdatedRewardParams = FunctionArguments<typeof functions.lastUpdatedReward>
export type LastUpdatedRewardReturn = FunctionReturn<typeof functions.lastUpdatedReward>

export type PriceFeedParams = FunctionArguments<typeof functions.priceFeed>
export type PriceFeedReturn = FunctionReturn<typeof functions.priceFeed>

export type QueueBoostBGTParams = FunctionArguments<typeof functions.queueBoostBGT>
export type QueueBoostBGTReturn = FunctionReturn<typeof functions.queueBoostBGT>

export type RewardsParams = FunctionArguments<typeof functions.rewards>
export type RewardsReturn = FunctionReturn<typeof functions.rewards>

export type RewardsByAssetsParams = FunctionArguments<typeof functions.rewardsByAssets>
export type RewardsByAssetsReturn = FunctionReturn<typeof functions.rewardsByAssets>

export type SetActivePoolParams = FunctionArguments<typeof functions.setActivePool>
export type SetActivePoolReturn = FunctionReturn<typeof functions.setActivePool>

export type SetAssetToGaugeParams = FunctionArguments<typeof functions.setAssetToGauge>
export type SetAssetToGaugeReturn = FunctionReturn<typeof functions.setAssetToGauge>

export type SetBGTParams = FunctionArguments<typeof functions.setBGT>
export type SetBGTReturn = FunctionReturn<typeof functions.setBGT>

export type SetBeraValidatorParams = FunctionArguments<typeof functions.setBeraValidator>
export type SetBeraValidatorReturn = FunctionReturn<typeof functions.setBeraValidator>

export type SetIbgtParams = FunctionArguments<typeof functions.setIbgt>
export type SetIbgtReturn = FunctionReturn<typeof functions.setIbgt>

export type SetPriceFeedParams = FunctionArguments<typeof functions.setPriceFeed>
export type SetPriceFeedReturn = FunctionReturn<typeof functions.setPriceFeed>

export type StakeParams = FunctionArguments<typeof functions.stake>
export type StakeReturn = FunctionReturn<typeof functions.stake>

export type StakesParams = FunctionArguments<typeof functions.stakes>
export type StakesReturn = FunctionReturn<typeof functions.stakes>

export type TotalIbgtParams = FunctionArguments<typeof functions.totalIbgt>
export type TotalIbgtReturn = FunctionReturn<typeof functions.totalIbgt>

export type TotalRewardParams = FunctionArguments<typeof functions.totalReward>
export type TotalRewardReturn = FunctionReturn<typeof functions.totalReward>

export type TotalStakeParams = FunctionArguments<typeof functions.totalStake>
export type TotalStakeReturn = FunctionReturn<typeof functions.totalStake>

export type TotalStakesByAddressParams = FunctionArguments<typeof functions.totalStakesByAddress>
export type TotalStakesByAddressReturn = FunctionReturn<typeof functions.totalStakesByAddress>

export type UnstakeParams = FunctionArguments<typeof functions.unstake>
export type UnstakeReturn = FunctionReturn<typeof functions.unstake>

export type UpdateUserRewardsParams = FunctionArguments<typeof functions.updateUserRewards>
export type UpdateUserRewardsReturn = FunctionReturn<typeof functions.updateUserRewards>

export type UserLastRewardPerTokenParams = FunctionArguments<typeof functions.userLastRewardPerToken>
export type UserLastRewardPerTokenReturn = FunctionReturn<typeof functions.userLastRewardPerToken>

