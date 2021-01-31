const Note = require("../models/Note");

// add new reminder
exports.newNote = async (req, res, next) => {
  const note = new Note(req.body);

  try {
    await note.save();
    res.json({ message: "Reminder added successfully" });
  } catch (error) {
    console.log(error);
    next();
  }
};

//get all the reminders
exports.getNotes = async (req, res, next) => {
  try {
    const notes = await Note.find({});
    res.json(notes);
  } catch (error) {
    console.log(error);
    next();
  }
};
