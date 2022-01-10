



describe('tests feature popup for sites/titles and buttons while logged out', () => {

    before(() => {
        cy.visit('http://localhost:8000')
    })


    // test title popup

    it('open map filter', () => {
        cy.get('.open-filter-toggle').should('be.visible').click()
    })

    it('select Title dataset', () => {
        cy.get('.infinite-select-c3').click()
        cy.get('#Tenement').click()
    })

    it('open title gplore id dropdown', () => {
        cy.get('[name="id"]').click()
        cy.get('[name="newids"]').click()
    })

    it('check id 1000000', () => {
        cy.get('.filter-sub-group-area label input').should('be.visible').check("1000000")
    })

    it('submit the filter request', () => {
        cy.get('#filter-submit-btn').click()
    })

    it('success popup message', () => {
        cy.get('.success-map').should('be.visible')
    })
    
    it('activate title popup', () => {
        cy.get('.leaflet-interactive').should('be.visible').click()
        cy.get('.popup-header h4').should('have.text', '1000000')
    })

    it('title popup detail button', () => {
        cy.get('#more-data-btn').should('be.visible').click()
        cy.get('.warning-map').should('be.visible')
    })

    it('title popup edit button', () => {
        cy.get('#edit-data-btn').should('be.visible').click()
        cy.get('.warning-map').should('be.visible')
    })

    it('close title popup', () => {
        cy.get('.popup-header .close-c5').click()
        cy.get('.map-popup-c1').should('not.exist')
    })

    
    // test for site popup

    it('open map filter', () => {
        cy.get('.open-filter-toggle').should('be.visible').click()
    })

    it('clear previous filter', () => {
        cy.get('.header-icons > :nth-child(2) > div > .material-icons').should('be.visible').click()
    })

    it('select Site dataset', () => {
        cy.get('.infinite-select-c3').should('be.visible').click()
        cy.get('#Occurrence').should('be.visible').click()
    })

    it('open site gplore id dropdown', () => {
        cy.get('[name="id"]').click()
        cy.get('[name="newids"]').click()
    })

    it('check id 1000000', () => {
        cy.get('.filter-sub-group-area label input').should('be.visible').check("1000000")
    })

    it('submit the filter request', () => {
        cy.get('#filter-submit-btn').click()
        cy.wait(1000) // without the wait the map will zoom to the previous title position. all following steps will fail
    })
    
    it('activate site popup', () => {
        cy.get('.leaflet-marker-icon').should('be.visible').click()
        cy.get('.popup-header h4').should('have.text', '1000000')
        cy.wait(200) // provide time to view the popup
    })

    it('title popup detail button', () => {
        cy.get('#more-data-btn').should('be.visible').click()
        cy.get('.warning-map').should('be.visible')
    })

    it('title popup edit button', () => {
        cy.get('#edit-data-btn').should('be.visible').click()
        cy.get('.warning-map').should('be.visible')
    })

    it('close title popup', () => {
        cy.get('.popup-header .close-c5').click()
        cy.get('.map-popup-c1').should('not.exist')
    })

})

