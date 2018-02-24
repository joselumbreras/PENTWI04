import Note from './../note';

class NotesController {

    constructor() {
        this.counter = 0;
        this.notes = {};
    }

    createNote(text) {
        return new Note(++this.counter, text);
    }

    saveNote(note) {
        this.notes[note.id] = note;
    }

    removeNote(id) {
        delete this.notes[id]
    }

}

export default NotesController;