/// <reference types="cypress" />

context('Actions', () => {
    beforeEach(() => {
        cy.visit('https://www.taltech.ee/')
    })

    it('Search for teacher by first name', () => {
        cy.get('.js-searchInput')
            .first()
            .type('German', {delay: 100})
            .should('have.value', 'German')

        cy.contains('German Mumma')
    })

    it('Search for teacher by last name', () => {
        cy.get('.js-searchInput')
            .first()
            .type('Mumma', {delay: 100})
            .should('have.value', 'Mumma')

        cy.contains('german mumma', {matchCase: false})
    })

    it('Search for teacher by full name', () => {
        cy.get('.js-searchInput')
            .first()
            .type('German Mumma', {delay: 100})
            .should('have.value', 'German Mumma')

        cy.contains('german mumma', {matchCase: false})
    })

    it('Search for teacher by full name and redirect to corresponding page', () => {
        cy.get('.js-searchInput')
            .first()
            .type('German Mumma{enter}', {delay: 100})

        cy.contains('german mumma', {matchCase: false})

        cy.url().should('include', '/search/German%20Mumma')
    })
})
