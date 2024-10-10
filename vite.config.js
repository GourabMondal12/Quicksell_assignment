import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@icons': resolve(__dirname, 'src/assets/Icons/icons_FEtask'),
    },
  },
})
