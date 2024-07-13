/// <reference types="cypress" />

describe('Testes da agenda', () => {
    beforeEach(() => {
        cy.visit("https://agenda-contatos-react.vercel.app/")
    })

    it("Editar gian souza para gian Gomes", () => {
        cy.get(".sc-beqWaB").first().click()
        cy.get(".edit").first().click({ multiple: true })
        cy.get('input[type="text"').clear()
        cy.get('input[type="text"').type("gian Gomes")
        cy.get(".alterar").click()
    })

    it("preencher o formulario", () => {
        cy.get('input[type="text"').type("Eduardo Silva")
        cy.get('input[type="email"]').type("eduardo@gmail.com")
        cy.get('input[type="tel"]').type("81 99999-9999")
        cy.get(".adicionar").click()
    })


    it("Excluir o ultimo contato", () => {
        cy.get(".sc-beqWaB").last().click()
        cy.get(".delete").last().click({ multiple: true })
    })
})