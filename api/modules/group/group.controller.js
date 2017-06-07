const groupService = require('./group.service');

function getGroup(req, res, next) {
  const id = req.params.id;
  console.log('get group');
  groupService.getGroup(id).then(group => {
    res.json(group);
  }).catch(next);
}

function createGroup(req, res, next) {
  const group = req.body;
  groupService.createGroup(group).then(result => {
    res.json(result);
  }).catch(next);
}

function addUserToGroup(req, res, next) {
  const userId = req.body.userId;
  const groupId = req.params.groupId;

  groupService.addUserToGroup({userId, groupId}).then(result => {
    res.json(result);
  }).catch(next);
}

function getUserGroups(req, res, next) {
  const userId = req.params.id;

  groupService.getUserGroups(userId).then(groups => {
    res.json(groups);
  }).catch(next);
}

module.exports = {
  getGroup,
  createGroup,
  addUserToGroup,
  getUserGroups
};

