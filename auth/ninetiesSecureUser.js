const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
	const authToken = req.headers["authorization"];
	if (authToken) {
		jwt.verify(authToken, process.env.JWT_SECRET, (error, decodedToken) => {
			if (error) {
				return res
					.status(401)
					.json({ message: "Invalid authentication token" });
			} else {
				req.currentUser = decodedToken;
				next();
			}
		});
	} else {
		return res
			.status(401)
			.json({ message: "No authentication token provided" });
	}
};
