const FoldersServices = {
  getAllFolders(db) {
    return db('folders')
      .select('*')
  },
  insertFolder(db, folder) {
    return db('folders')
      .insert(folder)
      .returning('*')
      .then(rows => rows[0])
  },
  getFolderById() {

  },
  deleteFolder() {

  },
  updateFolder(){

  }
};

module.exports = FoldersServices;
