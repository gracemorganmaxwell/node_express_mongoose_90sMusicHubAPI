const Playlist = require("../models/playlists");

exports.createNinetiesPlaylist = async (req, res) => {
	try {
		const playlist = new Playlist(req.body);
		await playlist.save();
		res.status(201).json(playlist);
	} catch (error) {
		res.status(500).json({ error: error.message });
	}
};

exports.getAllNinetiesPlaylists = async (req, res) => {
	try {
		const playlists = await Playlist.find();
		res.status(200).json(playlists);
	} catch (error) {
		res.status(500).json({ error: error.message });
	}
};

exports.getNinetiesPlaylistById = async (req, res) => {
	try {
		const playlist = await Playlist.findById(req.params.id);
		if (!playlist) {
			return res.status(404).json({ message: "Playlist not found" });
		}
		res.status(200).json(playlist);
	} catch (error) {
		res.status(500).json({ error: error.message });
	}
};

exports.updateNinetiesPlaylist = async (req, res) => {
	try {
		const playlist = await Playlist.findByIdAndUpdate(req.params.id, req.body, {
			new: true,
		});
		if (!playlist) {
			return res.status(404).json({ message: "Playlist not found" });
		}
		res.status(200).json(playlist);
	} catch (error) {
		res.status(500).json({ error: error.message });
	}
};

exports.deleteNinetiesPlaylist = async (req, res) => {
	try {
		const playlist = await Playlist.findByIdAndDelete(req.params.id);
		if (!playlist) {
			return res.status(404).json({ message: "Playlist not found" });
		}
		res.status(200).json({ message: "Playlist deleted" });
	} catch (error) {
		res.status(500).json({ error: error.message });
	}
};
