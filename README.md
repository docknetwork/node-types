# node-types
Types to be used with Substrate node

The types to provide polkadot-js, sidecar, etc when working with testnet or mainnet. 
The file v22.js contains types to be used till spec version 22. The file v23.js contains types to be used starting from spec version 23. 
Coincidentally, the types are same for testnet and mainnet.

Starting from spec version 27 (v27.js), PoS chain starts. Note that `spec_name` is different.

When using polkadot-js, the object exported from bundle.js should be passed to `typesBundle` argument of `ApiPromise.create`.

Add to your project as `yarn add @docknetwork/node-types` or `npm install @docknetwork/node-types`.

When using [sidecar](https://github.com/paritytech/substrate-api-sidecar), build the package first with `yarn build`. This will create a `dist` folder in the same directory. Then run the following command to connect to mainnet

```
SAS_SUBSTRATE_TYPES_BUNDLE=<path to dist/index.cjs.js> SAS_SUBSTRATE_WS_URL=wss://mainnet-node.dock.io/ yarn dev
```
