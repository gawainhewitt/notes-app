class NotesModel {
  constructor() {
    this.notes = [];
  }

  // ES6 one line functions below
  getNotes = () => this.notes;

  addNote = (note) => this.notes.push(note);

  reset = () => this.notes = [];

}

module.exports = NotesModel;