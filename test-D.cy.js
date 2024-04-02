const user = {
    firstName: 'Ramon',
    lastName: 'Marcu',
    email: 'ramondot@gmail.com',
    password: 'hello123cc!'
  }
  
  describe('Creates an account with valid data', () => {
    it('creates an account', () => {
      cy.visit('https://magento.softwaretestingboard.com'); 
      const accountCreationPage = new AccountCreationPage();
      accountCreationPage.visitCreateAccountPage();
      accountCreationPage.fillUserForm(user);
      accountCreationPage.submitAccountCreation();
      
    });
  });
  
  class AccountCreationPage {
    visitCreateAccountPage() {
      cy.contains('Create an Account').click();
      cy.url().should('contain', '/customer/account/create/');
    }
  
    fillUserForm(userData) {
      cy.get('#firstname').type(userData.firstName);
      cy.get('#lastname').type(userData.lastName);
      cy.get('#email_address').type(userData.email);
      cy.get('#password').type(userData.password);
    }
  
    submitAccountCreation() {
      cy.contains('Create an Account').click();
    }
  }
  