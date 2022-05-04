class LoginPage {
    formularioLogin = ".card__login";
    inputEmail = "input[name='email']";
    inputSenha = "input[name='password']";

    visitar() {
        cy.visit("");
    }

    preencherEmail(email) {
        cy.get(this.formularioLogin + " " + this.inputEmail).type(email);
    }

    preencherSenha(senha) {
        cy.get(this.formularioLogin + " " + this.inputSenha).type(senha);
    }

    clicarEmAcessar() {
        cy.contains("button", "Acessar").click();
    }

    preencherFormularioELogar(email, senha) {
        this.preencherEmail(email);
        this.preencherSenha(senha);
        this.clicarEmAcessar();
    }
}

export var loginPage = new LoginPage();