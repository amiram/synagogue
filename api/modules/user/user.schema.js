module.exports = {
  userId: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  settings: {
    push: Boolean,
  },
  gender: {
    type: String,
    enum: ['male', 'female']
  }
};
