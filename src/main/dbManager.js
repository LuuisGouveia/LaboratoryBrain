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
    joblist_name TEXT
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
    additional TEXT,
    additional_price REAL,
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

  add(query, params) {
    console.log(params);
    this.db.run(query, params, (err) => {
      if (err) {
        console.log("Erro ao inserir dados no DB: ", err);
      } else {
        console.log("Dados inseridos no DB com sucesso!");
      }
    });
  }
  remove(query, params) {
    console.log(params);
    this.db.run(query, params, (err) => {
      if (err) {
        console.log("Erro ao remover dados: ", err);
      } else {
        console.log("Dados removidos do DB com sucesso!");
      }
    });
  }
  show(query) {
    console.log(query);
    return new Promise((resolve, reject) => {
      this.db.all(query, [], (err, rows) => {
        if (err) {
          reject(err);
        } else {
          resolve(rows);
        }
      });
    });
  }
  edit(query, params) {
    console.log(query, params);
    this.db.run(query, params, (err) => {
      if (err) {
        console.log("Erro ao atualizar dados.", err);
      } else {
        console.log("Dados atualizados com sucesso.");
      }
    });
  }
  new(query) {
    console.log(query);
    this.db.run(query, (err) => {
      if (err) {
        console.log("Erro ao criar tabela de preços.", err);
      } else {
        console.log("tabela criada com sucesso");
      }
    });
  }
  get(query) {
    console.log("DB:", query);
    return new Promise((resolve, reject) => {
      this.db.get(query, [], (err, row) => {
        if (err) {
          reject(err);
        } else {
          resolve(row);
        }
      });
    });
  }
}

module.exports = DataBaseManager;
