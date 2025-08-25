
const express = require("express");
const mediaController = require("../controllers/mediaController");
const { authUser } = require('../middlewares/authUser.js');

const router = express.Router();

router.post("/upload-prescription", authUser, mediaController.uploadPrescription);
router.post("/upload-voice-note/:course_id", authUser, mediaController.uploadVoiceNote);

module.exports = router;
