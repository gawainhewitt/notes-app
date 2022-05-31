/**
 * @jest-environment jsdom
 */

 const fs = require('fs');
 const NotesView = require('./notesview');
 const model = {
   getNotes: () => ['test note']
 }
 
 describe('A test for my web page', () => {
 
   beforeEach(() => {
     document.body.innerHTML = fs.readFileSync('./index.html');
   });
 
   it('displays notes on the web page', () => {
   
     const notesView = new NotesView(model);
     notesView.displayNotes();
     expect(document.getElementsByClassName('note')[0].innerText).toEqual('test note');
   });
   it('adds a note', () => {
     
   })
 });