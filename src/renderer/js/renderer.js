import { Client } from "../entities/Client.js";
import { ClientController } from "../controllers/ClientController.js";

let name = "joana";
let address = "rua batata, 123";
let contact = 16992998181;

const client = new Client(name, address, contact);

const client_id = 2;
ClientController.remove(client_id);
