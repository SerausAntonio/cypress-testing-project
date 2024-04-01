const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
  
    setupNodeEvents(on, config) {
      // implement node event listeners here
     // return require('./cypress/plugins/index.js')(on,config)
    },
    specPattern: "cypress/Apitests/**/*.cy.{js,jsx,ts,tsx}",
    //excludeSpecPattern: ['**/1-getting-started','**/2-advanced-examples'],
    //testIsolation: false,
  },
});
