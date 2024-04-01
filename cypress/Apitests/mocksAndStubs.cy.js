describe('Mocks And Stubs', () => {

    it('should be able to register', () => {
        cy.visit('https://conduit-realworld-example-app.fly.dev/#/')
        cy.contains('a', 'Sign up').click();
        cy.get('[name="username"]').type('Batman');
        cy.get('[placeholder="Email"]').type('bb@test.com');
        cy.get('[placeholder="Password"]').type('cypress123');
        cy.contains('button', 'Sign up').click();
    })
    it('should be able to login with right credentials', () => {


        cy.visit('https://conduit-realworld-example-app.fly.dev/#/')
        cy.get('a[href$="login"]').click();
        cy.get('[placeholder="Email"]').type('bb@test.com')
        cy.get('[placeholder="Password"]').type('cypress123')
        cy.get('button').contains('Login').click();

    })
    it('Verify Mocking Tags response', () => {
        cy.visit('https://conduit-realworld-example-app.fly.dev/#/');

        cy.intercept('GET', 'https://conduit-realworld-example-app.fly.dev/api/tags'
            , { fixture: 'mockdata.json' }).as('tags')

        cy.contains('button', 'Global Feed').click();

        cy.wait('@tags').then(body => {
            console.log(body);
        })



    })
    it.only('Mocking tags responses', () => {
        cy.visit('https://conduit-realworld-example-app.fly.dev/#/');
        let tag =
            { "tags": ["Equalizer", "Spiderman", "Superman"] }

        cy.intercept('GET', 'https://conduit-realworld-example-app.fly.dev/api/tags',tag).as('tags');
        cy.contains('button', 'Global Feed').click();

        cy.wait('@tags').then(response => {

            console.log(response);
        })

    })

})