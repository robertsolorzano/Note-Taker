const router = require('express').Router();
const { readFromFile, writeToFile } = require('../helpers/fsUtils');
const { v4: uuidv4 } = require('uuid');

router.get('/notes', (req, res) => {
  readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)));
});

router.post('/notes', (req, res) => {
  const newNote = {
    id: uuidv4(),
    title: req.body.title,
    text: req.body.text,
  };

  readFromFile('./db/db.json')
    .then((data) => {
      const notes = JSON.parse(data);
      notes.push(newNote);
      return notes;
    })
    .then((notes) => writeToFile('./db/db.json', notes))
    .then(() => res.json(newNote))
    .catch((err) => {
      console.error(err);
      res.status(500).json({ error: 'Failed to save note.' });
    });
});

module.exports = router;