const express = require("express");
const router = express.Router();
const noteController = require("../controllers/noteController");

//add new note
router.post("/notes", noteController.newNote);

//get all the notes
router.get("/notes", noteController.getNotes);

module.exports = router;
