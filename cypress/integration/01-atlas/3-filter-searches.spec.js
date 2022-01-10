


describe('test a the filter', () => {
    
    cy.iterationDatasetLst().forEach(iter => {

        const { dataset, alias, height, width } = iter

        context(`dataset: ${dataset}, alias: ${alias}, height: ${height}, width: ${width}`, {viewportHeight: height, viewportWidth: width}, () => {

            before(() => {
                cy.visit('http://localhost:8000')
            })

            it('open filter', () => {
                cy.openFilterIfclosed()
            })

            it('select title dataset', () => {
                cy.get('.infinite-select-c3').should('be.visible').click()
                cy.get(`#${dataset}`).should('be.visible').click()
            })

            it('open location group and ausstate subgroup', () => {
                cy.openFilterGroupChecksOptions({group: 'location', subgrp: 'ausstate', search: '', options: ['NSW','VIC']})
            })

            it('open location group and ausstate subgroup', () => {
                cy.openFilterGroupChecksOptions({group: 'type', subgrp: 'typesimple', search: '', options: ['3']})
            })

            it('submit filter request', () => {
                cy.get('#filter-submit-btn').click()
                cy.wait(2000) // provide enough time to view the results
            })

        })

    })

})