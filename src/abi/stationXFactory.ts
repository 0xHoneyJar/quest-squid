import * as p from '@subsquid/evm-codec'
import { event, fun, viewFun, indexed, ContractBase } from '@subsquid/evm-abi'
import type { EventParams as EParams, FunctionArguments, FunctionReturn } from '@subsquid/evm-abi'

export const events = {
    AirDropToken: event("0xdf8d3038f367603dc5412a35b23395b8324bb9fad9a0d75fc40c4562110a761a", "AirDropToken(address,address,address,uint256)", {"_daoAddress": indexed(p.address), "_token": p.address, "_to": p.address, "_amount": p.uint256}),
    ChangeMerkleRoot: event("0xd22f2931dd94295be3155cedb74573e6a5b7b55da5d7392d087d1e7badcc999a", "ChangeMerkleRoot(address,address,bytes32)", {"factory": indexed(p.address), "daoAddress": indexed(p.address), "newMerkleRoot": p.bytes32}),
    ChangeRefundModuleMerkleRoot: event("0x58fa84d8f4eaf1d37b87452e27cdfbef2bac60b310810b2faec03f2f2d45ed50", "ChangeRefundModuleMerkleRoot(address,address,bytes32)", {"_refundModule": indexed(p.address), "_daoAddress": indexed(p.address), "_newMerkleRoot": p.bytes32}),
    ChangedSigners: event("0x074a05128af1e060305429cb95db6407aff955784db0e33a66fc8a0c59307ef8", "ChangedSigners(address,address,bool)", {"_daoAddress": indexed(p.address), "_signer": indexed(p.address), "_isAdded": indexed(p.bool)}),
    CloseDeposit: event("0xbb8c0285b58ff072c41a21193878e6a2df31dc964fb96dc87f7810be0e68bea7", "CloseDeposit(address,uint256)", {"_proxy": indexed(p.address), "closeTime": p.uint256}),
    CreateCCDAO: event("0x33f073c1b289ef50f9d101c9f2fdb822f4653ba958b7f000c127cf3afffe87c3", "CreateCCDAO(address,uint256[])", {"_daoAddress": p.address, "_chainIds": p.array(p.uint256)}),
    CreateDaoErc20: event("0x454952aaff0e5b67ea47ba3c00ddeae33511368fb3b0fd455e0195eac5a1da25", "CreateDaoErc20(address,address,string,string,uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256,address,address,address,address,bool,bool,bool)", {"deployerAddress": indexed(p.address), "proxy": indexed(p.address), "name": p.string, "symbol": p.string, "distributionAmount": p.uint256, "pricePerToken": p.uint256, "minDeposit": p.uint256, "maxDeposit": p.uint256, "ownerFee": p.uint256, "_days": p.uint256, "quorum": p.uint256, "threshold": p.uint256, "depositTokenAddress": p.address, "emitter": p.address, "gnosisAddress": p.address, "lzImpl": p.address, "isGovernanceActive": p.bool, "isTransferable": p.bool, "assetsStoredOnGnosis": p.bool}),
    CreateDaoErc721: event("0xff9741e1d09d83a048e6899300b3331d07d5a7259e505f78241e70427bfa96b8", "CreateDaoErc721(address,address,string,string,string,uint256,uint256,uint256,uint256,uint256,uint256,uint256,address,address,address,address,bool,bool,bool)", {"deployerAddress": indexed(p.address), "proxy": indexed(p.address), "name": p.string, "symbol": p.string, "tokenURI": p.string, "pricePerToken": p.uint256, "distributionAmount": p.uint256, "maxTokensPerUser": p.uint256, "ownerFee": p.uint256, "_days": p.uint256, "quorum": p.uint256, "threshold": p.uint256, "depositTokenAddress": p.address, "emitter": p.address, "gnosisAddress": p.address, "lzImpl": p.address, "isGovernanceActive": p.bool, "isTransferable": p.bool, "assetsStoredOnGnosis": p.bool}),
    DefineContracts: event("0x260482593f66c4b7d060db907860b9f0c3591ef2c3f94d9076d7727d353a8f1c", "DefineContracts(address,address,address,address)", {"factory": indexed(p.address), "ERC20ImplementationAddress": p.address, "ERC721ImplementationAddress": p.address, "emitterImplementationAddress": p.address}),
    DeployRefundModule: event("0xedcf2ba86e86096d3a0305faafd1385377d2918339a47fc7357732f441d420e7", "DeployRefundModule(address,address,address,bytes32,address)", {"_refundModule": p.address, "_safe": p.address, "_daoAddress": p.address, "_merkleRoot": p.bytes32, "_refundToken": p.address}),
    Deposited: event("0x5d2a5415408fbcc4320e8e235c02da1c6c18b97ff78193cca359e4cb1d6a8d32", "Deposited(address,address,address,uint256,uint256,uint256,uint256)", {"_daoAddress": indexed(p.address), "_depositor": indexed(p.address), "_depositTokenAddress": indexed(p.address), "_amount": p.uint256, "_timeStamp": p.uint256, "_ownerFee": p.uint256, "_adminShare": p.uint256}),
    FactoryCreated: event("0xc6e085e79a1142a1bbc25acbc06faa675d87383e1affd09734496cab44fc250a", "FactoryCreated(address,address,address,address)", {"_ERC20Implementation": indexed(p.address), "_ERC721Implementation": indexed(p.address), "_factory": indexed(p.address), "_emitter": p.address}),
    Initialized: event("0x7f26b83ff96e1f2b6a682f133852f6798a09c465da95921460cefb3847402498", "Initialized(uint8)", {"version": p.uint8}),
    MintGTToAddress: event("0x41c54b44e7a188f57fc9fec7bc5a72b1d6d67394b4500f70b0d503d612bc00c9", "MintGTToAddress(address,uint256[],address[])", {"_daoAddress": indexed(p.address), "_amount": p.array(p.uint256), "_userAddress": p.array(p.address)}),
    MintNft: event("0x8bbd4ca29f6034674790d0975010f2d4b52ca7470c5840143ad5f1ea3dcb57cf", "MintNft(address,address,string,uint256)", {"_to": indexed(p.address), "_daoAddress": indexed(p.address), "_tokenURI": p.string, "_tokenId": p.uint256}),
    NewUser: event("0x74eeacf5d55e73c248a54e79f33a00303cef41aa31dafc91fbd774108590c4c5", "NewUser(address,address,address,uint256,uint256,uint256,bool)", {"_daoAddress": indexed(p.address), "_depositor": indexed(p.address), "_depositTokenAddress": indexed(p.address), "_depositTokenAmount": p.uint256, "_timeStamp": p.uint256, "_gtToken": p.uint256, "_isAdmin": p.bool}),
    NewUserCC: event("0x706876274b3cc94ab59fea7f7c0a26d283d85d202f4b3649f00e8412c5988817", "NewUserCC(address,address,address,uint256,uint256,uint256,bool)", {"_daoAddress": indexed(p.address), "_depositor": indexed(p.address), "_depositTokenAddress": indexed(p.address), "_depositTokenAmount": p.uint256, "_timeStamp": p.uint256, "_gtToken": p.uint256, "_isAdmin": p.bool}),
    RefundERC20DAO: event("0x2029efcd0730820cb3f3a18e5fe07c389fafad1c3c0f8b90d040e14e15a6a2de", "RefundERC20DAO(address,address,address,address,uint256,uint256)", {"_user": p.address, "_daoAddress": p.address, "_refundModule": p.address, "_transferToken": p.address, "_burnAmount": p.uint256, "_transferAmount": p.uint256}),
    RefundERC721DAO: event("0xcd50f263abb93315d7b94ed5fee415785f9f755335fcaaac20d43a3c15a2f447", "RefundERC721DAO(address,address,address,address,uint256[],uint256)", {"_user": p.address, "_daoAddress": p.address, "_refundModule": p.address, "_transferToken": p.address, "_tokenId": p.array(p.uint256), "_transferAmount": p.uint256}),
    RemoveWhitelistAddress: event("0x27271d21e479803300d1dc86efecf818294c1fe9dd06247ebfca01ec6f04a3c2", "RemoveWhitelistAddress(address,address)", {"_daoAddress": indexed(p.address), "_address": indexed(p.address)}),
    RoleAdminChanged: event("0xbd79b86ffe0ab8e8776151514217cd7cacd52c909f66475c3af44e129f0b00ff", "RoleAdminChanged(bytes32,bytes32,bytes32)", {"role": indexed(p.bytes32), "previousAdminRole": indexed(p.bytes32), "newAdminRole": indexed(p.bytes32)}),
    RoleGranted: event("0x2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d", "RoleGranted(bytes32,address,address)", {"role": indexed(p.bytes32), "account": indexed(p.address), "sender": indexed(p.address)}),
    RoleRevoked: event("0xf6391f5c32d9c69d2a47ea670b442974b53935d1edc7fd64eb21e047a839171b", "RoleRevoked(bytes32,address,address)", {"role": indexed(p.bytes32), "account": indexed(p.address), "sender": indexed(p.address)}),
    SendCustomToken: event("0x66c26647169ff2fbdd3ea348856804b5a9a502c0dbaa2f5ee011661f5806ba5c", "SendCustomToken(address,address,uint256[],address[])", {"_daoAddress": indexed(p.address), "_token": p.address, "_amount": p.array(p.uint256), "_addresses": p.array(p.address)}),
    StartDeposit: event("0xf6a745366306c106792812403faa5bcc987c70666cd1b23a257c012bacbc2fab", "StartDeposit(address,uint256,uint256)", {"_proxy": indexed(p.address), "startTime": p.uint256, "closeTime": p.uint256}),
    TransferGT: event("0xda3c33651f973afa9cad9fda9350623b78b4ab50efcc0c2ca6a4744b7d1b6fb1", "TransferGT(address,address,address,uint256)", {"_daoAddress": indexed(p.address), "_from": indexed(p.address), "_to": indexed(p.address), "_value": p.uint256}),
    UpdateDistributionAmount: event("0x193bb8b066bc48cc248e9ac4610fa7db77cb43f1751240ed2ae213e8eaf2e630", "UpdateDistributionAmount(address,uint256)", {"_daoAddress": indexed(p.address), "_amount": p.uint256}),
    UpdateGovernanceSettings: event("0xd762abc824e3fb207857fec10493cd750150e17dc806382156ee60fa9861939b", "UpdateGovernanceSettings(address,uint256,uint256)", {"_daoAddress": indexed(p.address), "_quorum": p.uint256, "_threshold": p.uint256}),
    UpdateMaxTokensPerUser: event("0x9ac7f329c8fdc54b591c6b107c27036e120f90ab6f7e7054d5ad8e1fb60dfb57", "UpdateMaxTokensPerUser(address,uint256)", {"_daoAddress": indexed(p.address), "_maxTokensPerUser": p.uint256}),
    UpdateMinMaxDeposit: event("0x4d8c61012a48664a6ca6e91518f46ca7a3cefddce00d623448b30d2aed6067a9", "UpdateMinMaxDeposit(address,uint256,uint256)", {"_proxy": indexed(p.address), "_minDeposit": p.uint256, "_maxDeposit": p.uint256}),
    UpdateOwnerFee: event("0x6e4abca5d2ebb3e14f8f2b0480dccb2261bfe5ce33110bfec9f3968b1d2f0917", "UpdateOwnerFee(address,uint256)", {"_proxy": indexed(p.address), "_ownerFee": p.uint256}),
    UpdatePricePerToken: event("0x5a0cfc177292d5507f9d349b537a04e177bece6f3fd42b42a0de58b968bac2a4", "UpdatePricePerToken(address,uint256)", {"_daoAddress": indexed(p.address), "_amount": p.uint256}),
    UpdateTokenTransferability: event("0x4e72ed0760c6626b6acaf8f79bc32c83df776a2caf817629199c3d368d1d3950", "UpdateTokenTransferability(address,bool)", {"_daoAddress": indexed(p.address), "_isTokenTransferable": p.bool}),
    UpdateTotalSupplyOfToken: event("0x8d5f0841716a3b1ce342cfbc73afec999d3b0e2073aad97929446cd97ec3a6d5", "UpdateTotalSupplyOfToken(address,uint256)", {"_daoAddress": indexed(p.address), "_totalSupplyOfToken": p.uint256}),
    WhitelistAddress: event("0x33eaee542d5ebc2e26e8c63bf79e709a63784f13b73ad119e627d1e862e3730d", "WhitelistAddress(address,address)", {"_daoAddress": indexed(p.address), "_address": indexed(p.address)}),
}

