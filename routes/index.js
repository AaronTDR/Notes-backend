const express = require("express");
const router = express.Router();
const noteController = require("../controllers/noteController");

router.post("/notes", noteController.newNote);
router.get("/notes", noteController.getNotes);
router.get("/notes/:id", noteController.getNote);

module.exports = router;
