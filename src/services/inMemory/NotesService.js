const { nanoid } = require('nanoid');

class NotesService {
  constructor() {
    this._notes = [];
  }

  addNote({ title, body, tags }) {
    const id = nanoid(16);
    const createdAtd = new Date().toISOString();
    const updatedAt = createdAtd;

    const newNotes = {
      id,
      title,
      tags,
      body,
      createdAtd,
      updatedAt,
    };

    this._notes.push(newNotes);

    const isSuccess = this._notes.filter((note) => note.id === id).length > 0;
    if (!isSuccess) {
      throw new Error('Catatan gagal ditambahkan');
    }

    return id;
  }
}

module.exports = NotesService;
