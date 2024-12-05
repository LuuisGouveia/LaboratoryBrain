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
}

module.exports = DataBaseManager;
