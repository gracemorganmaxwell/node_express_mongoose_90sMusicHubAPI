const jwt = require("jsonwebtoken");
const User = require("../models/users");
const bcrypt = require("bcrypt");

exports.registerNinetiesUser = async (req, res) => {
	const { email, password } = req.body;
	try {
		const newUser = new User({ email, password });
		await newUser.save();
		res.status(201).json({ message: "User registered successfully" });
	} catch (error) {
		res.status(400).json({ error: error.message });
	}
};

exports.loginNinetiesUser = async (req, res) => {
	const { email, password } = req.body;
	try {
		const user = await User.findOne({ email });
		if (!user) return res.status(400).json({ message: "User not found" });

		const isMatch = await bcrypt.compare(password, user.password);
		if (!isMatch)
			return res.status(400).json({ message: "Invalid credentials" });

		const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
			expiresIn: "1h",
		});
		console.log("Generated Token:", token); // Add this line for debugging
		res.status(200).json({ message: "Authentication successful", token });
	} catch (error) {
		res.status(400).json({ error: error.message });
	}
};