export const functions = {
    DEFAULT_ADMIN_ROLE: viewFun("0xa217fddf", "DEFAULT_ADMIN_ROLE()", {}, p.bytes32),
    EMITTER: viewFun("0x3c321228", "EMITTER()", {}, p.bytes32),
    FACTORY: viewFun("0x2dd31000", "FACTORY()", {}, p.bytes32),
    airDropToken: fun("0x69393be3", "airDropToken(address,address,address,uint256)", {"_proxy": p.address, "_token": p.address, "_to": p.address, "_amount": p.uint256}, ),
    allowActionContract: fun("0x48e21cc1", "allowActionContract(address)", {"_actionContract": p.address}, ),
    changeFactory: fun("0x11c6e741", "changeFactory(address)", {"_newFactory": p.address}, ),
    changeMerkleRoot: fun("0xe1e19733", "changeMerkleRoot(address,address,bytes32)", {"factory": p.address, "daoAddress": p.address, "newMerkleRoot": p.bytes32}, ),
    changeRefundModuleMerkleRoot: fun("0x2ea02434", "changeRefundModuleMerkleRoot(address,address,bytes32)", {"_refundModule": p.address, "_daoAddress": p.address, "newMerkleRoot": p.bytes32}, ),
    changedSigners: fun("0x831fb55e", "changedSigners(address,address,bool)", {"_dao": p.address, "_signer": p.address, "_isAdded": p.bool}, ),
    closeDeposit: fun("0xca9b5e39", "closeDeposit(address,uint256)", {"_proxy": p.address, "_closeTime": p.uint256}, ),
    createCCDao: fun("0xc44d2773", "createCCDao(address,uint256[])", {"_dao": p.address, "_chainIds": p.array(p.uint256)}, ),
    createDaoErc20: fun("0xa1049af6", "createDaoErc20(address,address,string,string,uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256,address,address,address,address,bool,bool,bool)", {"_deployerAddress": p.address, "_proxy": p.address, "_name": p.string, "_symbol": p.string, "_distributionAmount": p.uint256, "_pricePerToken": p.uint256, "_minDeposit": p.uint256, "_maxDeposit": p.uint256, "_ownerFee": p.uint256, "_totalDays": p.uint256, "_quorum": p.uint256, "_threshold": p.uint256, "_depositTokenAddress": p.address, "_emitter": p.address, "_gnosisAddress": p.address, "lzImpl": p.address, "_isGovernanceActive": p.bool, "isTransferable": p.bool, "assetsStoredOnGnosis": p.bool}, ),
    createDaoErc721: fun("0x0b085e6c", "createDaoErc721(address,address,string,string,string,uint256,uint256,uint256,uint256,uint256,uint256,uint256,address,address,address,address,bool,bool,bool)", {"_deployerAddress": p.address, "_proxy": p.address, "_name": p.string, "_symbol": p.string, "_tokenURI": p.string, "_pricePerToken": p.uint256, "_distributionAmount": p.uint256, "_maxTokensPerUser": p.uint256, "_ownerFee": p.uint256, "_totalDays": p.uint256, "_quorum": p.uint256, "_threshold": p.uint256, "_depositTokenAddress": p.address, "_emitter": p.address, "_gnosisAddress": p.address, "lzImpl": p.address, "_isGovernanceActive": p.bool, "isTransferable": p.bool, "assetsStoredOnGnosis": p.bool}, ),
    defineContracts: fun("0x1303dbd5", "defineContracts(address,address,address)", {"ERC20ImplementationAddress": p.address, "ERC721ImplementationAddress": p.address, "emitterImplementationAddress": p.address}, ),
    deployRefundModule: fun("0xaf7c53c7", "deployRefundModule(address,address,address,bytes32,address)", {"_refundModule": p.address, "_safe": p.address, "_dao": p.address, "_merkleRoot": p.bytes32, "_refundToken": p.address}, ),
    deposited: fun("0x903369bb", "deposited(address,address,address,uint256,uint256,uint256,uint256)", {"_daoAddress": p.address, "_depositor": p.address, "_depositTokenAddress": p.address, "_amount": p.uint256, "_timestamp": p.uint256, "_ownerFee": p.uint256, "_adminShare": p.uint256}, ),
    factoryAddress: viewFun("0x966dae0e", "factoryAddress()", {}, p.address),
    getRoleAdmin: viewFun("0x248a9ca3", "getRoleAdmin(bytes32)", {"role": p.bytes32}, p.bytes32),
    grantRole: fun("0x2f2ff15d", "grantRole(bytes32,address)", {"role": p.bytes32, "account": p.address}, ),
    hasRole: viewFun("0x91d14854", "hasRole(bytes32,address)", {"role": p.bytes32, "account": p.address}, p.bool),
    initialize: fun("0xc0c53b8b", "initialize(address,address,address)", {"_ERC20Implementation": p.address, "_ERC721Implementation": p.address, "_factory": p.address}, ),
    mintGTToAddress: fun("0xb9d39705", "mintGTToAddress(address,uint256[],address[])", {"_proxy": p.address, "_amount": p.array(p.uint256), "_userAddress": p.array(p.address)}, ),
    mintNft: fun("0x7cdb30bd", "mintNft(address,address,string,uint256)", {"_to": p.address, "_implementation": p.address, "_tokenURI": p.string, "_tokenId": p.uint256}, ),
    newUser: fun("0x7c28875f", "newUser(address,address,address,uint256,uint256,uint256,bool)", {"_daoAddress": p.address, "_depositor": p.address, "_depositTokenAddress": p.address, "_depositTokenAmount": p.uint256, "_timeStamp": p.uint256, "_gtToken": p.uint256, "_isAdmin": p.bool}, ),
    newUserCC: fun("0x3f0c88a3", "newUserCC(address,address,address,uint256,uint256,uint256,bool)", {"_daoAddress": p.address, "_depositor": p.address, "_depositTokenAddress": p.address, "_depositTokenAmount": p.uint256, "_timeStamp": p.uint256, "_gtToken": p.uint256, "_isAdmin": p.bool}, ),
    refundERC20DAO: fun("0x4bb772c8", "refundERC20DAO(address,address,address,address,uint256,uint256)", {"_user": p.address, "_dao": p.address, "_refundModule": p.address, "_transferToken": p.address, "_burnAmount": p.uint256, "_transferAmount": p.uint256}, ),
    refundERC721DAO: fun("0xb6b2d4cb", "refundERC721DAO(address,address,address,address,uint256[],uint256)", {"_user": p.address, "_dao": p.address, "_refundModule": p.address, "_transferToken": p.address, "_tokenIds": p.array(p.uint256), "_transferAmount": p.uint256}, ),
    removeWhitelistAddress: fun("0xad1d31ae", "removeWhitelistAddress(address,address)", {"_nftAddress": p.address, "_address": p.address}, ),
    renounceRole: fun("0x36568abe", "renounceRole(bytes32,address)", {"role": p.bytes32, "account": p.address}, ),
    revokeRole: fun("0xd547741f", "revokeRole(bytes32,address)", {"role": p.bytes32, "account": p.address}, ),
    sendCustomToken: fun("0xa2ee8583", "sendCustomToken(address,address,uint256[],address[])", {"_daoAddress": p.address, "_token": p.address, "_amount": p.array(p.uint256), "_addresses": p.array(p.address)}, ),
    startDeposit: fun("0x6bdf6e6c", "startDeposit(address,uint256,uint256)", {"_proxy": p.address, "_startTime": p.uint256, "_closeTime": p.uint256}, ),
    supportsInterface: viewFun("0x01ffc9a7", "supportsInterface(bytes4)", {"interfaceId": p.bytes4}, p.bool),
    transferGT: fun("0xdebfa063", "transferGT(address,address,address,uint256)", {"_dao": p.address, "_from": p.address, "_to": p.address, "_value": p.uint256}, ),
    updateDistributionAmount: fun("0x2fef82f5", "updateDistributionAmount(address,uint256)", {"_daoAddress": p.address, "_distributionAmount": p.uint256}, ),
    updateGovernanceSettings: fun("0x6ff827b8", "updateGovernanceSettings(address,uint256,uint256)", {"_proxy": p.address, "_quorum": p.uint256, "_threshold": p.uint256}, ),
    updateMaxTokensPerUser: fun("0xd1d3d4f1", "updateMaxTokensPerUser(address,uint256)", {"_nftAddress": p.address, "_maxTokensPerUser": p.uint256}, ),
    updateMinMaxDeposit: fun("0x07713fed", "updateMinMaxDeposit(address,uint256,uint256)", {"_proxy": p.address, "_minDeposit": p.uint256, "_maxDeposit": p.uint256}, ),
    updateOwnerFee: fun("0x7944ad53", "updateOwnerFee(address,uint256)", {"_proxy": p.address, "_ownerFee": p.uint256}, ),
    updatePricePerToken: fun("0x24f1aca4", "updatePricePerToken(address,uint256)", {"_daoAddress": p.address, "_pricePerToken": p.uint256}, ),
    updateTokenTransferability: fun("0x2268213c", "updateTokenTransferability(address,bool)", {"_nftAddress": p.address, "_isTokenTransferable": p.bool}, ),
    updateTotalSupplyOfToken: fun("0x23850a60", "updateTotalSupplyOfToken(address,uint256)", {"_nftAddress": p.address, "_totalSupplyOfToken": p.uint256}, ),
    whitelistAddress: fun("0x5f75b5ef", "whitelistAddress(address,address)", {"_nftAddress": p.address, "_address": p.address}, ),
}

