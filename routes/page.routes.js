const express = require('express');
const router = express.Router();
const controller = require("../controllers/page.controller");
const apiCheck = require("../middleware/apiCheck");
const locationCheck = require("../middleware/locationCheck");

// Gemini Logs & Conversation
router.get("/gemini", apiCheck, controller.getLogs);
router.post("/gemini", apiCheck);

// Check if you're in the dangerous location
router.post("/location", locationCheck)