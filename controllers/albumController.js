const Album = require("../models/albums");

exports.getAllAlbums = async (req, res) => {
	try {
		const albums = await Album.find();
		res.status(200).json(albums);
	} catch (error) {
		res.status(500).json({ error: error.message });
	}
};

exports.getAlbumById = async (req, res) => {
	try {
		const album = await Album.findById(req.params.id);
		if (!album) {
			return res.status(404).json({ message: "Album not found" });
		}
		res.status(200).json(album);
	} catch (error) {
		res.status(500).json({ error: error.message });
	}
};

exports.createAlbum = async (req, res) => {
	try {
		const album = new Album(req.body);
		await album.save();
		res.status(201).json(album);
	} catch (error) {
		res.status(500).json({ error: error.message });
	}
};

exports.updateAlbum = async (req, res) => {
	try {
		const album = await Album.findByIdAndUpdate(req.params.id, req.body, {
			new: true,
		});
		if (!album) {
			return res.status(404).json({ message: "Album not found" });
		}
		res.status(200).json(album);
	} catch (error) {
		res.status(500).json({ error: error.message });
	}
};

exports.deleteAlbum = async (req, res) => {
	try {
		const album = await Album.findByIdAndDelete(req.params.id);
		if (!album) {
			return res.status(404).json({ message: "Album not found" });
		}
		res.status(200).json({ message: "Album deleted" });
	} catch (error) {
		res.status(500).json({ error: error.message });
	}
};
