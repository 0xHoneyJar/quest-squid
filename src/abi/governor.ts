import * as p from '@subsquid/evm-codec'
import { event, fun, viewFun, indexed, ContractBase } from '@subsquid/evm-abi'
import type { EventParams as EParams, FunctionArguments, FunctionReturn } from '@subsquid/evm-abi'

export const events = {
    CommentCreated: event("0x5a1a930fed43f34b3a07db782ebcac28a661c273e662bb98458cfba5a8ccd220", "CommentCreated(uint256)", {"commentId": p.uint256}),
    CommentsDeleted: event("0x788a4349d25bc08585923ae212bce8bb346a623bce753eeecb85fd9ce58dcb4b", "CommentsDeleted(uint256[])", {"commentIds": p.array(p.uint256)}),
    ContestCanceled: event("0x4cd963a081760a54f571abc0f1db4dde31b4a07d8d6da3e844b8c6f47eeaaa42", "ContestCanceled()", {}),
    CreatorPaymentReleased: event("0x6dff55337c8458ae8c536a63869a48bc33541733422a796390c131d91f4238ed", "CreatorPaymentReleased(address,uint256)", {"to": p.address, "amount": p.uint256}),
    JkLabsPaymentReleased: event("0x9df63d1c00d2e332f573be591c0579caafb256b2c5a17abcc8ad471cccda1b81", "JkLabsPaymentReleased(address,uint256)", {"to": p.address, "amount": p.uint256}),
    JokeraceCreated: event("0x9a9bca21e4e51607db64fbdbcd7b2284a909c6a8969821f0d161efbdcae70160", "JokeraceCreated(string,string,string,address,uint256,uint256,uint256)", {"version": p.string, "name": p.string, "prompt": p.string, "creator": p.address, "contestStart": p.uint256, "votingDelay": p.uint256, "votingPeriod": p.uint256}),
    OfficialRewardsModuleSet: event("0x753a2cf8d360cff631674504210913e48247f8e56b3e6d2006c2103d4095999f", "OfficialRewardsModuleSet(address,address)", {"oldOfficialRewardsModule": p.address, "newOfficialRewardsModule": p.address}),
    ProposalCreated: event("0x7585f467599d0f008985f231af99293be388626ac16ca59505c2f8f88969cd63", "ProposalCreated(uint256,address,string)", {"proposalId": p.uint256, "proposer": p.address, "proposalDescription": p.string}),
    ProposalsDeleted: event("0x75a75cf5c561892f4cc5b26c1b8e933849b42238c96dd073d080d1ae96c51416", "ProposalsDeleted(uint256[])", {"proposalIds": p.array(p.uint256)}),
    VoteCast: event("0x2c9deb38f462962eadbd85a9d3a4120503ee091f1582eaaa10aa8c6797651d29", "VoteCast(address,uint256,uint8,uint256)", {"voter": indexed(p.address), "proposalId": p.uint256, "support": p.uint8, "numVotes": p.uint256}),
}

