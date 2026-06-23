
/// <reference types="cypress" />

import { faker } from "@faker-js/faker"

import {
    acessarLogin,
    acessarCheckout,
    preencherFirstName,
    preencherLastName,
    preencherCompanyName,
    preencherEmailAddress,
    preencherCountry,
    preencherStateCity,
    preencherZipCode,
    preencherFullAddress,
    preencherAdditionalMessage,
    saveInAddressBook,
    btnSave,
    validarSave,
    validarMensagemErro
} from "../support/pages/checkout_page"

const telas = ["iphone-xr", "samsung-s10", "macbook-16"]

telas.forEach((tela) => {
    describe("Tela Cadastro Checkout - " + tela, () => {
        beforeEach(() => {
            cy.viewport(tela)
            acessarLogin()
        })





        it("Cadastro Checkout com sucesso - " + tela, () => {
            acessarCheckout()
            preencherFirstName(faker.person.firstName())
            preencherLastName(faker.person.lastName())
            preencherCompanyName(faker.company.name())
            preencherEmailAddress(faker.internet.email())
            preencherCountry('usa')
            preencherStateCity('Aland Islands')
            preencherZipCode(faker.string.numeric(8))
            preencherFullAddress(faker.location.streetAddress())
            preencherAdditionalMessage(faker.lorem.sentence(8))
            saveInAddressBook()
            btnSave()
            validarSave()
        })

        it("Cadastro Checkout Sem First Name - " + tela, () => {
            acessarCheckout()
            preencherLastName(faker.person.lastName())
            preencherCompanyName(faker.company.name())
            preencherEmailAddress(faker.internet.email())
            preencherCountry('usa')
            preencherStateCity('Aland Islands')
            preencherZipCode(faker.string.numeric(8))
            preencherFullAddress(faker.location.streetAddress())
            preencherAdditionalMessage(faker.lorem.sentence(8))
            saveInAddressBook()
            btnSave()
            validarMensagemErro('O campo First Name deve ser prenchido')


        })

        it("Cadastro Checkout Sem Last Name - " + tela, () => {
            acessarCheckout()
            preencherFirstName(faker.person.firstName())
            preencherCompanyName(faker.company.name())
            preencherEmailAddress(faker.internet.email())
            preencherCountry('usa')
            preencherStateCity('Aland Islands')
            preencherZipCode(faker.string.numeric(8))
            preencherFullAddress(faker.location.streetAddress())
            preencherAdditionalMessage(faker.lorem.sentence(8))
            saveInAddressBook()
            btnSave()
            validarMensagemErro('O campo Last Name deve ser prenchido')


        })

        it("Cadastro Checkout Sem Company Name - " + tela, () => {
            acessarCheckout()
            preencherFirstName(faker.person.firstName())
            preencherLastName(faker.person.lastName())
            preencherEmailAddress(faker.internet.email())
            preencherCountry('usa')
            preencherStateCity('Aland Islands')
            preencherZipCode(faker.string.numeric(8))
            preencherFullAddress(faker.location.streetAddress())
            preencherAdditionalMessage(faker.lorem.sentence(8))
            saveInAddressBook()
            btnSave()
            validarMensagemErro('O campo Company deve ser prenchido')
        })

        it("Cadastro Checkout Sem Email Adress - " + tela, () => {
            acessarCheckout()
            preencherFirstName(faker.person.firstName())
            preencherLastName(faker.person.lastName())
            preencherCompanyName(faker.company.name())
            preencherCountry('usa')
            preencherStateCity('Aland Islands')
            preencherZipCode(faker.string.numeric(8))
            preencherFullAddress(faker.location.streetAddress())
            preencherAdditionalMessage(faker.lorem.sentence(8))
            saveInAddressBook()
            btnSave()
            validarMensagemErro('O campo E-mail deve ser prenchido ou é inválido')
        })

        it("Cadastro Checkout Sem Country - " + tela, () => {
            acessarCheckout()
            preencherFirstName(faker.person.firstName())
            preencherLastName(faker.person.lastName())
            preencherCompanyName(faker.company.name())
            preencherEmailAddress(faker.internet.email())
            preencherStateCity('Aland Islands')
            preencherZipCode(faker.string.numeric(8))
            preencherFullAddress(faker.location.streetAddress())
            preencherAdditionalMessage(faker.lorem.sentence(8))
            saveInAddressBook()
            btnSave()
            validarMensagemErro('O campo Country deve ser prenchido')

        })

        it("Cadastro Checkout Sem StateCity - " + tela, () => {
            acessarCheckout()
            preencherFirstName(faker.person.firstName())
            preencherLastName(faker.person.lastName())
            preencherCompanyName(faker.company.name())
            preencherEmailAddress(faker.internet.email())
            preencherCountry('usa')
            preencherZipCode(faker.string.numeric(8))
            preencherFullAddress(faker.location.streetAddress())
            preencherAdditionalMessage(faker.lorem.sentence(8))
            saveInAddressBook()
            btnSave()
            validarMensagemErro('O campo City deve ser prenchido')
        })

        it("Cadastro Checkout Sem ZipCode - " + tela, () => {
            acessarCheckout()
            preencherFirstName(faker.person.firstName())
            preencherLastName(faker.person.lastName())
            preencherCompanyName(faker.company.name())
            preencherEmailAddress(faker.internet.email())
            preencherCountry('usa')
            preencherStateCity('Aland Islands')
            preencherFullAddress(faker.location.streetAddress())
            preencherAdditionalMessage(faker.lorem.sentence(8))
            saveInAddressBook()
            btnSave()
            validarMensagemErro('O campo Zip Code deve ser prenchido')

        })

        it("Cadastro Checkout Sem FullAdress - " + tela, () => {
            acessarCheckout()
            preencherFirstName(faker.person.firstName())
            preencherLastName(faker.person.lastName())
            preencherCompanyName(faker.company.name())
            preencherEmailAddress(faker.internet.email())
            preencherCountry('usa')
            preencherStateCity('Aland Islands')
            preencherZipCode(faker.string.numeric(8))
            preencherAdditionalMessage(faker.lorem.sentence(8))
            saveInAddressBook()
            btnSave()
            validarMensagemErro('O campo Address deve ser prenchido')


        })

        it("Cadastro Checkout Sem AdditionalNotes - " + tela, () => {
            acessarCheckout()
            preencherFirstName(faker.person.firstName())
            preencherLastName(faker.person.lastName())
            preencherCompanyName(faker.company.name())
            preencherEmailAddress(faker.internet.email())
            preencherCountry('usa')
            preencherStateCity('Aland Islands')
            preencherZipCode(faker.string.numeric(8))
            preencherFullAddress(faker.location.streetAddress())
            saveInAddressBook()
            btnSave()
            validarMensagemErro('O campo Additional Notes deve ser prenchido')
        })



    })

})






