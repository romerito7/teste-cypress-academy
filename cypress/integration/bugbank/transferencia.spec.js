import { TransferenciaPage } from "../../support/pages/TransferenciaPage.po";

var transferenciaPage = new TransferenciaPage();

describe("Testes de transferência", () => {
    it("Deve ser possível transferir saldo para uma conta válida", () => {
        transferenciaPage.visitar();
    });
});