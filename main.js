const { app, BrowserWindow, screen } = require('electron');

let windows = [];

function createWindows() {
  // Haal alle beschikbare schermen op
  const displays = screen.getAllDisplays();
  const primaryDisplay = screen.getPrimaryDisplay();
  
  // Voor elk scherm een venster maken
  displays.forEach((display, index) => {
    const isPrimary = display.id === primaryDisplay.id;
    
    const win = new BrowserWindow({
      x: display.bounds.x,
      y: display.bounds.y,
      width: display.bounds.width,
      height: display.bounds.height,
      frame: false,
      fullscreen: true,
      webPreferences: {
        nodeIntegration: false,
        contextIsolation: true
      }
    });

    if (isPrimary) {
      // Op primair scherm: toon de klok
      win.loadFile('src/index.html');
    } else {
      // Op andere schermen: toon dezelfde gradient achtergrond
      win.loadURL('data:text/html,<html><head><style>body{margin:0;padding:0;background:linear-gradient(135deg,%20%23667eea%200%25,%20%23764ba2%20100%25);height:100vh;}</style></head><body></body></html>');
    }

    // ESC werkt op alle schermen
    win.webContents.on('before-input-event', (event, input) => {
      if (input.key === 'Escape') {
        app.quit();
      }
    });

    windows.push(win);
  });
}

// Start de app
app.whenReady().then(createWindows);

// Sluit af wanneer alle vensters dicht zijn
app.on('window-all-closed', () => {
  app.quit();
});

// macOS specifiek
app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindows();
  }
});