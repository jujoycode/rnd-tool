import { resolve } from 'path'
import { defineConfig, externalizeDepsPlugin } from 'electron-vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  main: {
    plugins: [externalizeDepsPlugin()]
  },
  preload: {
    plugins: [externalizeDepsPlugin()]
  },
  renderer: {
    resolve: {
      alias: {
        '@renderer': resolve('src/renderer/src'),
        '@atom': resolve('src/renderer/src/components/atom'),
        '@molecule': resolve('src/renderer/src/components/molecule'),
        '@organism': resolve('src/renderer/src/components/organism'),
        '@template': resolve('src/renderer/src/components/template'),
        '@pages': resolve('src/renderer/src/pages'),
        '@hooks': resolve('src/renderer/src/hooks'),
        '@interfaces': resolve('src/renderer/src/interfaces'),
        '@styles': resolve('src/renderer/src/styles')
      }
    },
    plugins: [react()]
  }
})
