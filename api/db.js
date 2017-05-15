const logger = require('./logger');
const mongoose = require('mongoose');
const config = require('./config');

mongoose.set("debug", true);

mongoose.connect(`${config.db.url}`).then(() => {
  logger.info('db connected');
});
