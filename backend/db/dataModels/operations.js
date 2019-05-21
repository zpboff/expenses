const mongoose = require('mongoose');

const OperationSchema = new mongoose.Schema({
	userId: mongoose.Types.ObjectId,
	isIncome: Boolean,
	title: String,
	description: String,
	amount: Number
});

module.exports = mongoose.model('operations', OperationSchema);
