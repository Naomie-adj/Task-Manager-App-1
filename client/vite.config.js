import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': 'http://localhost',  // ici ton proxy nginx écoute en local sur le port 80
    },
  },
});
