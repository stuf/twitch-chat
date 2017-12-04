const Kefir = require('kefir');
const R = require('ramda');
const L = require('partial.lenses');
const tmi = require('tmi.js');

const T = require('./templates');
const config = require('./config').getConfig();
const {
  skipSelf,
  mkClient,
  onClient2,
  onClient3,
  fns
} = require('./client');

// Connection options

const options = {
  options: { debug: true },
  connection: { reconnect: false },
  identity: {
    username: config.NICKNAME,
    password: config.PASSWORD
  },
  channels: ['#piparkaq']
};

// Client-related crappo

const client = mkClient(options);

// We could probably clean this up later on

const onConnected = onClient3(client, 'connected', (address, port) => ({ address, port }));
const onConnecting = onClient2(client, 'connecting');
const onDisconnected = onClient2(client, 'disconnected');
const onJoin = onClient2(client, 'join');
const onPart = onClient2(client, 'part');

const onAction = onClient2(client, 'action');
// const onChat =
//   onClient3(client,
//             'chat',
//             (channel, userstate, message, self) =>
//               `${userstate.username}: ${message}`);
const onMessage = onClient2(client, 'message');

// or without `onClient2`
const message = Kefir.fromEvents(client, 'message', (channel, userstate, message, self) => {
  return {
    message,
    user: userstate.username
  }
});

// Debug

// onConnecting.log('connecting');
// onConnected.log('connected');
// onDisconnected.log('disconnected');
// onMessage.log('message');
// onChat.log('chat');

// onChat.observe(x => {
//   console.log(x);
// })

//

client.connect();
