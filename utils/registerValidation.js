'use strict';
function validate(req, source) {
    let user = source.findIndex(obj => obj.username === req.body.username.trim());
    let userEmail = source.findIndex(obj => obj.email === req.body.email.trim());
    if (user > 0) { return false; }
    else if (userEmail > 0) { return false; }
    return true;
}
module.exports = validate;