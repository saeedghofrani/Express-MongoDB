const express = require('express');
const router = express.Router();
const loginRouter = require('./login.route.js');
const rigesterRouter = require('./rigester.route.js');
const homeRouter = require('./home.router.js')
router.use((req, res, next) => {
    console.log(`request was made: ${req.url}`);
    next();
});
router.use('/home', homeRouter);
router.use('/login', loginRouter);
router.use('/rigester', rigesterRouter);
module.exports = router;