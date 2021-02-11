const { app, BrowserWindow } = require('electron');

//let appWindow;

try {
	require('electron-reloader')(module, {
        ignore: "src"
    });
} catch {}

function initWindow() {
    let appWindow = new BrowserWindow({
        width: 1000,
        height: 800,
        webPreferences: {
            preload: `file://${__dirname}/dist/preload.js`,
            enableRemoteModule: true,
            nodeIntegration: true
        },
        backgroundColor: '#312450',
        frame: false
    });

    appWindow.loadURL(`file://${__dirname}/dist/index.html`);

    appWindow.webContents.openDevTools();

    appWindow.on('closed', () => {
        appWindow = null;
    });

    // appWindow.on('close', () => {
    //     e.preventDefault();
    //     mainWindow.destroy();
    // })
}

app.on('ready', initWindow);

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

app.on('activate', () => {
    if (win === null) {
        initWindow();
    }
});