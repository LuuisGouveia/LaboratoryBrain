export class NoteController {
  static async add(note) {
    const query = `INSERT INTO notes (client_id,
    client_name,
    output_list,
    period,
    date,
    total)  VALUES (?,?,?,?,?,?)`;
    const params = [
      note.client_id,
      note.client_name,
      note.output_list,
      note.period,
      note.date,
      note.total,
    ];
    console.log(params);
    await window.api.add(query, params);
  }
  static async remove(note_id) {
    const query = "DELETE FROM notes WHERE id = ?";
    const params = note_id;
    await window.api.remove(query, params);
  }
  static async show() {
    const query = "SELECT * FROM notes ORDER BY date ASC";
    const params = await window.api.show(query);
    return params;
  }
  static async edit(fields, note_id) {
    const updates = Object.keys(fields)
      .map((field) => `${field} = ?`)
      .join(", ");
    const params = Object.values(fields);
    params.push(note_id);

    const query = `UPDATE notes SET ${updates} WHERE id = ?`;
    await window.api.edit(query, params);
  }
}
