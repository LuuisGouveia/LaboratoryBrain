import { Client } from "../entities/Client.js";
import { Output } from "../entities/Output.js";
import { ClientController } from "../controllers/ClientController.js";
import { OutuputController } from "../controllers/OutputController.js";

// const dentist = {
//   1: "Dr Ricardo - Unid 1",
//   2: "Dr Ricardo - Unid 2",
//   3: "Dr Fernando - Unid 1",
//   4: "Dr Fernando - Unid 2 ",
// };
// const dentist_list = JSON.stringify(dentist);

// // const client = {
// //   name: "josé",
// //   address: "rua dos bobos, 0",
// //   contact: parseInt(1622552244, 10),
// // };

// // ClientController.add(client);

// console.log(ClientController.show());

// let client_id = 1;
// let fields = {
//   name: "Mais Sorrisos",
//   address: "Rua Guarujá 740",
//   contact: "32377156",
//   dentist_list: dentist_list,
//   joblist_name: "mais_sorrisos",
// };

// ClientController.edit(fields, client_id);

console.log(ClientController.show());

const client_id = 2;
const client_name = "Dr Sandro";
const dentist = "Sandro";
const pacient = "Maria";
const job = "ceramica";
const quantity = 1;
const price = 215.0;
const total = price * quantity;
const date = "12/02/2024";
const output = new Output(
  parseInt(client_id),
  client_name,
  dentist,
  pacient,
  job,
  parseInt(quantity, 10),
  parseFloat(price),
  parseFloat(total),
  date
);

console.log(output);

OutuputController.add(output);
