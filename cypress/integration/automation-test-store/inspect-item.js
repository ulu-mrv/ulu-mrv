/// <reference types = "Cypress" />

describe("Inspect Automationteststore items using chain of commands", () => {
    it("Click on the first item using item header", () => {
       cy.visit('https://automationteststore.com/')
       cy.get('#block_frame_featured_1769 > .thumbnails > :nth-child(1) > .fixed_wrapper > .fixed > .prdocutname').click() 
      
    })

    it.only("Click on the first item using item text", () => {
        cy.visit('https://automationteststore.com/')
        cy.get('.prdocutname').contains('Skinsheen Bronzer Stick').click().then((itemHeaderText) => {
            console.log("Selected the following item: " + itemHeaderText.text())
        })
    
     })

     it("Click on the first item using item index", () => {
        cy.visit('https://automationteststore.com/')
        cy.get('.fixed_wrapper').find('.prdocutname').eq(0).click()
       
     })


   
})