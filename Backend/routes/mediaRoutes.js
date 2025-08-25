
const express = require("express");
const mediaController = require("../controllers/mediaController");
const { authUser } = require('../middlewares/authUser.js');

const router = express.Router();

// API versioning and RESTful naming
router.post("/api/v1/upload-prescription", authUser, mediaController.uploadPrescription);
router.post("/api/v1/upload-voice-note/:course_id", authUser, mediaController.uploadVoiceNote); // Added authUser and kebab-case

module.exports = router;
