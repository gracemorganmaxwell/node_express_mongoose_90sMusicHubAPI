const express = require("express");
const router = express.Router();
const albumController = require("../controllers/ninetiesAlbumController");

router.post("/create-album", albumController.createNinetiesAlbum);
router.get("/all-albums", albumController.getAllNinetiesAlbums);
router.get("/album/:id", albumController.getNinetiesAlbumById);
router.put("/update-album/:id", albumController.updateNinetiesAlbum);
router.delete("/delete-album/:id", albumController.deleteNinetiesAlbum);

module.exports = router;
