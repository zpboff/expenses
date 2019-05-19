const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const { AppSettings } = require('../../configs');

const UserSchema = new mongoose.Schema({
	email: { type: String, required: true, unique: true },
	password: { type: String, required: true },
	firstName: { type: String },
	lastName: { type: String },
	registeredAt: { type: Date },
	updatedAt: { type: Date },
	initials: { type: String },
	avatar: { type: String }
});

UserSchema.pre('save', function(next) {
	if (this.isNew || this.isModified('password')) {
		const document = this;
		document.initials = document.firstName[0] + document.lastName[0];
		bcrypt.hash(document.password, AppSettings.SaltRounds, function(err, hashedPassword) {
			if (err) {
				next(err);
				return;
			}
			document.password = hashedPassword;
			next();
		});
		return;
	}
	next();
});

UserSchema.methods.isCorrectPassword = function(password, callback) {
	bcrypt.compare(password, this.password, (err, same) => {
		if (err) {
			callback(err);
		} else {
			callback(err, same);
		}
	});
};

module.exports = mongoose.model('users', UserSchema);
