const groupController = require('./group.controller');

module.exports = function (app) {
  app.get('/group/:id', groupController.getGroup)
    .post('/group', groupController.createGroup)
    .put('/group/:id', groupController.addUserToGroup);

  app.get('/group/user/:id', groupController.getUserGroups)
    .post('/group/user', groupController.createGroup);
};
