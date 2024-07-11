const mongoose = require('mongoose');

const NinetiesAlbumSchema = new mongoose.Schema({
  title: { type: String, required: true },
  artist: { type: String, required: true },
  releaseDate: { type: Date, required: true }
});

module.exports = mongoose.model('Album', NinetiesAlbumSchema);