const Artist = require("../models/artist");

exports.getAllArtists = async (req, res) => {
	try {
		const artists = await Artist.find();
		res.status(200).json(artists);
	} catch (error) {
		res.status(500).json({ error: error.message });
	}
};

exports.getArtistById = async (req, res) => {
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

exports.createArtist = async (req, res) => {
	try {
		const artist = new Artist(req.body);
		await artist.save();
		res.status(201).json(artist);
	} catch (error) {
		res.status(500).json({ error: error.message });
	}
};

exports.updateArtist = async (req, res) => {
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

exports.deleteArtist = async (req, res) => {
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
