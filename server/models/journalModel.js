const mongoose = require('mongoose');

const journalSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  entry: String,
  emotion: String,
  date: { type: Date, default: Date.now },
});

const Journal = mongoose.model('Journal', journalSchema);

module.exports = Journal;
