import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
<<<<<<< HEAD
import path from 'path'
import { fileURLToPath } from 'url'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  resolve: {
    alias: {
      '@': path.resolve(path.dirname(fileURLToPath(import.meta.url)), './src'),
    },
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          router: ['react-router-dom'],
          motion: ['framer-motion'],
          gsap: ['gsap'],
        },
      },
    },
  },
})
=======

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
})
>>>>>>> 3d107c19fb3dc36207c067ebbff8996db537e0ae
