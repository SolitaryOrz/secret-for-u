import { defineConfig } from 'vite';
import { resolve } from 'path';
import vue from '@vitejs/plugin-vue';
import electron from 'vite-plugin-electron';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    electron([
      {
        entry: 'src/main/index.ts',
        vite: {
          build: {
            outDir: 'dist-electron/main'
          }
        }
      },
      {
        entry: 'src/preload/index.ts',
        vite: {
          build: {
            outDir: 'dist-electron/preload'
          }
        }
      }
    ])
  ],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src')
    }
  },
  server: {
    port: 44353
  }
});
