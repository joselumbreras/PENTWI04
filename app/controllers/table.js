class TableController {

    constructor($, $noteTable, notesController) {
        this.$ = $;
        this.$noteTable = $noteTable;
        this.notesController = notesController;
    }

    onRemoveNote() {
        var self = this;
        return function() {
            var row = self.$(this).parent().parent();
            var id = self.$(this).data().id;

            self.notesController.removeNote(id);

            row.fadeOut('normal', function() {
                self.$(this).remove();
            });
        }
    }

    appendRow(note) {
        var actions = `<td><button class="remove-note" data-id="${note.id}">Eliminar</button></td>`;
        var row = this.$(`<tr><td>${note.id}</td><td>${note.text}</td>${actions}</tr>`);
        row.hide();
        this.$noteTable.find('tbody').append(row);
        row.show('slow');
    }

}

export default TableController;