import * as p from '@subsquid/evm-codec'
import { event, fun, viewFun, indexed, ContractBase } from '@subsquid/evm-abi'
import type { EventParams as EParams, FunctionArguments, FunctionReturn } from '@subsquid/evm-abi'

export const events = {
    Initialized: event("0x7f26b83ff96e1f2b6a682f133852f6798a09c465da95921460cefb3847402498", "Initialized(uint8)", {"version": p.uint8}),
    XmasSRC_minted: event("0xb3ff6afdb6d6ba39e2bff0cf036d57a951a2e2609114f4fdaca4967a593bfd62", "XmasSRC_minted(address,uint256)", {"recipient": indexed(p.address), "quantity": p.uint256}),
}

export const functions = {
    BASE_REGISTRATION_DURATION: viewFun("0x73402cb4", "BASE_REGISTRATION_DURATION()", {}, p.uint64),
    CHAIN_ID: viewFun("0x85e1f4d0", "CHAIN_ID()", {}, p.uint64),
    DOMAIN_NAME: viewFun("0x796f077b", "DOMAIN_NAME()", {}, p.string),
    DOMAIN_SEPARATOR: viewFun("0x3644e515", "DOMAIN_SEPARATOR()", {}, p.bytes32),
    DOMAIN_VERSION: viewFun("0xacb8cc49", "DOMAIN_VERSION()", {}, p.string),
    ETH_ADDRESS: viewFun("0xa734f06e", "ETH_ADDRESS()", {}, p.address),
    MINT_SELECTOR: viewFun("0x544fe464", "MINT_SELECTOR()", {}, p.bytes4),
    MULTICALL_SELECTOR: viewFun("0x76cb1dc5", "MULTICALL_SELECTOR()", {}, p.bytes4),
    NODE: viewFun("0x51bfcdbd", "NODE()", {}, p.bytes32),
    'Permit2Approval(address,address,uint256,uint256,bytes)': fun("0x087ffac9", "Permit2Approval(address,address,uint256,uint256,bytes)", {"token_": p.address, "from_": p.address, "amount_": p.uint256, "deadline_": p.uint256, "permitSig_": p.bytes}, ),
    'Permit2Approval(uint8,address,uint256,uint256,bytes)': fun("0x300d60a4", "Permit2Approval(uint8,address,uint256,uint256,bytes)", {"paymentType_": p.uint8, "from_": p.address, "amount_": p.uint256, "deadline_": p.uint256, "permitSig_": p.bytes}, ),
    SP2A_SELECTOR: viewFun("0x66195f17", "SP2A_SELECTOR()", {}, p.bytes4),
    'SponsorPermit2Approval(address,address,address,uint256,uint256,uint256,bytes)': fun("0x7ba6e194", "SponsorPermit2Approval(address,address,address,uint256,uint256,uint256,bytes)", {"token_": p.address, "from_": p.address, "sponsor_": p.address, "permitAmount_": p.uint256, "permitFee_": p.uint256, "deadline_": p.uint256, "permitSig_": p.bytes}, ),
    'SponsorPermit2Approval(uint8,address,address,uint256,uint256,uint256,bytes)': fun("0xf882e7a0", "SponsorPermit2Approval(uint8,address,address,uint256,uint256,uint256,bytes)", {"paymentType_": p.uint8, "from_": p.address, "sponsor_": p.address, "permitAmount_": p.uint256, "permitFee_": p.uint256, "deadline_": p.uint256, "permitSig_": p.bytes}, ),
    THREE_DNS_REGCONTROL: viewFun("0xae8aee8e", "THREE_DNS_REGCONTROL()", {}, p.address),
    TYPED_DATA_SIGNATURE_TYPEHASH: viewFun("0x1cba66f0", "TYPED_DATA_SIGNATURE_TYPEHASH()", {}, p.bytes32),
    addSet: fun("0xc69cf9a5", "addSet(string[])", {"names_": p.array(p.string)}, ),
    getActionPremium: viewFun("0x72ca8b2c", "getActionPremium(bytes32,string,uint8)", {"node_": p.bytes32, "label_": p.string, "action_": p.uint8}, p.struct({"paymentType": p.uint8, "amount": p.uint248})),
    getDomainSeparator: viewFun("0xed24911d", "getDomainSeparator()", {}, p.bytes32),
    getLabelCount: viewFun("0xb1ae65a5", "getLabelCount()", {}, p.uint256),
    getPayoutAddress: viewFun("0x061f67e8", "getPayoutAddress(bytes32)", {"node_": p.bytes32}, p.address),
    getQuote: viewFun("0x94e4823d", "getQuote(uint256,uint8)", {"quantity": p.uint256, "paymentType_": p.uint8}, p.struct({"paymentType": p.uint8, "amount": p.uint248})),
    getRegistrationQuote: viewFun("0x23d2faa6", "getRegistrationQuote(bytes32,uint256,uint8)", {"node_": p.bytes32, "desiredDuration_": p.uint256, "paymentType_": p.uint8}, {"quoteDuration": p.uint256, "quote": p.struct({"paymentType": p.uint8, "amount": p.uint248})}),
    getSubdomainQuote: viewFun("0xda3675ab", "getSubdomainQuote(bytes32,string,uint256,uint8)", {"node_": p.bytes32, "label_": p.string, "desiredDuration_": p.uint256, "paymentType_": p.uint8}, {"currentStatus_": p.uint8, "nextAction_": p.uint8, "quoteDuration_": p.uint256, "quote_": p.struct({"paymentType": p.uint8, "amount": p.uint248})}),
    getSubscriptionConfig: viewFun("0x2d1f30f7", "getSubscriptionConfig(bytes32)", {"node_": p.bytes32}, p.struct({"paymentType": p.uint8, "decayRate": p.uint32, "decayAmount": p.uint32, "allowPartialPeriod": p.bool, "minimumPeriod": p.uint64, "maximumPeriod": p.uint64, "idlePeriodAllowance": p.uint32})),
    hasClaimedVoucher: viewFun("0x916d7d7c", "hasClaimedVoucher(address)", {"recipient_": p.address}, p.bool),
    initialize: fun("0x13964079", "initialize(string,string,((uint8,address)[],(uint8,address,uint8)[],address),(uint8,uint32,uint32,bool,uint64,uint64,uint32))", {"domainName_": p.string, "domainVersion_": p.string, "payments_": p.struct({"methods": p.array(p.struct({"paymentType": p.uint8, "tokenAddress": p.address})), "feeds": p.array(p.struct({"feedType": p.uint8, "feedAddress": p.address, "paymentType": p.uint8})), "chainLinkL2SequencerUptimeFeed": p.address}), "config_": p.struct({"paymentType": p.uint8, "decayRate": p.uint32, "decayAmount": p.uint32, "allowPartialPeriod": p.bool, "minimumPeriod": p.uint64, "maximumPeriod": p.uint64, "idlePeriodAllowance": p.uint32})}, ),
    isRestrictedLabel: viewFun("0xfc21bc8b", "isRestrictedLabel(bytes32,bytes32)", {"node_": p.bytes32, "labelHash_": p.bytes32}, p.bool),
    isValidDuration: viewFun("0x52f7b2d9", "isValidDuration(bytes32,uint256)", {"node_": p.bytes32, "duration_": p.uint256}, p.bool),
    isValidLabel: viewFun("0x7759bd3e", "isValidLabel(bytes32,string)", {"node_": p.bytes32, "label_": p.string}, p.bool),
    isValidMinter: viewFun("0x287da275", "isValidMinter(bytes32,address)", {"node_": p.bytes32, "minter_": p.address}, p.bool),
    'mint(uint256,address,bytes)': fun("0x73c02519", "mint(uint256,address,bytes)", {"quantity_": p.uint256, "recipient_": p.address, "permit_": p.bytes}, ),
    'mint(uint256,address)': fun("0x94bf804d", "mint(uint256,address)", {"quantity_": p.uint256, "recipient_": p.address}, ),
    'mint(uint256)': fun("0xa0712d68", "mint(uint256)", {"quantity_": p.uint256}, ),
    mintPromotional: fun("0xe00c78fb", "mintPromotional(address,(uint8,uint248),((uint8,bytes32,bytes32),uint64,uint64),bytes)", {"recipient_": p.address, "discount_": p.struct({"paymentType": p.uint8, "amount": p.uint248}), "auth_": p.struct({"signature": p.struct({"v": p.uint8, "r": p.bytes32, "s": p.bytes32}), "issuedAt": p.uint64, "expiresAt": p.uint64}), "permit_": p.bytes}, ),
    multicall: fun("0xac9650d8", "multicall(bytes[])", {"data": p.array(p.bytes)}, p.array(p.bytes)),
    readPriceFromFeed: viewFun("0xe1b60ed2", "readPriceFromFeed(address,address)", {"dataFeed_": p.address, "sequencerUptimeFeed_": p.address}, {"_0": p.int256, "_1": p.uint8}),
    setPayoutAddress: fun("0x59950726", "setPayoutAddress(bytes32,address)", {"node_": p.bytes32, "payoutAddress_": p.address}, ),
    setSubscriptionConfig: fun("0x18d4a0a7", "setSubscriptionConfig(bytes32,(uint8,uint32,uint32,bool,uint64,uint64,uint32))", {"node_": p.bytes32, "config_": p.struct({"paymentType": p.uint8, "decayRate": p.uint32, "decayAmount": p.uint32, "allowPartialPeriod": p.bool, "minimumPeriod": p.uint64, "maximumPeriod": p.uint64, "idlePeriodAllowance": p.uint32})}, ),
    signatureType: viewFun("0xdb6f0281", "signatureType()", {}, p.string),
    withdraw: fun("0x3ccfd60b", "withdraw()", {}, ),
}

