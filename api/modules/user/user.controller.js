const userService = require('./user.service');

function updateUser(req, res, next) {
  userService.updateUser(req.body).then(result => {
    res.json("ok");
  }).catch(next);
}

function getUser(req, res, next) {
  userService.getUser(req.params.userId).then(user => {
    res.json(user);
  }).catch(next);
}

module.exports = {
  updateUser,
  getUser,
};
