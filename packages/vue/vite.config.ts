import { defineConfig } from 'vite'
import { createVuePlugin } from 'vite-plugin-vue2'
import dts from 'vite-plugin-dts'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [createVuePlugin(), dts()],
  build: {
    sourcemap: true,
    lib: {
      entry: './src/index.ts',
      formats: ['es', 'cjs'],
      name: 'use-modals-vue',
      fileName: format => `use-modals-vue.${format}.js`
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
