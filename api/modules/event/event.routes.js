const eventController = require('./event.controller');

module.exports = (app) => {
  app.post('/event', eventController.createEvent);
};
