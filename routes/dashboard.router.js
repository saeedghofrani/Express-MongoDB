const express = require('express');
const router = express.Router();
const { dashboard, dashboardChange, deleteUser } = require('../controller/dashboard.controller.js');
router.get('/', dashboard);
router.post('/dashboardChange', dashboardChange);
router.post('/deleteUser', deleteUser);
module.exports = router;