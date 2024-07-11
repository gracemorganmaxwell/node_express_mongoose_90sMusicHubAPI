const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
	const authHeader = req.headers["authorization"];
	if (!authHeader) {
		return res.status(401).json({ message: "No token provided" });
	}

	const token = authHeader.split(" ")[1]; // Extract the token from "Bearer token"
	if (!token) {
		return res.status(401).json({ message: "Token is missing" });
	}

	jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
		if (err) {
			return res.status(403).json({ message: "Invalid token" });
		}
		req.user = decoded; // Attach decoded user information to the request
		next();
	});
};
