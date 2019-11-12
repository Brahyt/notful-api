const express = require('express');
const notesRoute = express.Router();
const NotesServices = require('../services/NotesServices');

notesRoute
  .route('/')
  .get((req, res, next) => {
    NotesServices.getAllNotes(req.app.get('db'))
      .then(result => res.send(result));
  });

module.exports = notesRoute;
