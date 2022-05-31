console.log("the notes app is running");
const NotesView = require('../notesview');
const NotesModel = require('./notesModel');

const model = new NotesModel();

console.log(model.getNotes());

const notesView = new NotesView(model);

model.addNote("this is so exciting I can barely cope");

notesView.displayNotes();