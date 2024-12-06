const { app, BrowserWindow, ipcMain } = require("electron");
const path = require("node:path");
const DataBaseManager = require("./dbManager");
const dbPath = path.join(__dirname, "../data/database.db");
const JOBdbPath = path.join(__dirname, "../data/JOBdatabase.db");
db = new DataBaseManager(dbPath);
dbJOB = new DataBaseManager(JOBdbPath);

const createWindow = () => {
  const win = new BrowserWindow({
    width: 800,
    heigth: 600,
    webPreferences: {
      preload: path.join(__dirname, "../renderer/preload.js"),
    },
  });

  win.loadFile("src/renderer/views/index.html");
};

app.whenReady().then(() => {
  createWindow();
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") app.quit();
});

db.init();

ipcMain.handle("add", async (event, query, params) => {
  console.log(query, params);
  await db.add(query, params);
});

ipcMain.handle("remove", async (event, query, params) => {
  console.log(query, params);
  await db.remove(query, params);
});
