export class ClientPage {
  static html() {
    const template = `
        <div id="form" class="form">
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
            <button type="button" class="btn">Cadastrar</button>
          </div>
    </div>`;
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
}
