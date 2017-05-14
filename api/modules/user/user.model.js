const mongoose = require('mongoose');
const userSchema = require('./user.schema');

const User = mongoose.model('User', new mongoose.Schema(userSchema, {
  timestamps: true,
  collection: 'user',
}));

module.exports = User;
