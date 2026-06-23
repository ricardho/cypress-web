Cypress.Commands.add('preencherEmail',() => {
    cy.get('#user').type(faker.internet.email())
})