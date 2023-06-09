import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import dts from 'vite-plugin-dts'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), dts()],
  build: {
    sourcemap: true,
    lib: {
      entry: './src/index.ts',
      formats: ['es', 'cjs'],
      name: 'use-modals-vue3',
      fileName: format => `use-modals-vue3.${format}.js`
    },
    rollupOptions: {
      external: ['vue'],
      output: {
        exports: 'named',
        globals: {
          vue: 'Vue'
        }
      }
    }
  }
})
