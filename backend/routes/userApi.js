const express = require('express');
const router = express.Router();
const gravatar = require('gravatar');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const passport = require('passport');
const { validateSignIn, validateSignUp } = require('../helpers/validationHelper');
const User = require('../db/dataModels/user');
const { AppSettings } = require('../configs');

router.post('/signup', (req, res) => {
	const { errors, isValid } = validateSignIn(req.body);

	if (!isValid) {
		return res.status(400).json(errors);
	}

	User.findOne({
		email: req.body.email
	}).then((user) => {
		if (user) {
			return res.status(400).json({
				email: 'Email already exists'
			});
		} else {
			const avatar = gravatar.url(req.body.email, {
				s: '200',
				r: 'pg',
				d: 'mm'
			});
			const newUser = new User({
				name: req.body.name,
				email: req.body.email,
				firstName: req.body.firstName,
				lastName: req.body.lastName,
				registeredAt: new Date(),
				updatedAt: new Date(),
				initials: req.body.firstName[0] + req.body.lastName[0],
				password: req.body.password,
				avatar
			});

			bcrypt.genSalt(AppSettings.SaltRounds, (err, salt) => {
				if (err) console.error('There was an error', err);
				else {
					bcrypt.hash(newUser.password, salt, (err, hash) => {
						if (err) console.error('There was an error', err);
						else {
							newUser.password = hash;
							newUser.save().then((user) => {
								res.json(user);
							});
						}
					});
				}
			});
		}
	});
});

router.post('/login', (req, res) => {
	const { errors, isValid } = validateSignIn(req.body);

	if (!isValid) {
		return res.status(400).json(errors);
	}

	const email = req.body.email;
	const password = req.body.password;

	User.findOne({ email }).then((user) => {
		if (!user) {
			errors.email = 'User not found';
			return res.status(404).json(errors);
		}
		bcrypt.compare(password, user.password).then((isMatch) => {
			if (isMatch) {
				const payload = {
					id: user.id,
					firstName: user.firstName,
					lastName: user.lastName,
					avatar: user.avatar
				};
				jwt.sign(
					payload,
					AppSettings.Secret,
					{
						expiresIn: AppSettings.TokenExpiresIn
					},
					(err, token) => {
						if (err) console.error('There is some error in token', err);
						else {
							res.json({
								success: true,
								token
							});
						}
					}
				);
			} else {
				errors.password = 'Incorrect Password';
				return res.status(400).json(errors);
			}
		});
	});
});

router.get('/me', passport.authenticate('jwt', { session: false }), (req, res) => {
	return res.json({
		id: req.user.id,
		firstName: req.user.firstName,
		lastName: req.user.lastName,
		initials: req.user.initials,
		email: req.user.email
	});
});

module.exports = router;
