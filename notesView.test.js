/**
 * @jest-environment jsdom
 */

 const fs = require('fs');
 const NotesView = require('./notesview');
 const model = {
   getNotes: () => ['test note']
 }
 
 describe('A test for my web page', () => {
 
   // We can use the beforeEach() hook 
   // to set the jest `document` HTML before each test
   beforeEach(() => {
     document.body.innerHTML = fs.readFileSync('./index.html');
   });
 
   it('displays notes on the web page', () => {
     // 1. Arrange - instantiate our notesView class
     const notesView = new NotesView(model);
 
     // 2. Act - call any method that modifies the page
     
     notesView.displayNotes();
 
     // 3. Assert - we assert the page contains what it should.
     // Usually, you will use `.querySelector` (and friends)
     // here, and assert the text content, the number of elements,
     // or other things that make sense for your test.
     expect(document.getElementsByClassName('note').innerText).toEqual('test note');
   });
 });