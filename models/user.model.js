const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const UserSchema = new Schema({
    username: {
        type: String,
        unique: true,
        required: [true, 'username required'],
        minlength: [2, 'invalid input'],
    },
    firstName: {
        type: String,
        required: [true, 'firstName required'],
        minlength: [2, 'invalid input'],
        maxlength: [30, 'invalid input'],
    },
    lastName: {
        type: String,
        required: [true, 'lastName required'],
        minlength: [2, 'invalid input'],
        maxlength: [30, 'invalid input'],
    },
    password: {
        type: String,
        required: [true, 'password required'],
        minlength: [8, 'invalid input'],
    },
    gender: {
        type: String,
        enum: {
            values: ['male', 'female', 'none'],
            message: '{VALUE} is not supported'
        },
        default: 'none',
    }
});
module.export = mongoose.model('Users', UserSchema);