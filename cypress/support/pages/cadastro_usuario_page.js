export function acessarCadastro() {
    cy.visit('/register')

}

export function preencherNome(nome) {
    cy.get('#user').type(nome)
}

export function preencherEmail(email) {
    cy.get('#email').type(email)
}

export function preencherSenha(senha) {
    cy.get('#password').type(senha)
}

export function cadastrar() {
    cy.get('#btnRegister').click()
}

export function validarCadastro() {
    cy.get('#swal2-title')
        .should('be.visible')
        .and('have.text', 'Cadastro realizado!')
}

export function validarMensagemErro(mensagem) {
    cy.get('.errorLabel')
        .should('be.visible')
        .and('contain.text', mensagem)

}

export function cadastrarUsuario(nome, email, senha) {
    acessarCadastro()
    preencherNome(nome)
    preencherEmail(email)
    preencherSenha(senha)
    cadastrar()
}