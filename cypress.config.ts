import { defineConfig } from 'cypress';
export default defineConfig({
  e2e: {
    supportFile: false,
    specPattern: 'cypress/e2e/*.spec.{ts,tsx}',
    baseUrl: 'http://localhost:3000',
    viewportWidth: 1024,
    viewportHeight: 660,
    video: false,
  },
});
