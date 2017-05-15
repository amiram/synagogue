const all = require('./all');
const fs = require('fs-promise');
const path = require('path');
const _ = require('lodash');
const logger = require('../logger');

const env = process.env.NODE_ENV;

const envConfigPath = path.join(__dirname, `${env || 'development'}.js`);

logger.info(`Trying to load env config from ${envConfigPath}`);

if (fs.existsSync(envConfigPath)) {
  logger.info(`Using environment ${env} config`);
  const envConfig = require(envConfigPath);
  _.merge(all, envConfig);
} else {
  logger.info(`Using default environment config`);
}

module.exports = all;
