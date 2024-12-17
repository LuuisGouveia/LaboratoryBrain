export class Output {
  constructor(
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
  ) {
    this.client_id = client_id;
    this.client_name = client_name;
    this.dentist = dentist;
    this.pacient = pacient;
    this.job = job;
    this.additional = additional;
    this.additional_price = additional_price;
    this.quantity = quantity;
    this.price = price;
    this.total = total;
    this.date = date;
  }
}
