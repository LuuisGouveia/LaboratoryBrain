export class Home {
  static html() {
    const template = `<div id="content-head">
          <label for="showType">O que você quer ver?</label>
          <select name="showType" id="showType" class="p-r">
            <option value="0">Selecione</option>
            <option value="1">Clientes</option>
            <option value="2">Tabelas</option>
            <option value="3">Notas</option>
            <option value="4">Registros</option>
          </select>
          <div id="selectClientTable"></div>
          <input type="text" id="search-input" />
          <label for="dateFilterStart">De: </label>
          <input type="date" id="dateFilterStart" />
          <label for="dateFilterEnd">Até: </label>
          <input type="date" id="dateFilterEnd" />
          <button type="submit" id="search-btn" class="btn p-m">
            Pesquisar
          </button>
        </div>
        <div id="content-body">
          <table>
            <tr>
              <th>Exemplo</th>
              <th>Exemplo</th>
              <th>Exemplo</th>
              <th>Exemplo</th>
            </tr>
            <tr>
              <td>teste</td>
              <td>teste</td>
              <td>teste</td>
              <td>teste</td>
              <td>
                <button type="button" id="tableDeleteBtn" class="btn p-m">
                  Excluir
                </button>
                <button type="button" id="tableEditBtn" class="btn p-m">
                  Editar
                </button>
              </td>
            </tr>
          </table>
        </div>
      </div>`;
    return template;
  }

  static async show() {
    const select = document.getElementById("showType");
    select.addEventListener("change", () => {
      const selectedOption = select.options[select.selectedIndex];
      const selectedValue = selectedOption.value;
      const selectedText = selectedOption.text;
      if (selectedText == "Clientes") {
        this.showClients();
      }
      if (selectedText == "Registros") {
        this.showRegistros();
      }
      if (selectedText == "Notas") {
        this.showNotas();
      }
      if (selectedText == "Tabelas") {
        this.showTables();
      }
    });
  }
}
