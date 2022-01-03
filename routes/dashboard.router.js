const express = require('express');
const router = express.Router();
const { dashboard, dashboardChange } = require('../controller/dashboard.controller.js');
router.get('/', dashboard);
router.post('/dashboardChange', dashboardChange);
module.exports = router;