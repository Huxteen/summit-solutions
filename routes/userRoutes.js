// routes/userRoutes.js
const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const { check } = require('express-validator');
const ensureAuthenticated = require('../middleware/ensureAuthenticated');

router.post('/register', [
  check('email').isEmail(),
  check('password').isLength({ min: 5 }),
  check('first_name').notEmpty(),
  check('last_name').notEmpty()
], userController.register);

router.post('/login', userController.login);

router.get('/users', userController.getUsers);

router.post('/register-admin', ensureAuthenticated, [
  check('email').isEmail(),
  check('password').isLength({ min: 5 }),
  check('first_name').notEmpty(),
  check('last_name').notEmpty()
], userController.registerAdmin);

module.exports = router;
