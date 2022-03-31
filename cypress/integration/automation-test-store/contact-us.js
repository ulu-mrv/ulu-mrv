/// <reference types = "Cypress" />

describe("Test contact us form via Automation Test Store", () => {
    before(() => {
        //cy.viewport(550,750)
        cy.fixture("userDetails").as("user")
    })
    it("Should be able to submit a successful submition via Contact us form", () => {
       cy.visit('https://automationteststore.com/') 
       cy.get("a[href$='contact']").click().then((button) => {
           cy.log(button.text())
       })
       cy.get("@user").then((user) =>{
        cy.get('[name="first_name"]').type(user.first_name)
        cy.get('#ContactUsFrm_email').type(user.email)
       })
    
       cy.get('#ContactUsFrm_email').should('have.attr','name','email')
       cy.get('[name="enquiry"]').type('Do you provide an additional discount')
       cy.contains("Submit").click()
       cy.get(".contentpanel").should('contain','Your enquiry has been successfully sent to the store owner!')

      

    })

   
})