export const functions = {
    AMOUNT_FOR_SUMBITTER_PROOF: viewFun("0x347cf665", "AMOUNT_FOR_SUMBITTER_PROOF()", {}, p.uint256),
    JK_LABS_ADDRESS: viewFun("0xeef18e17", "JK_LABS_ADDRESS()", {}, p.address),
    MAX_FIELDS_METADATA_LENGTH: viewFun("0xb382543f", "MAX_FIELDS_METADATA_LENGTH()", {}, p.uint256),
    METADATAS_COUNT: viewFun("0x4d24a67f", "METADATAS_COUNT()", {}, p.uint256),
    addressSubmitterVerified: viewFun("0xcb853950", "addressSubmitterVerified(address)", {"_0": p.address}, p.bool),
    addressTotalCastVoteCounts: viewFun("0xa1ac6cb2", "addressTotalCastVoteCounts(address)", {"_0": p.address}, p.uint256),
    addressTotalVotes: viewFun("0xdea5f6a6", "addressTotalVotes(address)", {"_0": p.address}, p.uint256),
    addressTotalVotesVerified: viewFun("0x930de979", "addressTotalVotesVerified(address)", {"_0": p.address}, p.bool),
    addressesThatHaveVoted: viewFun("0x50c4b616", "addressesThatHaveVoted(uint256)", {"_0": p.uint256}, p.address),
    allProposalTotalVotes: viewFun("0x50a5e524", "allProposalTotalVotes()", {}, {"proposalIdsReturn": p.array(p.uint256), "proposalVoteCountsArrayReturn": p.array(p.struct({"forVotes": p.uint256, "againstVotes": p.uint256}))}),
    cancel: fun("0xea8a1af0", "cancel()", {}, ),
    canceled: viewFun("0x3f9942ff", "canceled()", {}, p.bool),
    castVote: fun("0x419c533c", "castVote(uint256,uint8,uint256,uint256,bytes32[])", {"proposalId": p.uint256, "support": p.uint8, "totalVotes": p.uint256, "numVotes": p.uint256, "proof": p.array(p.bytes32)}, p.uint256),
    castVoteWithoutProof: fun("0x65f16263", "castVoteWithoutProof(uint256,uint8,uint256)", {"proposalId": p.uint256, "support": p.uint8, "numVotes": p.uint256}, p.uint256),
    checkProof: viewFun("0x32763c22", "checkProof(address,uint256,bytes32[],bool)", {"addressToCheck": p.address, "amount": p.uint256, "proof": p.array(p.bytes32), "voting": p.bool}, p.bool),
    comment: fun("0x1805c523", "comment(uint256,string)", {"proposalId": p.uint256, "commentContent": p.string}, p.uint256),
    commentIds: viewFun("0xf5c36411", "commentIds(uint256)", {"_0": p.uint256}, p.uint256),
    commentIsDeleted: viewFun("0xae66b8ad", "commentIsDeleted(uint256)", {"_0": p.uint256}, p.bool),
    comments: viewFun("0x8ebb4c15", "comments(uint256)", {"_0": p.uint256}, {"author": p.address, "timestamp": p.uint256, "proposalId": p.uint256, "commentContent": p.string}),
    contestAddressTotalVotesCast: viewFun("0xaec116b6", "contestAddressTotalVotesCast(address)", {"userAddress": p.address}, p.uint256),
    contestDeadline: viewFun("0x262e59e9", "contestDeadline()", {}, p.uint256),
    contestStart: viewFun("0x004114a8", "contestStart()", {}, p.uint256),
    costToPropose: viewFun("0x6ed815ad", "costToPropose()", {}, p.uint256),
    costToVote: viewFun("0x51a41dec", "costToVote()", {}, p.uint256),
    creator: viewFun("0x02d05d3f", "creator()", {}, p.address),
    creatorSplitDestination: viewFun("0x4a587ad4", "creatorSplitDestination()", {}, p.address),
    deleteComments: fun("0xac67f801", "deleteComments(uint256[])", {"commentIdsParam": p.array(p.uint256)}, ),
    deleteProposals: fun("0xf0a7db0a", "deleteProposals(uint256[])", {"proposalIdsToDelete": p.array(p.uint256)}, ),
    deletedCommentIds: viewFun("0x3fb57c92", "deletedCommentIds(uint256)", {"_0": p.uint256}, p.uint256),
    deletedProposalIds: viewFun("0x05846cae", "deletedProposalIds(uint256)", {"_0": p.uint256}, p.uint256),
    downvotingAllowed: viewFun("0x60506ff6", "downvotingAllowed()", {}, p.uint256),
    forVotesToProposalIds: viewFun("0x711effc8", "forVotesToProposalIds(uint256,uint256)", {"_0": p.uint256, "_1": p.uint256}, p.uint256),
    getAllAddressesThatHaveVoted: viewFun("0x2c39805f", "getAllAddressesThatHaveVoted()", {}, p.array(p.address)),
    getAllAuthorsOfDeletedProposals: viewFun("0xcbdc27cb", "getAllAuthorsOfDeletedProposals()", {}, p.array(p.address)),
    getAllCommentIds: viewFun("0xe11db9d8", "getAllCommentIds()", {}, p.array(p.uint256)),
    getAllDeletedCommentIds: viewFun("0x5cb718a1", "getAllDeletedCommentIds()", {}, p.array(p.uint256)),
    getAllDeletedProposalIds: viewFun("0x1242b737", "getAllDeletedProposalIds()", {}, p.array(p.uint256)),
    getAllProposalAuthors: viewFun("0x946369b5", "getAllProposalAuthors()", {}, p.array(p.address)),
    getAllProposalIds: viewFun("0xefa90d36", "getAllProposalIds()", {}, p.array(p.uint256)),
    getComment: viewFun("0x0800e300", "getComment(uint256)", {"commentId": p.uint256}, p.struct({"author": p.address, "timestamp": p.uint256, "proposalId": p.uint256, "commentContent": p.string})),
    getNumProposalsWithThisManyForVotes: viewFun("0x9ba197af", "getNumProposalsWithThisManyForVotes(uint256)", {"forVotes": p.uint256}, p.uint256),
    getOnlyProposalIdWithThisManyForVotes: viewFun("0xb66d1da3", "getOnlyProposalIdWithThisManyForVotes(uint256)", {"forVotes": p.uint256}, p.uint256),
    getProposal: viewFun("0xc7f758a8", "getProposal(uint256)", {"proposalId": p.uint256}, p.struct({"author": p.address, "exists": p.bool, "description": p.string, "targetMetadata": p.struct({"targetAddress": p.address}), "safeMetadata": p.struct({"signers": p.array(p.address), "threshold": p.uint256}), "fieldsMetadata": p.struct({"addressArray": p.array(p.address), "stringArray": p.array(p.string), "uintArray": p.array(p.uint256)})})),
    getProposalComments: viewFun("0xc05f4104", "getProposalComments(uint256)", {"proposalId": p.uint256}, p.array(p.uint256)),
    getProposalsWithThisManyForVotes: viewFun("0xc9a1b6b2", "getProposalsWithThisManyForVotes(uint256)", {"forVotes": p.uint256}, p.array(p.uint256)),
    getRankIndex: viewFun("0x5c7107d8", "getRankIndex(uint256)", {"rank": p.uint256}, p.uint256),
    getSortedRanks: viewFun("0x6fd3636b", "getSortedRanks()", {}, p.array(p.uint256)),
    hashComment: viewFun("0x409fd030", "hashComment((address,uint256,uint256,string))", {"commentObj": p.struct({"author": p.address, "timestamp": p.uint256, "proposalId": p.uint256, "commentContent": p.string})}, p.uint256),
    hashProposal: viewFun("0xd7989025", "hashProposal((address,bool,string,(address),(address[],uint256),(address[],string[],uint256[])))", {"proposal": p.struct({"author": p.address, "exists": p.bool, "description": p.string, "targetMetadata": p.struct({"targetAddress": p.address}), "safeMetadata": p.struct({"signers": p.array(p.address), "threshold": p.uint256}), "fieldsMetadata": p.struct({"addressArray": p.array(p.address), "stringArray": p.array(p.string), "uintArray": p.array(p.uint256)})})}, p.uint256),
    isOrIsBelowTiedRank: viewFun("0x9174778c", "isOrIsBelowTiedRank(uint256)", {"idx": p.uint256}, p.bool),
    jkLabsSplitDestination: viewFun("0x102613d8", "jkLabsSplitDestination()", {}, p.address),
    maxProposalCount: viewFun("0xfb9bf8d4", "maxProposalCount()", {}, p.uint256),
    metadataFieldsSchema: viewFun("0x60ed97a9", "metadataFieldsSchema()", {}, p.string),
    name: viewFun("0x06fdde03", "name()", {}, p.string),
    numAllowedProposalSubmissions: viewFun("0x832009af", "numAllowedProposalSubmissions()", {}, p.uint256),
    numSubmissions: viewFun("0x75e509c5", "numSubmissions(address)", {"_0": p.address}, p.uint256),
    officialRewardsModule: viewFun("0x785ddfe5", "officialRewardsModule()", {}, p.address),
    payPerVote: viewFun("0x03f7eed6", "payPerVote()", {}, p.uint256),
    percentageToCreator: viewFun("0xedcd1be4", "percentageToCreator()", {}, p.uint256),
    prompt: viewFun("0x7c65d711", "prompt()", {}, p.string),
    proposalAddressVotes: viewFun("0x6e4eb810", "proposalAddressVotes(uint256,address)", {"proposalId": p.uint256, "userAddress": p.address}, {"forVotes": p.uint256, "againstVotes": p.uint256}),
    proposalAddressesHaveVoted: viewFun("0xb323580d", "proposalAddressesHaveVoted(uint256)", {"proposalId": p.uint256}, p.array(p.address)),
    proposalAuthors: viewFun("0x0aa25e44", "proposalAuthors(uint256)", {"_0": p.uint256}, p.address),
    proposalComments: viewFun("0xf61736f4", "proposalComments(uint256,uint256)", {"_0": p.uint256, "_1": p.uint256}, p.uint256),
    proposalIds: viewFun("0x9b644a23", "proposalIds(uint256)", {"_0": p.uint256}, p.uint256),
    proposalIsDeleted: viewFun("0xf79c0172", "proposalIsDeleted(uint256)", {"_0": p.uint256}, p.bool),
    proposalVotes: viewFun("0x544ffc9c", "proposalVotes(uint256)", {"proposalId": p.uint256}, {"forVotes": p.uint256, "againstVotes": p.uint256}),
    proposalVotesStructs: viewFun("0x070dc5d9", "proposalVotesStructs(uint256)", {"_0": p.uint256}, p.struct({"forVotes": p.uint256, "againstVotes": p.uint256})),
    proposals: viewFun("0x013cf08b", "proposals(uint256)", {"_0": p.uint256}, {"author": p.address, "exists": p.bool, "description": p.string, "targetMetadata": p.struct({"targetAddress": p.address}), "safeMetadata": p.struct({"signers": p.array(p.address), "threshold": p.uint256}), "fieldsMetadata": p.struct({"addressArray": p.array(p.address), "stringArray": p.array(p.string), "uintArray": p.array(p.uint256)})}),
    propose: fun("0xf823f110", "propose((address,bool,string,(address),(address[],uint256),(address[],string[],uint256[])),bytes32[])", {"proposal": p.struct({"author": p.address, "exists": p.bool, "description": p.string, "targetMetadata": p.struct({"targetAddress": p.address}), "safeMetadata": p.struct({"signers": p.array(p.address), "threshold": p.uint256}), "fieldsMetadata": p.struct({"addressArray": p.array(p.address), "stringArray": p.array(p.string), "uintArray": p.array(p.uint256)})}), "proof": p.array(p.bytes32)}, p.uint256),
    proposeWithoutProof: fun("0xab5e6947", "proposeWithoutProof((address,bool,string,(address),(address[],uint256),(address[],string[],uint256[])))", {"proposal": p.struct({"author": p.address, "exists": p.bool, "description": p.string, "targetMetadata": p.struct({"targetAddress": p.address}), "safeMetadata": p.struct({"signers": p.array(p.address), "threshold": p.uint256}), "fieldsMetadata": p.struct({"addressArray": p.array(p.address), "stringArray": p.array(p.string), "uintArray": p.array(p.uint256)})})}, p.uint256),
    rankLimit: viewFun("0x0414126a", "rankLimit()", {}, p.uint256),
    setCreatorSplitDestination: fun("0x146230f6", "setCreatorSplitDestination(address)", {"newCreatorSplitDestination": p.address}, ),
    setOfficialRewardsModule: fun("0xf4f3d7ec", "setOfficialRewardsModule(address)", {"officialRewardsModule_": p.address}, ),
    setSubmissionMerkleRoot: fun("0xdaf762db", "setSubmissionMerkleRoot(bytes32)", {"newSubmissionMerkleRoot": p.bytes32}, ),
    setVotingMerkleRoot: fun("0x544c7bb4", "setVotingMerkleRoot(bytes32)", {"newVotingMerkleRoot": p.bytes32}, ),
    sortedRanks: viewFun("0x325cc6d9", "sortedRanks(uint256)", {"_0": p.uint256}, p.uint256),
    sortingEnabled: viewFun("0x366ecf5b", "sortingEnabled()", {}, p.uint256),
    state: viewFun("0xc19d93fb", "state()", {}, p.uint8),
    submissionMerkleRoot: viewFun("0xbddc1641", "submissionMerkleRoot()", {}, p.bytes32),
    totalVotesCast: viewFun("0x7de418d5", "totalVotesCast()", {}, p.uint256),
    validateProposalData: viewFun("0xd140d9f0", "validateProposalData((address,bool,string,(address),(address[],uint256),(address[],string[],uint256[])))", {"proposal": p.struct({"author": p.address, "exists": p.bool, "description": p.string, "targetMetadata": p.struct({"targetAddress": p.address}), "safeMetadata": p.struct({"signers": p.array(p.address), "threshold": p.uint256}), "fieldsMetadata": p.struct({"addressArray": p.array(p.address), "stringArray": p.array(p.string), "uintArray": p.array(p.uint256)})})}, ),
    verifyProposer: fun("0x20b3e845", "verifyProposer(address,bytes32[])", {"account": p.address, "proof": p.array(p.bytes32)}, ),
    verifyVoter: fun("0x531bd812", "verifyVoter(address,uint256,bytes32[])", {"account": p.address, "totalVotes": p.uint256, "proof": p.array(p.bytes32)}, ),
    version: viewFun("0x54fd4d50", "version()", {}, p.string),
    voteStart: viewFun("0xe031535b", "voteStart()", {}, p.uint256),
    votingDelay: viewFun("0x3932abb1", "votingDelay()", {}, p.uint256),
    votingMerkleRoot: viewFun("0xdd96a19d", "votingMerkleRoot()", {}, p.bytes32),
    votingPeriod: viewFun("0x02a251a3", "votingPeriod()", {}, p.uint256),
}

