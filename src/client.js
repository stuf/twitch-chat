const R = require('ramda');
const tmi = require('tmi.js');
const Kefir = require('kefir');

const chatEventFn = (channel, userstate, message, self) => ({ channel, userstate, message, self });
const clientEvent = (c, e, fn = R.unapply(R.identity)) => Kefir.fromEvents(c, e, fn);

//

module.exports.skipSelf = obs => obs.filter(R.prop('self'));

//

module.exports.mkClient = R.constructN(1, tmi.client);

module.exports.onClient2 = R.curryN(2, clientEvent);
module.exports.onClient3 = R.curryN(3, clientEvent);

module.exports.fns = {
  chatEventFn
};
