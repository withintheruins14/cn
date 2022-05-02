describe('on landing', () => {
  it('loads first joke', () => {
    cy.visit('http://localhost:3000')
    cy.get('p').then((p) => {
      Cypress.dom.isVisible(p)
    })
  })
})