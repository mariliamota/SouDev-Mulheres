describe('Testar pagina cep', () => {
    beforeEach(() => {
        cy.visit('https://alessandrofeitoza.github.io/endereco-via-cep/')
    });

    it('buscar o cep', () => {
        cy.get('#cep').type("60416510").blur()
        cy.wait(2000)
        cy.get('#logradouro').should('have.value', 'Rua Raul Uchôa')
        cy.get('#bairro').should('have.value', 'Bom Futuro')
        cy.get('#cidade').should('have.value', 'Fortaleza')
    })
});