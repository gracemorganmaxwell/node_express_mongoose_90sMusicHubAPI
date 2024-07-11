const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const playlistRoutes = require("./routes/playlistRoutes");
const albumRoutes = require("./routes/albumRoutes");
const artistRoutes = require("./routes/artistRoutes");

dotenv.config();

const app = express();
app.use(bodyParser.json());

mongoose
	.connect(process.env.MONGO_URI, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	})
	.then(() => console.log("MongoDB connected"))
	.catch((err) => console.log(err));


app.use("/api/playlists", playlistRoutes);
app.use("/api/albums", albumRoutes);
app.use("/api/artists", artistRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
	console.log(`Server running on port ${PORT}`);
});
