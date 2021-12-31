const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const UserSchema = new Schema({
    username: {
        type: String,
        unique: true,
        required: true
    },
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    password: {
        type: Number,
        required: true
    },
    male: {
        type: Boolean, 
        default: 'other'
    }
});
module.export =  mongoose.model('Users', UserSchema);