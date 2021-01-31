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

//get a note by ID
exports.getNote = async (req, res, next) => {
  try {
    const note = await Note.findById(req.params.id);
    res.json(note);
  } catch (error) {
    console.log(error);
    next();
  }
};

//update note by ID
exports.updateNote = async (req, res, next) => {
  try {
    const note = await Note.findOneAndUpdate({ _id: req.params.id }, req.body, {
      new: true,
    });
    res.json(note);
  } catch (error) {
    console.log(error);
    next();
  }
};
