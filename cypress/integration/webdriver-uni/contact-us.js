import HomePage_PO from '../../support/pageObjects/webdriver-uni/Homepage_PO'
import Contact_Us_PO from '../../support/pageObjects/webdriver-uni/Contact_Us_PO'

/// <reference types = "Cypress" />

describe("Test contact us form via WebdriverUni", () => {
    Cypress.config('defaultCommandTimeout', 20000)
    const homepage_PO = new HomePage_PO();
    const contact_Us_PO = new Contact_Us_PO();

    before(() => {
        cy.fixture('example').then((data) => {
            //this.data = data;
            globalThis.data= data;
        })
    })

    beforeEach(() => {
        
        homepage_PO.visitHomepage();
        cy.wait(3000)
        homepage_PO.clickOn_ContactUs_Button();
        //cy.pause();
        
    })
    it("Should be able to submit a successful submition via Contact us form", () => {
        
        cy.document().should('have.property', 'charset').and('eq', 'UTF-8')
        cy.title().should('include', 'WebDriver | Contact Us')
        cy.url().should('include', 'contactus')
        contact_Us_PO.contactForm_Submission(Cypress.env("first_name"),data.last_name,data.email, "Hallo World", 'h1', 'Thank You for your Message!');
    })

    it("Should not be able to submit a successful submition via Contact us form as all fields are required", () => {

        if(Cypress.isBrowser('firefox')) {

        }else {
            contact_Us_PO.contactForm_Submission(Cypress.env("first_name"),data.last_name," ", "Hallo World", 'body', 'Error: Invalid email address');
        }
       
       
    })
})