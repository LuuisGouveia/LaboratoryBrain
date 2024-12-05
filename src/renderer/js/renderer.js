import { Client } from "../entities/Client.js";

let name = "josé";
let address = "rua qualquer, 156";
let contact = 16992999191;

const cliente = new Client(name, address, contact);

async function add(cliente) {
  const query = "INSERT INTO clients VALUES (?, ?, ?, ?)";
  const json = JSON.stringify(cliente);
  await window.api.add(query, json);
}

add(cliente);
