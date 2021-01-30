const mongoose = requiere("mongoose");

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
  time: {
    type: String,
    trim: true,
  },
  date: {
    type: String,
    trim: true,
  },
});

module.exports = mogoose.model("Note", notesSchema);
