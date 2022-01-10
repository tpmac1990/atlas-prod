

describe('test all checkbox filter groups load values', () => {

    let prev_dataset = ''
    let prev_filter = ''
    let prev_group = ''

    before(() => {
        cy.visit('http://localhost:8000')
    })

    it('open filter', () => {
        cy.openFilterIfclosed()
    })

    // built from: 02-test-iterations/filter-checkbox-groups.json
    cy.iterationCheckboxLst().forEach(iter => {

        const { dataset, filter, group, subgrp } = iter

        // close only if the new group is different from the previous
        it(`close group: ${prev_group}`, () => {
            cy.onlyOn(group != prev_group && prev_group != '')
            cy.get(`[name='${prev_group}']`).click()
        })

        // close the related filter if it is open and the new filter is a primary filter
        it('close the related filter', () => {
            cy.onlyOn(filter == 'primary' && prev_filter == 'related')
            cy.get('#footer-btns button').contains('Relations').should('be.visible').click()
            cy.get('#related-data-toggle').should('be.visible').click()
        })

        it('select title dataset', () => {
            cy.skipOn(dataset == prev_dataset)
            cy.get('.infinite-select-c3').should('be.visible').click()
            cy.get(`#${dataset}`).should('be.visible').click()
        })

        // only open if required
        it('open the related filter', () => {
            cy.onlyOn(filter == 'related' && prev_filter != filter)
            cy.openFilterGroupChecksOptions({group: 'location', subgrp: 'ausstate', search: '', options: ['TAS','VIC','NSW','QLD','NT','SA','WA']})
            cy.get('#related-data-toggle').should('be.visible').click()
            cy.get('#footer-btns button').contains('Relations').should('be.visible').click()
        })

        it(`open group: ${group}`, () => {
            cy.skipOn(group == prev_group)
            cy.get(`[name='${group}']`).click()
        })

        it(`open sub-group: ${subgrp}, from group: ${group}`, () => {
            cy.get(`[name='${subgrp}']`).click()
        })

        it(`load checkbox options - dataset: ${dataset}, group: ${group}, sub-group: ${subgrp}`, () => {
            cy.skipOn(subgrp == 'changegroup') // could be zero
            cy.get('.filter-sub-group-area label').should('have.length.greaterThan', 0)
            // might need to check no duplicates exist
        })

        it(`close sub-group: ${subgrp}, from group: ${group}`, () => {
            cy.get(`[name='${subgrp}']`).click()
        })

        it('update previous values', () => {
            prev_dataset = dataset
            prev_filter = filter
            prev_group = group
        })
    })
})
