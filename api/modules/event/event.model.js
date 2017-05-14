const mongoose = require('mongoose');
const eventSchema = require('./event.schema');

const Event = mongoose.model('Event', new mongoose.Schema(eventSchema, {
  timestamps: true,
  collection: 'event'
}));

module.exports = Event;
