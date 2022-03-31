/// <reference types = "Cypress" />

describe("Iterate over elements", () => {

  beforeEach(() => {
    cy.visit('https://automationteststore.com/') 
    cy.get("a[href*='product/category&path']").contains("Hair Care").click()
  })
    it("Log information of all hair care products", () => {
        cy.get('.fixed .prdocutname').each(($el, index, $list) => {
        cy.log("Index " + index + " : " + $el.text() )
      })
     
    })

    it("Add specific product to the basket", () => {
  
       // cy.get('.fixed .prdocutname').each(($el, index, $list) => {
       //     if($el.text().includes('Eau Parfumee au The Vert Shampoo')) {
       //         cy.wrap($el).click()
       //     }
       //   })

       cy.selectProduct('Eau Parfumee au The Vert Shampoo');
        
     })

     it("Add specific product to the basket", () => {
        cy.selectProduct('Seaweed Conditioner');
     
   })

   it("Add specific product to the basket", () => {
    cy.selectProduct('Curls to straight Shampoo');
 
})

   
})