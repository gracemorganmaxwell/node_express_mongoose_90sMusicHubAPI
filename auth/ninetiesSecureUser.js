const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
	const token = req.headers["authorization"];
	if (token) {
		jwt.verify(token.split(" ")[1], process.env.JWT_SECRET, (err, decoded) => {
			if (err) {
				return res.status(401).json({ message: "Invalid token" });
			} else {
				req.user = decoded;
				next();
			}
		});
	} else {
		return res.status(401).json({ message: "No token provided" });
	}
};
