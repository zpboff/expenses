const express = require('express');
const User = require('../db/dataModels/user');
const apiRouter = express.Router();
const jwt = require('jsonwebtoken');
const { AppSettings } = require('../configs') 
const withAuth = require('../midleware');

apiRouter.post('/signup', function(req, res) {
	const user = new User(req.body);
	user.save((error) => {
		if (error) return res.status(500).json({ error: error.message });
		res.sendStatus(200);
	});
});

apiRouter.post('/signin', (req, res) => {
	const { email, password } = req.body;

	User.findOne({ email }, (error, user) => {
		if (error) return res.status(500).json({ error: error.message });

		if (!user) return res.status(401).json({ error: 'Неверный логин или пароль' });

		user.isCorrectPassword(password, (error, same) => {
			if (error) return res.status(500).json({ error: error.message});

			if(!same) return res.status(401).json({ error: 'Неверный логин или пароль'});
			
			const payload = { email };
			const token = jwt.sign(payload, AppSettings.Secret, {
				expiresIn: '1h'
			});

			res.cookie('token', token, { httpOnly: true }).sendStatus(200);
		});
	});
});

apiRouter.get('/checkToken', withAuth, function(req, res) {
	res.sendStatus(200);
})

module.exports = apiRouter;
