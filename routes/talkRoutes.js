// routes/talkRoutes.js
const express = require('express');
const talkController = require('../controllers/talkController'); // adjust the path as needed
const router = express.Router();
const ensureAuthenticated = require('../middleware/ensureAuthenticated');
const path = require('path');

router.use(ensureAuthenticated);

// create talk
router.post('/create', talkController.createTalk);

// get all talk
router.get('/', talkController.getAllTalks);

// delete talk
router.delete('/:id', talkController.deleteTalk);

// get a specific talk
router.get('/:id', talkController.getTalk);

// update a specific talk
router.put('/:id', talkController.updateTalk);


// Talk room
router.get('room/:id', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'public', 'talk.html'));
});



module.exports = router;
