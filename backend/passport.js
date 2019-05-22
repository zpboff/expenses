const JWTStrategy = require('passport-jwt').Strategy;
const ExtractJWT = require('passport-jwt').ExtractJwt;
const User = require('./db/dataModels/user');
const { AppSettings } = require('./configs')
const opts = {};

opts.jwtFromRequest = ExtractJWT.fromAuthHeaderAsBearerToken();
opts.secretOrKey = AppSettings.Secret;

module.exports = (passport) => {
	passport.use(
		new JWTStrategy(opts, (jwt_payload, done) => {
			User.findById(jwt_payload.id)
				.then((user) => {
					if (user) {
						return done(null, user);
					}
					return done(null, false);
				})
				.catch((err) => console.error(err));
		})
	);
};
