const { app, BrowserWindow } = require('electron')

function initWindow() {
    let appWindow = new BrowserWindow({
        width: 1000,
        height: 800,
        webPreferences: {
            nodeIntegration: true
        },
        backgroundColor: '#312450'
    });

    appWindow.loadURL(`file://${__dirname}/dist/index.html`);

    appWindow.webContents.openDevTools();

    appWindow.on('closed', function () {
        appWindow = null;
    });
}

app.on('ready', initWindow);

app.on('window-all-closed', function () {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

app.on('activate', function () {
    if (win === null) {
        initWindow();
    }
});