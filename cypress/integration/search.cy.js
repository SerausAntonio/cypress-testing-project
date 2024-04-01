describe('searchbox Test', () => {

    beforeEach(() => {
        cy.visit('http://zero.webappsecurity.com/index.html',{failOnStatusCode:false})

    })
    it('should type into search box and submit with pressing enter', () => {
        cy.get('a.brand').should('contain', 'Zero Bank');
        cy.get('#searchTerm').type('some text {enter}')
        cy.get('.container').contains('Search Results:')
    })

    it('should show the terms of use found',()=>{

        cy.get('a[href*="about/legal/#privacy"]').eq(0)
        .invoke('removeAttr','target').click()
        cy.get('.main-heading').should('contain','Cookie Notice')

    }) 
    
    it('should be able to login',()=>{
        cy.get('a.brand').should('contain','Zero Bank');
        cy.get('#signin_button').click();
        cy.get('.page-header').contains('Log in to ZeroBank')



    })
    it.only('should be able to reset password',()=>{
        cy.get('a.brand').should('contain','Zero Bank');
        cy.get('#signin_button').click();
        cy.contains('Forgot your password ?').click();
        cy.get('#user_email').type('test@gmail.com')
        cy.get('input[value="Send Password"]').click();

    })

})