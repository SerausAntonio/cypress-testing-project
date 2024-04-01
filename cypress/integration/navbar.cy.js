describe('Navbar links',()=>{
    beforeEach(()=>{
        cy.visit('http://zero.webappsecurity.com/index.html')
    })
    it("should display online banking content",()=>{
        cy.get('#onlineBankingMenu').click();
        cy.contains('Online Banking');
    })

    it('should display feedback content',()=>{

      cy.get('#feedback').click();
        cy.get('#feedback-title').contains('Feedback');
    })
    it('should display homepage content',()=>{

        cy.get('#homeMenu').click();
        cy.get('div#nav').should('be.visible');

    })
})