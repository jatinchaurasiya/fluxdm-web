import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from "path"

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom', 'react-router-dom'],
          'animation-vendor': ['framer-motion'],
          'ui-vendor': ['lucide-react', '@radix-ui/react-dialog', '@radix-ui/react-label', '@radix-ui/react-separator', '@radix-ui/react-slot', 'class-variance-authority', 'clsx', 'tailwind-merge'],
          'markdown-vendor': ['react-markdown', 'react-syntax-highlighter', 'gray-matter']
        }
      }
    }
  }
})