export class Contract extends ContractBase {

    AMOUNT_FOR_SUMBITTER_PROOF() {
        return this.eth_call(functions.AMOUNT_FOR_SUMBITTER_PROOF, {})
    }

    JK_LABS_ADDRESS() {
        return this.eth_call(functions.JK_LABS_ADDRESS, {})
    }

    MAX_FIELDS_METADATA_LENGTH() {
        return this.eth_call(functions.MAX_FIELDS_METADATA_LENGTH, {})
    }

    METADATAS_COUNT() {
        return this.eth_call(functions.METADATAS_COUNT, {})
    }

    addressSubmitterVerified(_0: AddressSubmitterVerifiedParams["_0"]) {
        return this.eth_call(functions.addressSubmitterVerified, {_0})
    }

    addressTotalCastVoteCounts(_0: AddressTotalCastVoteCountsParams["_0"]) {
        return this.eth_call(functions.addressTotalCastVoteCounts, {_0})
    }

    addressTotalVotes(_0: AddressTotalVotesParams["_0"]) {
        return this.eth_call(functions.addressTotalVotes, {_0})
    }

    addressTotalVotesVerified(_0: AddressTotalVotesVerifiedParams["_0"]) {
        return this.eth_call(functions.addressTotalVotesVerified, {_0})
    }

