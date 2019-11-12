const express = require('express');
const foldersRoute = express.Router();

foldersRoute
  .route('/')
  .get((req, res, next) => {
    res.send('folders')
  })

module.exports = foldersRoute;
