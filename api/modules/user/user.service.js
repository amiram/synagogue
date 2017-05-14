const User = require('./user.model');
const logger = require('../../logger');

async function updateUser(user) {
  const result = await User.update({_id: user._id}, user);
  logger.info('User updated', result);
  return result;
}

function getUser(id) {
  return User.findById(id);
}

module.exports = {
  updateUser,
  getUser,
};
