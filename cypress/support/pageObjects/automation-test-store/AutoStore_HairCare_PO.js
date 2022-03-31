class AutoStore_HairCare_PO {

   addHaircareProductsToBasket() {
    globalThis.data.productName.forEach(function(element) {
        cy.addProductToBasket(element).then(() => {
            //debugger
        })
    })
    cy.get('.dropdown-toggle > .fa').click().debug()
   }
 
 }
 export default AutoStore_HairCare_PO;