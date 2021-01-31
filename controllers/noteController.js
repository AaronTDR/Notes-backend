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
