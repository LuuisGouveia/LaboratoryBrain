const sqlite3 = require("sqlite3").verbose();

class DataBaseManager {
  constructor(dbPath) {
    this.db = new sqlite3.Database(dbPath, (err) => {
      if (err) {
        console.log("Erro ao conectar com DB: ", err);
      } else {
        console.log("Conectado ao DB Sqlite");
      }
    });
  }
  init() {
    this.db.run(
      `CREATE TABLE IF NOT EXISTS clients (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    address TEXT,
    contact INTEGER,
    dentist_list TEXT,
    joblist_id INTEGER
    )`,
      (err) => {
        if (err) {
          console.log("Erro ao criar tabela clients", err);
        } else {
          console.log("Tabela clients pronta!");
        }
      }
    );
    this.db.run(
      `CREATE TABLE IF NOT EXISTS outputs (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    client_id INTEGER NOT NULL,
    client_name INTEGER NOT NULL,
    dentist TEXT,
    pacient TEXT,
    job TEXT NOT NULL, 
    quantity INTEGER NOT NULL,
    price REAL NOT NULL,
    total REAL NOT NULL,
    date TEXT NOT NULL
    )`,
      (err) => {
        if (err) {
          console.log("Erro ao criar tabela outputs:", err);
        } else {
          console.log("Tabela outputs pronta!");
        }
      }
    );

    this.db.run(
      `CREATE TABLE IF NOT EXISTS notes (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  client_id INTEGER NOT NULL,
  client_name TEXT NOT NULL,
  output_list TEXT NOT NULL,
  period TEXT NOT NULL,
  date TEXT NOT NULL, 
  total REAL NOT NULL
  )`,
      (err) => {
        if (err) {
          console.log("Erro ao criar tabela notes.", err);
        } else {
          console.log("Tabela notes pronta!");
        }
      }
    );
  }

  add(query, json) {
    const data = JSON.parse(json);
    console.log(
      data.name,
      data.address,
      data.contact,
      data.dentist_list,
      data.joblist_id
    );
    this.db.run(query, [...data], (err) => {
      if (err) {
        console.log("Erro ao inserir dados no DB: ", err);
      } else {
        console.log("Dados inseridos no DB com sucesso!");
      }
    });
  }
}

module.exports = DataBaseManager;
