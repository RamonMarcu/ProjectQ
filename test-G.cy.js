describe('Opens the app, Signs into an existing account and checks customer/account url', () => {
   
  it('signs in and checks url', () => {
    cy.visit('https://magento.softwaretestingboard.com'); 

    cy.contains('Sign In').click()
    
    
    // should be on a new URL which
    //includes '/customer/account/login/referer/aHR0cHM6Ly9tYWdlbnRvLnNvZnR3YXJldGVzdGluZ2JvYXJkLmNvbS9jdXN0b21lci9hY2NvdW50L2NyZWF0ZS8%2C/'
    cy.url().should('include', 'customer/account/login/referer/aHR0cHM6Ly9tYWdlbnRvLnNvZnR3YXJldGVzdGluZ2JvYXJkLmNvbS8%2C/') 
    
    cy.get('#email').type('ramon.cristian00@gmail.com')
    cy.get('#email').should('have.value', 'ramon.cristian00@gmail.com')

    
    cy.get('#pass').type('Hello12!ciao') 

    cy.get('#send2').click
    cy.wait(2000)
    cy.url().should('include', '/customer/account/')
    
  });
});