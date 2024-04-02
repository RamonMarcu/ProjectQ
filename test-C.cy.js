describe('Creates an account wiht the given parameters', () => {
    it('creates an account with the given parameters', () => {
      cy.visit('https://magento.softwaretestingboard.com'); 
  
      cy.contains('Create an Account').click()
      
      
      cy.url().should('include', '/customer/account/create/')  //check the url after action 
         
      cy.get('#firstname').type('Ramon') // Gets the "First Name" input field and types into it
      cy.get('#firstname').should('have.value', 'Ramon') //Checks that the value has been updated
  
      cy.get('#lastname').type('Marcu') // Gets the "Last Name" input field and types into it
      cy.get('#lastname').should('have.value', 'Marcu') //Checks that the value has been updated
  
      cy.get('#email_address').type('ramondot@gmail.com')
      cy.get('#email_address').should('have.value', 'ramondot@gmail.com')
  
      cy.get('#password').type('hello123cc!') 
  
      cy.contains('Create an Account').click() //creates account
  
    });
  });