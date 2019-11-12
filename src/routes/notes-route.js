const express = require('express');
const notesRoute = express.Router();

notesRoute
  .route('/')
  .get((req, res, next) => {
    res.send('notes')
  })

module.exports = notesRoute;
