
Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
});


describe('test the buttons on the right side of the map', () => {

    const iterations = cy.iterationLoginLst()
    
    iterations.forEach(iter => {

        const { login, alias, height, width } = iter

        context(`login: ${login}, alias: ${alias}, height: ${height}, width: ${width}`, {viewportHeight: height, viewportWidth: width}, () => {

            before(() => {
                cy.visit('http://localhost:8000')
            })

            it('log in', () => {
                cy.onlyOn(login)
                cy.login()
            })

            it('display sites on map, no extras to add', () => {
                cy.filterSubmitByFixture('site-filter')
            })

            it('assert correct number of buttons', () => {
                cy.get('#map-btns div').should('have.length', 3)
            })

            it('click - create site button', () => {
                cy.get('#create-site-btn').should('be.visible').click()
                cy.wait(300) // wait for leaflet create point action to trigger
            })

            it('click on map to create site', () => {
                cy.onlyOn(login)
                cy.get('#map-area').click(300,300)
            })

            it('click on map to create site', () => {
                cy.onlyOn(!login)
                cy.get('.warning-map').should('be.visible')
            })

            it("Cancel 'confirm site location' popup", () => {
                cy.onlyOn(login)
                cy.get('.confirm-c1 button').contains('Cancel').click()
            })

            it("open list view", () => {
                cy.get('#map-list-view-btn').click()
                cy.get('table').should('have.length',1)
            })

            it('close list view table', () => {
                cy.get('.close-c3').should('be.visible').click()
            })

        })

    })
    
})

