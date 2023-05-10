// routes/talkAttendeeRoutes.js
const express = require('express');
const talkAttendeeController = require('../controllers/talkAttendeeController');

const router = express.Router();

// router.post('/create', talkAttendeeController.createTalkAttendee);
router.post('/create', function(req, res) {
    // #swagger.tags = ['TalkAttendee']
    // #swagger.description = 'Endpoint to create a new talk attendee.'
    /* #swagger.parameters['newTalkAttendee'] = {
            in: 'body',
            description: 'Information for the new talk attendee.',
            required: true,
            type: 'object',
            schema: { $ref: "#/definitions/TalkAttendee" }
    } */
    // #swagger.responses[201] = { 
    //   description: 'Talk attendee created successfully.', 
    //   schema: { $ref: "#/definitions/TalkAttendee" } 
    // }
    // #swagger.responses[400] = { description: 'Invalid data.' }
    talkAttendeeController.createTalkAttendee(req, res);
})


// router.get('/:id', talkAttendeeController.getTalkAttendee);
router.get('/:id', function(req, res) {
    // #swagger.tags = ['TalkAttendee']
    // #swagger.description = 'Endpoint to get a specific talk attendee.'
    /* #swagger.parameters['id'] = {
            description: 'Talk Attendee ID.',
            type: 'integer'
    } */
    // #swagger.responses[200] = { 
    //   description: 'Talk attendee found.', 
    //   schema: { $ref: "#/definitions/TalkAttendee" } 
    // }
    // #swagger.responses[404] = { description: 'Talk attendee not found.' }
    talkAttendeeController.getTalkAttendee(req, res);
})


// router.get('/talk/:talk_id', talkAttendeeController.getAttendeesForTalk);
router.get('/talk/:talk_id', function(req, res) {
    // #swagger.tags = ['TalkAttendee']
    // #swagger.description = 'Endpoint to get attendees for a specific talk.'
    /* #swagger.parameters['talk_id'] = {
            description: 'Talk ID.',
            type: 'integer'
    } */
    // #swagger.responses[200] = { 
    //   description: 'List of attendees for the talk.', 
    //   schema: { $ref: "#/definitions/TalkAttendees" } 
    // }
    // #swagger.responses[404] = { description: 'Talk not found.' }
    talkAttendeeController.getAttendeesForTalk(req, res);
})


module.exports = router;
