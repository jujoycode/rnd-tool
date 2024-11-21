import { app, shell, BrowserWindow, ipcMain } from 'electron'
import { electronApp, optimizer, is } from '@electron-toolkit/utils'
import { join } from 'path'

// ========================= API =========================
import { getTotalFileCount, uploadToS3 } from './api'

function createWindow(): void {
  const mainWindow = new BrowserWindow({
    width: 1100,
    height: 650,
    show: false,
    autoHideMenuBar: true,
    // ...(process.platform === 'linux' ? {} : {}),
    webPreferences: {
      preload: join(__dirname, '../preload/index.js'),
      sandbox: false
    }
  })

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

app.whenReady().then(() => {
  electronApp.setAppUserModelId('com.electron')

  app.on('browser-window-created', (_, window) => {
    optimizer.watchWindowShortcuts(window)
  })

  // ==================== IPC ====================
  // S3 Deploy API (Application / Console)
  ipcMain.handle('uploadToS3', async (event, args: { targetBucket: string; targetPath: string }) => {
    // 1. 대상 경로 내 전체 파일 개수 확인
    const { totalFileCount, totalFilePaths } = getTotalFileCount(args.targetPath)

    // 2. 총 파일 개수 전달 및 시작 알림
    event.sender.send('start-uploadToS3', { totalFileCount })

    // 3. upload 시작
    for (let i = 0; i < totalFilePaths.length; i++) {
      const filePath = totalFilePaths[i]

      // 3.1 업로드
      await uploadToS3({ targetBucket: args.targetBucket, targetPath: filePath }).then(({ isSuccess, errorStack }) => {
        // 3.1.1 실패 시 에러 알림
        if (!isSuccess) {
          event.sender.send('error-uploadToS3', { errorStack })
        }

        // 3.1.2 성공 시 진행 알림
        event.sender.send('progress-uploadToS3')
      })
    }

    // 4. 완료 알림
    event.sender.send('finish-uploadToS3')
  })
  // ===============================================

  createWindow()

  app.on('activate', function () {
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})
