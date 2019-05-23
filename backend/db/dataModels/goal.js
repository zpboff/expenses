const mongoose = require('mongoose');

const GoalSchema = new mongoose.Schema({
	userId: mongoose.Types.ObjectId,
	target: String,
	amount: String,
	createDate: Date,
	finishDate: Date
});

module.exports = mongoose.model('goals', GoalSchema);
