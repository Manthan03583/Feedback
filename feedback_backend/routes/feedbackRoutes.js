const express = require('express');
const {getFeedback, postFeedback} = require('../controller/feedbackController');

const router = express.Router()

// POST /feedback: Submit user feedback
router.post('/',postFeedback );

// GET /feedback: Fetch feedback data with filtering and sorting
router.get('/', getFeedback);

module.exports= router