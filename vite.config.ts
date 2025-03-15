import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  envDir: './environment',
  plugins: [react()],
   server: {
    host: '0.0.0.0', // Bind to 0.0.0.0 to allow external access
    port: process.env.PORT ? parseInt(process.env.PORT) : 3000, // Use PORT environment variable if set, otherwise default to 3000
  },
});