export class Contract extends ContractBase {

    BASE_REGISTRATION_DURATION() {
        return this.eth_call(functions.BASE_REGISTRATION_DURATION, {})
    }

    CHAIN_ID() {
        return this.eth_call(functions.CHAIN_ID, {})
    }

    DOMAIN_NAME() {
        return this.eth_call(functions.DOMAIN_NAME, {})
    }

    DOMAIN_SEPARATOR() {
        return this.eth_call(functions.DOMAIN_SEPARATOR, {})
    }

    DOMAIN_VERSION() {
        return this.eth_call(functions.DOMAIN_VERSION, {})
    }

    ETH_ADDRESS() {
        return this.eth_call(functions.ETH_ADDRESS, {})
    }

    MINT_SELECTOR() {
        return this.eth_call(functions.MINT_SELECTOR, {})
    }

    MULTICALL_SELECTOR() {
        return this.eth_call(functions.MULTICALL_SELECTOR, {})
    }

    NODE() {
        return this.eth_call(functions.NODE, {})
    }

    SP2A_SELECTOR() {
        return this.eth_call(functions.SP2A_SELECTOR, {})
    }

    THREE_DNS_REGCONTROL() {
        return this.eth_call(functions.THREE_DNS_REGCONTROL, {})
    }

    TYPED_DATA_SIGNATURE_TYPEHASH() {
        return this.eth_call(functions.TYPED_DATA_SIGNATURE_TYPEHASH, {})
    }

