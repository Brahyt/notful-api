const express = require('express');
const foldersRoute = express.Router();
const FoldersServices = require('../services/FoldersServices');
const parseJson = express.json();

foldersRoute
  .route('/')
  .get((req, res, next) => {
    FoldersServices.getAllFolders(req.app.get('db'))
      .then((result) => res.send(result));
  })
  .post(parseJson, (req, res, next) => {
    const {folder_name} = req.body
    const newFolder = {folder_name}
    FoldersServices.insertFolder(req.app.get('db'), newFolder)
      .then(result => res.json(result))
  })

module.exports = foldersRoute;
