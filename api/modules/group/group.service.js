const Group = require('./group.model');

function getGroup(id) {
  return Group.findById(id);
}

function createGroup(group) {
  return Group.create(group);
}

async function addUserToGroup({groupId, userId}) {
  const group = await getGroup(groupId);
  if (!group.userIds.includes(userId)) {
    group.userIds.push(userId);
    return group.save();
  }
}

function getUserGroups(userId) {
  return Group.find({userIds: {$in: [userId]}});
}

module.exports = {
  getGroup,
  createGroup,
  addUserToGroup,
  getUserGroups
};