    getActionPremium(node_: GetActionPremiumParams["node_"], label_: GetActionPremiumParams["label_"], action_: GetActionPremiumParams["action_"]) {
        return this.eth_call(functions.getActionPremium, {node_, label_, action_})
    }

    getDomainSeparator() {
        return this.eth_call(functions.getDomainSeparator, {})
    }

    getLabelCount() {
        return this.eth_call(functions.getLabelCount, {})
    }

    getPayoutAddress(node_: GetPayoutAddressParams["node_"]) {
        return this.eth_call(functions.getPayoutAddress, {node_})
    }

    getQuote(quantity: GetQuoteParams["quantity"], paymentType_: GetQuoteParams["paymentType_"]) {
        return this.eth_call(functions.getQuote, {quantity, paymentType_})
    }

    getRegistrationQuote(node_: GetRegistrationQuoteParams["node_"], desiredDuration_: GetRegistrationQuoteParams["desiredDuration_"], paymentType_: GetRegistrationQuoteParams["paymentType_"]) {
        return this.eth_call(functions.getRegistrationQuote, {node_, desiredDuration_, paymentType_})
    }

    getSubdomainQuote(node_: GetSubdomainQuoteParams["node_"], label_: GetSubdomainQuoteParams["label_"], desiredDuration_: GetSubdomainQuoteParams["desiredDuration_"], paymentType_: GetSubdomainQuoteParams["paymentType_"]) {
        return this.eth_call(functions.getSubdomainQuote, {node_, label_, desiredDuration_, paymentType_})
    }

