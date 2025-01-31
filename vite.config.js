import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: { '@': path.resolve(__dirname, 'src') },
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
  },
  server: {
    port: 3003,
    open: true,
  },
  build: {
    outDir: 'dist',
    target: 'esnext',
  },
});
