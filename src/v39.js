const types = {
  Address: "MultiAddress",
  LookupSource: "MultiAddress",
  Keys: "SessionKeys4",
  PerDispatchClassU32: {
    normal: "u32",
    operational: "u32",
    mandatory: "u32",
  },
  BlockLength: {
    max: "PerDispatchClassU32",
  },
  Bytes32: {
    value: "[u8;32]",
  },
  Bytes33: {
    value: "[u8;33]",
  },
  Bytes64: {
    value: "[u8;64]",
  },
  Bytes65: {
    value: "[u8;65]",
  },
  WrappedBytes: "Vec<u8>",
  IncId: "u32",
  RawDid: "[u8;32]",
  Did: "RawDid",
  Attester: "Did",
  BlobOwner: "Did",
  Controller: "Did",
  BBSPlusParamsOwner: "Did",
  AccumulatorOwner: "Did",
  PublicKey: {
    _enum: {
      Sr25519: "Bytes32",
      Ed25519: "Bytes32",
      Secp256k1: "Bytes33",
      X25519: "Bytes32",
    },
  },
  SigValue: {
    _enum: {
      Sr25519: "Bytes64",
      Ed25519: "Bytes64",
      Secp256k1: "Bytes65",
    },
  },
  DidSignature: {
    did: "Did",
    keyId: "IncId",
    sig: "SigValue",
  },
  OffChainDidDocRef: {
    _enum: {
      CID: "WrappedBytes",
      URL: "WrappedBytes",
      Custom: "WrappedBytes",
    },
  },
  OffChainDidDetails: {
    accountId: "AccountId",
    docRef: "OffChainDidDocRef",
  },
  OnChainDidDetails: {
    lastKeyId: "IncId",
    activeControllerKeys: "u32",
    activeControllers: "u32",
  },
  StoredOnChainDidDetails: {
    nonce: "BlockNumber",
    data: "OnChainDidDetails",
  },
  StoredDidDetails: {
    _enum: {
      OffChain: "OffChainDidDetails",
      OnChain: "StoredOnChainDidDetails",
    },
  },
  VerRelType: "u16",
  ServiceEndpointType: "u16",
  ServiceEndpoint: {
    types: "ServiceEndpointType",
    origins: "Vec<WrappedBytes>",
  },
  DidKey: {
    publicKey: "PublicKey",
    verRels: "VerRelType",
  },
  AddKeys: {
    did: "Did",
    keys: "Vec<DidKey>",
    nonce: "BlockNumber",
  },
  RemoveKeys: {
    did: "Did",
    keys: "BTreeSet<IncId>",
    nonce: "BlockNumber",
  },
  AddControllers: {
    did: "Did",
    controllers: "BTreeSet<Controller>",
    nonce: "BlockNumber",
  },
  RemoveControllers: {
    did: "Did",
    controllers: "BTreeSet<Controller>",
    nonce: "BlockNumber",
  },
  AddServiceEndpoint: {
    did: "Did",
    id: "WrappedBytes",
    endpoint: "ServiceEndpoint",
    nonce: "BlockNumber",
  },
  RemoveServiceEndpoint: {
    did: "Did",
    id: "WrappedBytes",
    nonce: "BlockNumber",
  },
  DidRemoval: {
    did: "Did",
    nonce: "BlockNumber",
  },
  AggregatedDidDetailsRequestParams: "u8",
  DidKeyWithId: {
    id: "IncId",
    key: "DidKey",
  },
  ServiceEndpointWithId: {
    id: "WrappedBytes",
    endpoint: "ServiceEndpoint",
  },
  AggregatedDidDetailsResponse: {
    id: "Did",
    details: "StoredDidDetails",
    keys: "Option<Vec<DidKeyWithId>>",
    controllers: "Option<Vec<Controller>>",
    attestation: "Option<Attestation>",
    serviceEndpoints: "Option<Vec<ServiceEndpointWithId>>",
  },
  RegistryId: "[u8;32]",
  RevokeId: "[u8;32]",
  Registry: {
    policy: "Policy",
    addOnly: "bool",
  },
  AddRegistry: {
    id: "RegistryId",
    registry: "Registry",
  },
  RevokeRaw: {
    registryId: "RegistryId",
    revokeIds: "BTreeSet<RevokeId>",
  },
  UnRevokeRaw: {
    registryId: "RegistryId",
    revokeIds: "BTreeSet<RevokeId>",
  },
  RemoveRegistryRaw: {
    registryId: "RegistryId",
  },
  RevokeRaw: {
    registryId: "RegistryId",
    revokeIds: "BTreeSet<RevokeId>",
  },
  Revoke: {
    nonce: "BlockNumber",
    data: "RevokeRaw",
  },
  UnrevokeRaw: {
    registryId: "RegistryId",
    revokeIds: "BTreeSet<RevokeId>",
  },
  UnRevoke: {
    nonce: "BlockNumber",
    data: "UnrevokeRaw",
  },
  RemoveRegistryRaw: {
    registryId: "RegistryId",
  },
  RemoveRegistry: {
    nonce: "BlockNumber",
    data: "RemoveRegistryRaw",
  },
  DidSigs: {
    sig: "DidSignature",
    nonce: "BlockNumber",
  },
  Policy: {
    _enum: {
      OneOf: "BTreeSet<Did>",
    },
  },
  BlobId: "[u8;32]",
  Blob: {
    id: "BlobId",
    blob: "Vec<u8>",
  },
  AddBlob: {
    blob: "Blob",
    nonce: "BlockNumber",
  },
  Balance: "u64",
  BlockNumber: "u32",
  Bonus: {
    swapBonuses: "Vec<(Balance, BlockNumber)>",
    vestingBonuses: "Vec<(Balance, Balance, BlockNumber)>",
  },
  MasterVoteRaw: {
    proposal: "Vec<u8>",
    roundNo: "u64",
  },
  MasterVote: {
    nonce: "BlockNumber",
    data: "MasterVoteRaw",
  },
  Membership: {
    members: "BTreeSet<Did>",
    voteRequirement: "u64",
  },
  Attestation: {
    priority: "Compact<u64>",
    iri: "Option<Vec<u8>>",
  },
  SetAttestationClaim: {
    attest: "Attestation",
    nonce: "BlockNumber",
  },
  ParamType: {
    _enum: {
      Address: null,
      Int: "u16",
      Uint: "u16",
    },
  },
  ContractConfig: {
    address: "H160",
    queryAggregatorCallEncoded: "Vec<u8>",
    queryPriceAbiEncoded: "Vec<u8>",
    returnValAbi: "Vec<ParamType>",
  },
  CurveType: {
    _enum: {
      Bls12381: null,
    },
  },
  BBSPlusParametersStorageKey: "(BBSPlusParamsOwner, IncId)",
  BBSPlusPublicKeyStorageKey: "(Controller, IncId)",
  BbsPlusParameters: {
    label: "Option<Vec<u8>>",
    curveType: "CurveType",
    bytes: "Vec<u8>",
  },
  BbsPlusPublicKey: {
    curveType: "CurveType",
    bytes: "Vec<u8>",
    paramsRef: "Option<BBSPlusParametersStorageKey>",
  },
  BbsPlusPublicKeyWithParams: "(BbsPlusPublicKey, Option<BbsPlusParameters>)",
  AddBBSPlusParams: {
    params: "BbsPlusParameters",
    nonce: "BlockNumber",
  },
  AddBBSPlusPublicKey: {
    key: "BbsPlusPublicKey",
    did: "Controller",
    nonce: "BlockNumber",
  },
  RemoveBBSPlusParams: {
    paramsRef: "BBSPlusParametersStorageKey",
    nonce: "BlockNumber",
  },
  RemoveBBSPlusPublicKey: {
    keyRef: "BBSPlusPublicKeyStorageKey",
    did: "Controller",
    nonce: "BlockNumber",
  },
  AccumulatorId: "[u8;32]",
  AccumParametersStorageKey: "(AccumulatorOwner, IncId)",
  AccumPublicKeyStorageKey: "(AccumulatorOwner, IncId)",
  AccumulatorParameters: {
    label: "Option<Vec<u8>>",
    curveType: "CurveType",
    bytes: "Vec<u8>",
  },
  AccumulatorPublicKey: {
    curveType: "CurveType",
    bytes: "Vec<u8>",
    paramsRef: "Option<AccumParametersStorageKey>",
  },
  AccumPublicKeyWithParams:
    "(AccumulatorPublicKey, Option<AccumulatorParameters>)",
  AccumulatorCommon: {
    accumulated: "Vec<u8>",
    keyRef: "AccumPublicKeyStorageKey",
  },
  UniversalAccumulator: {
    common: "AccumulatorCommon",
    maxSize: "u64",
  },
  Accumulator: {
    _enum: {
      Positive: "AccumulatorCommon",
      Universal: "UniversalAccumulator",
    },
  },
  StoredAccumulatorOwnerCounters: {
    paramsCounter: "IncId",
    keyCounter: "IncId",
  },
  AddAccumulatorParams: {
    params: "AccumulatorParameters",
    nonce: "BlockNumber",
  },
  AddAccumulatorPublicKey: {
    publicKey: "AccumulatorPublicKey",
    nonce: "BlockNumber",
  },
  RemoveAccumulatorParams: {
    paramsRef: "AccumParametersStorageKey",
    nonce: "BlockNumber",
  },
  RemoveAccumulatorPublicKey: {
    keyRef: "AccumPublicKeyStorageKey",
    nonce: "BlockNumber",
  },
  AddAccumulator: {
    id: "AccumulatorId",
    accumulator: "Accumulator",
    nonce: "BlockNumber",
  },
  RemoveAccumulator: {
    id: "AccumulatorId",
    nonce: "BlockNumber",
  },
  AccumulatorWithUpdateInfo: {
    createdAt: "BlockNumber",
    lastUpdatedAt: "BlockNumber",
    accumulator: "Accumulator",
  },
  UpdateAccumulator: {
    id: "AccumulatorId",
    newAccumulated: "Vec<u8>",
    additions: "Option<Vec<Vec<u8>>>",
    removals: "Option<Vec<Vec<u8>>>",
    witnessUpdateInfo: "Option<Vec<u8>>",
    nonce: "BlockNumber",
  },
  StateChange: {
    _enum: {
      AddKeys: "AddKeys",
      AddControllers: "AddControllers",
      RemoveKeys: "RemoveKeys",
      RemoveControllers: "RemoveControllers",
      AddServiceEndpoint: "AddServiceEndpoint",
      RemoveServiceEndpoint: "RemoveServiceEndpoint",
      DidRemoval: "DidRemoval",
      Revoke: "Revoke",
      UnRevoke: "UnRevoke",
      RemoveRegistry: "RemoveRegistry",
      AddBlob: "AddBlob",
      MasterVote: "MasterVote",
      SetAttestationClaim: "SetAttestationClaim",
      AddBBSPlusParams: "AddBBSPlusParams",
      AddBBSPlusPublicKey: "AddBBSPlusPublicKey",
      RemoveBBSPlusParams: "RemoveBBSPlusParams",
      RemoveBBSPlusPublicKey: "RemoveBBSPlusPublicKey",
      AddAccumulatorParams: "AddAccumulatorParams",
      AddAccumulatorPublicKey: "AddAccumulatorPublicKey",
      RemoveAccumulatorParams: "RemoveAccumulatorParams",
      RemoveAccumulatorPublicKey: "RemoveAccumulatorPublicKey",
      AddAccumulator: "AddAccumulator",
      UpdateAccumulator: "UpdateAccumulator",
      RemoveAccumulator: "RemoveAccumulator",
    },
  },
};

export default types;