    getSubscriptionConfig(node_: GetSubscriptionConfigParams["node_"]) {
        return this.eth_call(functions.getSubscriptionConfig, {node_})
    }

    hasClaimedVoucher(recipient_: HasClaimedVoucherParams["recipient_"]) {
        return this.eth_call(functions.hasClaimedVoucher, {recipient_})
    }

    isRestrictedLabel(node_: IsRestrictedLabelParams["node_"], labelHash_: IsRestrictedLabelParams["labelHash_"]) {
        return this.eth_call(functions.isRestrictedLabel, {node_, labelHash_})
    }

    isValidDuration(node_: IsValidDurationParams["node_"], duration_: IsValidDurationParams["duration_"]) {
        return this.eth_call(functions.isValidDuration, {node_, duration_})
    }

    isValidLabel(node_: IsValidLabelParams["node_"], label_: IsValidLabelParams["label_"]) {
        return this.eth_call(functions.isValidLabel, {node_, label_})
    }

    isValidMinter(node_: IsValidMinterParams["node_"], minter_: IsValidMinterParams["minter_"]) {
        return this.eth_call(functions.isValidMinter, {node_, minter_})
    }

    readPriceFromFeed(dataFeed_: ReadPriceFromFeedParams["dataFeed_"], sequencerUptimeFeed_: ReadPriceFromFeedParams["sequencerUptimeFeed_"]) {
        return this.eth_call(functions.readPriceFromFeed, {dataFeed_, sequencerUptimeFeed_})
    }

    signatureType() {
        return this.eth_call(functions.signatureType, {})
    }
}

/// Event types
export type InitializedEventArgs = EParams<typeof events.Initialized>
export type XmasSRC_mintedEventArgs = EParams<typeof events.XmasSRC_minted>

/// Function types
export type BASE_REGISTRATION_DURATIONParams = FunctionArguments<typeof functions.BASE_REGISTRATION_DURATION>
export type BASE_REGISTRATION_DURATIONReturn = FunctionReturn<typeof functions.BASE_REGISTRATION_DURATION>

export type CHAIN_IDParams = FunctionArguments<typeof functions.CHAIN_ID>
export type CHAIN_IDReturn = FunctionReturn<typeof functions.CHAIN_ID>

export type DOMAIN_NAMEParams = FunctionArguments<typeof functions.DOMAIN_NAME>
export type DOMAIN_NAMEReturn = FunctionReturn<typeof functions.DOMAIN_NAME>

export type DOMAIN_SEPARATORParams = FunctionArguments<typeof functions.DOMAIN_SEPARATOR>
export type DOMAIN_SEPARATORReturn = FunctionReturn<typeof functions.DOMAIN_SEPARATOR>

