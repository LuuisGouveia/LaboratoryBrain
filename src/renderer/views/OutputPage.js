import { ClientController } from "../controllers/ClientController.js";
import { JobController } from "../controllers/JobController.js";
import { OutuputController } from "../controllers/OutputController.js";
import { Output } from "../entities/Output.js";

export class OutputPage {
  static html() {
    const template = `
        <form class="form" id="form">
      <div class="form-comp">
        <select name="clients" id="clients">
          <option value="0">Selecione o Cliente...</option>
        </select>
      </div>
      <div class="form-comp"><span id="client_id"></span></div>
      <div class="form-comp">
        <select name="dentists" id="dentists">
          <option value="0">Selecione o Dentista...</option>
        </select>
      </div>
      <div class="form-comp">
        <select name="jobs" id="jobs">
          <option value="0">Selecione o Trabalho...</option>
        </select>
      </div>
      <div class="form-comp">
        <label for="additional">Adicional:</label>
        <input id="additional" type="text" />
        <input id="additional-price" type="number" step="0.01"/>
      </div>
      <div class="form-comp">
        <label for="pacient">Paciente:</label>
        <input id="pacient" type="text" placeholder="Paciente" />
      </div>
      <div class="form-comp">
        <label for="quantity">Quantidade:</label>
        <input id="quantity" type="number" />
      </div>
      <div class="form-comp"><span id="price"></span></div>
      <div class="form-comp"><span id="total"></span></div>
      <div class="form-comp">
        <label for="date">Data:</label> <input id="date" type="date" />
      </div>
    </form>`;
    return template;
  }

  static async loadSelectClients() {
    const clients = await ClientController.show();
    const selectClients = document.getElementById("clients");
    clients.forEach((client) => {
      const optionClient = document.createElement("option");
      optionClient.value = client.id;
      optionClient.text = client.name;
      selectClients.appendChild(optionClient);
      const dentist = JSON.parse(client.dentist);
      this.loadSelectDentists(dentist);
      this.loadSelectJobs(client.joblist_name);
      const spanID = document.getElementById("client_id");
      spanID.innerHTML = `<p>ID do cliente: ${client.id}</p>`;
    });
  }

  static async loadSelectJobs(joblist_name) {
    const jobs = await JobController.show(joblist_name);
    const selectJobs = document.getElementById("jobs");
    jobs.forEach((job) => {
      const option = document.createElement("option");
      option.value = job.price;
      option.text = job.description;
      selectJobs.appendChild(option);
    });
    const selectedIndexJobs = selectJobs.selectedIndex;
    const selectedOptionJobs = selectJobs.options[selectedIndexJobs];
    const spanPrice = document.getElementById("price");
    spanPrice.innerHTML = `<p>Valor unitário: ${selectedOptionJobs.value}</p>`;
    const quantity = document.getElementById("quantity").value;
    const spanTotal = document.getElementById("total");
    spanTotal.innerHTML = `<p>Valor Total: ${
      selectedOptionJobs.value * quantity
    }</p>`;
  }

  static loadSelectDentists(dentist) {
    const selectDentists = document.getElementById("dentists");
    for (const key in dentist) {
      const dentist_name = dentist[key];
      const option = document.createElement("option");
      option.value = key;
      option.text = dentist_name;
      selectDentists.appendChild(option);
    }
  }

  static submit() {
    document.getElementById("form").addEventListener("submit", (event) => {
      event.preventDefault();
      const selectClients = document.getElementById("clients");
      const selectedIndexClients = selectClients.selectedIndex;
      const selectedOptionClients = selectClients.options[selectedIndexClients];

      const selectJobs = document.getElementById("jobs");
      const selectedIndexJobs = selectJobs.selectedIndex;
      const selectedOptionJobs = selectJobs.options[selectedIndexJobs];

      const selectDentists = document.getElementById("dentists");
      const selectedIndexDentists = selectDentists.selectedIndex;
      const selectedOptionDentists =
        selectDentists.options[selectedIndexDentists];

      const client_id = selectedOptionClients.value;
      const client_name = selectedOptionClients.text;
      const dentist = selectedOptionDentists.text;
      const job = selectedOptionJobs.text;
      const additional = document.getElementById("additional").value;
      const additional_price =
        document.getElementById("additional-price").value;
      const pacient = document.getElementById("pacient").value;
      const quantity = document.getElementById("quantity").value;
      const price = parseFloat(selectedOptionJobs.value);
      const total = parseFloat(quantity * price);
      const date = document.getElementById("date").value;

      const output = new Output(
        client_id,
        client_name,
        dentist,
        pacient,
        job,
        additional,
        additional_price,
        quantity,
        price,
        total,
        date
      );
      OutuputController.add(output);
    });
  }
}
