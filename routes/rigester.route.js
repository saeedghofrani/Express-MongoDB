const express = require('express');
const router = express.Router();
const { rigesterPage, rigesterRequest } = require('../controller/rigester.controller.js');
router.get('', rigesterPage);
router.get('rigesterRequest', rigesterRequest);
module.exports = router;