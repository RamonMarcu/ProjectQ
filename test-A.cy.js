describe('Opens the home page and checks for key words', () => {
  it('should visit the homepage and check for the given key words', () => {

    cy.visit('https://magento.softwaretestingboard.com'); //opens home page

    cy.contains('Men') //checks if home page contain the word "Men"
    cy.contains('Women')
    cy.contains('Sign In')
    cy.contains('Create an Account')
    cy.contains("What's New")
    cy.contains('Gear')
    cy.contains('Training')
    cy.contains('Sale')
    
  });
});