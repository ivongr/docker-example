const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  userId: {
    type: String,
    default: () => require('crypto').randomUUID(),
  },
  username: {
    type: String,
  },
  email: {
    type: String,
  },
  avatar: { type: String },
  password: {
    type: String,
  },
  birthdate: { type: Date },
  company: { type: String },
  registeredAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('User', userSchema);
