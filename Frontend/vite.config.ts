import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [
    react()
  ],
  server: {
    proxy: {
      '/users': {
        target: 'https://taskeaseserver.vercel.app/', 
        changeOrigin: true,
        rewrite: path => path.replace(/^\/users/, '')
      }
    }
  }
});


