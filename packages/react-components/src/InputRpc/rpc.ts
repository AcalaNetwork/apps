import jsonrpc from '@polkadot/types/interfaces/jsonrpc';
import acalaJsonRpc from '@acala-network/types/interfaces/jsonrpc';
import ormlJsonRpc from '@orml/types/interfaces/jsonrpc';

export default {
  ...jsonrpc,
  ...acalaJsonRpc,
  ...ormlJsonRpc
};
