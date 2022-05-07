describe("Home teste", () => {
    beforeEach(() => {
        cy.viewport(1280, 700);
        cy.visit("");
    });

    it("Acessar a home da Raro como um iphone 6", () => {
        cy.viewport("iphone-6");
        cy.visit("");
    });

    it("Verificar se o link de Sobre está presente", () => {
        cy.get("[href='/sobre']");
    });

    it("Verificar se o link de Sobre é exibido com o texto correto", () => {
        cy.contains("Sobre");
        cy.contains("a", "Sobre");
    });

    it("O campo de nome de contato deve ser exibido na tela", () => {
        cy.get("#contact_name");
    });

    it("Deve ser possível abrir a página de Sobre", () => {
        // cy.get("[href='/sobre']").first().click();
        // cy.get("nav ul li a[href='/sobre']").click();
        cy.contains("a[href='/sobre']", "Sobre").click();
    });

    it("Deve ser possível enviar o formulário de contato pelo botão", () => {
        cy.get("#contact_name").type("Iury Oliveira");
        cy.get("#contact_email").type("i@t.com");
        // cy.get("#contact_email").type("i@t.com {enter}");
        // cy.get("#contact_phone").type("31555555555")
        // cy.get("#contact_message").type("Preciso de ajuda");
        cy.get("#btn_contact").click()

    });

    it("Deve ser possível ver o erro de formulário incompleto ao apertar enter", () => {
        // pré-condição: acessar a página
        cy.visit("");

        // ação: preencher algumas informações do formulário
        // Se o elemento #contact_name não existir, o teste irá falhar.
        cy.get("#contact_name").type("Iury Oliveira");
        // Se o elemento #contact_name não existir, o teste irá falhar.
        cy.get("#contact_email").type("i@t.com {enter}");

        // validação: Verificar se o conteúdo da mensagem de erro
        // foi exibido na tela.
        // Se o elemento #contact_name não existir, o teste irá falhar.
        cy.contains("Oops...");
        cy.contains("Preencha todos os campos do formulário para enviar a mensagem");
        cy.get("button.swal2-confirm.swal2-styled").should("be.visible");
    });

    it.only("Deve ser possível fechar a modal de erro", () => {
        // pré-condição: acessar a página
        cy.visit("");

        // ação: preencher algumas informações do formulário
        // Se o elemento #contact_name não existir, o teste irá falhar.
        cy.get("#contact_name").type("Iury Oliveira");
        // Se o elemento #contact_name não existir, o teste irá falhar.
        cy.get("#contact_email").type("i@t.com {enter}");

        // validação: Verificar se o conteúdo da mensagem de erro
        // foi exibido na tela.
        // Se o elemento #contact_name não existir, o teste irá falhar.
        cy.get("button.swal2-confirm.swal2-styled").click();
        cy.get("button.swal2-confirm.swal2-styled").should("not.exist");
    });
});