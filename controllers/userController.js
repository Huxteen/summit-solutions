// controllers/userController.js
const { validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const crypto = require('crypto');
const User = require('../models/User');
const jwt = require('jsonwebtoken');
const config = require('../config/config');
const passport = require('passport');
require('../passport');


exports.register = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  // Check if email already exists
  const existingUser = await User.findOne({ where: { email: req.body.email } });
  if (existingUser) {
    return res.status(400).json({ message: 'Email already in use.' });
  }

  try {
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    const verificationString = crypto.randomBytes(32).toString('hex');

    const user = await User.create({
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      email: req.body.email,
      password: hashedPassword,
      is_verified: false,
      verification_string: verificationString,
      created_at: new Date(),
      updated_at: new Date(),
      is_admin: false
    });

    // TODO: send an email to the user with a link to verify their account.

    res.json({ message: 'Registration successful. Please check your email to verify your account.' });
  } catch (err) {
    res.status(500).json({ message: 'An error occurred during registration.' });
  }
};

exports.login = (req, res, next) => {
    passport.authenticate('local', (err, user, info) => {
      if (err || !user) {
        return res.status(400).json({
          message: 'Something went wrong....',
          user: user
        });
      }
      req.login(user, (err) => {
        if (err) {
          res.send(err);
        }
        // generate a signed json web token with the contents of user object and return it in the response
        const token = jwt.sign(user.toJSON(), config.jwtSecret);
        return res.json({ token, user });
      });
    })(req, res, next);
  };
  

exports.getUsers = async (req, res) => {
  try {
    const users = await User.findAll();
    res.json(users);
  } catch (err) {
    res.status(500).json({ message: 'An error occurred while retrieving users.' });
  }
};

exports.registerAdmin = async (req, res) => {
    // Check if the user is authenticated and is an admin
    if (!req.isAuthenticated() || !req.user.is_admin) {
        return res.status(403).json({ message: 'You are not authorized to register an admin.' });
    }

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    // Check if email already exists
    const existingUser = await User.findOne({ where: { email: req.body.email } });
    if (existingUser) {
        return res.status(400).json({ message: 'Email already in use.' });
    }
  
    try {
      const hashedPassword = await bcrypt.hash(req.body.password, 10);
      const verificationString = crypto.randomBytes(32).toString('hex');

  
  
      const user = await User.create({
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        email: req.body.email,
        password: hashedPassword,
        is_verified: false,
        verification_string: verificationString,
        created_at: new Date(),
        updated_at: new Date(),
        is_admin: true
      });
      
    // send an email to the user with a link to verify their account.
    //   const transporter = nodemailer.createTransport({
    //     service: 'gmail',
    //     auth: {
    //       user: 'your-email@gmail.com',
    //       pass: 'your-password'
    //     }
    //   });
  
    //   const mailOptions = {
    //     from: 'your-email@gmail.com',
    //     to: user.email,
    //     subject: 'Verify your account',
    //     text: `Please verify your account by clicking the following link: http://localhost:3000/verify?token=${verificationString}`
    //   };
  
    //   await transporter.sendMail(mailOptions);
  
      res.json({ message: 'Admin registration successful. Please check your email to verify your account.' });
    } catch (err) {
      res.status(500).json({ message: 'An error occurred during registration.' });
    }
}
