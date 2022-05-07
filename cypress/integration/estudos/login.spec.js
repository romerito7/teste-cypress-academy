/// <reference types="cypress" />

describe("Testes de login no BugBank", () => {
    function buscarOTituloDaPagina() {
        return cy.title();
    }

    after(() => {
        console.log("Finalizou os testes");
    });

    before(() => {
        console.log("Iniciou os testes");
    });
    
    beforeEach(() => {
        console.log("Executou o beforeEach");
    });

    afterEach(() => {
        console.log("Executou o afterEach");
    });

    it("Deve ser possível acessar a tela de login", () => {
        // acessar a página do bugbank
        cy.visit("https://bugbank.netlify.app/");

        // verificar se o título da tela corresponse à "BugBank | O banco com bugs e falhas do seu jeito"
        buscarOTituloDaPagina().should("equal", "BugBank | O banco com bugs e falhas do seu jeito");
    });    

    it("teste 2", () => {
        buscarOTituloDaPagina();
    });
});