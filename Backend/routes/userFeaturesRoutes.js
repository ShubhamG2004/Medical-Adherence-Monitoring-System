const express = require('express');
const { authUser } = require('../middlewares/authUser.js');
const userFeaturesRoutes = require('../controllers/userFeaturesController.js');

const router = express.Router();

router.post('/user-notes', authUser, userFeaturesRoutes.updateUserNotes);
router.get('/user-notes', authUser, userFeaturesRoutes.getUserNotes);
router.get('/user-profile', authUser, userFeaturesRoutes.getUserProfile);


module.exports = router;