import * as p from '@subsquid/evm-codec'
import { event, fun, viewFun, indexed, ContractBase } from '@subsquid/evm-abi'
import type { EventParams as EParams, FunctionArguments, FunctionReturn } from '@subsquid/evm-abi'

export const events = {
    ChangedTimeToWait: event("0x8ad5b95625fb801ce15166a381c20efaf43bc85325453147fb4eaed6a9f03f67", "ChangedTimeToWait()", {}),
    ChangedToken: event("0x81bc751d431fa7fccaae94661105025679199b733fb19a92a52f6f1814453aa3", "ChangedToken()", {}),
    ChangedTokenAmount: event("0xc8bc70910ce64d0461209b9eea5f8f27d9fb920630ac8ca1a77bb3d28af2c1db", "ChangedTokenAmount()", {}),
    RoleAdminChanged: event("0xbd79b86ffe0ab8e8776151514217cd7cacd52c909f66475c3af44e129f0b00ff", "RoleAdminChanged(bytes32,bytes32,bytes32)", {"role": indexed(p.bytes32), "previousAdminRole": indexed(p.bytes32), "newAdminRole": indexed(p.bytes32)}),
    RoleGranted: event("0x2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d", "RoleGranted(bytes32,address,address)", {"role": indexed(p.bytes32), "account": indexed(p.address), "sender": indexed(p.address)}),
    RoleRevoked: event("0xf6391f5c32d9c69d2a47ea670b442974b53935d1edc7fd64eb21e047a839171b", "RoleRevoked(bytes32,address,address)", {"role": indexed(p.bytes32), "account": indexed(p.address), "sender": indexed(p.address)}),
    TokenEmission: event("0x7f370c3b1e4ce52254adcfae33d742d942527a4d2d4aba639f711bdc056b2f82", "TokenEmission(address)", {"user": p.address}),
}

export const functions = {
    DEFAULT_ADMIN_ROLE: viewFun("0xa217fddf", "DEFAULT_ADMIN_ROLE()", {}, p.bytes32),
    ROLE_ADMIN: viewFun("0xd391014b", "ROLE_ADMIN()", {}, p.bytes32),
    ROLE_GOD: viewFun("0x7afa7c9f", "ROLE_GOD()", {}, p.bytes32),
    ROLE_WHITELISTED: viewFun("0x18b919e9", "ROLE_WHITELISTED()", {}, p.bytes32),
    changeToken: fun("0x66829b16", "changeToken(address)", {"newToken": p.address}, ),
    changeTokenAmount: fun("0x33a5ec7e", "changeTokenAmount(uint256)", {"amount": p.uint256}, ),
    changeWaitTime: fun("0x06fe2212", "changeWaitTime(uint256)", {"timeToWait": p.uint256}, ),
    get: fun("0x6d4ce63c", "get()", {}, ),
    getRoleAdmin: viewFun("0x248a9ca3", "getRoleAdmin(bytes32)", {"role": p.bytes32}, p.bytes32),
    grantRole: fun("0x2f2ff15d", "grantRole(bytes32,address)", {"role": p.bytes32, "account": p.address}, ),
    hasRole: viewFun("0x91d14854", "hasRole(bytes32,address)", {"role": p.bytes32, "account": p.address}, p.bool),
    nextTime: viewFun("0x3b1bd134", "nextTime(address)", {"_0": p.address}, p.uint256),
    renounceRole: fun("0x36568abe", "renounceRole(bytes32,address)", {"role": p.bytes32, "account": p.address}, ),
    revokeRole: fun("0xd547741f", "revokeRole(bytes32,address)", {"role": p.bytes32, "account": p.address}, ),
    supportsInterface: viewFun("0x01ffc9a7", "supportsInterface(bytes4)", {"interfaceId": p.bytes4}, p.bool),
    token: viewFun("0xfc0c546a", "token()", {}, p.address),
    tokenAmount: viewFun("0xeec7faa1", "tokenAmount()", {}, p.uint256),
    waitTime: viewFun("0xccca123b", "waitTime()", {}, p.uint256),
}

export class Contract extends ContractBase {

    DEFAULT_ADMIN_ROLE() {
        return this.eth_call(functions.DEFAULT_ADMIN_ROLE, {})
    }

    ROLE_ADMIN() {
        return this.eth_call(functions.ROLE_ADMIN, {})
    }

    ROLE_GOD() {
        return this.eth_call(functions.ROLE_GOD, {})
    }

    ROLE_WHITELISTED() {
        return this.eth_call(functions.ROLE_WHITELISTED, {})
    }