export class Contract extends ContractBase {

    DEFAULT_ADMIN_ROLE() {
        return this.eth_call(functions.DEFAULT_ADMIN_ROLE, {})
    }

    EMITTER() {
        return this.eth_call(functions.EMITTER, {})
    }

    FACTORY() {
        return this.eth_call(functions.FACTORY, {})
    }

    factoryAddress() {
        return this.eth_call(functions.factoryAddress, {})
    }

    getRoleAdmin(role: GetRoleAdminParams["role"]) {
        return this.eth_call(functions.getRoleAdmin, {role})
    }

    hasRole(role: HasRoleParams["role"], account: HasRoleParams["account"]) {
        return this.eth_call(functions.hasRole, {role, account})
    }

    supportsInterface(interfaceId: SupportsInterfaceParams["interfaceId"]) {
        return this.eth_call(functions.supportsInterface, {interfaceId})
    }
}

/// Event types
export type AirDropTokenEventArgs = EParams<typeof events.AirDropToken>
export type ChangeMerkleRootEventArgs = EParams<typeof events.ChangeMerkleRoot>
export type ChangeRefundModuleMerkleRootEventArgs = EParams<typeof events.ChangeRefundModuleMerkleRoot>
export type ChangedSignersEventArgs = EParams<typeof events.ChangedSigners>
export type CloseDepositEventArgs = EParams<typeof events.CloseDeposit>
export type CreateCCDAOEventArgs = EParams<typeof events.CreateCCDAO>
export type CreateDaoErc20EventArgs = EParams<typeof events.CreateDaoErc20>
export type CreateDaoErc721EventArgs = EParams<typeof events.CreateDaoErc721>
export type DefineContractsEventArgs = EParams<typeof events.DefineContracts>
export type DeployRefundModuleEventArgs = EParams<typeof events.DeployRefundModule>
export type DepositedEventArgs = EParams<typeof events.Deposited>
export type FactoryCreatedEventArgs = EParams<typeof events.FactoryCreated>
export type InitializedEventArgs = EParams<typeof events.Initialized>
export type MintGTToAddressEventArgs = EParams<typeof events.MintGTToAddress>
export type MintNftEventArgs = EParams<typeof events.MintNft>
export type NewUserEventArgs = EParams<typeof events.NewUser>
export type NewUserCCEventArgs = EParams<typeof events.NewUserCC>
export type RefundERC20DAOEventArgs = EParams<typeof events.RefundERC20DAO>
export type RefundERC721DAOEventArgs = EParams<typeof events.RefundERC721DAO>
export type RemoveWhitelistAddressEventArgs = EParams<typeof events.RemoveWhitelistAddress>
export type RoleAdminChangedEventArgs = EParams<typeof events.RoleAdminChanged>
export type RoleGrantedEventArgs = EParams<typeof events.RoleGranted>
export type RoleRevokedEventArgs = EParams<typeof events.RoleRevoked>
export type SendCustomTokenEventArgs = EParams<typeof events.SendCustomToken>
export type StartDepositEventArgs = EParams<typeof events.StartDeposit>
export type TransferGTEventArgs = EParams<typeof events.TransferGT>
export type UpdateDistributionAmountEventArgs = EParams<typeof events.UpdateDistributionAmount>
export type UpdateGovernanceSettingsEventArgs = EParams<typeof events.UpdateGovernanceSettings>
export type UpdateMaxTokensPerUserEventArgs = EParams<typeof events.UpdateMaxTokensPerUser>
export type UpdateMinMaxDepositEventArgs = EParams<typeof events.UpdateMinMaxDeposit>
export type UpdateOwnerFeeEventArgs = EParams<typeof events.UpdateOwnerFee>
export type UpdatePricePerTokenEventArgs = EParams<typeof events.UpdatePricePerToken>
export type UpdateTokenTransferabilityEventArgs = EParams<typeof events.UpdateTokenTransferability>
export type UpdateTotalSupplyOfTokenEventArgs = EParams<typeof events.UpdateTotalSupplyOfToken>
export type WhitelistAddressEventArgs = EParams<typeof events.WhitelistAddress>

