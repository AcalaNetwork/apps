// Copyright 2017-2020 @polkadot/app-settings authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { Option } from '../types';

export default [
  { text: 'Mandala TC2 Node 1 (Hosted by OnFinality)', value: 'wss://node-6638598411711750144.jm.onfinality.io/ws', info: 'substrate' },
  { text: 'Mandala TC2 Node 2 (Hosted by OnFinality)', value: 'wss://node-6638598411720138752.jm.onfinality.io/ws', info: 'substrate' },
  { text: 'Mandala TC2 Node 3 (Hosted by OnFinality)', value: 'wss://node-6638598411693088768.rz.onfinality.io/ws', info: 'substrate' },
  { text: 'Mandala TC2 Node 4 (Hosted by Acala)', value: 'wss://testnet-node-1.acala.laminar.one/ws', info: 'substrate' },
  { text: 'Mandala TC1 (Hosted by OnFinality)', value: 'wss://node-6635400830093635584.jm.onfinality.io/ws', info: 'substrate' },
  {
    info: 'local',
    text: 'Local Node (Own, 127.0.0.1:9944)',
    value: 'ws://127.0.0.1:9944/',
    withI18n: true
  }
] as Option[];
