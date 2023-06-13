import { app, ipcMain, BrowserWindow } from 'electron';

export const isDev = !app.isPackaged;

/**
 * 注册 window 窗体指令
 * https://github.com/alex8088/electron-toolkit/blob/master/packages/utils/src/optimizer.ts
 */
export const registerFramelessWindowIpc = () => {
  ipcMain.on('win:invoke', (event, action) => {
    const win = BrowserWindow.fromWebContents(event.sender);
    if (win) {
      if (action === 'show') {
        win.show(); // 显示
      } else if (action === 'min') {
        win.minimize(); // 最小化
      } else if (action === 'max') {
        const isMaximized = win.isMaximized();
        if (isMaximized) {
          win.unmaximize(); // 窗口化
        } else {
          win.maximize(); // 最大化
        }
      } else if (action === 'hide') {
        win.hide(); // 隐藏
      } else if (action === 'close') {
        win.close(); // 关闭
      }
    }
  });
};
