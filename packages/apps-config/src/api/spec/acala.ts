// Copyright 2017-2021 @polkadot/apps-config authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { OverrideBundleDefinition } from '@polkadot/types/types';

import { typesBundleForPolkadot } from '@acala-network/type-definitions';

(typesBundleForPolkadot.spec.acala.types[2].types as any)['ChainBridgeChain'] = 'u8'

typesBundleForPolkadot.spec.acala.alias = {
  ...typesBundleForPolkadot.spec.acala.alias,
  chainBridge: {
    ChainId: 'ChainBridgeChainId'
  },
  chainSafeTransfer: {
    ChainId: 'ChainBridgeChainId'
  }
}

export default typesBundleForPolkadot.spec.acala as unknown as OverrideBundleDefinition;
