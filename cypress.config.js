const { defineConfig } = require('cypress')

module.exports = defineConfig({
  reporter: 'mochawesome',
  e2e: {
    defaultCommandTimeout: 4000, // tempo padrão de espera
    baseUrl: 'https://automationpratice.com.br', // url base para os testes
    specPattern: 'cypress/e2e/**/*.cy.js',
    supportFile: 'cypress/support/e2e.js',
    setupNodeEvents(on, config) {
      return config
    }
  }
})
