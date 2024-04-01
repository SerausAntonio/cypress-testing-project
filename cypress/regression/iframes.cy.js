describe('Handling Iframes',()=>{

    it('Handling Iframes',()=>{

        cy.visit('http://the-internet.herokuapp.com/iframe')

        cy.get('#mce_0_ifr').within(function($iframe){
            const frame=$iframe.contents().find('#tinymce')
            cy.wrap(frame).clear().type('Hello World')

        })

    })

})