    addressesThatHaveVoted(_0: AddressesThatHaveVotedParams["_0"]) {
        return this.eth_call(functions.addressesThatHaveVoted, {_0})
    }

    allProposalTotalVotes() {
        return this.eth_call(functions.allProposalTotalVotes, {})
    }

    canceled() {
        return this.eth_call(functions.canceled, {})
    }

    checkProof(addressToCheck: CheckProofParams["addressToCheck"], amount: CheckProofParams["amount"], proof: CheckProofParams["proof"], voting: CheckProofParams["voting"]) {
        return this.eth_call(functions.checkProof, {addressToCheck, amount, proof, voting})
    }

    commentIds(_0: CommentIdsParams["_0"]) {
        return this.eth_call(functions.commentIds, {_0})
    }

    commentIsDeleted(_0: CommentIsDeletedParams["_0"]) {
        return this.eth_call(functions.commentIsDeleted, {_0})
    }

    comments(_0: CommentsParams["_0"]) {
        return this.eth_call(functions.comments, {_0})
    }

    contestAddressTotalVotesCast(userAddress: ContestAddressTotalVotesCastParams["userAddress"]) {
        return this.eth_call(functions.contestAddressTotalVotesCast, {userAddress})
    }

    contestDeadline() {
        return this.eth_call(functions.contestDeadline, {})
    }

    contestStart() {
        return this.eth_call(functions.contestStart, {})
    }

    costToPropose() {
        return this.eth_call(functions.costToPropose, {})
    }

    costToVote() {
        return this.eth_call(functions.costToVote, {})
    }

    creator() {
        return this.eth_call(functions.creator, {})
    }

    creatorSplitDestination() {
        return this.eth_call(functions.creatorSplitDestination, {})
    }

    deletedCommentIds(_0: DeletedCommentIdsParams["_0"]) {
        return this.eth_call(functions.deletedCommentIds, {_0})
    }

    deletedProposalIds(_0: DeletedProposalIdsParams["_0"]) {
        return this.eth_call(functions.deletedProposalIds, {_0})
    }

    downvotingAllowed() {
        return this.eth_call(functions.downvotingAllowed, {})
    }

    forVotesToProposalIds(_0: ForVotesToProposalIdsParams["_0"], _1: ForVotesToProposalIdsParams["_1"]) {
        return this.eth_call(functions.forVotesToProposalIds, {_0, _1})
    }

    getAllAddressesThatHaveVoted() {
        return this.eth_call(functions.getAllAddressesThatHaveVoted, {})
    }

    getAllAuthorsOfDeletedProposals() {
        return this.eth_call(functions.getAllAuthorsOfDeletedProposals, {})
    }

    getAllCommentIds() {
        return this.eth_call(functions.getAllCommentIds, {})
    }

    getAllDeletedCommentIds() {
        return this.eth_call(functions.getAllDeletedCommentIds, {})
    }

    getAllDeletedProposalIds() {
        return this.eth_call(functions.getAllDeletedProposalIds, {})
    }

    getAllProposalAuthors() {
        return this.eth_call(functions.getAllProposalAuthors, {})
    }

    getAllProposalIds() {
        return this.eth_call(functions.getAllProposalIds, {})
    }

    getComment(commentId: GetCommentParams["commentId"]) {
        return this.eth_call(functions.getComment, {commentId})
    }

    getNumProposalsWithThisManyForVotes(forVotes: GetNumProposalsWithThisManyForVotesParams["forVotes"]) {
        return this.eth_call(functions.getNumProposalsWithThisManyForVotes, {forVotes})
    }

