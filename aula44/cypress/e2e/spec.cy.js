describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://pt-br.facebook.com/login/device-based/regular/login/')
    cy.get("#email").type("marilia.mota90@gmail.com")
    cy.get("#pass").type("123456")
    cy.get("#loginbutton").click({multiple: true})
  })
})