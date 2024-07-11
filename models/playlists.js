const mongoose = require('mongoose');

const NinetiesPlaylistSchema = new mongoose.Schema({
  name: { type: String, required: true },
  tracks: { type: Array, default: [] }
});

module.exports = mongoose.model('Playlist', NinetiesPlaylistSchema);