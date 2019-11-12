const express = require('express');
const foldersRoute = express.Router();
const FoldersServices = require('../services/FoldersServices');

foldersRoute
  .route('/')
  .get((req, res, next) => {
    FoldersServices.getAllFolders(req.app.get('db'))
      .then(() => res.end());
});

module.exports = foldersRoute;
