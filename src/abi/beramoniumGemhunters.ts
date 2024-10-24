import * as p from '@subsquid/evm-codec'
import { event, fun, viewFun, indexed, ContractBase } from '@subsquid/evm-abi'
import type { EventParams as EParams, FunctionArguments, FunctionReturn } from '@subsquid/evm-abi'

export const events = {
    AdminChanged: event("0x7e644d79422f17c01e4894b5f4f588d331ebfa28653d42ae832dc59e38c9798f", "AdminChanged(address,address)", {"previousAdmin": p.address, "newAdmin": p.address}),
    BeaconUpgraded: event("0x1cf3b03a6cf19fa2baba4df148e9dcabedea7f8a5c07840e207e5c089be95d3e", "BeaconUpgraded(address)", {"beacon": indexed(p.address)}),
    Initialized: event("0x7f26b83ff96e1f2b6a682f133852f6798a09c465da95921460cefb3847402498", "Initialized(uint8)", {"version": p.uint8}),
    RoleAdminChanged: event("0xbd79b86ffe0ab8e8776151514217cd7cacd52c909f66475c3af44e129f0b00ff", "RoleAdminChanged(bytes32,bytes32,bytes32)", {"role": indexed(p.bytes32), "previousAdminRole": indexed(p.bytes32), "newAdminRole": indexed(p.bytes32)}),
    RoleGranted: event("0x2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d", "RoleGranted(bytes32,address,address)", {"role": indexed(p.bytes32), "account": indexed(p.address), "sender": indexed(p.address)}),
    RoleRevoked: event("0xf6391f5c32d9c69d2a47ea670b442974b53935d1edc7fd64eb21e047a839171b", "RoleRevoked(bytes32,address,address)", {"role": indexed(p.bytes32), "account": indexed(p.address), "sender": indexed(p.address)}),
    Staked: event("0x82cac1f6ac2ff91bb64e19e91079373bb4ad1d2658113ed8d652b29c86932227", "Staked(address,uint16)", {"user": p.address, "mainIndex": p.uint16}),
    Unstaked: event("0xdf597ef9ebbe3b7c4d132cebcc7d4e2a326c4ec8dfa02330232cd32d96c8439b", "Unstaked(address,uint16)", {"owner": p.address, "tokenId": p.uint16}),
    Upgraded: event("0xbc7cd75a20ee27fd9adebab32041f755214dbc6bffa90cc0225b39da2e5c2d3b", "Upgraded(address)", {"implementation": indexed(p.address)}),
}

export const functions = {
    DEFAULT_ADMIN_ROLE: viewFun("0xa217fddf", "DEFAULT_ADMIN_ROLE()", {}, p.bytes32),
    UPGRADER_ROLE: viewFun("0xf72c0d8b", "UPGRADER_ROLE()", {}, p.bytes32),
    _beramonium: viewFun("0xe072068b", "_beramonium()", {}, p.address),
    getRoleAdmin: viewFun("0x248a9ca3", "getRoleAdmin(bytes32)", {"role": p.bytes32}, p.bytes32),
    grantRole: fun("0x2f2ff15d", "grantRole(bytes32,address)", {"role": p.bytes32, "account": p.address}, ),
    hasRole: viewFun("0x91d14854", "hasRole(bytes32,address)", {"role": p.bytes32, "account": p.address}, p.bool),
    initialize: fun("0xc4d66de8", "initialize(address)", {"beramonium": p.address}, ),
    onERC721Received: viewFun("0x150b7a02", "onERC721Received(address,address,uint256,bytes)", {"_0": p.address, "_1": p.address, "_2": p.uint256, "_3": p.bytes}, p.bytes4),
    proxiableUUID: viewFun("0x52d1902d", "proxiableUUID()", {}, p.bytes32),
    renounceRole: fun("0x36568abe", "renounceRole(bytes32,address)", {"role": p.bytes32, "account": p.address}, ),
    revokeRole: fun("0xd547741f", "revokeRole(bytes32,address)", {"role": p.bytes32, "account": p.address}, ),
    stake: fun("0x2bdcfe72", "stake(uint16[])", {"tokenIds": p.array(p.uint16)}, ),
    stakedBeraCount: viewFun("0x15679db4", "stakedBeraCount(address)", {"owner": p.address}, p.uint16),
    stakedBeras: viewFun("0x1b6d0409", "stakedBeras(address)", {"owner": p.address}, p.array(p.uint16)),
    supportsInterface: viewFun("0x01ffc9a7", "supportsInterface(bytes4)", {"interfaceId": p.bytes4}, p.bool),
    unstakeByIndices: fun("0x5c2708bc", "unstakeByIndices(uint16[])", {"indices": p.array(p.uint16)}, ),
    upgradeTo: fun("0x3659cfe6", "upgradeTo(address)", {"newImplementation": p.address}, ),
    upgradeToAndCall: fun("0x4f1ef286", "upgradeToAndCall(address,bytes)", {"newImplementation": p.address, "data": p.bytes}, ),
}

export class Contract extends ContractBase {

    DEFAULT_ADMIN_ROLE() {
        return this.eth_call(functions.DEFAULT_ADMIN_ROLE, {})
    }

    UPGRADER_ROLE() {
        return this.eth_call(functions.UPGRADER_ROLE, {})
    }

