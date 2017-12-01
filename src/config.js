const { readFileSync } = require('fs');
const R = require('ramda');

module.exports.getConfig = () => {
  const client = require('../.secret.json');

  return {
    client
  };
};
