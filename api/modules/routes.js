const routes = [
  require('./event/event.routes'),
  require('./user/user.routes'),
  require('./group/group.routes'),
];

module.exports = function (app) {
  routes.forEach(route => route(app));

  app.get('/', (req, res, next) => {
      res.json("ok");
  });
};
