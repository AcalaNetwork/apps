// Copyright 2017-2020 @polkadot/apps-config authors & contributors
// SPDX-License-Identifier: Apache-2.0

import * as acalaDefinitions from '@acala-network/type-definitions';

import { typesFromDefs } from '../util';

const acaTypes = typesFromDefs(acalaDefinitions.typesBundleForPolkadot.spec.acala.types as any as Record<string, { types: Record<string, any>; }>);

export default acaTypes;
