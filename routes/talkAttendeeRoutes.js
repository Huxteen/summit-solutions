// routes/talkAttendeeRoutes.js
const express = require('express');
const talkAttendeeController = require('../controllers/talkAttendeeController');

const router = express.Router();

router.post('/create', talkAttendeeController.createTalkAttendee);

router.get('/:id', talkAttendeeController.getTalkAttendee);

router.get('/talk/:talk_id', talkAttendeeController.getAttendeesForTalk);

module.exports = router;
