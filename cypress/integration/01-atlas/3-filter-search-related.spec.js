

describe('test filtering with related data', () => {
    
    it('open filter and set to title dataset', () => {
        cy.visit('http://localhost:8000')
            .openFilterIfclosed()
            .get('.infinite-select-c3').should('be.visible').click()
            .get(`#Tenement`).should('be.visible').click()
    })

    it('apply primary filters', () => {
        cy.openFilterGroupChecksOptions({group: 'location', subgrp: 'ausstate', search: '', options: ['NSW','VIC']})
        cy.openFilterGroupChecksOptions({group: 'type', subgrp: 'typesimple', search: '', options: ['3']})
    })

    it('open related filter', () => {
        cy.get('#related-data-toggle').should('be.visible').click()
        cy.get('#footer-btns button').contains('Relations').should('be.visible').click()
    })

    it('apply related filters', () => {
        cy.openFilterGroupChecksOptions({group: 'typerelated', subgrp: 'typesimplerelated', search: '', options: ['2','3']})
        cy.openFilterGroupChecksOptions({group: 'materialrelated', subgrp: 'materialnamerelated', search: '', options: ['19','21','25']})
    })

    it('submit filter request', () => {
        cy.get('#filter-submit-btn').click()
        cy.get('svg').should('be.visible')
        cy.openFilterIfclosed()
    })

    it('reset the filter', () => {
        cy.findByText(/delete_sweep/i).click();
    })

    it('set filter to site dataset', () => {
        cy.get('#panel')
            .get('.infinite-select-c3').should('be.visible').click()
            .get(`#Occurrence`).should('be.visible').click()
    })

    it('apply primary filters', () => {
        cy.openFilterGroupChecksOptions({group: 'location', subgrp: 'ausstate', search: '', options: ['NSW','VIC']})
        cy.openFilterGroupChecksOptions({group: 'type', subgrp: 'typesimple', search: '', options: ['3']})
    })

    it('open related filter', () => {
        cy.get('#related-data-toggle').should('be.visible').click()
        cy.get('#footer-btns button').contains('Relations').should('be.visible').click()
    })

    it('apply related filters', () => {
        cy.openFilterGroupChecksOptions({group: 'typerelated', subgrp: 'typesimplerelated', search: '', options: ['2','3']})
        cy.openFilterGroupChecksOptions({group: 'materialrelated', subgrp: 'materialnamerelated', search: '', options: ['8','11','14','16']})
    })

    it('submit filter request', () => {
        cy.get('#filter-submit-btn').click()
        cy.get('svg').should('be.visible')
        cy.openFilterIfclosed()
    })

})


