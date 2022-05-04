/// <reference types="cypress" />

describe("Testes de soma", () => {
    function soma(num1, num2) {
        var resultado = num1 + num2;
        return resultado;
    }

    it("Teste de soma com valores inteiros", () => {
        cy.visit("");
        // pre-condicao
        var num1 = 1;
        var num2 = 5;

        // acao
        var resultadoDaSoma = soma(num1, num2);

        // verificação
        expect(resultadoDaSoma).to.equal(6);
    });

    it("Teste de soma com valores decimais", () => {
        cy.visit("cases");
        // pre-condicao
        var num1 = 1.2;
        var num2 = 4.8;
        var resultadoEsperado = 6;

        // acao
        var resultadoDaSoma = soma(num1, num2);
        
        // verificação
        expect(resultadoDaSoma).to.equal(resultadoEsperado);
    });
});