/// Function types
export type DEFAULT_ADMIN_ROLEParams = FunctionArguments<typeof functions.DEFAULT_ADMIN_ROLE>
export type DEFAULT_ADMIN_ROLEReturn = FunctionReturn<typeof functions.DEFAULT_ADMIN_ROLE>

export type EMITTERParams = FunctionArguments<typeof functions.EMITTER>
export type EMITTERReturn = FunctionReturn<typeof functions.EMITTER>

export type FACTORYParams = FunctionArguments<typeof functions.FACTORY>
export type FACTORYReturn = FunctionReturn<typeof functions.FACTORY>

export type AirDropTokenParams = FunctionArguments<typeof functions.airDropToken>
export type AirDropTokenReturn = FunctionReturn<typeof functions.airDropToken>

export type AllowActionContractParams = FunctionArguments<typeof functions.allowActionContract>
export type AllowActionContractReturn = FunctionReturn<typeof functions.allowActionContract>

export type ChangeFactoryParams = FunctionArguments<typeof functions.changeFactory>
export type ChangeFactoryReturn = FunctionReturn<typeof functions.changeFactory>

export type ChangeMerkleRootParams = FunctionArguments<typeof functions.changeMerkleRoot>
export type ChangeMerkleRootReturn = FunctionReturn<typeof functions.changeMerkleRoot>

