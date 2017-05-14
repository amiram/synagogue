const logger = require('./logger');
const mongoose = require('mongoose');
const config = require('./config');

mongoose.set("debug", true);

mongoose.connect(`${config.db.url}${config.db.name}`).then(() => {
  logger.info('db connected');
});
