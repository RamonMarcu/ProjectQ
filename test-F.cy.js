describe('Adds product into cart from Man section', () => {
    it('opens specified web page, selects first left positioned product and adds it into cart', () => {
      cy.visit('https://magento.softwaretestingboard.com/men/bottoms-men.html'); // Man's Url bottoms

  
    
        cy.wait(2000) //wait 2 seconds for the app to load
        cy.get('.product-image-photo').eq(1).click() //adds first left side product
        cy.wait(4000) // waits 4 seconds for the app to load
        cy.get('#option-label-size-143-item-175').click() // selects size 32
        cy.get('#option-label-color-93-item-58').click() // selects red color
        cy.get('#qty').clear()
        cy.get('#qty').type(2)
        cy.get('#qty').should('have.value', '2')

        cy.get('#product-addtocart-button').click() // adds item to cart
    
       
    });
  });