    getOnlyProposalIdWithThisManyForVotes(forVotes: GetOnlyProposalIdWithThisManyForVotesParams["forVotes"]) {
        return this.eth_call(functions.getOnlyProposalIdWithThisManyForVotes, {forVotes})
    }

    getProposal(proposalId: GetProposalParams["proposalId"]) {
        return this.eth_call(functions.getProposal, {proposalId})
    }

    getProposalComments(proposalId: GetProposalCommentsParams["proposalId"]) {
        return this.eth_call(functions.getProposalComments, {proposalId})
    }

    getProposalsWithThisManyForVotes(forVotes: GetProposalsWithThisManyForVotesParams["forVotes"]) {
        return this.eth_call(functions.getProposalsWithThisManyForVotes, {forVotes})
    }

    getRankIndex(rank: GetRankIndexParams["rank"]) {
        return this.eth_call(functions.getRankIndex, {rank})
    }

    getSortedRanks() {
        return this.eth_call(functions.getSortedRanks, {})
    }

    hashComment(commentObj: HashCommentParams["commentObj"]) {
        return this.eth_call(functions.hashComment, {commentObj})
    }

    hashProposal(proposal: HashProposalParams["proposal"]) {
        return this.eth_call(functions.hashProposal, {proposal})
    }

    isOrIsBelowTiedRank(idx: IsOrIsBelowTiedRankParams["idx"]) {
        return this.eth_call(functions.isOrIsBelowTiedRank, {idx})
    }

    jkLabsSplitDestination() {
        return this.eth_call(functions.jkLabsSplitDestination, {})
    }

    maxProposalCount() {
        return this.eth_call(functions.maxProposalCount, {})
    }

    metadataFieldsSchema() {
        return this.eth_call(functions.metadataFieldsSchema, {})
    }

    name() {
        return this.eth_call(functions.name, {})
    }

    numAllowedProposalSubmissions() {
        return this.eth_call(functions.numAllowedProposalSubmissions, {})
    }

    numSubmissions(_0: NumSubmissionsParams["_0"]) {
        return this.eth_call(functions.numSubmissions, {_0})
    }

    officialRewardsModule() {
        return this.eth_call(functions.officialRewardsModule, {})
    }

    payPerVote() {
        return this.eth_call(functions.payPerVote, {})
    }

    percentageToCreator() {
        return this.eth_call(functions.percentageToCreator, {})
    }

    prompt() {
        return this.eth_call(functions.prompt, {})
    }

    proposalAddressVotes(proposalId: ProposalAddressVotesParams["proposalId"], userAddress: ProposalAddressVotesParams["userAddress"]) {
        return this.eth_call(functions.proposalAddressVotes, {proposalId, userAddress})
    }

    proposalAddressesHaveVoted(proposalId: ProposalAddressesHaveVotedParams["proposalId"]) {
        return this.eth_call(functions.proposalAddressesHaveVoted, {proposalId})
    }

    proposalAuthors(_0: ProposalAuthorsParams["_0"]) {
        return this.eth_call(functions.proposalAuthors, {_0})
    }

    proposalComments(_0: ProposalCommentsParams["_0"], _1: ProposalCommentsParams["_1"]) {
        return this.eth_call(functions.proposalComments, {_0, _1})
    }

    proposalIds(_0: ProposalIdsParams["_0"]) {
        return this.eth_call(functions.proposalIds, {_0})
    }

    proposalIsDeleted(_0: ProposalIsDeletedParams["_0"]) {
        return this.eth_call(functions.proposalIsDeleted, {_0})
    }

    proposalVotes(proposalId: ProposalVotesParams["proposalId"]) {
        return this.eth_call(functions.proposalVotes, {proposalId})
    }

    proposalVotesStructs(_0: ProposalVotesStructsParams["_0"]) {
        return this.eth_call(functions.proposalVotesStructs, {_0})
    }

    proposals(_0: ProposalsParams["_0"]) {
        return this.eth_call(functions.proposals, {_0})
    }

    rankLimit() {
        return this.eth_call(functions.rankLimit, {})
    }

    sortedRanks(_0: SortedRanksParams["_0"]) {
        return this.eth_call(functions.sortedRanks, {_0})
    }

    sortingEnabled() {
        return this.eth_call(functions.sortingEnabled, {})
    }

    state() {
        return this.eth_call(functions.state, {})
    }

    submissionMerkleRoot() {
        return this.eth_call(functions.submissionMerkleRoot, {})
    }

    totalVotesCast() {
        return this.eth_call(functions.totalVotesCast, {})
    }

    version() {
        return this.eth_call(functions.version, {})
    }

    voteStart() {
        return this.eth_call(functions.voteStart, {})
    }

    votingDelay() {
        return this.eth_call(functions.votingDelay, {})
    }

    votingMerkleRoot() {
        return this.eth_call(functions.votingMerkleRoot, {})
    }

    votingPeriod() {
        return this.eth_call(functions.votingPeriod, {})
    }
}

/// Event types
export type CommentCreatedEventArgs = EParams<typeof events.CommentCreated>
export type CommentsDeletedEventArgs = EParams<typeof events.CommentsDeleted>
export type ContestCanceledEventArgs = EParams<typeof events.ContestCanceled>
export type CreatorPaymentReleasedEventArgs = EParams<typeof events.CreatorPaymentReleased>
export type JkLabsPaymentReleasedEventArgs = EParams<typeof events.JkLabsPaymentReleased>
export type JokeraceCreatedEventArgs = EParams<typeof events.JokeraceCreated>
export type OfficialRewardsModuleSetEventArgs = EParams<typeof events.OfficialRewardsModuleSet>
export type ProposalCreatedEventArgs = EParams<typeof events.ProposalCreated>
export type ProposalsDeletedEventArgs = EParams<typeof events.ProposalsDeleted>
export type VoteCastEventArgs = EParams<typeof events.VoteCast>

