describe('Dropdown selection',()=>{

    beforeEach(()=>{

   //     cy.visit('https://seleniumbase.io/demo_page');        
    })
    it('should be able to static dropdown',()=>{
       cy.visit('https://seleniumbase.io/demo_page')
       cy.get('#mySelect').select('75%').should('have.value','75%')
    })
    it('should handle dynamic dropdowns',()=>{

        cy.visit('https://demos.telerik.com/aspnet-ajax/dropdownlist/examples/overview/defaultcs.aspx')
        cy.get('.rddlFakeInput').contains('Select a product').click();
        cy.get('.rddlItem').contains('Pavlova').click();
    })
    it.only('Should be able to select multiple dropdown',()=>{
        cy.visit('https://demo.mobiscroll.com/select/mulitple-select/')
        cy.get('input#multiple-select-input').click();
        cy.get('.mbsc-ios').contains('Health & Beauty').click();


    } )




})