export type ChangeRefundModuleMerkleRootParams = FunctionArguments<typeof functions.changeRefundModuleMerkleRoot>
export type ChangeRefundModuleMerkleRootReturn = FunctionReturn<typeof functions.changeRefundModuleMerkleRoot>

export type ChangedSignersParams = FunctionArguments<typeof functions.changedSigners>
export type ChangedSignersReturn = FunctionReturn<typeof functions.changedSigners>

export type CloseDepositParams = FunctionArguments<typeof functions.closeDeposit>
export type CloseDepositReturn = FunctionReturn<typeof functions.closeDeposit>

export type CreateCCDaoParams = FunctionArguments<typeof functions.createCCDao>
export type CreateCCDaoReturn = FunctionReturn<typeof functions.createCCDao>

export type CreateDaoErc20Params = FunctionArguments<typeof functions.createDaoErc20>
export type CreateDaoErc20Return = FunctionReturn<typeof functions.createDaoErc20>

export type CreateDaoErc721Params = FunctionArguments<typeof functions.createDaoErc721>
export type CreateDaoErc721Return = FunctionReturn<typeof functions.createDaoErc721>

export type DefineContractsParams = FunctionArguments<typeof functions.defineContracts>
export type DefineContractsReturn = FunctionReturn<typeof functions.defineContracts>