/// Function types
export type AMOUNT_FOR_SUMBITTER_PROOFParams = FunctionArguments<typeof functions.AMOUNT_FOR_SUMBITTER_PROOF>
export type AMOUNT_FOR_SUMBITTER_PROOFReturn = FunctionReturn<typeof functions.AMOUNT_FOR_SUMBITTER_PROOF>

export type JK_LABS_ADDRESSParams = FunctionArguments<typeof functions.JK_LABS_ADDRESS>
export type JK_LABS_ADDRESSReturn = FunctionReturn<typeof functions.JK_LABS_ADDRESS>

export type MAX_FIELDS_METADATA_LENGTHParams = FunctionArguments<typeof functions.MAX_FIELDS_METADATA_LENGTH>
export type MAX_FIELDS_METADATA_LENGTHReturn = FunctionReturn<typeof functions.MAX_FIELDS_METADATA_LENGTH>

export type METADATAS_COUNTParams = FunctionArguments<typeof functions.METADATAS_COUNT>
export type METADATAS_COUNTReturn = FunctionReturn<typeof functions.METADATAS_COUNT>

export type AddressSubmitterVerifiedParams = FunctionArguments<typeof functions.addressSubmitterVerified>
export type AddressSubmitterVerifiedReturn = FunctionReturn<typeof functions.addressSubmitterVerified>

export type AddressTotalCastVoteCountsParams = FunctionArguments<typeof functions.addressTotalCastVoteCounts>
export type AddressTotalCastVoteCountsReturn = FunctionReturn<typeof functions.addressTotalCastVoteCounts>

export type AddressTotalVotesParams = FunctionArguments<typeof functions.addressTotalVotes>
export type AddressTotalVotesReturn = FunctionReturn<typeof functions.addressTotalVotes>

export type AddressTotalVotesVerifiedParams = FunctionArguments<typeof functions.addressTotalVotesVerified>
export type AddressTotalVotesVerifiedReturn = FunctionReturn<typeof functions.addressTotalVotesVerified>

export type AddressesThatHaveVotedParams = FunctionArguments<typeof functions.addressesThatHaveVoted>
export type AddressesThatHaveVotedReturn = FunctionReturn<typeof functions.addressesThatHaveVoted>

export type AllProposalTotalVotesParams = FunctionArguments<typeof functions.allProposalTotalVotes>
export type AllProposalTotalVotesReturn = FunctionReturn<typeof functions.allProposalTotalVotes>

export type CancelParams = FunctionArguments<typeof functions.cancel>
export type CancelReturn = FunctionReturn<typeof functions.cancel>

export type CanceledParams = FunctionArguments<typeof functions.canceled>
export type CanceledReturn = FunctionReturn<typeof functions.canceled>

export type CastVoteParams = FunctionArguments<typeof functions.castVote>
export type CastVoteReturn = FunctionReturn<typeof functions.castVote>

export type CastVoteWithoutProofParams = FunctionArguments<typeof functions.castVoteWithoutProof>
export type CastVoteWithoutProofReturn = FunctionReturn<typeof functions.castVoteWithoutProof>

export type CheckProofParams = FunctionArguments<typeof functions.checkProof>
export type CheckProofReturn = FunctionReturn<typeof functions.checkProof>

export type CommentParams = FunctionArguments<typeof functions.comment>
export type CommentReturn = FunctionReturn<typeof functions.comment>

export type CommentIdsParams = FunctionArguments<typeof functions.commentIds>
export type CommentIdsReturn = FunctionReturn<typeof functions.commentIds>

export type CommentIsDeletedParams = FunctionArguments<typeof functions.commentIsDeleted>
export type CommentIsDeletedReturn = FunctionReturn<typeof functions.commentIsDeleted>

export type CommentsParams = FunctionArguments<typeof functions.comments>
export type CommentsReturn = FunctionReturn<typeof functions.comments>

export type ContestAddressTotalVotesCastParams = FunctionArguments<typeof functions.contestAddressTotalVotesCast>
export type ContestAddressTotalVotesCastReturn = FunctionReturn<typeof functions.contestAddressTotalVotesCast>

export type ContestDeadlineParams = FunctionArguments<typeof functions.contestDeadline>
export type ContestDeadlineReturn = FunctionReturn<typeof functions.contestDeadline>

export type ContestStartParams = FunctionArguments<typeof functions.contestStart>
export type ContestStartReturn = FunctionReturn<typeof functions.contestStart>

export type CostToProposeParams = FunctionArguments<typeof functions.costToPropose>
export type CostToProposeReturn = FunctionReturn<typeof functions.costToPropose>

export type CostToVoteParams = FunctionArguments<typeof functions.costToVote>
export type CostToVoteReturn = FunctionReturn<typeof functions.costToVote>

export type CreatorParams = FunctionArguments<typeof functions.creator>
export type CreatorReturn = FunctionReturn<typeof functions.creator>

export type CreatorSplitDestinationParams = FunctionArguments<typeof functions.creatorSplitDestination>
export type CreatorSplitDestinationReturn = FunctionReturn<typeof functions.creatorSplitDestination>

export type DeleteCommentsParams = FunctionArguments<typeof functions.deleteComments>
export type DeleteCommentsReturn = FunctionReturn<typeof functions.deleteComments>

export type DeleteProposalsParams = FunctionArguments<typeof functions.deleteProposals>
export type DeleteProposalsReturn = FunctionReturn<typeof functions.deleteProposals>

export type DeletedCommentIdsParams = FunctionArguments<typeof functions.deletedCommentIds>
export type DeletedCommentIdsReturn = FunctionReturn<typeof functions.deletedCommentIds>

export type DeletedProposalIdsParams = FunctionArguments<typeof functions.deletedProposalIds>
export type DeletedProposalIdsReturn = FunctionReturn<typeof functions.deletedProposalIds>

