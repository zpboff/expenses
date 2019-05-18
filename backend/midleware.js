const jwt = require('jsonwebtoken');
const { AppSettings } = require('./configs');

const withAuth = function(req, res, next) {
	const token = req.body.token || req.query.token || req.headers['x-access-token'] || req.cookies.token;

	if (!token) return res.status(401).json({message: 'Unauthorized: No token provided'});

	jwt.verify(token, AppSettings.se, function(err, decoded) {

		if (err) return res.status(401).json({ message: 'Unauthorized: Invalid token'});

		req.email = decoded.email;
		next();
	});
};
module.exports = withAuth;