export type DeployRefundModuleParams = FunctionArguments<typeof functions.deployRefundModule>
export type DeployRefundModuleReturn = FunctionReturn<typeof functions.deployRefundModule>

export type DepositedParams = FunctionArguments<typeof functions.deposited>
export type DepositedReturn = FunctionReturn<typeof functions.deposited>

export type FactoryAddressParams = FunctionArguments<typeof functions.factoryAddress>
export type FactoryAddressReturn = FunctionReturn<typeof functions.factoryAddress>

export type GetRoleAdminParams = FunctionArguments<typeof functions.getRoleAdmin>
export type GetRoleAdminReturn = FunctionReturn<typeof functions.getRoleAdmin>

export type GrantRoleParams = FunctionArguments<typeof functions.grantRole>
export type GrantRoleReturn = FunctionReturn<typeof functions.grantRole>

export type HasRoleParams = FunctionArguments<typeof functions.hasRole>
export type HasRoleReturn = FunctionReturn<typeof functions.hasRole>

export type InitializeParams = FunctionArguments<typeof functions.initialize>
export type InitializeReturn = FunctionReturn<typeof functions.initialize>

export type MintGTToAddressParams = FunctionArguments<typeof functions.mintGTToAddress>
export type MintGTToAddressReturn = FunctionReturn<typeof functions.mintGTToAddress>

