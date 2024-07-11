const express = require('express');
const router = express.Router();
const albumController = require('../controllers/albumController');

router.get('/', albumController.getAllNinetiesAlbums);
router.get('/:id', albumController.getNinetiesAlbumById);
router.post('/', albumController.createNinetiesAlbum);
router.put('/:id', albumController.updateNinetiesAlbum);
router.delete('/:id', albumController.deleteNinetiesAlbum);

module.exports = router;