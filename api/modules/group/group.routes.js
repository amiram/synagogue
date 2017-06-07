const groupController = require('./group.controller');

module.exports = function (app) {
  app.get('/groups/:id', groupController.getGroup)
    .post('/groups', groupController.createGroup)
    .patch('/groups/:id', groupController.addUserToGroup);

  app.get('/users/:id/groups', groupController.getUserGroups);
};
