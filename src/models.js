const t = require('tcomb');

const User =
  t.struct({ name: t.String,
             id: t.String,
             username: t.String })

module.exports = {
  User
};
