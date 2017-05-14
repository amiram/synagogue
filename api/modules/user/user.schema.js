module.exports = {
  email: String,
  firstName: String,
  lastName: String,
  settings: {
    push: Boolean,
  },
  gender: {
    type: String,
    enum: ['male', 'female']
  }
};
