const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");

router.post("/signup", userController.registerNinetiesUser);
router.post("/login", userController.loginNinetiesUser);

module.exports = router;
