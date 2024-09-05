const mongoose = require('mongoose');

const trackSchema = new mongoose.Schema({
  title: { type: String, required: true },
  artist: { type: String, required: true },
  album: { type: String },
  fileUrl: { type: String, required: true },
  fileHash: { type: String, required: true },
  metadata: { type: Object },
  rights: { type: Object },
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
});

module.exports = mongoose.model('Track', trackSchema);