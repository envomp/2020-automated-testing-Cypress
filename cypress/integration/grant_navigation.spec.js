context('Actions', () => {
    beforeEach(() => {
        cy.visit('https://www.taltech.ee/')
    })

    it('Navigate to grants page', () => {
        cy.contains('tudeng', {matchCase: false}).click()
        cy.contains('finantsinfo', {matchCase: false}).click()
        cy.contains('stipendium', {matchCase: false}).click()

        cy.url().should('include', '/tudeng/oppetoetused-ja-stipendiumid')
    })
})
