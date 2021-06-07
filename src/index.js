const v22Types = require('./v22');
const v23Types = require('./v23');
const v27Types = require('./v27');
const rpc = require('./rpc');

// Types used by all (coincidentally) PoA chains
const PoAChainTypes = [
  {
    minmax: [0, 23],
    types: v22Types,
  },
  {
    minmax: [23,],
    types: v23Types,
  },
];

const bundle = {
  spec: {
    'dock-main-runtime': {
      types: PoAChainTypes,
      rpc
    },
    'dock-test-runtime': {
      types: PoAChainTypes,
      rpc
    },
    'dock-dev-runtime': {
      types: PoAChainTypes,
      rpc
    },
    // PoS chain has different `spec_name`
    'dock-pos-main-runtime': {
      types: [
        {
          minmax: [27],
          types: v27Types,
        }
      ],
      rpc
    },
    'dock-pos-test-runtime': {
      types: [
        {
          minmax: [27],
          types: v27Types,
        }
      ],
      rpc
    },
    'dock-pos-dev-runtime': {
      types: [
        {
          minmax: [27],
          types: v27Types,
        }
      ],
      rpc
    }
  },
};

module.exports = bundle;