export type MintNftParams = FunctionArguments<typeof functions.mintNft>
export type MintNftReturn = FunctionReturn<typeof functions.mintNft>

export type NewUserParams = FunctionArguments<typeof functions.newUser>
export type NewUserReturn = FunctionReturn<typeof functions.newUser>

export type NewUserCCParams = FunctionArguments<typeof functions.newUserCC>
export type NewUserCCReturn = FunctionReturn<typeof functions.newUserCC>

export type RefundERC20DAOParams = FunctionArguments<typeof functions.refundERC20DAO>
export type RefundERC20DAOReturn = FunctionReturn<typeof functions.refundERC20DAO>

export type RefundERC721DAOParams = FunctionArguments<typeof functions.refundERC721DAO>
export type RefundERC721DAOReturn = FunctionReturn<typeof functions.refundERC721DAO>

export type RemoveWhitelistAddressParams = FunctionArguments<typeof functions.removeWhitelistAddress>
export type RemoveWhitelistAddressReturn = FunctionReturn<typeof functions.removeWhitelistAddress>

export type RenounceRoleParams = FunctionArguments<typeof functions.renounceRole>
export type RenounceRoleReturn = FunctionReturn<typeof functions.renounceRole>

export type RevokeRoleParams = FunctionArguments<typeof functions.revokeRole>
export type RevokeRoleReturn = FunctionReturn<typeof functions.revokeRole>