export type DownvotingAllowedParams = FunctionArguments<typeof functions.downvotingAllowed>
export type DownvotingAllowedReturn = FunctionReturn<typeof functions.downvotingAllowed>

export type ForVotesToProposalIdsParams = FunctionArguments<typeof functions.forVotesToProposalIds>
export type ForVotesToProposalIdsReturn = FunctionReturn<typeof functions.forVotesToProposalIds>

export type GetAllAddressesThatHaveVotedParams = FunctionArguments<typeof functions.getAllAddressesThatHaveVoted>
export type GetAllAddressesThatHaveVotedReturn = FunctionReturn<typeof functions.getAllAddressesThatHaveVoted>

export type GetAllAuthorsOfDeletedProposalsParams = FunctionArguments<typeof functions.getAllAuthorsOfDeletedProposals>
export type GetAllAuthorsOfDeletedProposalsReturn = FunctionReturn<typeof functions.getAllAuthorsOfDeletedProposals>

export type GetAllCommentIdsParams = FunctionArguments<typeof functions.getAllCommentIds>
export type GetAllCommentIdsReturn = FunctionReturn<typeof functions.getAllCommentIds>

export type GetAllDeletedCommentIdsParams = FunctionArguments<typeof functions.getAllDeletedCommentIds>
export type GetAllDeletedCommentIdsReturn = FunctionReturn<typeof functions.getAllDeletedCommentIds>

export type GetAllDeletedProposalIdsParams = FunctionArguments<typeof functions.getAllDeletedProposalIds>
export type GetAllDeletedProposalIdsReturn = FunctionReturn<typeof functions.getAllDeletedProposalIds>

export type GetAllProposalAuthorsParams = FunctionArguments<typeof functions.getAllProposalAuthors>
export type GetAllProposalAuthorsReturn = FunctionReturn<typeof functions.getAllProposalAuthors>

export type GetAllProposalIdsParams = FunctionArguments<typeof functions.getAllProposalIds>
export type GetAllProposalIdsReturn = FunctionReturn<typeof functions.getAllProposalIds>

export type GetCommentParams = FunctionArguments<typeof functions.getComment>
export type GetCommentReturn = FunctionReturn<typeof functions.getComment>

export type GetNumProposalsWithThisManyForVotesParams = FunctionArguments<typeof functions.getNumProposalsWithThisManyForVotes>
export type GetNumProposalsWithThisManyForVotesReturn = FunctionReturn<typeof functions.getNumProposalsWithThisManyForVotes>

export type GetOnlyProposalIdWithThisManyForVotesParams = FunctionArguments<typeof functions.getOnlyProposalIdWithThisManyForVotes>
export type GetOnlyProposalIdWithThisManyForVotesReturn = FunctionReturn<typeof functions.getOnlyProposalIdWithThisManyForVotes>

export type GetProposalParams = FunctionArguments<typeof functions.getProposal>
export type GetProposalReturn = FunctionReturn<typeof functions.getProposal>

export type GetProposalCommentsParams = FunctionArguments<typeof functions.getProposalComments>
export type GetProposalCommentsReturn = FunctionReturn<typeof functions.getProposalComments>

export type GetProposalsWithThisManyForVotesParams = FunctionArguments<typeof functions.getProposalsWithThisManyForVotes>
export type GetProposalsWithThisManyForVotesReturn = FunctionReturn<typeof functions.getProposalsWithThisManyForVotes>

export type GetRankIndexParams = FunctionArguments<typeof functions.getRankIndex>
export type GetRankIndexReturn = FunctionReturn<typeof functions.getRankIndex>

export type GetSortedRanksParams = FunctionArguments<typeof functions.getSortedRanks>
export type GetSortedRanksReturn = FunctionReturn<typeof functions.getSortedRanks>

export type HashCommentParams = FunctionArguments<typeof functions.hashComment>
export type HashCommentReturn = FunctionReturn<typeof functions.hashComment>

export type HashProposalParams = FunctionArguments<typeof functions.hashProposal>
export type HashProposalReturn = FunctionReturn<typeof functions.hashProposal>

export type IsOrIsBelowTiedRankParams = FunctionArguments<typeof functions.isOrIsBelowTiedRank>
export type IsOrIsBelowTiedRankReturn = FunctionReturn<typeof functions.isOrIsBelowTiedRank>

export type JkLabsSplitDestinationParams = FunctionArguments<typeof functions.jkLabsSplitDestination>
export type JkLabsSplitDestinationReturn = FunctionReturn<typeof functions.jkLabsSplitDestination>

export type MaxProposalCountParams = FunctionArguments<typeof functions.maxProposalCount>
export type MaxProposalCountReturn = FunctionReturn<typeof functions.maxProposalCount>

export type MetadataFieldsSchemaParams = FunctionArguments<typeof functions.metadataFieldsSchema>
export type MetadataFieldsSchemaReturn = FunctionReturn<typeof functions.metadataFieldsSchema>

export type NameParams = FunctionArguments<typeof functions.name>
export type NameReturn = FunctionReturn<typeof functions.name>

export type NumAllowedProposalSubmissionsParams = FunctionArguments<typeof functions.numAllowedProposalSubmissions>
export type NumAllowedProposalSubmissionsReturn = FunctionReturn<typeof functions.numAllowedProposalSubmissions>

export type NumSubmissionsParams = FunctionArguments<typeof functions.numSubmissions>
export type NumSubmissionsReturn = FunctionReturn<typeof functions.numSubmissions>

export type OfficialRewardsModuleParams = FunctionArguments<typeof functions.officialRewardsModule>
export type OfficialRewardsModuleReturn = FunctionReturn<typeof functions.officialRewardsModule>

