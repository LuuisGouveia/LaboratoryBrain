export class ClientController {
  constructor() {
    this.clients = [];
  }
  static async add(client) {
    const query =
      "INSERT INTO clients (name, address, contact, dentist_list, joblist_name) VALUES (?, ?, ?, ?, ?)";
    const params = [client.name, client.address, client.contact];
    await window.api.add(query, params);
  }
  static async remove(client_id) {
    const query = "DELETE FROM clients WHERE id = ?";
    const params = client_id;
    await window.api.remove(query, params);
  }
  static async show() {
    const query = "SELECT * FROM clients ORDER BY name ASC";
    const params = await window.api.show(query);
    return params;
  }
  static async edit(fields, client_id) {
    const updates = Object.keys(fields)
      .map((field) => `${field} = ?`)
      .join(", ");
    const params = Object.values(fields);
    params.push(client_id);

    const query = `UPDATE clients SET ${updates} WHERE id = ?`;
    await window.api.edit(query, params);
  }
}
