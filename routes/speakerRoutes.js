// routes/speakerRoutes.js
const express = require('express');
const speakerController = require('../controllers/speakerController');
const router = express.Router();

// add speaker
// router.post('/create', speakerController.addSpeakerToTalk);
router.post('/create', function(req, res) {
    // #swagger.tags = ['Speaker']
    // #swagger.description = 'Endpoint to add a speaker to a talk.'
    /* #swagger.parameters['newSpeaker'] = {
            in: 'body',
            description: 'Information for the new speaker.',
            required: true,
            type: 'object',
            schema: { $ref: "#/definitions/Speaker" }
    } */
    // #swagger.responses[201] = { 
    //   description: 'Speaker added successfully.', 
    //   schema: { $ref: "#/definitions/Speaker" } 
    // }
    // #swagger.responses[400] = { description: 'Invalid data.' }
    speakerController.addSpeakerToTalk(req, res);
})


// get specific speaker
// router.get('/:id', speakerController.getSpeaker);
router.get('/:id', function(req, res) {
    // #swagger.tags = ['Speaker']
    // #swagger.description = 'Endpoint to get a specific speaker.'
    /* #swagger.parameters['id'] = {
            description: 'Speaker ID.',
            type: 'integer'
    } */
    // #swagger.responses[200] = { 
    //   description: 'Speaker found.', 
    //   schema: { $ref: "#/definitions/Speaker" } 
    // }
    // #swagger.responses[404] = { description: 'Speaker not found.' }
    speakerController.getSpeaker(req, res);
})


// update speaker
// router.put('/:id', speakerController.updateSpeaker);
router.put('/:id', function(req, res) {
    // #swagger.tags = ['Speaker']
    // #swagger.description = 'Endpoint to update a specific speaker.'
    /* #swagger.parameters['id'] = {
            description: 'Speaker ID.',
            type: 'integer'
    } */
    /* #swagger.parameters['updatedSpeaker'] = {
            in: 'body',
            description: 'Information for the updated speaker.',
            required: true,
            type: 'object',
            schema: { $ref: "#/definitions/Speaker" }
    } */
    // #swagger.responses[200] = { 
    //   description: 'Speaker updated successfully.', 
    //   schema: { $ref: "#/definitions/Speaker" } 
    // }
    // #swagger.responses[404] = { description: 'Speaker not found.' }
    speakerController.updateSpeaker(req, res);
})


// delete speaker
// router.delete('/:id', speakerController.deleteSpeaker);
router.delete('/:id', function(req, res) {
    // #swagger.tags = ['Speaker']
    // #swagger.description = 'Endpoint to delete a specific speaker.'
    /* #swagger.parameters['id'] = {
            description: 'Speaker ID.',
            type: 'integer'
    } */
    // #swagger.responses[200] = { 
    //   description: 'Speaker deleted successfully.', 
    // }
    // #swagger.responses[404] = { description: 'Speaker not found.' }
    speakerController.deleteSpeaker(req, res);
})


// get all speaker
// router.get('/', speakerController.getAllSpeakers);
router.get('/', function(req, res) {
    // #swagger.tags = ['Speaker']
    // #swagger.description = 'Endpoint to get all speakers.'
    // #swagger.responses[200] = { 
    //   description: 'List of all speakers.', 
    //   schema: { $ref: "#/definitions/Speakers" } 
    // }
    speakerController.getAllSpeakers(req, res);
})


// get speaker for specific talk
// router.get('/talk/:talk_id', speakerController.getSpeakersForTalk);
router.get('/talk/:talk_id', function(req, res) {
    // #swagger.tags = ['Speaker']
    // #swagger.description = 'Endpoint to get speakers for a specific talk.'
    /* #swagger.parameters['talk_id'] = {
            description: 'Talk ID.',
            type: 'integer'
    } */
    // #swagger.responses[200] = { 
    //   description: 'List of speakers for the talk.', 
    //   schema: { $ref: "#/definitions/Speakers" } 
    // }
    // #swagger.responses[404] = { description: 'Talk not found.' }
    speakerController.getSpeakersForTalk(req, res);
})



module.exports = router;
