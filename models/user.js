const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const uniqueValidator = require('mongoose-unique-validator');
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
module.exports = mongoose.model('User', UserSchema);