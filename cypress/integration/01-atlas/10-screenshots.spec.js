
// viewports docs: https://docs.cypress.io/api/commands/viewport#Syntax
// viewport sizes: https://screensiz.es/
// visit site after setting viewport to set the correct styling

describe('testing different viewports and taking snapshots', () => {

    before(() => {
        console.log('taking screenshots')
    })

    it('open in dell xps 13 - 1920 x 1080', () => {
        // cy.viewport('macbook-13')
        cy.viewport(1920,1080)
        cy.visit('http://localhost:8000')
        cy.screenshot()
        cy.wait(200)
    })

})