export type PayPerVoteParams = FunctionArguments<typeof functions.payPerVote>
export type PayPerVoteReturn = FunctionReturn<typeof functions.payPerVote>

export type PercentageToCreatorParams = FunctionArguments<typeof functions.percentageToCreator>
export type PercentageToCreatorReturn = FunctionReturn<typeof functions.percentageToCreator>

export type PromptParams = FunctionArguments<typeof functions.prompt>
export type PromptReturn = FunctionReturn<typeof functions.prompt>

export type ProposalAddressVotesParams = FunctionArguments<typeof functions.proposalAddressVotes>
export type ProposalAddressVotesReturn = FunctionReturn<typeof functions.proposalAddressVotes>

export type ProposalAddressesHaveVotedParams = FunctionArguments<typeof functions.proposalAddressesHaveVoted>
export type ProposalAddressesHaveVotedReturn = FunctionReturn<typeof functions.proposalAddressesHaveVoted>

export type ProposalAuthorsParams = FunctionArguments<typeof functions.proposalAuthors>
export type ProposalAuthorsReturn = FunctionReturn<typeof functions.proposalAuthors>

export type ProposalCommentsParams = FunctionArguments<typeof functions.proposalComments>
export type ProposalCommentsReturn = FunctionReturn<typeof functions.proposalComments>

export type ProposalIdsParams = FunctionArguments<typeof functions.proposalIds>
export type ProposalIdsReturn = FunctionReturn<typeof functions.proposalIds>

export type ProposalIsDeletedParams = FunctionArguments<typeof functions.proposalIsDeleted>
export type ProposalIsDeletedReturn = FunctionReturn<typeof functions.proposalIsDeleted>

export type ProposalVotesParams = FunctionArguments<typeof functions.proposalVotes>
export type ProposalVotesReturn = FunctionReturn<typeof functions.proposalVotes>

export type ProposalVotesStructsParams = FunctionArguments<typeof functions.proposalVotesStructs>
export type ProposalVotesStructsReturn = FunctionReturn<typeof functions.proposalVotesStructs>

export type ProposalsParams = FunctionArguments<typeof functions.proposals>
export type ProposalsReturn = FunctionReturn<typeof functions.proposals>

export type ProposeParams = FunctionArguments<typeof functions.propose>
export type ProposeReturn = FunctionReturn<typeof functions.propose>

export type ProposeWithoutProofParams = FunctionArguments<typeof functions.proposeWithoutProof>
export type ProposeWithoutProofReturn = FunctionReturn<typeof functions.proposeWithoutProof>

export type RankLimitParams = FunctionArguments<typeof functions.rankLimit>
export type RankLimitReturn = FunctionReturn<typeof functions.rankLimit>

export type SetCreatorSplitDestinationParams = FunctionArguments<typeof functions.setCreatorSplitDestination>
export type SetCreatorSplitDestinationReturn = FunctionReturn<typeof functions.setCreatorSplitDestination>

export type SetOfficialRewardsModuleParams = FunctionArguments<typeof functions.setOfficialRewardsModule>
export type SetOfficialRewardsModuleReturn = FunctionReturn<typeof functions.setOfficialRewardsModule>

export type SetSubmissionMerkleRootParams = FunctionArguments<typeof functions.setSubmissionMerkleRoot>
export type SetSubmissionMerkleRootReturn = FunctionReturn<typeof functions.setSubmissionMerkleRoot>

export type SetVotingMerkleRootParams = FunctionArguments<typeof functions.setVotingMerkleRoot>
export type SetVotingMerkleRootReturn = FunctionReturn<typeof functions.setVotingMerkleRoot>

export type SortedRanksParams = FunctionArguments<typeof functions.sortedRanks>
export type SortedRanksReturn = FunctionReturn<typeof functions.sortedRanks>

export type SortingEnabledParams = FunctionArguments<typeof functions.sortingEnabled>
export type SortingEnabledReturn = FunctionReturn<typeof functions.sortingEnabled>

export type StateParams = FunctionArguments<typeof functions.state>
export type StateReturn = FunctionReturn<typeof functions.state>

export type SubmissionMerkleRootParams = FunctionArguments<typeof functions.submissionMerkleRoot>
export type SubmissionMerkleRootReturn = FunctionReturn<typeof functions.submissionMerkleRoot>

export type TotalVotesCastParams = FunctionArguments<typeof functions.totalVotesCast>
export type TotalVotesCastReturn = FunctionReturn<typeof functions.totalVotesCast>

export type ValidateProposalDataParams = FunctionArguments<typeof functions.validateProposalData>
export type ValidateProposalDataReturn = FunctionReturn<typeof functions.validateProposalData>

export type VerifyProposerParams = FunctionArguments<typeof functions.verifyProposer>
export type VerifyProposerReturn = FunctionReturn<typeof functions.verifyProposer>

export type VerifyVoterParams = FunctionArguments<typeof functions.verifyVoter>
export type VerifyVoterReturn = FunctionReturn<typeof functions.verifyVoter>

export type VersionParams = FunctionArguments<typeof functions.version>
export type VersionReturn = FunctionReturn<typeof functions.version>

export type VoteStartParams = FunctionArguments<typeof functions.voteStart>
export type VoteStartReturn = FunctionReturn<typeof functions.voteStart>

export type VotingDelayParams = FunctionArguments<typeof functions.votingDelay>
export type VotingDelayReturn = FunctionReturn<typeof functions.votingDelay>

export type VotingMerkleRootParams = FunctionArguments<typeof functions.votingMerkleRoot>
export type VotingMerkleRootReturn = FunctionReturn<typeof functions.votingMerkleRoot>

export type VotingPeriodParams = FunctionArguments<typeof functions.votingPeriod>
export type VotingPeriodReturn = FunctionReturn<typeof functions.votingPeriod>

