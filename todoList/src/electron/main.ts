import { app, BrowserWindow, ipcMain } from 'electron'
import * as path from 'path'

let win: BrowserWindow | null;

app.on('ready', createWindow)

app.on('activate', () => {
  if (win === null) {
    createWindow()
  }
})

function createWindow() {
    win = new BrowserWindow({ width: 800, height: 600, webPreferences: {
        worldSafeExecuteJavaScript: true,
        nodeIntegration: true,
        allowRunningInsecureContent: true,
        contextIsolation: false, 
        enableRemoteModule : false 
      }, });
      
    win.loadFile(path.join(__dirname, `/../../dist/renderer/index.html`));

    win.on('closed', () => {
      win = null;
    })
}