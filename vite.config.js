import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import viteCompression from 'vite-plugin-compression';

export default defineConfig({
  plugins: [
    react(),
    viteCompression({
      algorithm: 'brotliCompress', // Zmień na 'brotliCompress'
      ext: '.br',
      filter: /\.(js|css|html|svg)$/i,
    }),
  ],
  build: {
    minify: 'esbuild',
    sourcemap: true,
    chunkSizeWarningLimit: 1000,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            if (id.includes('react')) {
              return 'vendor-react';
            }
            if (id.includes('react-dom')) {
              return 'vendor-react-dom';
            }
            if (id.includes('lodash')) {
              return 'vendor-lodash';
            }
            if (id.includes('@mui')) {
              return 'vendor-mui';
            }
            // Dodaj więcej warunków dla innych dużych bibliotek
            return 'vendor';
          }

          // Podział na podstawie ścieżek w projekcie
          if (id.includes('/components/')) {
            // Dzielimy komponenty na mniejsze chunk na podstawie folderów
            if (id.includes('/components/common/')) {
              return 'components-common';
            }
            if (id.includes('/components/specific/')) {
              return 'components-specific';
            }
            return 'components';
          }

          if (id.includes('/pages/')) {
            return 'pages';
          }

          // Podział modułów używanych w konkretnych miejscach
          if (id.includes('/utils/')) {
            return 'utils';
          }

          // Domyślny chunk dla pozostałych plików
          return 'main';
        },
        entryFileNames: 'assets/[name]-[hash].js',
        chunkFileNames: 'assets/[name]-[hash].js',
        assetFileNames: 'assets/[name]-[hash].[ext]',
      },
    },
  },
});