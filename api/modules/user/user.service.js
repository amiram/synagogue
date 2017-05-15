const User = require('./user.model');
const logger = require('../../logger');

async function updateUser(user) {
  const result = await User.update({userId: user.userId}, user);
  logger.info('User updated', result);
  return result;
}

function getUser(userId) {
  return User.find({userId});
}

module.exports = {
  updateUser,
  getUser,
};
