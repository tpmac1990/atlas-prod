

Cypress.Commands.add('testTableView', (className, position='first') => {
    cy.get(`.${className} > button:${position}`)
        .should('be.visible')
        .click()
    cy.get('table')
        .should('have.length',1)
    cy.get('.close-c3')
        .click()
})


// table_count:
//      detail/edit: number of tables visible on the page
//      listview: number of listview table buttons provided
const lst = [
    {group: 'title', ind: '1000000', table_count: {detail: 7, edit: 5, listview: 1}},
    {group: 'site', ind: '1000000', table_count: {detail: 6, edit: 8, listview: 1}},
    {group: 'holder', ind: '3', table_count: {detail: 1, edit: 3, listview: 2}}
]


// test movement to and between the detail, edit
describe('movement around and between the detail and edit pages', () => {

    it('login', () => {
        cy.visit('http://localhost:8000')
            .login()
            .get('.success-map')
            .should('be.visible')
        cy.wait(1000)
    })

    it('go to detail page', () => {
        cy.get('.burger')
            .should('be.visible')
            .click()
        cy.findByText(/detail/i)
            .click()
    })

    describe('loop through each group', () => {

        lst.forEach((obj) => {

            describe(`group: ${obj.group}, ind: ${obj.ind}`, () => {

                it(`go to detail page`, () => {
                    cy.get('.sub-header-c1')
                        .contains(obj.group, { matchCase: false })
                        .click()
                })
            
                it('select value to view from select box', () => {
                    cy.get('.infinite-select-c2').should('be.visible').click()
                    cy.get(`#${obj.ind}`).should('be.visible').click()
                })
            
                it('detail page displayed correctly', () => {
                    cy.get('#detail-groups')
                        .get('table')
                        .should('have.length', obj.table_count.detail)
                })
            
                it('go to edit page', () => {
                    cy.findByRole('link', { name: /edit/i })
                        .should('be.visible')
                        .click()
                })
            
                it('edit page displayed correctly', () => {
                    cy.get('#detail-groups')
                        .find('table')
                        .should('have.length', obj.table_count.edit)
                })
            
                it('click submit without makeing changes', () => {
                    cy.findByRole('button', { name: /submit/i })
                        .click()
                    cy.get('.warning-edit')
                        .should('be.visible')
                })
            
                it('go back to detail page', () => {
                    cy.findByRole('link', { name: /detail/i })
                        .should('be.visible')
                        .click()
                })


                it('test list view table(s)', () => {
                    if ( obj.table_count.listview == 1 ){
                        cy.testTableView('list-table-btn-lng')
                    } else {
                        cy.testTableView('list-table-btn-group')
                        cy.wait(1000)
                        cy.testTableView('list-table-btn-group','last')
                    }
                })
            })
        })
    })

    
})

