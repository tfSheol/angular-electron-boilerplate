const { app, BrowserWindow } = require('electron');

let window = null;

try {
	require('electron-reloader')(module, {
        ignore: "src"
    });
} catch {}

app.on('ready', () => {
    window = new BrowserWindow({
        width: 1000,
        height: 800,
        webPreferences: {
            preload: `file://${__dirname}/dist/preload.js`,
            enableRemoteModule: true,
            nodeIntegration: true,
            webviewTag: true,
            enableWebSQL: false,
            nativeWindowOpen: true
        },
        backgroundColor: '#312450',
        frame: false
    });
    window.setMenuBarVisibility(false);
    window.loadURL(`file://${__dirname}/dist/index.html`);
    // window.webContents.openDevTools();
    window.on('close', () => {
        app.exit(0);
    });
    window.once('closed', () => {
        window = null;
    });
});

app.on('window-all-closed', () => app.quit());