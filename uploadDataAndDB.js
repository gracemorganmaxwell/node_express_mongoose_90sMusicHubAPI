const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

// Models
const User = require("./models/users");
const Album = require("./models/albums");
const Artist = require("./models/artists");
const Playlist = require("./models/playlists");

// Sample Data
const usersData = [
	{
		email: "samuel.smith@test.com",
		password: "$2b$10$zXJ4.Yi8xMcbjY0XZQzqSOIty/FfofhOY/KAB9LITmVAK5BtOtXOe",
	},
	{
		email: "stefani.germanotta@test.com",
		password: "$2b$10$zXJ4.Yi8xMcbjY0XZQzqSOIty/FfofhOY/KAB9LITmVAK5BtOtXOe",
	},
	{
		email: "adele.adkins@test.com",
		password: "$2b$10$zXJ4.Yi8xMcbjY0XZQzqSOIty/FfofhOY/KAB9LITmVAK5BtOtXOe",
	},
	{
		email: "jelena.hadid@test.com",
		password: "$2b$10$zXJ4.Yi8xMcbjY0XZQzqSOIty/FfofhOY/KAB9LITmVAK5BtOtXOe",
	},
];

const albumsData = [
	{
		title: "Abbey Road",
		artist: "The Beatles",
		releaseDate: new Date("1969-09-26"),
	},
	{
		title: "Thriller",
		artist: "Michael Jackson",
		releaseDate: new Date("1982-11-30"),
	},
	{
		title: "The Dark Side of the Moon",
		artist: "Pink Floyd",
		releaseDate: new Date("1973-03-01"),
	},
	{
		title: "Rumours",
		artist: "Fleetwood Mac",
		releaseDate: new Date("1977-02-04"),
	},
];

const artistsData = [
	{ name: "The Beatles", genre: "Rock" },
	{ name: "Michael Jackson", genre: "Pop" },
	{ name: "Pink Floyd", genre: "Progressive Rock" },
	{ name: "Fleetwood Mac", genre: "Rock" },
];

const playlistsData = [
	{
		name: "90s Rock Anthems",
		tracks: [
			{ title: "Smells Like Teen Spirit", artist: "Nirvana" },
			{ title: "Wonderwall", artist: "Oasis" },
			{ title: "Creep", artist: "Radiohead" },
		],
	},
	{
		name: "90s Pop Hits",
		tracks: [
			{ title: "Baby One More Time", artist: "Britney Spears" },
			{ title: "Wannabe", artist: "Spice Girls" },
			{ title: "Genie in a Bottle", artist: "Christina Aguilera" },
		],
	},
	{
		name: "90s Hip Hop Classics",
		tracks: [
			{ title: "Juicy", artist: "The Notorious B.I.G." },
			{ title: "California Love", artist: "2Pac" },
			{ title: "Nuthin' but a 'G' Thang", artist: "Dr. Dre" },
		],
	},
	{
		name: "90s R&B Favorites",
		tracks: [
			{ title: "No Scrubs", artist: "TLC" },
			{ title: "Waterfalls", artist: "TLC" },
			{ title: "End of the Road", artist: "Boyz II Men" },
		],
	},
];

// Connect to MongoDB Atlas
mongoose
	.connect(process.env.MONGO_URI)
	.then(async () => {
		console.log("Connected to MongoDB");

		// Clear existing data
		await User.deleteMany({});
		await Album.deleteMany({});
		await Artist.deleteMany({});
		await Playlist.deleteMany({});

		// Insert sample data
		await User.insertMany(usersData);
		await Album.insertMany(albumsData);
		await Artist.insertMany(artistsData);
		await Playlist.insertMany(playlistsData);

		console.log("Sample data inserted successfully");
		mongoose.connection.close();
	})
	.catch((err) => {
		console.error("Error connecting to MongoDB", err);
	});
