import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import * as path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src/'),
      components: `${path.resolve(__dirname, './src/components/')}`,
      hooks: `${path.resolve(__dirname, './src/hooks/')}`,
      pages: `${path.resolve(__dirname, './src/pages/')}`,
      store: `${path.resolve(__dirname, './src/store/')}`,
      navigation: `${path.resolve(__dirname, './src/navigation/')}`,
      constants: `${path.resolve(__dirname, './src/constants/')}`,
    },
  },
});
