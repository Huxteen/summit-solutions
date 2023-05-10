// routes/talkRoutes.js
const express = require('express');
const talkController = require('../controllers/talkController'); // adjust the path as needed
const router = express.Router();
const ensureAuthenticated = require('../middleware/ensureAuthenticated');
const path = require('path');

router.use(ensureAuthenticated);

// create talk
// router.post('/create', talkController.createTalk);
router.post('/create', function(req, res) {
    // #swagger.tags = ['Talk']
    // #swagger.description = 'Endpoint to create a new talk.'
    /* #swagger.parameters['newTalk'] = {
            in: 'body',
            description: 'Information for the new talk.',
            required: true,
            type: 'object',
            schema: { $ref: "#/definitions/Talk" }
    } */
    // #swagger.responses[201] = { 
    //   description: 'Talk created successfully.', 
    //   schema: { $ref: "#/definitions/Talk" } 
    // }
    // #swagger.responses[400] = { description: 'Invalid data.' }
    talkController.createTalk(req, res);
})


// get all talk
// router.get('/', talkController.getAllTalks);
router.get('/', function(req, res) {
    // #swagger.tags = ['Talk']
    // #swagger.description = 'Endpoint to get all talks.'
    // #swagger.responses[200] = { 
    //   description: 'List of all talks.', 
    //   schema: { $ref: "#/definitions/Talk" } 
    // }
    talkController.getAllTalks(req, res);
})


// delete talk
// router.delete('/:id', talkController.deleteTalk);
router.delete('/:id', function(req, res) {
    // #swagger.tags = ['Talk']
    // #swagger.description = 'Endpoint to delete a talk.'
    /* #swagger.parameters['id'] = {
            description: 'Talk ID.',
            type: 'integer'
    } */
    // #swagger.responses[200] = { 
    //   description: 'Talk deleted successfully.', 
    // }
    // #swagger.responses[404] = { description: 'Talk not found.' }
    talkController.deleteTalk(req, res);
})


// get a specific talk
// router.get('/:id', talkController.getTalk);
router.get('/:id', function(req, res) {
    // #swagger.tags = ['Talk']
    // #swagger.description = 'Endpoint to get a specific talk.'
    /* #swagger.parameters['id'] = {
            description: 'Talk ID.',
            type: 'integer'
    } */
    // #swagger.responses[200] = { 
    //   description: 'Talk found.', 
    //   schema: { $ref: "#/definitions/Talk" } 
    // }
    // #swagger.responses[404] = { description: 'Talk not found.' }
    talkController.getTalk(req, res);
})


// update a specific talk
// router.put('/:id', talkController.updateTalk);
router.put('/:id', function(req, res) {
    // #swagger.tags = ['Talk']
    // #swagger.description = 'Endpoint to update a specific talk.'
    /* #swagger.parameters['id'] = {
            description: 'Talk ID.',
            type: 'integer'
    } */
    /* #swagger.parameters['updatedTalk'] = {
            in: 'body',
            description: 'Information for the updated talk.',
            required: true,
            type: 'object',
            schema: { $ref: "#/definitions/Talk" }
    } */
    // #swagger.responses[200] = { 
    //   description: 'Talk updated successfully.', 
    //   schema: { $ref: "#/definitions/Talk" } 
    // }
    // #swagger.responses[404] = { description: 'Talk not found.' }
    talkController.updateTalk(req, res);
})



// Talk room
// router.get('room/:id', (req, res) => {
//     res.sendFile(path.join(__dirname, '..', 'public', 'talk.html'));
// });
router.get('/room/:id', function(req, res) {
    // #swagger.tags = ['Room']
    // #swagger.description = 'Endpoint to get a specific room.'
    /* #swagger.parameters['id'] = {
            description: 'Room ID.',
            type: 'integer'
    } */
    // #swagger.responses[200] = { 
    //   description: 'Room found and HTML file sent.', 
    // }
    // #swagger.responses[404] = { description: 'Room not found.' }
    res.sendFile(path.join(__dirname, '..', 'public', 'talk.html'));
})




module.exports = router;
