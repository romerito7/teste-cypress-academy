import { loginPage } from "../../support/pages/LoginPage.po";

describe("Testes de login com sucesso", () => {
    var dadosUsuario;

    before(() => {
        cy.fixture("usuario.json").then((informacoesUsuario) => {
            dadosUsuario = informacoesUsuario;
            window.localStorage.setItem(informacoesUsuario.email, JSON.stringify(informacoesUsuario));
        })
    });

    it("Deve ser possível efetuar login com informações válidas", () => {
        loginPage.visitar();
        loginPage.preencherFormularioELogar(dadosUsuario.email, dadosUsuario.password);
        cy.url().should("equal", "https://bugbank.netlify.app/home");
    });
});