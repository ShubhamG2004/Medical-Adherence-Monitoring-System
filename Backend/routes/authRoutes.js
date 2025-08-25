
const express = require('express');
const authController = require('../controllers/authController.js');
const { authUser } = require('../middlewares/authUser.js');


const router = express.Router();

router.post('/login', authController.login);
router.post('/complete-registration', authUser, authController.register);
router.post('/logout', authUser, authController.logout);
router.get('/validate', authUser, authController.validate);
router.post('/initialize-login', authController.initializeLogin);

module.exports = router;