/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(1);


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _notes = __webpack_require__(2);

var _notes2 = _interopRequireDefault(_notes);

var _table = __webpack_require__(4);

var _table2 = _interopRequireDefault(_table);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

$(function () {
    var $noteText = $('#note-text');
    var $noteSave = $('#note-save');
    var $noteTable = $('#note-table');

    var notesController = new _notes2.default();
    var tableController = new _table2.default($, $noteTable, notesController);

    $noteSave.click(function (e) {
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

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _note = __webpack_require__(3);

var _note2 = _interopRequireDefault(_note);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var NotesController = function () {
    function NotesController() {
        _classCallCheck(this, NotesController);

        this.counter = 0;
        this.notes = {};
    }

    _createClass(NotesController, [{
        key: 'createNote',
        value: function createNote(text) {
            return new _note2.default(++this.counter, text);
        }
    }, {
        key: 'saveNote',
        value: function saveNote(note) {
            this.notes[note.id] = note;
        }
    }, {
        key: 'removeNote',
        value: function removeNote(id) {
            delete this.notes[id];
        }
    }]);

    return NotesController;
}();

exports.default = NotesController;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Note = function Note(id, text) {
    _classCallCheck(this, Note);

    this.id = id;
    this.text = text;
};

exports.default = Note;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var TableController = function () {
    function TableController($, $noteTable, notesController) {
        _classCallCheck(this, TableController);

        this.$ = $;
        this.$noteTable = $noteTable;
        this.notesController = notesController;
    }

    _createClass(TableController, [{
        key: 'onRemoveNote',
        value: function onRemoveNote() {
            var self = this;
            return function () {
                var row = self.$(this).parent().parent();
                var id = self.$(this).data().id;

                self.notesController.removeNote(id);

                row.fadeOut('normal', function () {
                    self.$(this).remove();
                });
            };
        }
    }, {
        key: 'appendRow',
        value: function appendRow(note) {
            var actions = '<td><button class="remove-note" data-id="' + note.id + '">Eliminar</button></td>';
            var row = this.$('<tr><td>' + note.id + '</td><td>' + note.text + '</td>' + actions + '</tr>');
            row.hide();
            this.$noteTable.find('tbody').append(row);
            row.show('slow');
        }
    }]);

    return TableController;
}();

exports.default = TableController;

/***/ })
/******/ ]);