import { Client } from "../entities/Client.js";
import { ClientController } from "../controllers/ClientController.js";

export class ClientPage {
  static html() {
    const template = `
        <form action="#" method="POST" id="form" class="form">
          <div class="form-comp">
            <label for="name"> Nome: </label>
            <input type="text" id="name" />
          </div>
          <div class="form-comp">
            <label for="address"> Endereço: </label>
            <input type="text" id="address" />
          </div>
          <div class="form-comp">
            <label for="contact"> Contato: </label>
            <input type="text" id="contact" />
          </div>
          <div>
            <label for="">Dentistas Conveniados:</label>
            <button type="button" class="btn" id="dentist-btn">
              +Dentista
            </button>
          </div>
          <div class="form-comp" id="dentist"></div>
          <div class="form-comp">
            <label for="joblist_name"> Nome da Tabela: </label>
            <input type="text" id="joblist_name" />
          </div>
          <div>
            <button type="submit" class="btn" id="form-btn">Cadastrar</button>
          </div>
    </form>`;
    return template;
  }

  static dentistPlus() {
    const dentistbtn = document.getElementById("dentist-btn");
    const dentist = document.getElementById("dentist");
    dentistbtn.addEventListener("click", () => {
      const input = document.createElement("input");
      input.className = "dentist_list";
      dentist.appendChild(input);
    });
  }

  static submit() {
    document.getElementById("form").addEventListener("submit", (event) => {
      event.preventDefault();
      const name = document.getElementById("name").value;
      const address = document.getElementById("address").value;
      const contact = document.getElementById("contact").value;
      const dentist_list = JSON.stringify(this.dentistList());
      const joblist_name = document.getElementById("joblist_name").value;

      const client = new Client(
        name,
        address,
        contact,
        dentist_list,
        joblist_name
      );
      console.log(client);
      ClientController.add(client);
    });
  }
  static dentistList() {
    const dentistList = document.getElementsByClassName("dentist_list");
    const dentist_list = {};
    for (let i = 0; i < dentistList.length; i++) {
      dentist_list[i + 1] = dentistList[i].value;
    }
    return dentist_list;
  }
}
