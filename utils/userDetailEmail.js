'use strict';
function userDetail(req, source) {
    let user = source.find(obj => obj.username === String(req.body.loginusername.trim()));
    return (!user) ? false : (user.email !== req.body.loginEmail.trim()) ? false : user;
}
module.exports = userDetail;