// controllers/talkAttendeeController.js
const TalkAttendee = require('../models/TalkAttendee');
const User = require('../models/User');


exports.createTalkAttendee = async (req, res) => {
  try {
    // Check if a TalkAttendee with the given talk_id and attendee_id already exists
    const existingTalkAttendee = await TalkAttendee.findOne({
      where: {
        talk_id: req.body.talk_id,
        attendee_id: req.body.attendee_id
      }
    });

    if (existingTalkAttendee) {
      // If a TalkAttendee with the given talk_id and attendee_id already exists, return an error
      return res.status(400).json({ message: 'Attendee has already been added to this talk' });
    }

    // If a TalkAttendee with the given talk_id and attendee_id does not exist, create a new one
    const talkAttendee = await TalkAttendee.create(req.body);
    res.status(201).json(talkAttendee);
  } catch (err) {
    res.status(400).json({ message: 'Could not create TalkAttendee', error: err });
  }
};



exports.getTalkAttendee = async (req, res) => {
  try {
    const talkAttendee = await TalkAttendee.findByPk(req.params.id);

    if (!talkAttendee) {
      return res.status(404).json({ message: 'TalkAttendee not found' });
    }

    res.status(200).json(talkAttendee);
  } catch (err) {
    res.status(400).json({ message: 'Could not get TalkAttendee', error: err });
  }
};


exports.getAttendeesForTalk = async (req, res) => {
  try {
    const talkAttendees = await TalkAttendee.findAll({
      where: {
        talk_id: req.params.talk_id
      },
      include: {
        model: User,
        as: 'attendee'
      }
    });

    if (!talkAttendees) {
      return res.status(404).json({ message: 'No attendees found for this talk' });
    }

    res.status(200).json(talkAttendees);
  } catch (err) {
    console.log(err);
    res.status(400).json({ message: 'Could not get attendees', error: err });
  }
};
