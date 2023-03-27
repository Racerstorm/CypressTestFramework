describe('Start an example spec', () => {
  it('passes', () => {
    cy.visit('https://moonraft.com/')
    cy.get('.navigation-bar--main__menu').click();
    cy.contains('services').click()
    cy.url().should('include', '/servfices')
  })
})