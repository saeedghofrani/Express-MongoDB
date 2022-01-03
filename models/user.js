const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const uniqueValidator = require('mongoose-unique-validator');
// const crypto = require('crypto');
// const jwt = require('jsonwebtoken');
// const secret = require('../config').secret;
const UserSchema = new Schema({
    username: {
        type: String,
        unique: true,
        required: [true, 'username required'],
        minlength: [2, 'invalid input'],
        index: true,
        trim: true
    },
    firstName: {
        type: String,
        required: [true, 'firstName required'],
        minlength: [2, 'invalid input'],
        maxlength: [30, 'invalid input'],
        trim: true
    },
    lastName: {
        type: String,
        required: [true, 'lastName required'],
        minlength: [2, 'invalid input'],
        maxlength: [30, 'invalid input'],
        trim: true
    },
    password: {
        type: String,
        required: [true, 'password required'],
        minlength: [8, 'invalid input'],
        validate: {
            validator: function (v) {
                return /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9_])/.test(v);
            },
            message: '{VALUE} is not a valid phone number!'
        },
        trim: true
    },
    gender: {
        type: String,
        enum: {
            values: ['male', 'female', 'none'],
            message: '{VALUE} is not supported'
        },
        default: 'none',
        trim: true
    }
}, { timestamps: true });
UserSchema.plugin(uniqueValidator, { message: 'is already taken.' });
// UserSchema.methods.setPassword = function (password) {
//     this.salt = crypto.randomBytes(16).toString('hex');
//     this.hash = crypto.pbkdf2Sync(password, this.salt, 10000, 512, 'sha512').toString('hex');
// };
// UserSchema.methods.validPassword = function (password) {
//     var hash = crypto.pbkdf2Sync(password, this.salt, 10000, 512, 'sha512').toString('hex');
//     return this.hash === hash;
// };
// UserSchema.methods.generateJWT = function () {
//     var today = new Date();
//     var exp = new Date(today);
//     exp.setDate(today.getDate() + 60);

//     return jwt.sign({
//         id: this._id,
//         username: this.username,
//         exp: parseInt(exp.getTime() / 1000),
//     }, secret);
// };
// UserSchema.methods.toAuthJSON = function () {
//     return {
//         username: this.username,
//         email: this.email,
//         token: this.generateJWT(),
//         bio: this.bio,
//         image: this.image
//     };
// }
module.exports = mongoose.model('User', UserSchema);