export type SendCustomTokenParams = FunctionArguments<typeof functions.sendCustomToken>
export type SendCustomTokenReturn = FunctionReturn<typeof functions.sendCustomToken>

export type StartDepositParams = FunctionArguments<typeof functions.startDeposit>
export type StartDepositReturn = FunctionReturn<typeof functions.startDeposit>

export type SupportsInterfaceParams = FunctionArguments<typeof functions.supportsInterface>
export type SupportsInterfaceReturn = FunctionReturn<typeof functions.supportsInterface>

export type TransferGTParams = FunctionArguments<typeof functions.transferGT>
export type TransferGTReturn = FunctionReturn<typeof functions.transferGT>

export type UpdateDistributionAmountParams = FunctionArguments<typeof functions.updateDistributionAmount>
export type UpdateDistributionAmountReturn = FunctionReturn<typeof functions.updateDistributionAmount>

export type UpdateGovernanceSettingsParams = FunctionArguments<typeof functions.updateGovernanceSettings>
export type UpdateGovernanceSettingsReturn = FunctionReturn<typeof functions.updateGovernanceSettings>

export type UpdateMaxTokensPerUserParams = FunctionArguments<typeof functions.updateMaxTokensPerUser>
export type UpdateMaxTokensPerUserReturn = FunctionReturn<typeof functions.updateMaxTokensPerUser>

export type UpdateMinMaxDepositParams = FunctionArguments<typeof functions.updateMinMaxDeposit>
export type UpdateMinMaxDepositReturn = FunctionReturn<typeof functions.updateMinMaxDeposit>

export type UpdateOwnerFeeParams = FunctionArguments<typeof functions.updateOwnerFee>
export type UpdateOwnerFeeReturn = FunctionReturn<typeof functions.updateOwnerFee>

export type UpdatePricePerTokenParams = FunctionArguments<typeof functions.updatePricePerToken>
export type UpdatePricePerTokenReturn = FunctionReturn<typeof functions.updatePricePerToken>

export type UpdateTokenTransferabilityParams = FunctionArguments<typeof functions.updateTokenTransferability>
export type UpdateTokenTransferabilityReturn = FunctionReturn<typeof functions.updateTokenTransferability>

export type UpdateTotalSupplyOfTokenParams = FunctionArguments<typeof functions.updateTotalSupplyOfToken>
export type UpdateTotalSupplyOfTokenReturn = FunctionReturn<typeof functions.updateTotalSupplyOfToken>

export type WhitelistAddressParams = FunctionArguments<typeof functions.whitelistAddress>
export type WhitelistAddressReturn = FunctionReturn<typeof functions.whitelistAddress>

