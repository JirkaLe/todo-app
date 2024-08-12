import { nxE2EPreset } from '@nx/cypress/plugins/cypress-preset';

import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    ...nxE2EPreset(__filename, {
      cypressDir: 'src',
      bundler: 'vite',
      webServerCommands: {
        default: 'nx run todo-app:serve',
        production: 'nx run todo-app:preview',
      },
      ciWebServerCommand: 'nx run todo-app:serve-static',
    }),
    baseUrl: 'http://localhost:4200',
  },
});
