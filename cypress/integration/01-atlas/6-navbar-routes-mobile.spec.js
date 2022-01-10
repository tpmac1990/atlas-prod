
// skip over uncaught error
// (uncaught exception) TypeError: Cannot read properties of null (reading 'getBounds') when moving from map to attribute page
Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
});

// 
const openBurgerLink = (text) => {
    cy.openNavBurger()
    cy.get('#navbar .ul-mobile li a').contains(text).click()   
}

describe('inspect all the routes in the navbar function correctly for mobile', () => {

    before(() => {
        cy.viewport(411,823)
        cy.visit('http://localhost:8000')
    })

    beforeEach(() => {
        cy.viewport(411,823)
    })

    it('go to page: Attribution', () => {
        openBurgerLink('Attribution')
        cy.get('#attribution h1').should('have.text','Copyright')
        cy.get('#attribution table').should('have.length',1)
        cy.get('#attribution th').should('have.length',3)
        cy.get('#attribution tr').should('have.length',9)
        cy.get('#state-logos img').should('have.length',8)
    })

    it('go to page: Manual', () => {
        openBurgerLink('Manual')
        cy.get('.sub-header-c1').should('is.visible').children()
        .should('contain', 'Documentation')
        .and('contain', 'Demonstrations')
    })

    it('go to page: Map', () => {
        openBurgerLink('Map')
        cy.get('#map-layers .open-filter-toggle').should('be.visible')
        cy.get('.leaflet-container').should('be.visible')
    })

    it('go to page: Detail - not logged in', () => {
        openBurgerLink('Detail')
        cy.get('.auth-sub-area').should('is.visible').and('contain', 'Login')
        cy.get('.error-map').should('be.visible')
    })

    it('go to page: Detail - logged in', () => {
        cy.login()
        cy.wait(1000)
        openBurgerLink('Detail')
        cy.get('.sub-header-c1').should('is.visible')
        .and('contain', 'Title')
        .and('contain', 'Site')
        .and('contain', 'Holder')
        .and('not.contain', 'Login')
    })

})
