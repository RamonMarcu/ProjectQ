describe('Checks if the link is correct after action', () => {
    it('Navigates and checks if the url is corect', () => {
      cy.visit('https://magento.softwaretestingboard.com'); 
  
      cy.contains('Women').click(),
      cy.url().should('include', '/women') 
      // should be on a new URL which includes /women
      
      
      cy.get('#ui-id-5').click() // clicks on element "Men"
      cy.url().should('include', '/men') //checks if the link is correct after action. 
      
      cy.get('#ui-id-3').click() // clicks on "What's New" element
      cy.url().should('include', '/what-is-new')
  
      
    });
  });