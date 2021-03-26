const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const notesSchema = new Schema({
  title: {
    type: String,
    trim: true,
  },
  note: {
    type: String,
    trim: true,
  },
  date: {
    type: String,
    trim: true,
  },
});

module.exports = mongoose.model("Note", notesSchema);
