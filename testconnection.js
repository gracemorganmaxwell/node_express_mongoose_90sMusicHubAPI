const mongoose = require("mongoose");
const dotenv = require("dotenv");

// Load environment variables from .env file
dotenv.config();

// MongoDB Atlas connection URI
const mongoUri = process.env.MONGO_URI;

async function testConnection() {
	try {
		await mongoose.connect(mongoUri, {
			useNewUrlParser: true,
			useUnifiedTopology: true,
		});
		console.log("Connected to MongoDB Atlas successfully!");
		mongoose.connection.close();
	} catch (error) {
		console.error("Error connecting to MongoDB Atlas:", error);
	}
}

testConnection();
