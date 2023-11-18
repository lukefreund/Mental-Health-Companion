const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  accountCreated: { type: Date, default: Date.now },
  // Additional fields can be added here
});

const User = mongoose.model('User', userSchema);

module.exports = User;
