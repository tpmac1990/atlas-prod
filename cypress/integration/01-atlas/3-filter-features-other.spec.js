


describe('test filter features', () => {

    describe('location > draw functionality', () => {

        it('open filter with title dataset', () => {
            cy.visit('http://localhost:8000')
                .openFilterIfclosed()
                .get('.infinite-select-c3')
                .should('be.visible')
                .click()
                .get(`#Tenement`)
                .should('be.visible')
                .click()
        })

        it('open location draw and activate draw functions', () => {
            cy.get('#app')
                .get(`[name='location']`).click()
                .get(`[name='draw']`).click()
            cy.findByRole('button', { name: /select area on map/i }).click();
            cy.get('#mobile-draw-btn').should('be.visible').click()
        })

        it('draw rectangle on map', () => {
            cy.get('#map-area')
                .click(400,300) 
                .click(410,310) 
            cy.findByRole('button', { name: /submit/i }).click();
            cy.get('svg').should('be.visible')
            cy.openFilterIfclosed()
        })

        it('manually change co-ordinates', () => {
            cy.get('#draw-sub-area').should('be.visible')
                .get("[name='NELat']").clear().type('-27.465')
                .get("[name='NELng']").clear().type('119.274')
                .get("[name='SWLat']").clear().type('-28.397')
                .get("[name='SWLng']").clear().type('118.517')
            cy.findByRole('button', { name: /submit/i }).click();
            cy.get('svg').should('be.visible')
            cy.openFilterIfclosed()
        })

        it('clear draw co-ordinates', () => {
            cy.findByRole('button', { name: /clear selection/i }).click();
        })

    })

    describe('location > buffer functionality', () => {

        it('open filter with title dataset', () => {
            cy.visit('http://localhost:8000')
                .openFilterIfclosed()
                .get('.infinite-select-c3')
                .should('be.visible')
                .click()
                .get(`#Tenement`)
                .should('be.visible')
                .click()
        })

        it('open location draw and activate draw functions', () => {
            cy.get('#app')
                .get(`[name='location']`).click()
                .get(`[name='buffer']`).click()
        })

        it('gplore id functionality', () => {
            cy.get("#buffer-sub-area")
                .get(`input[name='id']`)
                .type('100000')
                .should('have.class', 'fail-border')
                .type('0')
                .should('have.class', 'success-border')    
            // test submit and if filter stays open and error messages 
        })

        it('radius functionality', () => {
            cy.get("#buffer-sub-area")
                .get(`input[name='radius']`)
                .type('10')    
            // test submit and error messages when no radius given
        })

        it('submit filter', () => {
            cy.findByRole('button', { name: /submit/i }).click();
            cy.get('svg').should('be.visible')
            cy.openFilterIfclosed()
        })

    })


    describe('Date > Date options functionality', () => {

        it('open filter with title dataset', () => {
            cy.visit('http://localhost:8000')
                .openFilterIfclosed()
                .get('.infinite-select-c3')
                .should('be.visible')
                .click()
                .get(`#Tenement`)
                .should('be.visible')
                .click()
        })

        it('open location draw and activate draw functions', () => {
            cy.get('#app')
                .get(`[name='date']`).click()
                .get(`[name='subdate']`).click()
        })

        it('add date to each option and submit', () => {
            const vals = [
                {name: 'fromlodge', date: '1990-03-28'},
                {name: 'tolodge', date: '2020-03-20'},
                {name: 'fromstart', date: '1990-03-28'},
                {name: 'tostart', date: '2020-03-28'},
                {name: 'fromend', date: '1990-03-28'},
                {name: 'toend', date: '2020-03-28'}
            ]

            cy.get("#panel")
                .get('input')
                .then(() => {
                    vals.forEach((val) => {
                        cy.get(`input[name='${val.name}']`).type(val.date)
                    })
                })
                .get('#filter-submit-btn')
                .click()
                cy.get('svg').should('be.visible')
                cy.openFilterIfclosed()
        })

    })

})


