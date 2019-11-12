const NotesServices = {
  getAllNotes(db) {
    return db('notes')
      .select('*');
  },
  insertNote(db) {

  },
  getNoteById() {

  },
  deleteNote() {

  },
  updateNote(){

  }
};

module.exports = NotesServices;
