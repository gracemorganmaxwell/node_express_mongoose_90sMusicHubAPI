const express = require("express");
const router = express.Router();
const playlistController = require("../controllers/ninetiesPlaylistController");

router.post("/create-playlist", playlistController.createNinetiesPlaylist);
router.get("/all-playlists", playlistController.getAllNinetiesPlaylists);
router.get("/playlist/:id", playlistController.getNinetiesPlaylistById);
router.put("/update-playlist/:id", playlistController.updateNinetiesPlaylist);
router.delete(
	"/delete-playlist/:id",
	playlistController.deleteNinetiesPlaylist
);

module.exports = router;
