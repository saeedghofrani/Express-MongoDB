const express = require('express');
const router = express.Router();
const loginRouter = require('./login.route.js');
const rigesterRouter = require('./rigester.route.js');
const dashboard = require('./dashboard.router.js');
router.use((req, res, next) => {
    console.log(`request was made: ${req.url}`);
    next();
});
router.use('/dashboard', dashboard);
router.use('/login', loginRouter);
router.use('/rigester', rigesterRouter);
module.exports = router;