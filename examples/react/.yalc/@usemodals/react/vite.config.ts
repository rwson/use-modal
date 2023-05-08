import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import dts from 'vite-plugin-dts'

export default defineConfig({
  plugins: [react(), dts()],
  build: {
    lib: {
      entry: './src/index.ts',
      formats: ['es', 'cjs'],
      name: 'use-modals-react',
      fileName: format => `use-modals-react.${format}.js`
    },
    rollupOptions: {
      external: ['react'],
      output: {
        exports: 'named',
        globals: {
          react: 'React'
        }
      }
    }
  }
})
