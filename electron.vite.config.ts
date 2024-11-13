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
        '@atoms': resolve('src/renderer/src/components/atoms'),
        '@molecules': resolve('src/renderer/src/components/molecules'),
        '@organisms': resolve('src/renderer/src/components/organisms'),
        '@templates': resolve('src/renderer/src/components/templates'),
        '@pages': resolve('src/renderer/src/components/pages'),
      }
    },
    plugins: [react()]
  }
})
