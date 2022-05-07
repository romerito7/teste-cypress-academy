class CadastroPage {
    // Atributos da classe são os seletores da nossa tela
    formularioDeRegistro = ".card__register";
    inputEmail = "input[name='email']";
    inputNome = "input[name='name']";
    inputSenha = "input[name='password']";
    inputConfirmarSenha = "input[name='passwordConfirmation']";
    toggleAdicionarSaldo = "#toggleAddBalance";
    botaoVoltarAoLogin = "#btnBackButton";

    preencherFormulario(email, nome, senha, confirmarSenha) {
        cy.get(this.formularioDeRegistro).within(() => {
            this.preencherEmail(email);
            this.preencherNome(nome);
            this.preencherSenha(senha);
            this.preencherConfirmarSenha(confirmarSenha);
        });
    }

    confirmarFormulario() {
        cy.contains("button", "Cadastrar").click({ force: true });
    }

    preencherEmail(email) {
        cy.get(this.inputEmail).type(email, { force: true });
    }

    preencherNome(name) {
        cy.get(this.inputNome).type(name, { force: true });
    }

    preencherSenha(senha) {
        cy.get(this.inputSenha).type(senha, { force: true });
    }

    preencherConfirmarSenha(senha) {
        cy.get(this.inputConfirmarSenha).type(senha, { force: true });
    }

    verificarModalUsuarioCriado() {
        cy.contains("#modalText", "foi criada com sucesso").should("be.visible");
        cy.contains("#btnCloseModal", "Fechar").should("be.visible");
        cy.contains("a[href='#']", "x").should("be.visible");
    }

    abrirFormularioCadastro() {
        cy.contains("button", "Registrar").click();
    }

    visitar() {
        cy.visit("");
    }

    verificarMensagemDeErroVisivel(mensagemErro) {
        cy.get(".kOeYBn .input__warging").should("have.text", mensagemErro);
    }
}

export var cadastroPage = new CadastroPage();