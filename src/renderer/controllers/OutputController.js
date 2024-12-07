export class OutuputController {
  static async add(output) {
    const query = `INSERT INTO outputs (client_id,
    client_name,
    dentist,
    pacient,
    job, 
    quantity,
    price,
    total,
    date)  VALUES (?,?,?,?,?,?,?,?,?)`;
    const params = [
      output.client_id,
      output.client_name,
      output.dentist,
      output.pacient,
      output.job,
      output.quantity,
      output.price,
      output.total,
      output.date,
    ];
    console.log(params);
    await window.api.add(query, params);
  }
}
