import { defineConfig } from 'cypress'

export default defineConfig({
  e2e: {
    // modify config values
    specPattern: '**/tests/*.cy.ts',
    baseUrl: 'http://www.nba.com/'
  }
})