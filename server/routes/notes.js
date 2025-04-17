const express = require('express');
const Note = require('../models/Note');
const authMiddleware = require('../middleware/authMiddleware');

const router = express.Router();

// Get all notes
router.get('/', authMiddleware, async (req, res) => {
  const notes = await Note.find({ user: req.user.id });
  res.json(notes);
});

// Add a new note
router.post('/', authMiddleware, async (req, res) => {
  const { title, content } = req.body;
  const note = new Note({ title, content, user: req.user.id });
  await note.save();
  res.status(201).json(note);
});

// Update a note
router.put('/:id', authMiddleware, async (req, res) => {
  const { title, content } = req.body;
  const note = await Note.findByIdAndUpdate(req.params.id, { title, content }, { new: true });
  res.json(note);
});

// Delete a note
router.delete('/:id', authMiddleware, async (req, res) => {
  await Note.findByIdAndDelete(req.params.id);
  res.status(204).send();
});

module.exports = router;
