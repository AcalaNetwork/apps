// Copyright 2017-2020 @polkadot/apps-config authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { Option } from './types';

const DEV: Option[] = [
  {
    info: 'local',
    text: 'Local Node (Own, 127.0.0.1:9944)',
    value: 'ws://127.0.0.1:9944/'
  }
];

const ENV: Option[] = [];

if (process.env.WS_URL) {
  ENV.push({
    info: 'WS_URL',
    text: 'WS_URL: ' + process.env.WS_URL,
    value: process.env.WS_URL
  });
}

const LIVE: Option[] = [
  {
    info: 'substrate',
    text: 'Mandala TC2 Node 1 (Hosted by OnFinality)',
    value: 'wss://node-6640517791634960384.jm.onfinality.io/ws'
  },
  {
    info: 'substrate',
    text: 'Mandala TC2 Node 2 (Hosted by OnFinality)',
    value: 'wss://node-6640517791654576128.jm.onfinality.io/ws'
  },
  {
    info: 'substrate',
    text: 'Mandala TC2 Node 3 (Hosted by OnFinality)',
    value: 'wss://node-6640517791639154689.rz.onfinality.io/ws'
  },
  {
    info: 'substrate',
    text: 'Mandala TC2 Node 4 (Hosted by Acala)',
    value: 'wss://testnet-node-1.acala.laminar.one/ws'
  },
  {
    info: 'substrate',
    text: 'Mandala TC1 (Hosted by OnFinality)',
    value: 'wss://node-6635400830093635584.jm.onfinality.io/ws'
  }
];

const TEST: Option[] = [
  {
    info: 'substrate',
    text: 'Mandala TC3 Node 1 (Hosted by OnFinality)',
    value: 'wss://node-6651312618927640576.jm.onfinality.io/ws?apikey=d4309ac5-f9b4-43f1-8cd7-e3501b444dce'
  }
];

let endpoints = [
  {
    isHeader: true,
    text: 'Live networks',
    value: ''
  },
  ...LIVE,
  {
    isHeader: true,
    text: 'Test networks',
    value: ''
  },
  ...TEST,
  {
    isHeader: true,
    text: 'Development',
    value: ''
  },
  ...DEV
];

if (ENV.length > 0) {
  endpoints = [
    {
      isHeader: true,
      text: 'Custom ENV',
      value: ''
    },
    ...ENV
  ].concat(endpoints);
}

// The available endpoints that will show in the dropdown. For the most part (with the exception of
// Polkadot) we try to keep this to live chains only, with RPCs hosted by the community/chain vendor
//   info: The chain logo name as defined in ../logos, specifically in namedLogos
//   text: The text to display on teh dropdown
//   value: The actual hosted secure websocket endpoint
export default endpoints.map((option): Option => ({ ...option, withI18n: true }));
