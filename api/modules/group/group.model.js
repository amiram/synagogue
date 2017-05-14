const mongoose = require('mongoose');
const groupSchema = require('./group.schema');

const Group = mongoose.model('Group', new mongoose.Schema(groupSchema, {
  timestamps: true,
  collection: 'group'
}));

module.exports = Group;
