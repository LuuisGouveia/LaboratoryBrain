window.addEventListener("DOMContentLoaded", () => {
  const replaceText = (selector, text) => {
    const element = document.getElementById(selector);
    if (element) element.innerText = text;
  };

  for (const dependecy of ["chrome", "node", "electron"]) {
    replaceText(`${dependecy}-version`, process.versions[dependecy]);
  }
});

const { contextBridge, ipcRenderer } = require("electron");

contextBridge.exposeInMainWorld("api", {
  add: async (query, params) => {
    return await ipcRenderer.invoke("add", query, params);
  },
  remove: async (query, params) => {
    return await ipcRenderer.invoke("remove", query, params);
  },
  show: async (query) => {
    return await ipcRenderer.invoke("show", query);
  },
  edit: async (query, params) => {
    return await ipcRenderer.invoke("edit", query, params);
  },
  new: async (query) => {
    return await ipcRenderer.invoke("new", query);
  },
  addJob: async (query, params) => {
    return await ipcRenderer.invoke("add-job", query, params);
  },
  removeJob: async (query, params) => {
    return await ipcRenderer.invoke("remove-job", query, params);
  },
  showJob: async (query) => {
    return await ipcRenderer.invoke("show-job", query);
  },
  editJob: async (query, params) => {
    return await ipcRenderer.invoke("edit-job", query, params);
  },
  get: async (query) => {
    return await ipcRenderer.invoke("get", query);
  },
});
