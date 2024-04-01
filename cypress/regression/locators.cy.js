describe('locators',()=>{

    beforeEach(()=>{

        cy.visit('https://demos.jquerymobile.com/1.4.5/')
    })

    it('should be able to check radiobuttons',()=>{
        cy.url().should('include','1.4.5');
        cy.get('h2.ui-title > img').should('be.visible');
        cy.get('a').contains('Checkboxradio widget').click();
        cy.get('a').contains('Radio buttons').click();
        cy.get('#radio-choice-0a').should('not.be.checked').click({force:true});


    })
    it('should be able to check vertical Checkbuttons',()=>{
        cy.get('a').contains('Checkboxradio widget').click();
        cy.get('a').contains('Checkboxes').click();
        cy.get('input[name="checkbox-0 "]').should('not.be.checked').check({force:true});
        cy.get('#checkbox-mini-0').should('not.be.checked').check({force:true})
    })

    it('schould be able to check horizontal checkboxes',()=>{
        cy.get('a').contains('Checkboxradio widget').click();
        cy.get('a').contains('Checkboxes').click();

        cy.get('#Horizontalgroup').should('contain','Horizontal group')

        cy.get('input#checkbox-h-2a').should('not.be.checked').check({force:true})
        cy.get('input#checkbox-h-2c').should('not.be.checked').check({force:true})
    } 
    )
   
})