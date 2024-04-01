/// <reference types="cypress" />
describe('Api testing conduit api',()=>{

it.only('POST - register api request',()=>{
    cy.request({
        method: "POST",
        url: 'https://conduit-realworld-example-app.fly.dev/api/users',
        headers: {
            "Content-Type": "application/json; charset=utf-8"
        },
        body: {"user":
           {"username":"equalizer",
            "email":"pp21213@tester.com",
           "password":"ppp1234"}
        }
   }).then(response => {
    console.log(JSON.stringify(response.body.user.email));
    console.log(JSON.stringify(response.status));
    expect(response.status).equal(201);
})


})
it('POST - login api request',()=>{



})

})