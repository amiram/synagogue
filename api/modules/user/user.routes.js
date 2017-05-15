const userController = require('./user.controller');

module.exports = function (app) {
  app.put('/user', userController.updateUser)
    .get('/user/:userId', userController.getUser);
};
