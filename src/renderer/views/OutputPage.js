export class OutputPage {
  static html() {
    const template = `
        <form class="form" id="form">
      <div class="form-comp">
        <select name="clients" id="clients">
          <option value="0">Selecione o Cliente...</option>
        </select>
      </div>
      <div class="form-comp"><span> ID do cliente: 1 </span></div>
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
      <div class="form-comp"><span> Valor Unitário: R$ 0,00 </span></div>
      <div class="form-comp"><span> Valor Total: R$ 0,00 </span></div>
      <div class="form-comp">
        <label for="date">Data:</label> <input id="date" type="date" />
      </div>
    </form>`;
    return template;
  }

  static submit() {
    document.getElementById("form").addEventListener("submit", (event) => {
      event.preventDefault();
      const name = document.getElementById("name").value;
      const address = document.getElementById("address").value;
      const contact = document.getElementById("contact").value;
      const dentist_list = JSON.stringify(this.dentistList());
      const joblist_name = document.getElementById("joblist_name").value;
    });
  }
}
