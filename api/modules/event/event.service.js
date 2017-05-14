const Event = require('./event.model');
const logger = require('../../logger');

async function createEvent(event) {
  const result = await Event.create(event);
  logger.info('Event created', result);
  return result;
}

module.exports = {
  createEvent,
};
