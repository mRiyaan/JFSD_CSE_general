const express = require('express');
const router = express.Router();
const Note = require('../models/Note');

router.get('/', async (req, res) => {
  const notes = await Note.find().sort({ createdAt: -1 });
  res.json(notes);
});

router.post('/', async (req, res) => {
  const newNote = new Note(req.body);
  const savedNote = await newNote.save();
  res.json(savedNote);
});

router.put('/:id', async (req, res) => {
  const updatedNote = await Note.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(updatedNote);
});

router.delete('/:id', async (req, res) => {
  await Note.findByIdAndDelete(req.params.id);
  res.json({ message: 'Note deleted' });
});

module.exports = router;