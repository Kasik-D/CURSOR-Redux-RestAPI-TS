import react from '@vitejs/plugin-react';
import * as path from 'path';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '*': path.resolve(__dirname, './src/'),
      components: `${path.resolve(__dirname, './src/components/')}`,
      api: `${path.resolve(__dirname, './src/api/')}`,
      assets: `${path.resolve(__dirname, './src/assets/')}`,
      helpers: `${path.resolve(__dirname, './src/helpers/')}`,
      hooks: `${path.resolve(__dirname, './src/hooks/')}`,
      pages: `${path.resolve(__dirname, './src/pages/')}`,
      store: `${path.resolve(__dirname, './src/store/')}`,
      navigation: `${path.resolve(__dirname, './src/navigation/')}`,
      constants: `${path.resolve(__dirname, './src/constants/')}`,
    },
  },
});
