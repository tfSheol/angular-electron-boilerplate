const { app, BrowserWindow, Menu } = require('electron');
const projectPackage = require('./package.json');
let customMenu = require('./dist/menu.js')

let window = null;

if (handleSquirrelEvent()) {
    return;
}

function handleSquirrelEvent() {
    if (process.argv.length === 1) {
        return false;
    }

    const ChildProcess = require('child_process');
    const path = require('path');

    const appFolder = path.resolve(process.execPath, '..');
    const rootAtomFolder = path.resolve(appFolder, '..');
    const updateDotExe = path.resolve(path.join(rootAtomFolder, 'Update.exe'));
    // const exeName = path.basename(process.execPath);
    const exeName = path.resolve(path.join(rootAtomFolder, `app-${projectPackage.version}/${projectPackage.productName}.exe`));

    const spawn = (command, args) => {
        let spawnedProcess, error;

        try {
            spawnedProcess = ChildProcess.spawn(command, args, { detached: true });
        } catch (error) { }

        return spawnedProcess;
    };

    const spawnUpdate = (args) => {
        return spawn(updateDotExe, args);
    };

    const squirrelEvent = process.argv[1];
    switch (squirrelEvent) {
        case '--squirrel-install':
        case '--squirrel-updated':
            // Optionally do things such as:
            // - Add your .exe to the PATH
            // - Write to the registry for things like file associations and
            //   explorer context menus

            // Install desktop and start menu shortcuts
            console.log(exeName);

            spawnUpdate(['--createShortcut', exeName]);

            setTimeout(app.quit, 1000);
            return true;

        case '--squirrel-uninstall':
            // Undo anything you did in the --squirrel-install and
            // --squirrel-updated handlers

            // Remove desktop and start menu shortcuts
            spawnUpdate(['--removeShortcut', exeName]);

            setTimeout(app.quit, 1000);
            return true;

        case '--squirrel-obsolete':
            // This is called on the outgoing version of your app before
            // we update to the new version - it's the opposite of
            // --squirrel-updated

            app.quit();
            return true;
    }
};

try {
    require('electron-reloader')(module, {
        ignore: "src"
    });
} catch { }

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

    customMenu.window = window;
    Menu.setApplicationMenu(Menu.buildFromTemplate(customMenu.menu));
});

app.on('window-all-closed', () => app.quit());