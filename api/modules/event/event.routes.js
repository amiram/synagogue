const eventController = require('./event.controller');

module.exports = (app) => {
  app.post('/events', eventController.createEvent);
};
