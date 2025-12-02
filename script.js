const noteTitle = document.getElementById("note-title");
const noteContent = document.getElementById("note-content");
const saveButton = document.getElementById("save-btn");

// array to store all the notes
let notesArray = [];

//create a new note
function createNote(title, content) {
  let newNote = {
    id: Date.now().toString(),
    title: title,
    content: content,
    createdAt: Date.now(),
  };
  notesArray.push(newNote);
  saveToLocalStorage(notesArray);
}

function saveToLocalStorage(notes) {
  let notesString = JSON.stringify(notes);
  localStorage.setItem("notes", notesString);
}

// save new note
saveButton.addEventListener("click", (e) => {
  e.preventDefault();
  createNote(noteTitle.value, noteContent.value);
  //clear inputs after saving
  clearInputs();
});

function clearInputs() {
  noteTitle.value = "";
  noteContent.value = "";
}
