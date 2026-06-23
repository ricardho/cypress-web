export function acessarLogin() {
cy.visit('/login')

}

export function preencherEmail(email) {
    cy.get('#user').type(email)
}

export function preencherSenha(senha) {
    cy.get('#password').type(senha)
}

export function btnlogar() {
    cy.get('#btnLogin').click()
}

export function validarLogin()  {
    cy.get('#swal2-title').should('be.visible')
                          .should('have.text', 'Login realizado')                         
}

export function validarLoginInvalido(mensagem)  {
    cy.get('.invalid_input')
        .should('be.visible')
        .and('contain.text', mensagem)
}

export function logar(email, senha) {
    acessarLogin()
    preencherEmail(email)
    preencherSenha(senha)
    btnlogar()
}