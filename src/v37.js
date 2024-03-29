const types = {
  Address: "MultiAddress",
  LookupSource: "MultiAddress",
  Keys: "SessionKeys4",
  PerDispatchClassU32: {
    normal: "u32",
    operational: "u32",
    mandatory: "u32"
  },
  BlockLength: {
    max: "PerDispatchClassU32"
  },
  DispatchError: "DispatchErrorPre6",
  Bytes32: {
    value: "[u8;32]"
  },
  Bytes33: {
    value: "[u8;33]"
  },
  Bytes64: {
    value: "[u8;64]"
  },
  Bytes65: {
    value: "[u8;65]"
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
      X25519: "Bytes32"
    }
  },
  SigValue: {
    _enum: {
      Sr25519: "Bytes64",
      Ed25519: "Bytes64",
      Secp256k1: "Bytes65"
    }
  },
  DidSignature: {
    did: "Did",
    keyId: "IncId",
    sig: "SigValue"
  },
  OffChainDidDocRef: {
    _enum: {
      CID: "WrappedBytes",
      URL: "WrappedBytes",
      Custom: "WrappedBytes"
    }
  },
  OffChainDidDetails: {
    accountId: "AccountId",
    docRef: "OffChainDidDocRef"
  },
  OnChainDidDetails: {
    lastKeyId: "IncId",
    activeControllerKeys: "u32",
    activeControllers: "u32"
  },
  StoredOnChainDidDetails: {
    nonce: "BlockNumber",
    lastKeyId: "IncId",
    activeControllerKeys: "u32",
    activeControllers: "u32"
  },
  StoredDidDetails: {
    _enum: {
      OffChain: "OffChainDidDetails",
      OnChain: "StoredOnChainDidDetails"
    }
  },
  VerRelType: "u16",
  ServiceEndpointType: "u16",
  ServiceEndpoint: {
    types: "ServiceEndpointType",
    origins: "Vec<WrappedBytes>"
  },
  DidKey: {
    publicKey: "PublicKey",
    verRels: "VerRelType"
  },
  AddKeys: {
    did: "Did",
    keys: "Vec<DidKey>",
    nonce: "BlockNumber"
  },
  RemoveKeys: {
    did: "Did",
    keys: "BTreeSet<IncId>",
    nonce: "BlockNumber"
  },
  AddControllers: {
    did: "Did",
    controllers: "BTreeSet<Controller>",
    nonce: "BlockNumber"
  },
  RemoveControllers: {
    did: "Did",
    controllers: "BTreeSet<Controller>",
    nonce: "BlockNumber"
  },
  AddServiceEndpoint: {
    did: "Did",
    id: "WrappedBytes",
    endpoint: "ServiceEndpoint",
    nonce: "BlockNumber"
  },
  RemoveServiceEndpoint: {
    did: "Did",
    id: "WrappedBytes",
    nonce: "BlockNumber"
  },
  DidRemoval: {
    did: "Did",
    nonce: "BlockNumber"
  },
  AggregatedDidDetailsRequestParams: "u8",
  DidKeyWithId: {
    id: "IncId",
    key: "DidKey"
  },
  ServiceEndpointWithId: {
    id: "WrappedBytes",
    endpoint: "ServiceEndpoint"
  },
  AggregatedDidDetailsResponse: {
    did: "Did",
    details: "StoredDidDetails",
    keys: "Option<Vec<DidKeyWithId>>",
    controllers: "Option<Vec<Controller>>",
    serviceEndpoints: "Option<Vec<ServiceEndpointWithId>>",
    attestation: "Option<Attestation>"
  },
  RegistryId: "[u8;32]",
  RevokeId: "[u8;32]",
  Registry: {
    policy: "Policy",
    add_only: "bool"
  },
  AddRegistry: {
    id: "RegistryId",
    registry: "Registry"
  },
  RevokeRaw: {
    registry_id: "RegistryId",
    revoke_ids: "BTreeSet<RevokeId>"
  },
  UnRevokeRaw: {
    registry_id: "RegistryId",
    revoke_ids: "BTreeSet<RevokeId>"
  },
  RemoveRegistryRaw: {
    registry_id: "RegistryId"
  },
  Revoke: {
    nonce: "BlockNumber",
    registry_id: "RegistryId",
    revoke_ids: "BTreeSet<RevokeId>"
  },
  UnRevoke: {
    nonce: "BlockNumber",
    registry_id: "RegistryId",
    revoke_ids: "BTreeSet<RevokeId>"
  },
  RemoveRegistry: {
    nonce: "BlockNumber",
    registry_id: "RegistryId"
  },
  DidSigs: {
    sig: "DidSignature",
    nonce: "BlockNumber"
  },
  Policy: {
    _enum: {
      OneOf: "BTreeSet<Did>"
    }
  },
  BlobId: "[u8;32]",
  Blob: {
    id: "BlobId",
    blob: "Vec<u8>"
  },
  AddBlob: {
    blob: "Blob",
    nonce: "BlockNumber"
  },
  Balance: "u64",
  BlockNumber: "u32",
  Bonus: {
    swap_bonuses: "Vec<(Balance, BlockNumber)>",
    vesting_bonuses: "Vec<(Balance, Balance, BlockNumber)>"
  },
  MasterVote: {
    nonce: "BlockNumber",
    proposal: "Vec<u8>",
    round_no: "u64"
  },
  Membership: {
    members: "BTreeSet<Did>",
    vote_requirement: "u64"
  },
  Attestation: {
    priority: "Compact<u64>",
    iri: "Option<Vec<u8>>"
  },
  SetAttestationClaim: {
    attest: "Attestation",
    nonce: "BlockNumber"
  },
  ParamType: {
    _enum: {
      Address: null,
      Int: "u16",
      Uint: "u16"
    }
  },
  ContractConfig: {
    address: "H160",
    query_aggregator_call_encoded: "Vec<u8>",
    query_price_abi_encoded: "Vec<u8>",
    return_val_abi: "Vec<ParamType>"
  },
  CurveType: {
    _enum: {
      Bls12381: null
    }
  },
  BBSPlusParametersStorageKey: "(BBSPlusParamsOwner, IncId)",
  BBSPlusPublicKeyStorageKey: "(Controller, IncId)",
  BBSPlusParameters: {
    label: "Option<Vec<u8>>",
    curve_type: "CurveType",
    bytes: "Vec<u8>"
  },
  BBSPlusPublicKey: {
    curve_type: "CurveType",
    bytes: "Vec<u8>",
    params_ref: "Option<BBSPlusParametersStorageKey>"
  },
  BBSPlusPublicKeyWithParams: "(BBSPlusPublicKey, Option<BbsPlusParameters>)",
  AddBBSPlusParams: {
    params: "BBSPlusParameters",
    nonce: "BlockNumber"
  },
  AddBBSPlusPublicKey: {
    key: "BBSPlusPublicKey",
    did: "Controller",
    nonce: "BlockNumber"
  },
  RemoveBBSPlusParams: {
    params_ref: "BBSPlusParametersStorageKey",
    nonce: "BlockNumber"
  },
  RemoveBBSPlusPublicKey: {
    key_ref: "BBSPlusPublicKeyStorageKey",
    did: "Controller",
    nonce: "BlockNumber"
  },
  AccumulatorId: "[u8;32]",
  AccumParametersStorageKey: "(AccumulatorOwner, IncId)",
  AccumPublicKeyStorageKey: "(AccumulatorOwner, IncId)",
  AccumulatorParameters: {
    label: "Option<Vec<u8>>",
    curve_type: "CurveType",
    bytes: "Vec<u8>"
  },
  AccumulatorPublicKey: {
    curve_type: "CurveType",
    bytes: "Vec<u8>",
    params_ref: "Option<AccumParametersStorageKey>"
  },
  AccumPublicKeyWithParams: "(AccumulatorPublicKey, Option<AccumulatorParameters>)",
  AccumulatorCommon: {
    accumulated: "Vec<u8>",
    key_ref: "AccumPublicKeyStorageKey"
  },
  UniversalAccumulator: {
    common: "AccumulatorCommon",
    max_size: "u64"
  },
  Accumulator: {
    _enum: {
      Positive: "AccumulatorCommon",
      Universal: "UniversalAccumulator"
    }
  },
  StoredAccumulatorOwnerCounters: {
    params_counter: "IncId",
    key_counter: "IncId"
  },
  AddAccumulatorParams: {
    params: "AccumulatorParameters",
    nonce: "BlockNumber"
  },
  AddAccumulatorPublicKey: {
    public_key: "AccumulatorPublicKey",
    nonce: "BlockNumber"
  },
  RemoveAccumulatorParams: {
    params_ref: "AccumParametersStorageKey",
    nonce: "BlockNumber"
  },
  RemoveAccumulatorPublicKey: {
    key_ref: "AccumPublicKeyStorageKey",
    nonce: "BlockNumber"
  },
  AddAccumulator: {
    id: "AccumulatorId",
    accumulator: "Accumulator",
    nonce: "BlockNumber"
  },
  RemoveAccumulator: {
    id: "AccumulatorId",
    nonce: "BlockNumber"
  },
  AccumulatorWithUpdateInfo: {
    created_at: "BlockNumber",
    last_updated_at: "BlockNumber",
    accumulator: "Accumulator"
  },
  UpdateAccumulator: {
    id: "AccumulatorId",
    new_accumulated: "Vec<u8>",
    additions: "Option<Vec<Vec<u8>>>",
    removals: "Option<Vec<Vec<u8>>>",
    witness_update_info: "Option<Vec<u8>>",
    nonce: "BlockNumber"
  },
  StorageVersion: {
    _enum: {
      SingleKey: null,
      MultiKey: null
    }
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
      RemoveAccumulator: "RemoveAccumulator"
    }
  }
};

export default types;