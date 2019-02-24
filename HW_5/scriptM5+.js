"use srtict";

const PRIORITY_TYPES = {
  LOW: 0,
  NORMAL: 1,
  HIGH: 2
};

const Notepad = function Notepad(notes = []) {
  this.notes = notes;
  this.getNotes = function() {
    return this.notes;
  };

  this.findNoteById = function(id) {
    return this.notes.find(note => note.id === id);
  };

  this.saveNote = function(note) {
    this.notes.push(note);
    return note;
  };

  this.deleteNote = function(id) {
    const index = this.notes.findIndex(note => note.id === id);
    this.notes.splice(index, 1);
  };

  this.updateNoteContent = function(id, updatedContent) {
    const note = this.findNoteById(id);
    return Object.assign(note, updatedContent);
  };

  this.updateNotePriority = function(id, priority) {
    return this.updateNoteContent(id, { priority });
  };
  this.filterNotesByQuery = function(query) {
    const filtredNotes = [];

    for (const note of this.notes) {
      if (
        note.title.toLowerCase().includes(query.toLowerCase()) ||
        note.body.toLowerCase().includes(query.toLowerCase())
      ) {
        filtredNotes.push(note);
      }
    }
    return filtredNotes;
  };

  this.filterNotesByPriority = function(priority) {
    const filtredNotes = [];

    for (const note of this.notes) {
      if (note.priority === priority) {
        filtredNotes.push(note);
      }
    }
    return filtredNotes;
  };
};

Notepad.PRIORITIES = {
  0: { id: 0, value: 0, name: "Low" },
  1: { id: 1, value: 1, name: "Normal" },
  2: { id: 2, value: 2, name: "High" }
};
Notepad.getPriorityName = function getPriorityName(priorityId) {
  return this.PRIORITIES[priorityId].name;
};
const initialNotes = [
  {
    id: "id-1",
    title: "JavaScript essentials",
    body:
      "Get comfortable with all basic JavaScript concepts: variables, loops, arrays, branching, objects, functions, scopes, prototypes etc",
    priority: PRIORITY_TYPES.HIGH
  },
  {
    id: "id-2",
    title: "Refresh HTML and CSS",
    body:
      "Need to refresh HTML and CSS concepts, after learning some JavaScript. Maybe get to know CSS Grid and PostCSS, they seem to be trending.",
    priority: PRIORITY_TYPES.NORMAL
  }
];

console.log(Notepad.getPriorityName(PRIORITY_TYPES.LOW)); // "Low"
console.log(Notepad.getPriorityName(PRIORITY_TYPES.NORMAL)); // "Normal"
console.log(Notepad.getPriorityName(PRIORITY_TYPES.HIGH)); // "High"

const notepad = new Notepad(initialNotes);

console.log("Все текущие заметки: ", notepad.getNotes());

notepad.saveNote({
  id: "id-3",
  title: "Get comfy with Frontend frameworks",
  body:
    "First must get some general knowledge about frameworks, then maybe try each one for a week or so. Need to choose between React, Vue and Angular, by reading articles and watching videos.",
  priority: PRIORITY_TYPES.NORMAL
});

notepad.saveNote({
  id: "id-4",
  title: "Winter clothes",
  body:
    "Winter is coming! Need some really warm clothes: shoes, sweater, hat, jacket, scarf etc. Maybe should get a set of sportwear as well so I'll be able to do some excercises in the park.",
  priority: PRIORITY_TYPES.LOW
});

console.log("Все текущие заметки: ", notepad.getNotes());

notepad.updateNotePriority("id-4", PRIORITY_TYPES.NORMAL);

console.log(
  "Заметки после обновления приоритета для id-4: ",
  notepad.getNotes()
);

notepad.updateNotePriority("id-3", PRIORITY_TYPES.LOW);

console.log(
  "Заметки после обновления приоритета для id-3: ",
  notepad.getNotes()
);

console.log(
  'Отфильтровали заметки по ключевому слову "html": ',
  notepad.filterNotesByQuery("html")
);

console.log(
  'Отфильтровали заметки по ключевому слову "javascript": ',
  notepad.filterNotesByQuery("javascript")
);

console.log(
  "Отфильтровали заметки по нормальному приоритету: ",
  notepad.filterNotesByPriority(PRIORITY_TYPES.NORMAL)
);

notepad.updateNoteContent("id-3", {
  title: "Get comfy with React.js or Vue.js"
});
console.log(
  "Заметки после обновления контента заметки с id-3: ",
  notepad.getNotes()
);

notepad.deleteNote("id-2");
console.log("Заметки после удаления с id -2: ", notepad.getNotes());
