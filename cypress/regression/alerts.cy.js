/// <reference types="cypress"/>
describe('Handling Alerts', () => {

    it('Handling JS Alert', () => {

        cy.visit("http://the-internet.herokuapp.com/javascript_alerts")

        cy.get('button').contains('Click for JS Alert').click();
        cy.on('window:alert', (str) => {
            expect(str).to.equal('I am a JS Alert');

        })
        cy.get('#result').should('contain', 'You successfully clicked an alert')
    })
    it('Handling Confirmation Alert - OK button', () => {

        cy.visit("http://the-internet.herokuapp.com/javascript_alerts")

        cy.get('button').contains('Click for JS Confirm').click();
        cy.on('window:confirm', (str) => {
            expect(str).to.equal('I am a JS Confirm')
            return true;
        })
        cy.get('#result').should('contain','You clicked: Ok')
    })

    it('Handling Confirmation Alert - Cancel button', () => {

        cy.visit("http://the-internet.herokuapp.com/javascript_alerts")

        cy.get('button').contains('Click for JS Confirm').click();
        cy.on('window:confirm', (str) => {
            expect(str).to.equal('I am a JS Confirm')
            return false;
        })
        cy.get('#result').should('contain','You clicked: Cancel')
    })

    it('Handling Prompt Alert - OK button', () => {

        cy.visit("http://the-internet.herokuapp.com/javascript_alerts")

        cy.get('button').contains('Click for JS Prompt').click();
        cy.window().then(function($win){
            cy.stub($win,'prompt').returns('Hallo Antonio')
            cy.contains('Click for JS Prompt').click();
            
        })
        cy.get('#result').should('contain','You entered: Hallo Antonio')
    })
})