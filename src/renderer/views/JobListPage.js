export class JobListPage {
  static html = `
    <form class="form" id="form">
      <div class="form-comp">
        <select id="joblist_name">
          <option value="0">Selecione a lista de preços</option>
        </select>
      </div>
      <div class="form-comp">
        <label for="description">Descrição do Trabalho:</label>
        <input type="text" id="description" />
      </div>
      <div class="form-comp">
        <label for="price">Preço:</label>
        <input type="number" step="0.01" />
      </div>
    </form>`;
}
