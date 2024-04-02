describe('Adds product into cart from Women section', () => {
    it('opens specified web page, selects first left positioned product and adds it into cart', () => {
      cy.visit('https://magento.softwaretestingboard.com/women/tops-women.html'); 
  
  
    
        cy.wait(2000) //wait 2 seconds for the app to load
        cy.get('.product-image-photo').eq(1).click() //adds first left side product
        cy.wait(3000) // waits 3 seconds for the app to load
        cy.get('#option-label-size-143-item-166').click() // selects xs size
        cy.get('#option-label-color-93-item-60').click() // selects yellow color

        cy.get('#qty').clear()
        cy.get('#qty').type(4)
        cy.get('#qty').should('have.value', '4')

        cy.get('#product-addtocart-button').click() // adds item to cart
    
       
    });
  });