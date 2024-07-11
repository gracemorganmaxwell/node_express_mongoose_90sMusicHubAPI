const express = require("express");
const router = express.Router();
const artistController = require("../controllers/ninetiesArtistController");

// Routes for artists
router.post("/create-artist", artistController.createNinetiesArtist);
router.get("/all-artists", artistController.getAllNinetiesArtists);
router.get("/artist/:id", artistController.getNinetiesArtistById);
router.put("/update-artist/:id", artistController.updateNinetiesArtist);
router.delete("/delete-artist/:id", artistController.deleteNinetiesArtist);

module.exports = router;
