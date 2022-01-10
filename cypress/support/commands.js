// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

import "@testing-library/cypress/add-commands"

import { login, toggleFilterPanel, storeSpatialData, setFilterDataset, navigateToPath } from '../../src/redux'


Cypress.Commands.add('store', () => {
    // access state store
    cy.window().its('Cypress').its('store')
})


Cypress.Commands.add('login', () => {
    // login using the redux 'login' action
    cy.store().invoke('dispatch', login('imterry4302@gmail.com', 'fakevalue22!'))
})

Cypress.Commands.add('loginGoToPath', (pathname='/') => {
    // login and navigate to page using redux actions
    cy.login()
    cy.get('.open-filter-toggle').should('be.visible')
    cy.store().invoke('dispatch', navigateToPath(pathname))
})

Cypress.Commands.add('goToPath', (pathname='/') => {
    // navigate to page using redux actions
    cy.store().invoke('dispatch', navigateToPath(pathname))
})


Cypress.Commands.add('openFilterIfclosed', () => {  
    // if the filter is closed, then this will open it, else nothing
    cy.store().invoke('getState')
    .then(state => {
        if ( !state.filterSelection.map_data.filteropen ){
            cy.window().its('Cypress').its('store').invoke('dispatch', toggleFilterPanel())
        }
    })
})


Cypress.Commands.add('openNavBurger', () => {  
    // if the filter is closed, then this will open it, else nothing
    cy.store().invoke('getState')
    .then(state => {
        if ( !state.sizeControl.is_large ){
            cy.get('#navbar .burger').should('be.visible').click()
        }
    })
})


Cypress.Commands.add('filterSubmitByFixture', (file_name) => {  
    // pass the fixture file name stored in fixtures/01-spatial-data-call to submit a filter with that object
    cy.fixture(`01-spatial-data-call/${file_name}.json`).then((obj) => {
        cy.store().invoke('dispatch', storeSpatialData(obj.object))
        cy.store().invoke('dispatch', setFilterDataset(obj.object.dataset))
    })
})


Cypress.Commands.add('openFilterGroupChecksOptions', ({group, subgrp, search, options}) => {  
    // used for filter groups with checkbox options
    // open the filter group and sub group, filter if necessary, select options and close filter group
    cy.get(`[name='${group}']`).click()
    cy.get(`[name='${subgrp}']`).click()
    search !== '' && cy.get('.filter-sub-group-area > .input-c1').should('be.visible').type(search)
    cy.get('.filter-sub-group-area label input[type="checkbox"]').should('be.visible').check(options)
    cy.get(`[name='${subgrp}']`).click()
    cy.get(`[name='${group}']`).click()
})





