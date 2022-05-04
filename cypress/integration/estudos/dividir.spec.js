/// <reference types="cypress" />

function dividir(numerador, denominador) {
    if(denominador == 0) {
        return { erro: "Não é possível dividir por 0." }    
    }else {
        var resultado = numerador / denominador;
        return resultado;
    }
}

describe("Testes da divisão", () => {
    it("Deve ser possível realizar divisão de números inteiros", () => {
        var numerador = 4;
        var denominador = 2; 
        var resultado = dividir(numerador, denominador);
        expect(resultado).to.equal(2);
    });

    it("Dividir por zero", () => {
        var resultado = dividir(1, 0);
        expect(resultado).to.eql({ erro: "Não é possível dividir por 0." });
    });

    it("Divisão com número decimal", () => {
        var resultado = dividir(113, 5);
        expect(resultado).to.be.within(22, 23);
    });
});