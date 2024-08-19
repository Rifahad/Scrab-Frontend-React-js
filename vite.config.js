import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  plugins: [react()],
  server: {
    host: '0.0.0.0', // This makes the server accessible externally
    port: 5173,      // You can also specify the port if needed
  },});
