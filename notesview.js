class NotesView {
  constructor (model) {
    this.model = model.getNotes;
  }
  displayNotes = () => {
      let el = document.createElement("div");
      el.className = 'note';
      el.innerText = "test note";
      document.getElementById("main-container").append(el);
  };

}

module.exports = NotesView;