const { app, BrowserWindow, ipcMain, nativeImage, Tray } = require('electron/main');
const path = require('node:path');
//const fs = require('fs');
const url = require("url");


try {
  app.on("ready", createWindow);

  app.on('window-all-closed', () => {
      if (process.platform !== 'darwin') {
        app.quit();
      }
  });

  app.on('activate', () => {
      if (BrowserWindow.getAllWindows().length === 0) {
        createWindow();
      }
  });

  process.on('uncaughtException', (error) => {
      console.error("Unexpected error: ", error);
  });

  ipcMain.on('message', (event: any, message: string) => {
    console.log("Message from Renderer:", message);
  });

} catch (error) {
  console.warn("Main Caught", error);
}









// Definitions -----------------------------------------------------------------

function createWindow() {
  const windowConf: IWindowConfig = _buildWindowConf();
  const win = new BrowserWindow(windowConf);
  const myUrl = buildUrlForDevModeOrDistMode();
  win.webContents.on('did-fail-load', () => win.loadURL(myUrl));
  //make this check seems to cause an error on BrowserWindow.loadURL
  //if(!fs.existsSync(myUrl)) { throw new Error("Index not found"); }
  win.loadURL(myUrl);
  console.log("URL loaded", myUrl);
}

function buildUrlForDevModeOrDistMode(): string {
  if(contextIsDevelopingMode()) {
    return "http://localhost:1420/";
  }

  return url.format({
    pathname: path.join(__dirname, "../index.html"),
    protocol: "file:",
    slashes: true
  });
}

async function onFailReload(err: any) {
  console.log("refresh fail");
  await app.loadURL(url);
}


function contextIsDevelopingMode(): boolean {
  const args = process.argv.slice(1);
  const developingMode = args.some(val => val === '--dev');
  return developingMode;
}


function _buildWindowConf(): IWindowConfig {
  const iconPath = __dirname + '../favicon.ico';
  const trayIcon = nativeImage.createFromPath(iconPath)
  const appIcon = nativeImage.createFromPath(iconPath)
  const tray = new Tray(trayIcon)

  return {
    width: 800,
    height: 600,
    icon: appIcon,
  }
}

/*
**Importan:** Confirm that:
  - `__dirname` will give the path of the bundle in my case `./dist/ng-electron/browser/`.
  - it's at the level of the index.html
*/


interface IWindowConfig {
  width: number,
  height: number,
  icon: string,
}


