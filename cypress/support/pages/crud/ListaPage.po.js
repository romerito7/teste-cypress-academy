class ListaPage {
    nomeUsuario = "p[data-test='userDataName']"

    visitar() {
        cy.visit("https://academy-crud-frontend.herokuapp.com/users");
    }

    verificarUsuario(nome) {
        cy.contains(this.nomeUsuario, nome);
    }
}

export var listaPage = new ListaPage();