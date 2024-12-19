import { Client } from "../entities/Client.js";
import { Output } from "../entities/Output.js";
import { Note } from "../entities/Note.js";
import { Job } from "../entities/Job.js";
import { ClientController } from "../controllers/ClientController.js";
import { OutuputController } from "../controllers/OutputController.js";
import { NoteController } from "../controllers/NoteController.js";
import { JobController } from "../controllers/JobController.js";
import { ClientPage } from "../views/ClientPage.js";
import { OutputPage } from "../views/OutputPage.js";

const menuBtn = document.getElementById("menu-btn");
menuBtn.addEventListener("click", () => {
  const menu = document.getElementById("nav");
  menu.classList.toggle("menu");
});

const clientBtn = document.getElementById("newClient");
const content = document.getElementById("content");

clientBtn.addEventListener("click", () => {
  content.innerHTML = "";
  content.innerHTML = ClientPage.html();
  ClientPage.dentistPlus();
  ClientPage.submit();
});

// JobController.add("carlos", {
//   description: "coroa metaloceramica",
//   price: parseFloat(200.0),
// });

const outputBtn = document.getElementById("newOutput");
outputBtn.addEventListener("click", () => {
  content.innerHTML = "";
  content.innerHTML = OutputPage.html();
  OutputPage.loadSelectClients();
  OutputPage.submit();
});
