const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const userCookieSchema = new Schema({
    GUID: {
        type: String,
    },
    username: {
        type: String,
    }
});
module.export = mongoose.model('UserCookieSchema', userCookieSchema);