const express = require('express');
const secretRouter = express.Router();
const withAuth = require('../midleware');

secretRouter.get('/', withAuth, (req, res) => {
	res.json({message: 'The password is potato'});
});

module.exports = secretRouter;