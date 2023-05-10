// controllers/talkController.js
const Talk = require('../models/Talk');

// Create talks
exports.createTalk = async (req, res) => {
  try {
    // Get user from request
    const user = req.user;

    // Check if user is logged in
    if (!user) {
      return res.status(401).json({ message: 'You must be logged in to create a talk.' });
    }

    // Create new talk
    const talk = await Talk.create({
      ...req.body,
      creator_id: user.id  // Associate talk with user
    });

    res.status(201).json(talk);
  } catch (error) {
    res.status(500).json({ message: 'An error occurred.', error: error });
  }
};

// get all talks
exports.getAllTalks = async (req, res) => {
  try {
    const talks = await Talk.findAll(); // Assuming Talk is your Sequelize model
    res.json(talks);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'An error occurred while retrieving talks.' });
  }
};

exports.deleteTalk = async (req, res) => {
  try {
    // Get the ID of the talk to delete from the request parameters
    const talkId = req.params.id;

    // Find the talk by ID and delete it
    const result = await Talk.destroy({ where: { id: talkId } });

    // If no talk was deleted, send a 404 error
    if (!result) {
      return res.status(404).json({ message: 'Talk not found.' });
    }

    // Otherwise, send a 200 status and a success message
    res.status(200).json({ message: 'Talk deleted successfully.' });
  } catch (error) {
    // If an error occurred, send a 500 status and the error message
    res.status(500).json({ message: 'An error occurred.', error: error });
  }
};

exports.getTalk = async (req, res) => {
  try {
    const talk = await Talk.findByPk(req.params.id);
    if (!talk) {
      return res.status(404).json({ message: 'Talk not found.' });
    }
    res.json(talk);
  } catch (error) {
    res.status(500).json({ message: 'An error occurred.', error: error });
  }
};

exports.updateTalk = async (req, res) => {
  try {
    const talk = await Talk.findByPk(req.params.id);
    if (!talk) {
      return res.status(404).json({ message: 'Talk not found.' });
    }
    const updatedTalk = await talk.update(req.body);
    res.json(updatedTalk);
  } catch (error) {
    res.status(500).json({ message: 'An error occurred.', error: error });
  }
};


