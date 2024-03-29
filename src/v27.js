/* eslint sonarjs/no-duplicate-string: 0 */

const types = {
  Address: 'MultiAddress',
  LookupSource: 'MultiAddress',
  PerDispatchClassU32: {
    normal: 'u32',
    operational: 'u32',
    mandatory: 'u32',
  },
  BlockLength: {
    max: 'PerDispatchClassU32',
  },
  DispatchError: "DispatchErrorPre6",
  Keys: 'SessionKeys4',
  Did: '[u8;32]',
  Bytes32: {
    value: '[u8;32]',
  },
  Bytes33: {
    value: '[u8;33]',
  },
  Bytes64: {
    value: '[u8;64]',
  },
  Bytes65: {
    value: '[u8;65]',
  },
  PublicKey: {
    _enum: {
      Sr25519: 'Bytes32',
      Ed25519: 'Bytes32',
      Secp256k1: 'Bytes33',
    },
  },
  DidSignature: {
    _enum: {
      Sr25519: 'Bytes64',
      Ed25519: 'Bytes64',
      Secp256k1: 'Bytes65',
    },
  },
  KeyDetail: {
    controller: 'Did',
    public_key: 'PublicKey',
  },
  KeyUpdate: {
    did: 'Did',
    public_key: 'PublicKey',
    controller: 'Option<Did>',
    last_modified_in_block: 'BlockNumber',
  },
  DidRemoval: {
    did: 'Did',
    last_modified_in_block: 'BlockNumber',
  },
  RegistryId: '[u8;32]',
  RevokeId: '[u8;32]',
  Registry: {
    policy: 'Policy',
    add_only: 'bool',
  },
  Revoke: {
    registry_id: 'RegistryId',
    revoke_ids: 'BTreeSet<RevokeId>',
    last_modified: 'BlockNumber',
  },
  UnRevoke: {
    registry_id: 'RegistryId',
    revoke_ids: 'BTreeSet<RevokeId>',
    last_modified: 'BlockNumber',
  },
  RemoveRegistry: {
    registry_id: 'RegistryId',
    last_modified: 'BlockNumber',
  },
  PAuth: 'BTreeMap<Did, DidSignature>',
  Policy: {
    _enum: {
      OneOf: 'BTreeSet<Did>',
    },
  },
  BlobId: '[u8;32]',
  Blob: {
    id: 'BlobId',
    blob: 'Vec<u8>',
    author: 'Did',
  },
  EpochNo: 'u32',
  EpochLen: 'u32',
  SlotNo: 'u64',
  Balance: 'u64',
  EpochDetail: {
    validator_count: 'u8',
    starting_slot: 'SlotNo',
    expected_ending_slot: 'SlotNo',
    ending_slot: 'Option<SlotNo>',
    emission_for_validators: 'Option<Balance>',
    emission_for_treasury: 'Option<Balance>',
  },
  ValidatorStatsPerEpoch: {
    block_count: 'EpochLen',
    locked_reward: 'Option<Balance>',
    unlocked_reward: 'Option<Balance>',
  },
  Payload: {
    proposal: 'Vec<u8>',
    round_no: 'u64',
  },
  Membership: {
    members: 'BTreeSet<Did>',
    vote_requirement: 'u64',
  },
  PMAuth: 'BTreeMap<Did, DidSignature>',
  Bonus: {
    swap_bonuses: 'Vec<(Balance, BlockNumber)>',
    vesting_bonuses: 'Vec<(Balance, Balance, BlockNumber)>',
  },
  Attestation: {
    priority: 'Compact<u64>',
    iri: 'Option<Vec<u8>>',
  },
  ParamType: {
    _enum: {
      Address: null,
      Int: 'u16',
      Uint: 'u16',
    },
  },
  ContractConfig: {
    address: 'H160',
    query_aggregator_call_encoded: 'Vec<u8>',
    query_price_abi_encoded: 'Vec<u8>',
    return_val_abi: 'Vec<ParamType>',
  },
  StateChange: {
    _enum: {
      KeyUpdate: 'KeyUpdate',
      DidRemoval: 'DidRemoval',
      Revoke: 'Revoke',
      UnRevoke: 'UnRevoke',
      RemoveRegistry: 'RemoveRegistry',
      Blob: 'Blob',
      MasterVote: 'Payload',
      Attestation: '(Did, Attestation)',
    },
  },
};

export default types;
