import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: process.env.NODE_ENV === 'production' ? 'https://auth.asafarim.com/' : '/',
  plugins: [
    laravel({
      input: ['resources/js/app.tsx', 'resources/css/app.css', 'resources/css/classes.scss', 'resources/css/md.scss'],
      refresh: true,
    }),
    react(),
  ],
  build: {
    manifest: true,
    outDir: 'public/build',
    emptyOutDir: true,
    rollupOptions: {
      output: {
        entryFileNames: 'assets/[name]-[hash].js',
        chunkFileNames: 'assets/[name]-[hash].js',
        assetFileNames: 'assets/[name]-[hash].[ext]',
      },
    },
  },
  server: {
    host: 'localhost',  // Bind to localhost instead of 0.0.0.0
    port: 5173,
}
});