export type DOMAIN_VERSIONParams = FunctionArguments<typeof functions.DOMAIN_VERSION>
export type DOMAIN_VERSIONReturn = FunctionReturn<typeof functions.DOMAIN_VERSION>

export type ETH_ADDRESSParams = FunctionArguments<typeof functions.ETH_ADDRESS>
export type ETH_ADDRESSReturn = FunctionReturn<typeof functions.ETH_ADDRESS>

export type MINT_SELECTORParams = FunctionArguments<typeof functions.MINT_SELECTOR>
export type MINT_SELECTORReturn = FunctionReturn<typeof functions.MINT_SELECTOR>

export type MULTICALL_SELECTORParams = FunctionArguments<typeof functions.MULTICALL_SELECTOR>
export type MULTICALL_SELECTORReturn = FunctionReturn<typeof functions.MULTICALL_SELECTOR>

export type NODEParams = FunctionArguments<typeof functions.NODE>
export type NODEReturn = FunctionReturn<typeof functions.NODE>

export type Permit2ApprovalParams_0 = FunctionArguments<typeof functions['Permit2Approval(address,address,uint256,uint256,bytes)']>
export type Permit2ApprovalReturn_0 = FunctionReturn<typeof functions['Permit2Approval(address,address,uint256,uint256,bytes)']>

export type Permit2ApprovalParams_1 = FunctionArguments<typeof functions['Permit2Approval(uint8,address,uint256,uint256,bytes)']>
export type Permit2ApprovalReturn_1 = FunctionReturn<typeof functions['Permit2Approval(uint8,address,uint256,uint256,bytes)']>

export type SP2A_SELECTORParams = FunctionArguments<typeof functions.SP2A_SELECTOR>
export type SP2A_SELECTORReturn = FunctionReturn<typeof functions.SP2A_SELECTOR>

export type SponsorPermit2ApprovalParams_0 = FunctionArguments<typeof functions['SponsorPermit2Approval(address,address,address,uint256,uint256,uint256,bytes)']>
export type SponsorPermit2ApprovalReturn_0 = FunctionReturn<typeof functions['SponsorPermit2Approval(address,address,address,uint256,uint256,uint256,bytes)']>

export type SponsorPermit2ApprovalParams_1 = FunctionArguments<typeof functions['SponsorPermit2Approval(uint8,address,address,uint256,uint256,uint256,bytes)']>
export type SponsorPermit2ApprovalReturn_1 = FunctionReturn<typeof functions['SponsorPermit2Approval(uint8,address,address,uint256,uint256,uint256,bytes)']>

export type THREE_DNS_REGCONTROLParams = FunctionArguments<typeof functions.THREE_DNS_REGCONTROL>
export type THREE_DNS_REGCONTROLReturn = FunctionReturn<typeof functions.THREE_DNS_REGCONTROL>

export type TYPED_DATA_SIGNATURE_TYPEHASHParams = FunctionArguments<typeof functions.TYPED_DATA_SIGNATURE_TYPEHASH>
export type TYPED_DATA_SIGNATURE_TYPEHASHReturn = FunctionReturn<typeof functions.TYPED_DATA_SIGNATURE_TYPEHASH>

export type AddSetParams = FunctionArguments<typeof functions.addSet>
export type AddSetReturn = FunctionReturn<typeof functions.addSet>

export type GetActionPremiumParams = FunctionArguments<typeof functions.getActionPremium>
export type GetActionPremiumReturn = FunctionReturn<typeof functions.getActionPremium>

export type GetDomainSeparatorParams = FunctionArguments<typeof functions.getDomainSeparator>
export type GetDomainSeparatorReturn = FunctionReturn<typeof functions.getDomainSeparator>

export type GetLabelCountParams = FunctionArguments<typeof functions.getLabelCount>
export type GetLabelCountReturn = FunctionReturn<typeof functions.getLabelCount>

