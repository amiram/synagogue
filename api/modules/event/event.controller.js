const eventService = require('./event.service');

function createEvent(req, res, next) {
  eventService.createEvent(req.body).then(() => {
    res.json('ok');
  });
}

module.exports = {
  createEvent,
};
