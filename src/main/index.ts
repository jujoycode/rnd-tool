import 'reflect-metadata'
import { join } from 'path'
import { app, shell, BrowserWindow, ipcMain } from 'electron'
import { electronApp, optimizer, is } from '@electron-toolkit/utils'
import { handleS3Upload } from './handler/s3Handler'
import { ConsolDataSource, createSSHTunnel } from './db'
import { QtUser } from './db/entity/QtUser'
// -----------------------------------------------------

const WINDOW_CONFIG = {
  width: 1100,
  height: 650,
  show: false,
  autoHideMenuBar: true,
  webPreferences: {
    preload: join(__dirname, '..', 'preload', 'index.js'),
    sandbox: false
  }
} as const

function createWindow(): void {
  const mainWindow = new BrowserWindow(WINDOW_CONFIG)

  mainWindow.on('ready-to-show', () => {
    mainWindow.show()
  })

  mainWindow.webContents.setWindowOpenHandler((details) => {
    shell.openExternal(details.url)
    return { action: 'deny' }
  })

  if (is.dev && process.env['ELECTRON_RENDERER_URL']) {
    mainWindow.loadURL(process.env['ELECTRON_RENDERER_URL'])
  } else {
    mainWindow.loadFile(join(__dirname, '../renderer/index.html'))
  }
}

app.whenReady().then(async () => {
  electronApp.setAppUserModelId('com.electron')

  app.on('browser-window-created', (_, window) => {
    optimizer.watchWindowShortcuts(window)
  })

  await getUser()

  // -------------------- IPC --------------------
  ipcMain.handle('uploadToS3', handleS3Upload)
  // -----------------------------------------------

  createWindow()

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

async function getUser() {
  try {
    await createSSHTunnel()

    await ConsolDataSource.initialize()
    console.log('DB Connected Successfully')

    await ConsolDataSource.query('SELECT 1')
    console.log('Query test successful')
  } catch (error) {
    console.error('Error.')
    console.error(error)
  }
}
