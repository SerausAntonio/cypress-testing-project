///<reference types="cypress" />
describe('conduit website',()=>{

    beforeEach(()=>{

        cy.visit('https://react-redux.realworld.io/');
    })
    
    it('should be able to sign Up',()=>{
        cy.get('a').contains('Sign up').click();
        cy.get('.auth-page').contains('Sign Up');
        cy.get('[placeholder="Username"]').type('Spiderman');
        cy.get('[placeholder="Email"]').type('pp123@gmail.com')
        cy.get('[placeholder="Password"]').type('cypress123')

        cy.get('button[type="submit"]').contains('Sign in').click();
        

    })

    it.only('should be able to click on login button',()=>{

        cy.url().should('include','realworld.io');
        cy.get('ul.nav').then(elm => {
            cy.log(elm.text());
        })
        cy.get('a').contains('Sign in').click();
        cy.get('.auth-page').should('contain','Sign In');
        cy.get('[placeholder="Email"]').type('pp123@gmail.com');
        cy.get('[placeholder="Password"]').type('cypress123');
        cy.get('button[type="submit"]').contains('Sign in').click();
        cy.get('a.nav-link').contains('Global Feed').click();
    })
   
})