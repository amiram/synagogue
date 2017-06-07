const userController = require('./user.controller');

module.exports = function (app) {
  app.put('/users', userController.updateUser)
    .get('/users/:userId', userController.getUser);
};
