import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  // GitHub Pages 배포 시 저장소명 서브경로(예: /sie-ea-home-gitpage/) 또는 상대 경로('./') 지원
  base: process.env.VITE_BASE_PATH || './',
  plugins: [vue()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: false,
  },
})
