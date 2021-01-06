const { app, BrowserWindow, session } = require('electron');
const fs = require('fs');

app.on('ready', () => {
    // once electron has started up, create a window.
    const window = new BrowserWindow({
        width: '1000px',
        heigh: '800px',
        webPreferences: {
            nodeIntegration: true,
        },
    });
    window.webContents.openDevTools();

    // hide the default menu bar that comes with the browser window
    window.setMenuBarVisibility(null);

    // load a website to display
    window.loadURL(`file://${__dirname}/../app/index.html`, {
        protocol: 'file:',
    });
});