    _beramonium() {
        return this.eth_call(functions._beramonium, {})
    }

    getRoleAdmin(role: GetRoleAdminParams["role"]) {
        return this.eth_call(functions.getRoleAdmin, {role})
    }

    hasRole(role: HasRoleParams["role"], account: HasRoleParams["account"]) {
        return this.eth_call(functions.hasRole, {role, account})
    }

    onERC721Received(_0: OnERC721ReceivedParams["_0"], _1: OnERC721ReceivedParams["_1"], _2: OnERC721ReceivedParams["_2"], _3: OnERC721ReceivedParams["_3"]) {
        return this.eth_call(functions.onERC721Received, {_0, _1, _2, _3})
    }

    proxiableUUID() {
        return this.eth_call(functions.proxiableUUID, {})
    }

    stakedBeraCount(owner: StakedBeraCountParams["owner"]) {
        return this.eth_call(functions.stakedBeraCount, {owner})
    }

    stakedBeras(owner: StakedBerasParams["owner"]) {
        return this.eth_call(functions.stakedBeras, {owner})
    }

    supportsInterface(interfaceId: SupportsInterfaceParams["interfaceId"]) {
        return this.eth_call(functions.supportsInterface, {interfaceId})
    }
}

/// Event types
export type AdminChangedEventArgs = EParams<typeof events.AdminChanged>
export type BeaconUpgradedEventArgs = EParams<typeof events.BeaconUpgraded>
export type InitializedEventArgs = EParams<typeof events.Initialized>
export type RoleAdminChangedEventArgs = EParams<typeof events.RoleAdminChanged>
export type RoleGrantedEventArgs = EParams<typeof events.RoleGranted>
export type RoleRevokedEventArgs = EParams<typeof events.RoleRevoked>
export type StakedEventArgs = EParams<typeof events.Staked>
export type UnstakedEventArgs = EParams<typeof events.Unstaked>
export type UpgradedEventArgs = EParams<typeof events.Upgraded>

/// Function types
export type DEFAULT_ADMIN_ROLEParams = FunctionArguments<typeof functions.DEFAULT_ADMIN_ROLE>
export type DEFAULT_ADMIN_ROLEReturn = FunctionReturn<typeof functions.DEFAULT_ADMIN_ROLE>

export type UPGRADER_ROLEParams = FunctionArguments<typeof functions.UPGRADER_ROLE>
export type UPGRADER_ROLEReturn = FunctionReturn<typeof functions.UPGRADER_ROLE>

export type _beramoniumParams = FunctionArguments<typeof functions._beramonium>
export type _beramoniumReturn = FunctionReturn<typeof functions._beramonium>

export type GetRoleAdminParams = FunctionArguments<typeof functions.getRoleAdmin>
export type GetRoleAdminReturn = FunctionReturn<typeof functions.getRoleAdmin>

export type GrantRoleParams = FunctionArguments<typeof functions.grantRole>
export type GrantRoleReturn = FunctionReturn<typeof functions.grantRole>

export type HasRoleParams = FunctionArguments<typeof functions.hasRole>
export type HasRoleReturn = FunctionReturn<typeof functions.hasRole>

export type InitializeParams = FunctionArguments<typeof functions.initialize>
export type InitializeReturn = FunctionReturn<typeof functions.initialize>

export type OnERC721ReceivedParams = FunctionArguments<typeof functions.onERC721Received>
export type OnERC721ReceivedReturn = FunctionReturn<typeof functions.onERC721Received>

export type ProxiableUUIDParams = FunctionArguments<typeof functions.proxiableUUID>
export type ProxiableUUIDReturn = FunctionReturn<typeof functions.proxiableUUID>

export type RenounceRoleParams = FunctionArguments<typeof functions.renounceRole>
export type RenounceRoleReturn = FunctionReturn<typeof functions.renounceRole>

export type RevokeRoleParams = FunctionArguments<typeof functions.revokeRole>
export type RevokeRoleReturn = FunctionReturn<typeof functions.revokeRole>

export type StakeParams = FunctionArguments<typeof functions.stake>
export type StakeReturn = FunctionReturn<typeof functions.stake>

export type StakedBeraCountParams = FunctionArguments<typeof functions.stakedBeraCount>
export type StakedBeraCountReturn = FunctionReturn<typeof functions.stakedBeraCount>

export type StakedBerasParams = FunctionArguments<typeof functions.stakedBeras>
export type StakedBerasReturn = FunctionReturn<typeof functions.stakedBeras>

export type SupportsInterfaceParams = FunctionArguments<typeof functions.supportsInterface>
export type SupportsInterfaceReturn = FunctionReturn<typeof functions.supportsInterface>

export type UnstakeByIndicesParams = FunctionArguments<typeof functions.unstakeByIndices>
export type UnstakeByIndicesReturn = FunctionReturn<typeof functions.unstakeByIndices>

export type UpgradeToParams = FunctionArguments<typeof functions.upgradeTo>
export type UpgradeToReturn = FunctionReturn<typeof functions.upgradeTo>

export type UpgradeToAndCallParams = FunctionArguments<typeof functions.upgradeToAndCall>
export type UpgradeToAndCallReturn = FunctionReturn<typeof functions.upgradeToAndCall>