export type GetPayoutAddressParams = FunctionArguments<typeof functions.getPayoutAddress>
export type GetPayoutAddressReturn = FunctionReturn<typeof functions.getPayoutAddress>

export type GetQuoteParams = FunctionArguments<typeof functions.getQuote>
export type GetQuoteReturn = FunctionReturn<typeof functions.getQuote>

export type GetRegistrationQuoteParams = FunctionArguments<typeof functions.getRegistrationQuote>
export type GetRegistrationQuoteReturn = FunctionReturn<typeof functions.getRegistrationQuote>

export type GetSubdomainQuoteParams = FunctionArguments<typeof functions.getSubdomainQuote>
export type GetSubdomainQuoteReturn = FunctionReturn<typeof functions.getSubdomainQuote>

export type GetSubscriptionConfigParams = FunctionArguments<typeof functions.getSubscriptionConfig>
export type GetSubscriptionConfigReturn = FunctionReturn<typeof functions.getSubscriptionConfig>

export type HasClaimedVoucherParams = FunctionArguments<typeof functions.hasClaimedVoucher>
export type HasClaimedVoucherReturn = FunctionReturn<typeof functions.hasClaimedVoucher>

export type InitializeParams = FunctionArguments<typeof functions.initialize>
export type InitializeReturn = FunctionReturn<typeof functions.initialize>

export type IsRestrictedLabelParams = FunctionArguments<typeof functions.isRestrictedLabel>
export type IsRestrictedLabelReturn = FunctionReturn<typeof functions.isRestrictedLabel>

export type IsValidDurationParams = FunctionArguments<typeof functions.isValidDuration>
export type IsValidDurationReturn = FunctionReturn<typeof functions.isValidDuration>

export type IsValidLabelParams = FunctionArguments<typeof functions.isValidLabel>
export type IsValidLabelReturn = FunctionReturn<typeof functions.isValidLabel>

export type IsValidMinterParams = FunctionArguments<typeof functions.isValidMinter>
export type IsValidMinterReturn = FunctionReturn<typeof functions.isValidMinter>

export type MintParams_0 = FunctionArguments<typeof functions['mint(uint256,address,bytes)']>
export type MintReturn_0 = FunctionReturn<typeof functions['mint(uint256,address,bytes)']>

export type MintParams_1 = FunctionArguments<typeof functions['mint(uint256,address)']>
export type MintReturn_1 = FunctionReturn<typeof functions['mint(uint256,address)']>

export type MintParams_2 = FunctionArguments<typeof functions['mint(uint256)']>
export type MintReturn_2 = FunctionReturn<typeof functions['mint(uint256)']>

export type MintPromotionalParams = FunctionArguments<typeof functions.mintPromotional>
export type MintPromotionalReturn = FunctionReturn<typeof functions.mintPromotional>

export type MulticallParams = FunctionArguments<typeof functions.multicall>
export type MulticallReturn = FunctionReturn<typeof functions.multicall>

export type ReadPriceFromFeedParams = FunctionArguments<typeof functions.readPriceFromFeed>
export type ReadPriceFromFeedReturn = FunctionReturn<typeof functions.readPriceFromFeed>

export type SetPayoutAddressParams = FunctionArguments<typeof functions.setPayoutAddress>
export type SetPayoutAddressReturn = FunctionReturn<typeof functions.setPayoutAddress>

export type SetSubscriptionConfigParams = FunctionArguments<typeof functions.setSubscriptionConfig>
export type SetSubscriptionConfigReturn = FunctionReturn<typeof functions.setSubscriptionConfig>

export type SignatureTypeParams = FunctionArguments<typeof functions.signatureType>
export type SignatureTypeReturn = FunctionReturn<typeof functions.signatureType>

export type WithdrawParams = FunctionArguments<typeof functions.withdraw>
export type WithdrawReturn = FunctionReturn<typeof functions.withdraw>

