import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'), // Main entry point
        example: resolve(__dirname, 'src/pages/index.html'), // New entry point for the Example page
      },
    },
  },
})
