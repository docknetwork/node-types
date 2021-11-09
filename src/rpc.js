export default {
  poa: {
    treasuryAccount: {
      description: 'Return account address of treasury. The account address can then be used to query the chain for balance',
      params: [],
      type: 'AccountId',
    },
    treasuryBalance: {
      description: 'Return free balance of treasury account. In the context of PoA, only free balance makes sense for treasury. But just in case, to check all kinds of balance (locked, reserved, etc), get the account address with above call and query the chain.',
      params: [],
      type: 'Balance',
    },
    getTotalEmissionInEpoch: {
      description: 'Return total (validators + treasury) emission rewards for given epoch',
      params: ['EpochNo'],
      type: 'Balance',
    },
  },
  price_feed: {
    tokenUsdPrice: {
      description: "Gets the price of Dock/USD from pallet's storage",
      params: [],
      type: 'Option<u32>',
    },
    tokenUsdPriceFromContract: {
      description: 'Gets the price of Dock/USD from EVM contract',
      params: [],
      type: 'Option<u32>',
    },
  },
  fiat_filter: {
    getCallFeeDock: {
      description: "Accepts a scale-encoded extrinsic, returns fee in µDOCK as Balance (u64)",
      params: ['Bytes'],
      type: 'Balance',
    }
  },
  core_mods: {
    bbsPlusPublicKeyWithParams: {
      description: 'Return BBS+ public key with params',
      params: [
        {
          name: 'id',
          type: 'PublicKeyStorageKey',
        },
      ],
      type: 'Option<BbsPlusPublicKeyWithParams>',
    },
    bbsPlusParamsByDid: {
      description: 'Return all BBS+ params by a DID',
      params: [
        {
          name: 'did',
          type: 'Did',
        },
      ],
      type: 'BTreeMap<u32, BbsPlusParameters>',
    },
    bbsPlusPublicKeysByDid: {
      description: 'Return all BBS+ key with params by a DID',
      params: [
        {
          name: 'did',
          type: 'Did',
        },
      ],
      type: 'BTreeMap<u32, BbsPlusPublicKeyWithParams>',
    },
    accumulatorPublicKeyWithParams: {
      description: 'Return Accumulator public key with params',
      params: [
        {
          name: 'id',
          type: 'PublicKeyStorageKey',
        },
      ],
      type: 'Option<AccumulatorPublicKeyWithParams>',
    },
    accumulatorWithPublicKeyAndParams: {
      description: 'Return Accumulator public key with params',
      params: [
        {
          name: 'id',
          type: 'AccumulatorId',
        },
      ],
      type: 'Option<(Vec<u8>, Option<AccumulatorPublicKeyWithParams>)>',
    },
  },
}
