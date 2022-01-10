



describe('log in with email, check all form features exist, check links work', () => {

    before(() => {
        cy.visit('http://localhost:8000/login')
    })

    it('check all elements exist and links work', () => {
        // this does not test social features
        cy.get('h1').should('have.text', 'Login')
        cy.get('button').should('have.length', 3)
        cy.get('input').should('have.length', 2)
        cy.get("a").should('have.length', 2)
    })

    it('check signup/login links work', () => {
        cy.get('a').contains(/sign up/i).click()
        cy.get('a').contains(/log in/i).click()
    })

    it('log in using email', () => {
        cy.findByPlaceholderText(/email/i).type('imterry4302@gmail.com')
        cy.findByPlaceholderText(/password/i).type('fakevalue22!')
        cy.get('form > .btn-c5').click();
    })

    it('success login message popup', () => {
        cy.get('.success-map').should('be.visible')
    })

    it('log out', () => {
        cy.get('.user-in').should('be.visible').click()
        cy.get('.user-header-dropdown li:first a').should('have.attr', 'href', '/').click()
    })

    it('success logout message popup', () => {
        cy.get('.success-map').should('be.visible')
    })

})