/// <reference types="cypress" />

context('Actions', () => {
    beforeEach(() => {
        cy.visit('https://www.taltech.ee/search/German%20Mumma')
    })

    it('should have email', () => {
        cy.contains('german.mumma@taltech.ee', {matchCase: false})
    })

    it('should expand details', () => {
        cy.get('.t-icon__plus-minus').click()

        cy.contains('german.mumma@taltech.ee', {matchCase: false})
        cy.contains('külalisõppejõud', {matchCase: false})
        cy.contains('it kolledž', {matchCase: false})
    })

    it('should redirect to profile page', () => {
        cy.get('.t-icon__plus-minus').click()

        cy.contains('Vaata profiili').click()

        cy.url().should('include', '/kontaktid/it-kolledz/german-mumma')
    })

})
