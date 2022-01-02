const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const userCookieSchema = new Schema({
    GUID: {
        type: String,
        unique: true,
        required: true
    },
    TOKEN: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true
    },
});
module.export = mongoose.model('UserCookieSchema', userCookieSchema);