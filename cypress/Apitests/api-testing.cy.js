/// <reference types="cypress"/>

describe('Api - Testing',()=>{


    it('verify GET - request',()=>{
        cy.request({
          method: 'GET',
          url: 'https://reqres.in/api/users?page=2'

        }).then(response => {
           console.log(JSON.stringify(response.body.support.text));
           expect(response.status).equal(200);
        })

    })

    it('verify POST Register - request',()=>{

        cy.request({

            method: 'POST',
            url: 'https://reqres.in/api/register',
            body: {
                "email": "eve.holt@reqres.in",
                "password": "pistol"
            }
        }).then(response => {
            const token = JSON.stringify(response.body.token)
            console.log(token);
            expect(response.status).equal(200);
        })

     })
     it('verify POST Login - request',()=>{

        cy.request({

            method: 'POST',
            url: 'https://reqres.in/api/login',
            body: {
                
                "email": "eve.holt@reqres.in",
                "password": "cityslicka"
                
            }
        }).then(response => {
            console.log(JSON.stringify(response.body.token));
            expect(response.status).equal(200);
            window.localStorage.setItem('authToken',response.body.token);
            console.log(window.localStorage.getItem('authToken'))
        })
     })

     it('Verify POST Create request',()=>{

     var user= {
        name: 'Peter Parker',
        job: 'Spiderman'
     }
     cy.request('POST','https://reqres.in/api/user',user).then(response => {
        console.log(response);
        expect(response.status).equal(201)
        expect(response.body.name).equal(user.name);
        expect(response.body.job).equal(user.job);
     })
    
    })

   it.only('verify update - request',()=>{

            cy.request('PUT','https://reqres.in/api/users/2','fixtures:user.json').then(response => {

                console.log(JSON.stringify(response));
            })

       
    })

})