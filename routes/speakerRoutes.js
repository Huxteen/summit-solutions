// routes/speakerRoutes.js
const express = require('express');
const speakerController = require('../controllers/speakerController');
const router = express.Router();

// add speaker
router.post('/create', speakerController.addSpeakerToTalk);

// get specific speaker
router.get('/:id', speakerController.getSpeaker);

// update speaker
router.put('/:id', speakerController.updateSpeaker);

// delete speaker
router.delete('/:id', speakerController.deleteSpeaker);

// get all speaker
router.get('/', speakerController.getAllSpeakers);

// get speaker for specific talk
router.get('/talk/:talk_id', speakerController.getSpeakersForTalk);




module.exports = router;
