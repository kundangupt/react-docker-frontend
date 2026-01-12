import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom', // <-- ensures document/window exist for React Testing Library
    globals: true,        // <-- allows using `describe`, `it`, `expect` without explicit import if you want
    setupFiles: './src/setupTests.js', // optional, for global setup like RTL custom matchers
  },
})
