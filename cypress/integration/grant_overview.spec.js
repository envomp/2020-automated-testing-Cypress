context('Actions', () => {
    beforeEach(() => {
        cy.visit('https://www.taltech.ee/tudeng/oppetoetused-ja-stipendiumid')
    })

    it('Navigate to targeted scholarship page', () => {
        cy.contains('Sihtstipendium', {matchCase: false}).click()

        cy.url().should('include', '/sihtstipendium')

        cy.contains('eurot')

        cy.get('article').first().find('ol')
            .children().should('have.length', 5) // There should be 5 obligations
    })

    it('Navigate to professional scholarship page', () => {
        cy.contains('Erialastipendium', {matchCase: false}).click()

        cy.url().should('include', '/erialastipendium')

        cy.contains('eurot')

        cy.get('article').first()
            .find('ul')
            .children().should('have.length', 5) // There should be 5 obligations
    })

    it('Navigate to performance grant page', () => {
        cy.contains('Tulemusstipendium', {matchCase: false}).click()

        // This href is actually broken. When clicking it manually it loads forever.
        // cy.url().should('include', '/tulemusstipendium')
        //
        // cy.contains('eurot')
    })

    it('Navigate to needs-based special support grant page', () => {
        cy.contains('Vajaduspõhine eritoetus', {matchCase: false}).click()

        cy.url().should('include', '/vajaduspohine-eritoetus')

        cy.contains('eurot')

        cy.get('article').first()
            .find('ul')
            .children().should('have.length', 5) // There should be 5 obligations
    })

    it('Navigate to needs-based study grant page', () => {
        cy.contains('Vajaduspõhine õppetoetus', {matchCase: false}).click()

        cy.url().should('include', '/vajaduspohine-oppetoetus')

        cy.contains('eurot')

        cy.get('article').first()
            .find('ul')
            .children().should('have.length', 8) // There should be 8 obligations / sub-obligations
    })

    it('Navigate to scholarship for students with special needs grant page', () => {
        cy.contains('eriavajadustega üliõpilaste stipendium', {matchCase: false}).click()

        cy.url().should('include', '/erivajadustega-uliopilaste-stipendium')
    })

    it('Navigate to foreign scholarships page', () => {
        cy.contains('välisstipendium', {matchCase: false}).click()

        cy.url().should('include', '/en/scholarship')
    })

    it('Navigate to other scholarships page', () => {
        cy.contains('muud stipendiumid', {matchCase: false}).click()

        cy.url().should('include', '/muud-stipendiumid-1')
    })
})