    getRoleAdmin(role: GetRoleAdminParams["role"]) {
        return this.eth_call(functions.getRoleAdmin, {role})
    }

    hasRole(role: HasRoleParams["role"], account: HasRoleParams["account"]) {
        return this.eth_call(functions.hasRole, {role, account})
    }

    nextTime(_0: NextTimeParams["_0"]) {
        return this.eth_call(functions.nextTime, {_0})
    }

    supportsInterface(interfaceId: SupportsInterfaceParams["interfaceId"]) {
        return this.eth_call(functions.supportsInterface, {interfaceId})
    }

    token() {
        return this.eth_call(functions.token, {})
    }

    tokenAmount() {
        return this.eth_call(functions.tokenAmount, {})
    }

    waitTime() {
        return this.eth_call(functions.waitTime, {})
    }
}

/// Event types
export type ChangedTimeToWaitEventArgs = EParams<typeof events.ChangedTimeToWait>
export type ChangedTokenEventArgs = EParams<typeof events.ChangedToken>
export type ChangedTokenAmountEventArgs = EParams<typeof events.ChangedTokenAmount>
export type RoleAdminChangedEventArgs = EParams<typeof events.RoleAdminChanged>
export type RoleGrantedEventArgs = EParams<typeof events.RoleGranted>
export type RoleRevokedEventArgs = EParams<typeof events.RoleRevoked>
export type TokenEmissionEventArgs = EParams<typeof events.TokenEmission>

/// Function types
export type DEFAULT_ADMIN_ROLEParams = FunctionArguments<typeof functions.DEFAULT_ADMIN_ROLE>
export type DEFAULT_ADMIN_ROLEReturn = FunctionReturn<typeof functions.DEFAULT_ADMIN_ROLE>

export type ROLE_ADMINParams = FunctionArguments<typeof functions.ROLE_ADMIN>
export type ROLE_ADMINReturn = FunctionReturn<typeof functions.ROLE_ADMIN>

export type ROLE_GODParams = FunctionArguments<typeof functions.ROLE_GOD>
export type ROLE_GODReturn = FunctionReturn<typeof functions.ROLE_GOD>

export type ROLE_WHITELISTEDParams = FunctionArguments<typeof functions.ROLE_WHITELISTED>
export type ROLE_WHITELISTEDReturn = FunctionReturn<typeof functions.ROLE_WHITELISTED>

export type ChangeTokenParams = FunctionArguments<typeof functions.changeToken>
export type ChangeTokenReturn = FunctionReturn<typeof functions.changeToken>

export type ChangeTokenAmountParams = FunctionArguments<typeof functions.changeTokenAmount>
export type ChangeTokenAmountReturn = FunctionReturn<typeof functions.changeTokenAmount>

export type ChangeWaitTimeParams = FunctionArguments<typeof functions.changeWaitTime>
export type ChangeWaitTimeReturn = FunctionReturn<typeof functions.changeWaitTime>

export type GetParams = FunctionArguments<typeof functions.get>
export type GetReturn = FunctionReturn<typeof functions.get>

export type GetRoleAdminParams = FunctionArguments<typeof functions.getRoleAdmin>
export type GetRoleAdminReturn = FunctionReturn<typeof functions.getRoleAdmin>

export type GrantRoleParams = FunctionArguments<typeof functions.grantRole>
export type GrantRoleReturn = FunctionReturn<typeof functions.grantRole>

export type HasRoleParams = FunctionArguments<typeof functions.hasRole>
export type HasRoleReturn = FunctionReturn<typeof functions.hasRole>

export type NextTimeParams = FunctionArguments<typeof functions.nextTime>
export type NextTimeReturn = FunctionReturn<typeof functions.nextTime>

export type RenounceRoleParams = FunctionArguments<typeof functions.renounceRole>
export type RenounceRoleReturn = FunctionReturn<typeof functions.renounceRole>

export type RevokeRoleParams = FunctionArguments<typeof functions.revokeRole>
export type RevokeRoleReturn = FunctionReturn<typeof functions.revokeRole>

export type SupportsInterfaceParams = FunctionArguments<typeof functions.supportsInterface>
export type SupportsInterfaceReturn = FunctionReturn<typeof functions.supportsInterface>

export type TokenParams = FunctionArguments<typeof functions.token>
export type TokenReturn = FunctionReturn<typeof functions.token>

export type TokenAmountParams = FunctionArguments<typeof functions.tokenAmount>
export type TokenAmountReturn = FunctionReturn<typeof functions.tokenAmount>

export type WaitTimeParams = FunctionArguments<typeof functions.waitTime>
export type WaitTimeReturn = FunctionReturn<typeof functions.waitTime>

