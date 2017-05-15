const logger = require('./logger');
const mongoose = require('mongoose');
const config = require('./config');

mongoose.set("debug", true);

mongoose.connect(config.db.url).then((err) => {
  if (err) {
    logger.error(err);
    throw err;
  }
  logger.info('db connected');
});
