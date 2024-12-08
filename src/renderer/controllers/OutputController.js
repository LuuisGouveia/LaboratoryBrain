export class OutuputController {
  static async add(output) {
    const query = `INSERT INTO outputs (client_id,
    client_name,
    dentist,
    pacient,
    job, 
    quantity,
    price,
    total,
    date)  VALUES (?,?,?,?,?,?,?,?,?)`;
    const params = [
      output.client_id,
      output.client_name,
      output.dentist,
      output.pacient,
      output.job,
      output.quantity,
      output.price,
      output.total,
      output.date,
    ];
    console.log(params);
    await window.api.add(query, params);
  }
  static async remove(output_id) {
    const query = "DELETE FROM outputs WHERE id = ?";
    const params = output_id;
    await window.api.remove(query, params);
  }
  static async show() {
    const query = "SELECT * FROM outputs ORDER BY date ASC";
    const params = await window.api.show(query);
    return params;
  }
  static async edit(fields, output_id) {
    const updates = Object.keys(fields)
      .map((field) => `${field} = ?`)
      .join(", ");
    const params = Object.values(fields);
    params.push(output_id);

    const query = `UPDATE outputs SET ${updates} WHERE id = ?`;
    await window.api.edit(query, params);
  }
}
