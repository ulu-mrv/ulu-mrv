/// <reference types = "Cypress" />

describe("Alias and Invoke", () => {
    it("Validate a specific hair care product", () => {
       cy.visit('https://automationteststore.com/') 
       cy.get("a[href*='product/category&path']").contains("Hair Care").click()
       
       cy.get('.fixed .prdocutname').eq(0).invoke('text').as('productThumbnail')
       cy.get('@productThumbnail').its('length').should('be.gt', 5)
       cy.get('@productThumbnail').should('include', 'Seaweed Conditioner')

    })

    it("Validate a specific hair care product", () => {
        cy.visit('https://automationteststore.com/') 
        cy.get('.thumbnail').as('productThumbnail')
        cy.get('@productThumbnail').should('have.length', 16)
        cy.get('@productThumbnail').find('.productcart').invoke('attr', 'title').should('include', 'Add to Cart')
        
     
 
     })
     it.only("Calculate total of normal and sale products", () => {
        cy.visit('https://automationteststore.com/') 
        cy.get('.thumbnail').as('productThumbnail')
       // cy.get('@productThumbnail').find('.oneprice').each(($el, index, $list) => {
       //     cy.log($el.text())

        //})

        cy.get('.thumbnail').find('.oneprice').invoke('text').as('itemPrice')
        cy.get('.thumbnail').find('.pricenew').invoke('text').as('saleItemPrice')
        var itemsTotal = 0
        cy.get('@itemPrice').then($linkText => {
            var itemsTotalPrice = 0
            var itemPrice = $linkText.split('$')
            var i
            for(i = 0; i< itemPrice.length; i++) {
                cy.log(itemPrice[i])
                itemsTotalPrice += Number(itemPrice[i])
            }
            itemsTotal += itemsTotalPrice
            cy.log("Non sale price items price total " + itemsTotalPrice)
        })

        cy.get('@saleItemPrice').then($linkText => {
            var saleItemTotalPrice = 0
            var saleItemPrice = $linkText.split('$')
            var i
            for(i = 0; i< saleItemPrice.length; i++) {
                cy.log(saleItemPrice[i])
                saleItemTotalPrice += Number(saleItemPrice[i])
                
            }
            itemsTotal += saleItemTotalPrice

            cy.log("Sale Items total price is " +saleItemTotalPrice)
            
           
        })
        .then(() => {
            cy.log('The total price is ' + itemsTotal)
            expect(itemsTotal).to.equal(648.5)

        })

        
        
     
 
     })

 
   
})
