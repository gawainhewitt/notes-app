class NotesView {
  constructor (model) {
    this.model = model;
  }
  displayNotes = () => {
    this.model.getNotes().forEach(note => {
      let el = document.createElement("div");
      el.className = 'note';
      el.innerText = note;
      document.getElementById("main-container").append(el);
    });
  };
}

module.exports = NotesView;