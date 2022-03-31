
describe('Hooks', () => {
    before(() => {
        cy.log("runs once before all tests in the block")
    })

    beforeEach(() => {
        cy.log("runs once after all tests in the block")
    })

    afterEach(() => {
        cy.log("runs before each tests in the block")
    })

    after(() => {
        cy.log("runs after each tests in the block")
    })

    it("Example test1", () => {
        cy.log("Example test1!")
    })

    it("Example test2", () => {
        cy.log("Example test2!")
    })
})