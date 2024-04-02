describe('Signs in and proceed checkout', () => {
   
  it('signs in and checkout', () => {
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


      cy.visit('https://magento.softwaretestingboard.com/checkout/#payment'); 
  
      cy.get('#billing-address-same-as-shipping-checkmo').click() //thiks the box for billing address same as shipping address 
      cy.contains('Order Total')

     
      cy.get('.action primary checkout').click() //clicks checkout button
  
      
      
  
  
    });
  });  