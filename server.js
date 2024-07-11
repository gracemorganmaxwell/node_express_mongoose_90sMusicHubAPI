const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const userRoutes = require("./routes/ninetiesUserRoutes");
const playlistRoutes = require("./routes/ninetiesPlaylistRoutes");
const albumRoutes = require("./routes/ninetiesAlbumRoutes");
const artistRoutes = require("./routes/ninetiesArtistRoutes");
const secureUser = require("./auth/ninetiesSecureUser");

dotenv.config();

const app = express();
app.use(bodyParser.json());

mongoose
	.connect(process.env.MONGO_URI)
	.then(() => console.log("MongoDB connected"))
	.catch((err) => console.log(err));

app.use("/api/users", userRoutes);
app.use("/api/playlists", secureUser, playlistRoutes);
app.use("/api/albums", secureUser, albumRoutes);
app.use("/api/artists", secureUser, artistRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
	console.log(`Server running on port ${PORT}`);
});
