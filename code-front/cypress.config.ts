import { defineConfig } from 'cypress';
import vitePreprocessor from 'cypress-vite';

export default defineConfig({
  e2e: {
    baseUrl: 'http://localhost:1420',
    setupNodeEvents(on, config) {
      on('file:preprocessor', vitePreprocessor());
      return config;
    },
  },
});