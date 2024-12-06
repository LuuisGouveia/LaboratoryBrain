export class ClientController {
  constructor() {
    this.clients = [];
  }
  static async add(client) {
    const query =
      "INSERT INTO clients (name, address, contact, dentist_list, joblist_id) VALUES (?, ?, ?, ?, ?)";
    const params = [client.name, client.address, client.contact];
    await window.api.add(query, params);
  }

  static async remove(client_id) {
    const query = "DELETE FROM clients WHERE id = ?";
    const params = client_id;
    await window.api.remove(query, params);
  }
}
