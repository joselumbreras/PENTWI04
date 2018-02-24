import NotesController from './controllers/notes';
import TableController from './controllers/table';

$(function() {
    var $noteText = $('#note-text');
    var $noteSave = $('#note-save');
    var $noteTable = $('#note-table');

    var notesController = new NotesController();
    var tableController = new TableController($, $noteTable, notesController);

    $noteSave.click(function(e) {
        e.preventDefault();
        var text = getNoteText();
        if (text) {
            var note = notesController.createNote(text);
            notesController.saveNote(note);
            tableController.appendRow(note);
            clearFields();
        }
    });

    $noteTable.on('click', 'button.remove-note', tableController.onRemoveNote());

    function getNoteText() {
        var text = $noteText.val().trim();

        if (!text.length) {
            alert('Debe ingresar una nota');
            return;
        }

        return text;
    }

    function clearFields() {
        $noteText.val('');
        $noteText.focus();
    }

});