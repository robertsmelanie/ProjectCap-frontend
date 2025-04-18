import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist', // Specify your desired output directory here
    emptyOutDir: true, // Optional: Clears the output directory before building
  },
});
