// routes/userRoutes.js
const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const { check } = require('express-validator');
const ensureAuthenticated = require('../middleware/ensureAuthenticated');

// router.post('/register', [
//   check('email').isEmail(),
//   check('password').isLength({ min: 5 }),
//   check('first_name').notEmpty(),
//   check('last_name').notEmpty()
// ], userController.register);
router.post('/register', [
  check('email').isEmail(),
  check('password').isLength({ min: 5 }),
  check('first_name').notEmpty(),
  check('last_name').notEmpty()
], function(req, res) {
    // #swagger.tags = ['User']
    // #swagger.description = 'Endpoint to register a new user.'
    /* #swagger.parameters['newUser'] = {
            in: 'body',
            description: 'Information for the new user.',
            required: true,
            type: 'object',
            schema: { $ref: "#/definitions/User" }
    } */
    // #swagger.responses[201] = { 
    //   description: 'User registered successfully.', 
    //   schema: { $ref: "#/definitions/User" } 
    // }
    // #swagger.responses[400] = { description: 'Invalid data.' }
    userController.register(req, res);
})


// router.post('/login', userController.login);
router.post('/login', function(req, res) {
  // #swagger.tags = ['User']
  // #swagger.description = 'Endpoint to login a user.'
  /* #swagger.parameters['user'] = {
          in: 'body',
          description: 'User login details.',
          required: true,
          type: 'object',
          schema: { $ref: "#/definitions/UserLogin" }
  } */
  // #swagger.responses[200] = { 
  //   description: 'User logged in successfully.', 
  //   schema: { $ref: "#/definitions/User" } 
  // }
  // #swagger.responses[400] = { description: 'Invalid credentials.' }
  userController.login(req, res);
})


// router.get('/users', userController.getUsers);
router.get('/users', function(req, res) {
  // #swagger.tags = ['User']
  // #swagger.description = 'Endpoint to get a list of users.'
  // #swagger.responses[200] = { 
  //   description: 'List of users.', 
  //   schema: { $ref: "#/definitions/Users" } 
  // }
  userController.getUsers(req, res);
})


// router.post('/register-admin', ensureAuthenticated, [
//   check('email').isEmail(),
//   check('password').isLength({ min: 5 }),
//   check('first_name').notEmpty(),
//   check('last_name').notEmpty()
// ], userController.registerAdmin);
router.post('/register-admin', ensureAuthenticated, [
  check('email').isEmail(),
  check('password').isLength({ min: 5 }),
  check('first_name').notEmpty(),
  check('last_name').notEmpty()
], function(req, res) {
    // #swagger.tags = ['Admin']
    // #swagger.description = 'Endpoint to register a new admin.'
    /* #swagger.parameters['newAdmin'] = {
            in: 'body',
            description: 'Information for the new admin.',
            required: true,
            type: 'object',
            schema: { $ref: "#/definitions/Admin" }
    } */
    // #swagger.responses[201] = { 
    //   description: 'Admin registered successfully.', 
    //   schema: { $ref: "#/definitions/Admin" } 
    // }
    // #swagger.responses[400] = { description: 'Invalid data.' }
    userController.registerAdmin(req, res);
})


module.exports = router;
