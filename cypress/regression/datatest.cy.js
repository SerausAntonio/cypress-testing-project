///<reference types = "cypress"/>

describe('should read data from fixture',()=>{
    let data;
    beforeEach(()=>{
      //cy.fixture('example').as('data');
        cy.fixture('example').then(function(data) {

          this.data = data;

       })

    })
    it('reading data form json file',function(){
        cy.log(this.data.email);
        expect(this.data.email).to.equal('hello@cypress.io');

    })

})