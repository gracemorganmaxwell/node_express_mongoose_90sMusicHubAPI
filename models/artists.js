const mongoose = require('mongoose');

const NinetiesArtistSchema = new mongoose.Schema({
  name: { type: String, required: true },
  genre: { type: String, required: true }
});

module.exports = mongoose.model('Artist', NinetiesArtistSchema);