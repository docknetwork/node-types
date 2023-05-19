export default {
  poa: {
    treasuryAccount: {
      description:
        "Return account address of treasury. The account address can then be used to query the chain for balance",
      params: [],
      type: "AccountId",
    },
    treasuryBalance: {
      description:
        "Return free balance of treasury account. In the context of PoA, only free balance makes sense for treasury. But just in case, to check all kinds of balance (locked, reserved, etc), get the account address with above call and query the chain.",
      params: [],
      type: "Balance",
    },
    getTotalEmissionInEpoch: {
      description:
        "Return total (validators + treasury) emission rewards for given epoch",
      params: ["EpochNo"],
      type: "Balance",
    },
  },
  price_feed: {
    tokenUsdPrice: {
      description: "Gets the price of Dock/USD from pallet's storage",
      params: [],
      type: "Option<u32>",
    },
    tokenUsdPriceFromContract: {
      description: "Gets the price of Dock/USD from EVM contract",
      params: [],
      type: "Option<u32>",
    },
  },
  fiat_filter: {
    getCallFeeDock: {
      description:
        "Accepts a scale-encoded extrinsic, returns fee in µDOCK as Balance (u64)",
      params: ["Bytes"],
      type: "Balance",
    },
  },
  core_mods: {
    psPublicKeyWithParams: {
      description: "Return PS public key with params",
      params: [
        {
          name: "id",
          type: "(Did, IncId)",
        },
      ],
      type: "Option<(PsPublicKey, Option<PsParameters>)>",
    },
    psParamsByDid: {
      description: "Return all PS params by a DID",
      params: [
        {
          name: "did",
          type: "Did",
        },
      ],
      type: "BTreeMap<IncId, PsParameters>",
    },
    psPublicKeysByDid: {
      description: "Return all PS key with params by a DID",
      params: [
        {
          name: "did",
          type: "Did",
        },
      ],
      type: "BTreeMap<IncId, (PsPublicKey, Option<PsParameters>)>",
    },
    bbsPublicKeyWithParams: {
      description: "Return BBS public key with params",
      params: [
        {
          name: "id",
          type: "(Did, IncId)",
        },
      ],
      type: "Option<(BbsPublicKey, Option<BbsParameters>)>",
    },
    bbsParamsByDid: {
      description: "Return all BBS params by a DID",
      params: [
        {
          name: "did",
          type: "Did",
        },
      ],
      type: "BTreeMap<IncId, BbsParameters>",
    },
    bbsPublicKeysByDid: {
      description: "Return all BBS key with params by a DID",
      params: [
        {
          name: "did",
          type: "Did",
        },
      ],
      type: "BTreeMap<IncId, (BbsPublicKey, Option<BbsParameters>)>",
    },
    bbsPlusPublicKeyWithParams: {
      description: "Return BBS+ public key with params",
      params: [
        {
          name: "id",
          type: "(Did, IncId)",
        },
      ],
      type: "Option<(BbsPlusPublicKey, Option<BbsPlusParameters>)>",
    },
    bbsPlusParamsByDid: {
      description: "Return all BBS+ params by a DID",
      params: [
        {
          name: "did",
          type: "Did",
        },
      ],
      type: "BTreeMap<IncId, BbsPlusParameters>",
    },
    bbsPlusPublicKeysByDid: {
      description: "Return all BBS+ key with params by a DID",
      params: [
        {
          name: "did",
          type: "Did",
        },
      ],
      type: "BTreeMap<IncId, (BbsPlusPublicKey, Option<BbsPlusParameters>)>",
    },
    accumulatorPublicKeyWithParams: {
      description: "Return Accumulator public key with params",
      params: [
        {
          name: "id",
          type: "AccumPublicKeyStorageKey",
        },
      ],
      type: "Option<AccumPublicKeyWithParams>",
    },
    accumulatorWithPublicKeyAndParams: {
      description: "Return Accumulator public key with params",
      params: [
        {
          name: "id",
          type: "AccumulatorId",
        },
      ],
      type: "Option<(Vec<u8>, Option<AccumPublicKeyWithParams>)>",
    },
    didDetails: {
      description: "Get all keys, controllers and service endpoints of the DID",
      params: [
        {
          name: "did",
          type: "Did",
        },
        {
          name: "params",
          type: "u8",
          isOptional: true,
        },
      ],
      type: "Option<AggregatedDidDetailsResponse>",
    },
    didListDetails: {
      description: "Get all keys, controllers and service endpoints of the DID",
      params: [
        {
          name: "dids",
          type: "Vec<Did>",
        },
        {
          name: "params",
          type: "u8",
          isOptional: true,
        },
      ],
      type: "Vec<Option<AggregatedDidDetailsResponse>>",
    },
  },
  staking_rewards: {
    yearlyEmission: {
      description: "",
      params: [
        {
          name: "total_staked",
          type: "Balance",
        },
        {
          name: "total_issuance",
          type: "Balance",
        },
      ],
      type: "Balance",
    },
    maxYearlyEmission: {
      description: "",
      params: [],
      type: "Balance",
    },
  },
};
