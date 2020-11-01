/// <reference types="cypress" />

context('Actions', () => {
    beforeEach(() => {
        cy.visit('https://www.taltech.ee/kontaktid/it-kolledz/german-mumma')
    })

    it('should have email', () => {
        cy.contains('german.mumma@taltech.ee', {matchCase: false})
    })

    it('should have position', () => {
        cy.contains('külalisõppejõud', {matchCase: false})
    })

    it('should have structural unit', () => {
        cy.contains('it kolledž', {matchCase: false})
    })

})
