


describe('test filter features', () => {

    describe('infinity scroll loads multiple scrolls for location > local group', () => {

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
                    cy.get(`[name='location']`).click()
                    cy.get(`[name='local']`).click()
                })
    
                it('checkbox list before scroll', () => {
                    cy.get('.filter-sub-group-area label').should('have.length',40)
                })

                it('test 11 scroll events and data retrieval', () => {
                    // The location > local sub-group should have 11 auto scroll events to get all values
                    let i = 0;
                    let labels = 0;
                    do {
                        i = i + 1;
                        labels = labels + 40;
                        cy.get('.filter-sub-group-area').scrollTo('bottom')
                        cy.get('.filter-sub-group-area label').should('have.length.greaterThan',labels)
                    } while (i < 11);
                })
    
            })
    
        })
    })

})