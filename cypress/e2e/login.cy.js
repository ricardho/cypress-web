/// <reference types="cypress" />

import { faker } from "@faker-js/faker"
//import { acessarLogin } from "../support/pages/login_pages"
import {
  acessarLogin,
  preencherEmail,
  preencherSenha,
  btnlogar,
  validarLogin,
  validarLoginInvalido,
  logar
} from "../support/pages/login_pages"

const telas = ["iphone-xr", "samsung-s10", "macbook-16"]

telas.forEach((tela) => {
  describe("Login - " + tela, () => {

    beforeEach(() => {
      cy.viewport(tela)
      acessarLogin()
    })

    it("Login com sucesso - " + tela, () => {
      preencherEmail(faker.internet.email())
      preencherSenha(faker.internet.password(7))
      btnlogar()
      validarLogin()
    })

    it("Login e-mail vazio - " + tela, () => {
      preencherSenha(faker.internet.password(7))
      btnlogar()
      validarLoginInvalido('E-mail inválido.')
    })

    it("Login senha vazia - " + tela, () => {
      preencherEmail(faker.internet.email())
      btnlogar()
      validarLoginInvalido('Senha inválida.')
    })

    it("Login e-mail inválido - " + tela, () => {
      preencherEmail('000')
      preencherSenha(faker.internet.password(7))
      btnlogar()
      validarLoginInvalido('E-mail inválido.')
    })

    it("Login senha inválida - " + tela, () => {
      preencherEmail(faker.internet.email())
      preencherSenha(faker.string.numeric(1))
      btnlogar()
      validarLoginInvalido('Senha inválida.')
    })

    it("Botão ainda não tem conta - " + tela, () => {
      cy.get('#createAccount').click()
      cy.get('.account_form')
        .find('h3')
        .should('have.text', 'Cadastro de usuário')
        .should('be.visible')
    })

  })
})
