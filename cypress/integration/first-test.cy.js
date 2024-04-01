/// <reference types = "cypress" />
describe('Browser Actions',()=>{

    beforeEach('',()=>{
        cy.visit('http://books.toscrape.com/index.html')
        cy.reload();
    })

    it('should load books website',()=>{
       
        cy.get('a').contains('Books to Scrape')
        cy.url().should('include','index.html');
        cy.get('div.page-header').invoke('text').should('contain','All products');
        cy.get('img.thumbnail').its('length').should('eq',20)

        cy.get('a[href^="catalogue"]').eq(0).should('have.attr', 'href')
       // cy.contains('A Light in the ...').click();
        
    })

    it.only('Click on travel category',()=>{

        cy.get('a').contains('Travel').click();
        cy.get('.page-header > h1').invoke('text').should('contain','Travel');
    })


})