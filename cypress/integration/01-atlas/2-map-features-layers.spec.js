

describe('test map features', () => {

    before(() => {
        cy.visit('http://localhost:8000')
    })

    it('open layers list', () => {
        cy.findByRole('link', {  name: /layers/i}).should('be.visible','.leaflet-control-layers-list').trigger('mouseover')
    })

    it('show each layer in the layers list', () => {
        cy.get('.leaflet-control-layers-base label').each((ele, index) => {
            cy.wrap(ele).click();
            cy.wait(1000)
            // does the same as above
            // // cy.get(`.leaflet-control-layers-base > :nth-child(${index + 1})`).click()
            // // cy.wait(1000)
        })
    })

    it('close layers control', () => {
        cy.get('#map-layers').click(300,300)
        cy.get('.leaflet-control-layers-list').should('not.be.visible')
    })

})