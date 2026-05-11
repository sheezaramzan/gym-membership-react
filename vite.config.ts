import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  server: {
    fs: {
      // Allow serving files from two levels up (where the sources folder is)
      allow: [
        path.resolve(__dirname, '../../'),
      ],
    },
  },
})
