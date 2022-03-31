/// <reference types = "Cypress" />

describe("Verifying variables, cypress commands and jquery commands", () => {
    it("Navigating ti specific product pages", () => {
       cy.visit('https://automationteststore.com/')
      // const makeupLink = cy.get("a[href*='product/category&path']").contains("Makeup")
       //makeupLink.click()
       //const skincareLink = cy.get("a[href*='product/category&path']").contains("Skincare")
       //skincareLink.click()

       cy.get("a[href*='product/category&path']").contains("Makeup").click()
       cy.get("a[href*='product/category&path']").contains("Skincare").click()

      
    })

    it("Navigating to specific product pages", () => {
        cy.visit('https://automationteststore.com/')
        cy.get("a[href*='product/category&path']").contains("Makeup").click()
        //const header = cy.get(".maintext")
        //cy.log(header.text())

        cy.get(".maintext").then(($headerText) => {
            const headerText = $headerText.text()
            cy.log("Found header text : "+ headerText)
            expect(headerText).is.eq('Makeup')
        })
       
 
       
     }) 

     it.only("Validate properties of Contuct us page", () => {
        cy.visit('https://automationteststore.com/index.php?rt=content/contact')

        //Uses cypress commands and chaining
        cy.contains("#ContactUsFrm", "Contact Us Form").find("#field_11").should('contain', 'First name')


        //JQuery approach

        cy.contains("#ContactUsFrm", "Contact Us Form").then( text => {
            const firstNameText = text.find("#field_11").text()
            expect(firstNameText).to.contain('First name')

             //Embedded Commands (Closures)
            cy.get('#field_11').then(fnTxt => {
                cy.log(fnTxt.text())
            })
        })

        //Embedded Commands (Closures)
        
 
       
     }) 

  


   
})