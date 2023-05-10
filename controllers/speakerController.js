// controllers/SpeakerController.js
const Speaker = require('../models/Speaker');
const User = require('../models/User');


exports.addSpeakerToTalk = async (req, res) => {
    const { speaker_id, talk_id, topic } = req.body;
  
    try {
      // Check if the user is already a speaker for the talk
      const existingSpeaker = await Speaker.findOne({ where: { speaker_id, talk_id } });
      console.log("Hello why are you doing this");
      if (existingSpeaker) {
        return res.status(400).json({ message: 'User is already a speaker for this talk.' });
      }
  
      // If not, create a new speaker record
      const speaker = await Speaker.create({ speaker_id, talk_id, topic });
  
      res.status(201).json(speaker);
    } catch (error) {
      res.status(500).json({ message: 'An error occurred.', error: error });
    }
  };
  
exports.getSpeaker = async (req, res) => {
    const { id } = req.params;
  
    try {
      const speaker = await Speaker.findByPk(id);
  
      if (!speaker) {
        return res.status(404).json({ message: 'Speaker not found.' });
      }
  
      res.status(200).json(speaker);
    } catch (error) {
      res.status(500).json({ message: 'An error occurred.', error: error });
    }
};

exports.updateSpeaker = async (req, res) => {
    const { id } = req.params;
    const { speaker_id, talk_id, topic } = req.body;
  
    try {
      const speaker = await Speaker.findByPk(id);
  
      if (!speaker) {
        return res.status(404).json({ message: 'Speaker not found.' });
      }
  
      speaker.speaker_id = speaker_id;
      speaker.talk_id = talk_id;
      speaker.topic = topic;
  
      await speaker.save();
  
      res.status(200).json(speaker);
    } catch (error) {
      res.status(500).json({ message: 'An error occurred.', error: error });
    }
};

exports.deleteSpeaker = async (req, res) => {
    const { id } = req.params;
  
    try {
      const speaker = await Speaker.findByPk(id);
  
      if (!speaker) {
        return res.status(404).json({ message: 'Speaker not found.' });
      }
  
      await speaker.destroy();
  
      res.status(200).json({ message: 'Speaker deleted.' });
    } catch (error) {
      res.status(500).json({ message: 'An error occurred.', error: error });
    }
};


// get all speaker
exports.getAllSpeakers = async (req, res) => {
    try {
      const speakers = await Speaker.findAll();
      res.status(200).json(speakers);
    } catch (error) {
      res.status(500).json({ message: 'An error occurred.', error: error });
    }
  };

// get speaker for talk
exports.getSpeakersForTalk = async (req, res) => {
    const { talk_id } = req.params;
  
    try {
      const speakers = await Speaker.findAll({ where: { talk_id } });

      res.status(200).json(speakers);
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: 'An error occurred.', error: error });
    }
    
  };
  
  
  

  
  
