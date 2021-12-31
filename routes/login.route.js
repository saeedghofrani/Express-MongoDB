const express = require('express');
const router = express.Router();
const { loginPage, loginRequest } = require('../controller/login.controller.js');
router.get('', loginPage);
router.get('loginRequest', loginRequest);
module.exports = router;