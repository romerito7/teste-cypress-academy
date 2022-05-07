import { cadastroPage } from "../../support/pages/CadastroPage.po";

describe("Cadastro de usuário", () => {
    beforeEach(() => {
        cadastroPage.visitar();
        cadastroPage.abrirFormularioCadastro();
    });

    it("Cadastro de usuário com sucesso", () => {
        cadastroPage.preencherFormulario("i@t.com", "Vinícius Oliveira", "1234", "1234");
        cadastroPage.confirmarFormulario();
        cadastroPage.verificarModalUsuarioCriado();
    });

    it("Cadastro de usuário com e-mail incorreto", () => {
        cadastroPage.preencherFormulario("abacate", "Vinícius Oliveira", "1234", "1234");
        cadastroPage.confirmarFormulario();
        cadastroPage.verificarMensagemDeErroVisivel("Formato inválido");
    });
});