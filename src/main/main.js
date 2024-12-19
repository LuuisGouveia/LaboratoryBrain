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

ipcMain.handle("show", async (event, query) => {
  console.log(query);
  return await db.show(query);
});

ipcMain.handle("edit", async (event, query, params) => {
  console.log(query, params);
  await db.edit(query, params);
});

ipcMain.handle("new", async (event, query) => {
  console.log(query);
  await dbJOB.new(query);
});

ipcMain.handle("add-job", async (event, query, params) => {
  console.log(query, params);
  await dbJOB.add(query, params);
});

ipcMain.handle("remove-job", async (event, query, params) => {
  console.log(query, params);
  await dbJOB.remove(query, params);
});

ipcMain.handle("show-job", async (event, query) => {
  console.log(query);
  return await dbJOB.show(query);
});

ipcMain.handle("edit-job", async (event, query, params) => {
  console.log(query, params);
  await dbJOB.edit(query, params);
});

ipcMain.handle("get", async (event, query) => {
  console.log("Main:", query);
  return await db.get(query);
});
