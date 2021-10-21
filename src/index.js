import v22Types from './v22';
import v23Types from './v23';
import v27Types from './v27';
import rpc from './rpc';

// Types used by all (coincidentally) PoA chains
export const PoAChainTypes = [
  {
    minmax: [0, 23],
    types: v22Types,
  },
  {
    minmax: [23,],
    types: v23Types,
  },
];

export const spec = {
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
};

const bundle = {
  spec,
};

export default bundle;
