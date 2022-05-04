import { listaPage } from "../../support/pages/crud/ListaPage.po";

describe("Consultar lista de usuários cadastrados", () => {
    it("Deve ser possível visualizar um usuário na lista", () => {
        cy.intercept("https://crud-api-academy.herokuapp.com/api/v1/users", {
            fixture: "crud/listaUsuarios.json"
        });

        listaPage.visitar();

        listaPage.verificarUsuario("postman Surname");
    });

    it("Deve fazer alguma coisa quando não existem usuários cadastrados", () => {
        cy.intercept("https://crud-api-academy.herokuapp.com/api/v1/users", {
            statusCode: 500,
            body: []
        });

        listaPage.visitar();

        cy.contains("Não foi possível consultar os usuários cadastrados.").should("be.visible");
    });
});