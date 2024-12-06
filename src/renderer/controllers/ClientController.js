export class ClientController {
  constructor() {
    this.clients = [];
  }
  static async add(client) {
    const query =
      "INSERT INTO clients (name, address, contact, dentist_list, joblist_id) VALUES (?, ?, ?, ?, ?)";
    const json = JSON.stringify(client);
    await window.api.add(query, json);
  }
}
