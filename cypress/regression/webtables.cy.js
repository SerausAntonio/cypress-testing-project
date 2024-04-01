/// <reference types = "cypress" />
describe("Handling webtables",()=>{

    it('Handling Webtables',()=>{

        cy.visit('http://the-internet.herokuapp.com/tables');

        cy.url().should('include','tables');
        cy.get('.example').invoke('text').should('contain','Data Tables')

        cy.get('#table1').contains('td','http://www.jdoe.com').should('be.visible')
        
        cy.get('tbody').contains('tr', 'http://www.jdoe.com')
        .then(tableRow => {
            cy.log(tableRow.text());
            cy.wrap(tableRow).contains('edit').click();
          })
        
    })
})