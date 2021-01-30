const express = require("express");
const router = express.Router();
const noteController = require("../controllers/noteController");

//add new note
router.post("/notes", noteController.newNote);

module.exports = router;
