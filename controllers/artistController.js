const Artist = require("../models/artists");

exports.createNinetiesArtist = async (req, res) => {
	try {
		const artist = new Artist(req.body);
		await artist.save();
		res.status(201).json(artist);
	} catch (error) {
		res.status(500).json({ error: error.message });
	}
};

exports.getAllNinetiesArtists = async (req, res) => {
	try {
		const artists = await Artist.find();
		res.status(200).json(artists);
	} catch (error) {
		res.status(500).json({ error: error.message });
	}
};

exports.getNinetiesArtistById = async (req, res) => {
	try {
		const artist = await Artist.findById(req.params.id);
		if (!artist) {
			return res.status(404).json({ message: "Artist not found" });
		}
		res.status(200).json(artist);
	} catch (error) {
		res.status(500).json({ error: error.message });
	}
};

exports.updateNinetiesArtist = async (req, res) => {
	try {
		const artist = await Artist.findByIdAndUpdate(req.params.id, req.body, {
			new: true,
		});
		if (!artist) {
			return res.status(404).json({ message: "Artist not found" });
		}
		res.status(200).json(artist);
	} catch (error) {
		res.status(500).json({ error: error.message });
	}
};

exports.deleteNinetiesArtist = async (req, res) => {
	try {
		const artist = await Artist.findByIdAndDelete(req.params.id);
		if (!artist) {
			return res.status(404).json({ message: "Artist not found" });
		}
		res.status(200).json({ message: "Artist deleted" });
	} catch (error) {
		res.status(500).json({ error: error.message });
	}
};
