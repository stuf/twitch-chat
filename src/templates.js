const L = require('partial.lenses');

const userTemplate = module.exports.userTemplate = L.pick({
  name: 'display-name',
  username: 'username',
  id: 'id',
  isModerator: 'mod',
  isSubscriber: 'subscriber'
});
