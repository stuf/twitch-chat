const t = require('tcomb');

const UserFlags =
  t.struct({ isSubscriber: t.maybe(t.Boolean) })

const User =
  t.struct({ name: t.String,
             id: t.String })
