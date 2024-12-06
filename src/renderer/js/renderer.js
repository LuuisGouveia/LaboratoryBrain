import { Client } from "../entities/Client.js";
import { ClientController } from "../controllers/ClientController.js";

let name = "joana";
let address = "rua batata, 123";
let contact = 16992998181;

const cliente = new Client(name, address, contact);

ClientController.add(cliente);

add(cliente);
