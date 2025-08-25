
const express = require('express');
const authController = require('../controllers/authController.js');
const { authUser } = require('../middlewares/authUser.js');

const router = express.Router();

// API versioning and RESTful naming
router.post('/api/v1/login', authController.login);
router.post('/api/v1/complete-registration', authUser, authController.register);
router.post('/api/v1/logout', authUser, authController.logout); // Changed to POST and added authUser
router.get('/api/v1/validate', authUser, authController.validate); // Added authUser
router.post('/api/v1/initialize-login', authController.initializeLogin);

module.exports = router;