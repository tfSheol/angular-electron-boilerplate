const { app, shell } = require('electron');

export let window: any;

export let menu = [
    {
        label: 'File',
        submenu: [
            {
                id: 'file:new',
                label: 'New...',
                accelerator: 'Ctrl+N'
            },
            {
                id: 'file:open',
                label: 'Open...',
                accelerator: 'Ctrl+O'
            },
            { type: 'separator' },
            {
                id: 'file:save',
                label: 'Save',
                accelerator: 'Ctrl+S'
            },
            { type: 'separator' },
            {
                label: 'Exit',
                click: () => app.exit(0)
            }
        ]
    },
    {
        label: 'Edit',
        submenu: [
            { role: 'undo' },
            { role: 'redo' },
            { type: 'separator' },
            { role: 'cut' },
            { role: 'copy' },
            { role: 'paste' },
            { role: 'pasteandmatchstyle' },
            { type: 'separator' },
            { role: 'delete' },
            { role: 'selectall' }
        ]
    },
    {
        label: 'View',
        submenu: [
            {
                id: 'view:cfg:1',
                label: 'Configuration view 1',
                type: 'radio'
            },
            {
                id: 'view:cfg:2',
                label: 'Configuration view 2',
                type: 'radio',
                checked: true
            },
            {
                id: 'view:cfg:3',
                label: 'Configuration view 3',
                type: 'radio'
            },
            { type: 'separator' },
            {
                id: 'view:hidden:1',
                label: 'Hidden 1',
                type: 'checkbox'
            },
            {
                id: 'view:hidden:2',
                label: 'Hidden 2',
                type: 'checkbox'
            },
            { type: 'separator' },
            {
                label: 'Go Back',
                click: () => window?.history?.back()
            },
            {
                label: 'Go Forward',
                click: () => window?.history?.forward()
            },
            { type: 'separator' },
            {
                id: 'view:toolbar:1',
                label: 'Toolbar 1',
                type: 'checkbox',
                checked: true
            },
            {
                id: 'view:status:bar:1',
                label: 'Status bar 1',
                type: 'checkbox',
                checked: true
            }
        ]
    },
    {
        label: 'Test',
        submenu: [
            {
                id: 'test:sub:1',
                label: 'Test sub menu 1'
            },
            {
                id: 'test:sub:2',
                label: 'Test sub menu 2'
            },
            { type: 'separator' },
            {
                id: 'test:sub:3',
                label: 'Test sub menu 3'
            }
        ]
    },
    {
        label: 'Tools',
        submenu: [
            {
                label: 'Open Dev Tools',
                click: () => window.webContents.openDevTools()
            },
            {
                label: 'Reload',
                click: () => window.reload()
            },
            {
                label: 'Close',
                click: () => app.quit()
            }
        ]
    },
    {
        label: 'Help',
        submenu: [
            {
                label: 'Menu Item (doc)',
                click: () => shell.openExternal('https://www.electronjs.org/docs/api/menu-item')
            },
            { type: 'separator' },
            {
                label: 'Electron',
                role: 'help'
            },
            {
                label: 'Angular',
                submenu: [
                    {
                        label: 'Angular.io',
                        click: () => shell.openExternal('https://angular.io/')
                    },
                    {
                        label: 'Angular Material',
                        click: () => shell.openExternal('https://material.angular.io/')
                    },
                    {
                        label: 'RxDB',
                        click: () => shell.openExternal('https://rxdb.info/')
                    }
                ]
            },
            { type: 'separator' },
            {
                id: 'help:about',
                role: 'about'
            },
            {
                id: 'help:version',
                label: 'Version'
            }
        ]
    }
]