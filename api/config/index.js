const all = require('./all');
const fs = require('fs-promise');
const path = require('path');
const _ = require('lodash');

const env = process.env.NODE_ENV;

const envConfigPath = path.join(__dirname, `${env || 'development'}.js`);

if (fs.existsSync(envConfigPath)) {
  const envConfig = require(envConfigPath);
  _.merge(all, envConfig);
}

module.exports = all;
