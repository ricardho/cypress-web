export function acessarLogin() {
    cy.visit('/login')
}

export function acessarCheckout() {
    cy.visit('/checkout-one')

}

export function preencherFirstName(firstName) {
    cy.get('#fname').type(firstName)
}

export function preencherLastName(lastName) {
    cy.get('#lname').type(lastName)
}

export function preencherCompanyName(companyName) {
    cy.get('#cname').type(companyName)
}

export function preencherEmailAddress(email) {
    cy.get('#email').type(email)
}

export function preencherCountry(country) {
    cy.get('#country').select(country)
}

export function preencherStateCity(city) {
    cy.get('#city').type(city)
}

export function preencherZipCode(zip) {
    cy.get('#zip').type(zip)
}

export function preencherFullAddress(address) {
    cy.get('#faddress').type(address)
}

export function preencherAdditionalMessage(message) {
    cy.get('#messages').type(message)
}
export function saveInAddressBook() {
    cy.get('#materialUnchecked').check()
}

export function btnSave() {
    cy.get('.checkout-area-bg > .theme-btn-one').click()
}

export function validarSave() {
    cy.get(':nth-child(2) > h3').should('be.visible')
        .should('have.text', 'Billings Information registred with success!')
}

export function validarMensagemErro(mensagem) {
    cy.get('.errorLabel')
        .should('be.visible')
        .and('contain.text', mensagem)
}

export function cadastrarCheckout(email, senha) {
    acessarCheckout()
    preencherFirstName(faker.person.firstName())
    preencherLastName(faker.person.lastName())
    preencherCompanyName(faker.company.name())
    preencherEmailAddress(email)
    preencherCountry('usa')
    preencherStateCity('Aland Islands')
    preencherZipCode(faker.string.numeric(8))
    preencherFullAddress(faker.location.streetAddress())
    preencherAdditionalMessage(faker.lorem.sentence(8))
    saveInAddressBook()
    btnSave()
}