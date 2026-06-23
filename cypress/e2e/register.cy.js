/// <reference types="cypress" />

import { faker } from "@faker-js/faker"

import {
  acessarCadastro,
  preencherNome,
  preencherEmail,
  preencherSenha,
  cadastrar,
  validarCadastro,
  validarMensagemErro
} from "../support/pages/cadastro_usuario_page"

const telas = ['iphone-xr', 'samsung-s10', 'macbook-16']

telas.forEach((tela) => {

  describe('Tela de Cadastro - ' + tela, () => {

    beforeEach(() => {
      cy.viewport(tela)
      acessarCadastro()
    })

    it('Acessa a página de cadastro - ' + tela, () => {
      cy.get('h3').contains('Cadastro de usuário')
      cy.get('#btnRegister').should('be.visible')
    })

    it('Preenche o formulário sem nome - ' + tela, () => {
      preencherEmail(faker.internet.email())
      preencherSenha(faker.internet.password(7))
      cadastrar()
      validarMensagemErro('O campo nome deve ser prenchido')
    })

    it('Preenche o formulário sem email - ' + tela, () => {
      preencherNome(faker.person.firstName())
      preencherSenha(faker.internet.password(7))
      cadastrar()
      validarMensagemErro('O campo e-mail deve ser prenchido corretamente')
    })

    it('Preenche o formulário email inválido - ' + tela, () => {
      preencherNome(faker.person.firstName())
      preencherEmail('emailinvalido')
      preencherSenha(faker.internet.password(7))
      cadastrar()
      validarMensagemErro('O campo e-mail deve ser prenchido corretamente')
    })

    it('Preenche o formulário sem senha - ' + tela, () => {
      preencherNome(faker.person.firstName())
      preencherEmail(faker.internet.email())
      cadastrar()
      validarMensagemErro('O campo senha deve ter pelo menos 6 dígitos')
    })

    it('Preenche o formulário senha inválida - ' + tela, () => {
      preencherNome(faker.person.firstName())
      preencherEmail(faker.internet.email())
      preencherSenha('1')
      cadastrar()
      validarMensagemErro('O campo senha deve ter pelo menos 6 dígitos')
    })

    it('Preenche o formulário e envia o cadastro - ' + tela, () => {
      preencherNome(faker.person.firstName())
      preencherEmail(faker.internet.email())
      preencherSenha(faker.internet.password(7))
      cadastrar()
      validarCadastro()
    })

  })

})