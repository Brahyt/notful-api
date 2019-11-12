const express = require('express');
const notesRoute = express.Router();
const NotesServices = require('../services/NotesServices')

notesRoute
  .route('/')
  .get((req, res, next) => {
    res.send('notes')
  })

module.exports = notesRoute;
