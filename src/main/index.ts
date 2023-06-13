import { app, BrowserWindow } from 'electron';
import path from 'path';
import { isDev, registerFramelessWindowIpc } from './utils';
import { createWindowListener } from './listener';

let win: BrowserWindow | null = null;

function createWindow() {
  win = new BrowserWindow({
    width: 800,
    minWidth: 800,
    height: 560,
    minHeight: 560,
    frame: false,
    webPreferences: {
      preload: path.join(__dirname, '../preload/index.js'),
      contextIsolation: true
    }
  });
  if(isDev) {
    win.loadURL('http://localhost:44353');
  } else {
    win.loadFile('dist/index.html');
  }
  registerFramelessWindowIpc();
  createWindowListener(win);
}

app.whenReady().then(() => {
  createWindow();
  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});
