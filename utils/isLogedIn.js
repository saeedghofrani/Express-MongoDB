'use strict';
const isLoggedIn = (req, source) => {
    const user = source.find(obj => obj.username === req.body.username.trim());
    (!user.isLoggedIn) ? false : true;
};
module.exports = isLoggedIn;