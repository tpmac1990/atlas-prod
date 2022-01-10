
let obj = [
    {group: "title", ind: "1000000", id: "titletype", type: "change", from: "VIC - Work Authority", to: "AC - Offshore Production Licence"},
    {group: "title", ind: "1000000", id: "titlestatus", type: "change", from: "Unknown", to: "Active"},
    {group: "title", ind: "1000000", id: "geologicalprovinces", type: "add-remove", remove: ["Tasman Element"], add: ["Albany-Fraser Orogen"]}, // "Lachlan Orogen" to both add and remove
    {group: "title", ind: "1000000", id: "holders", type: "add-create-remove", add: ["14 Mile Well Gold Pty Ltd"], create: ["Fake Company Pty Ltd"], remove: []} // "30 Well Pty Ltd" to remove and add
]

// test the edit values of each group
// need to do:
//      add tests for other groups
//      test submitting values
//      revert changes back with form
//      sibmit again
describe('make edit changes', () => {

    let prev_group = 'title'
    let prev_ind = '1000000'

    it('login', () => {
        cy.visit('http://localhost:8000/login')
            .loginGoToPath('/detail/title/edit/1000000')
    })

    describe('make changes to all groups', () => {

        obj.forEach(grp => {

            beforeEach(() => {
                // redirect to new page if the group or ind value is different
                if ( grp.group == prev_group && grp.ind == prev_ind ) return;
                cy.goToPath(`/detail/${grp.group}/edit/${prev_ind}`)
                prev_group = grp.group
                prev_ind = grp.ind
            })

            it(`change values: ${grp.id}`, () => {
                cy.onlyOn(grp.type == 'add-create-remove')
                cy.get(`#${grp.id}`)
                    .scrollIntoView()               
                    .then(() => {
                        grp.add.forEach(val => {
                            cy.get(`#${grp.id} > .edit-add > span`).click()
                            cy.get(`#${grp.id} input:last`)
                                .type(val)
                            cy.get('.infinity-select-dropdown:last p')
                                .should('have.length.greaterThan',0)
                                .contains(val)
                                .click()
                        })
                    })
                    .then(() => {
                        grp.create.forEach(val => {
                            cy.get(`#${grp.id} > .edit-add > span`).click()
                            cy.get(`#${grp.id} input:last`)
                                .type(val)
                            cy.get(`#${grp.id} button`)
                                .contains('Add')
                                .click()
                        })
                    })
                    .then(() => { // type error needs to be fixed in the app before uncommenting
                        grp.remove.forEach(val => {
                            cy.get(`#${grp.id} td`).should('be.visible').contains(val).next().next().find('span').click()
                        })
                    })     
            })


            it(`change values: ${grp.id}`, () => {
                cy.onlyOn(grp.type == 'change')
                cy.get(`#${grp.id} span`)
                    .scrollIntoView()
                    .click()
                cy.get(`#${grp.id} input`).click()
                cy.get('.infinity-select-dropdown p')
                    .should('have.length.greaterThan',0)
                    .contains(grp.to)
                    .click()
            })

            it(`add remove values: ${grp.id}`, () => {
                cy.onlyOn(grp.type == 'add-remove')
                cy.get(`#${grp.id}`)
                    .scrollIntoView()
                    .then(() => {
                        grp.remove.forEach(val => {
                            cy.get(`#${grp.id} td`).should('be.visible').contains(val).next('.col-2').find('span').click()
                        })
                    })                    
                    .then(() => {
                        grp.add.forEach(val => {
                            cy.get(`#${grp.id} > .edit-add > span`).click()
                            cy.get(`#${grp.id} input`)
                                .click()
                                .type(val)
                            cy.get('.infinity-select-dropdown p')
                                .should('have.length.greaterThan',0)
                                .contains(val)
                                .click()
                        })
                    })
            })
        })
    })
})

