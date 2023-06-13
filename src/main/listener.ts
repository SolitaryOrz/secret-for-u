import { BrowserWindow } from 'electron';

export const createWindowListener = (win: BrowserWindow) => {
  // 当窗体加载完成时
  win.webContents.on('did-finish-load', () => {
    const isMaximized = win.isMaximized();
    win.webContents.send('isMaximized', isMaximized);
  });
  // 当窗体窗口化时触发
  win.on('unmaximize', () => {
    win.webContents.send('isMaximized', false);
  });
  // 当窗体最大化时触发
  win.on('maximize', () => {
    win.webContents.send('isMaximized', true);
  });
};