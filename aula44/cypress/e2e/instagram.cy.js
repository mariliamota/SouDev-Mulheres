describe('', () => {
    beforeEach(() => {
        cy.visit('https://instagram.com');
    });

    it('testar se o login retorna senha incorreta', () => {
        //vai encontrar um button com o texto "Log in"
        cy.get('button').contains('Log In').click();

        cy.wait(2000);

        //garantindo que tem um "button" com o texto "Entrar"
        cy.get('button').contains('Log in');

        cy.contains('Forgot password');

        cy.get('[name="username"]');

        cy.get('[name="username"]').type('usuarioaleatorio');
        cy.get('[name="password"]').type('12345678');

        cy.get('[type="submit"]').click();

        cy.wait(2000);

        cy.contains('Sua senha está incorreta');
    });
});