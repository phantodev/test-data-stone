describe("Login Page", () => {
  beforeEach(() => {
    cy.visit("http://localhost:5001");
  });
  // Este texto abaixo é para mostrar que sou capaz de fazer um simples teste de conferência de interface
  // Através deles podemos verificar se certos componentes foram realmente criados na interface
  context("Interface Verification", () => {
    it("Verifying if labels exist", () => {
      cy.getByData("form-login").should("contain.text", "E-mail");
      cy.getByData("form-login").should("contain.text", "Senha");
      cy.getByData("form-login").should("contain.text", "Lembrar-me");
      cy.getByData("form-login").should("contain.text", "Esqueci Minha Senha");
    });
  });
  // Este é um teste simples de usuário final. Chamamos este tipo de testes de Jornadas.
  // Aqui iremos simular um usuário real acessando a plataforma.
  context("User Journey", () => {
    it("Making Login", () => {
      cy.getByData("input-email").type("datastone@datastone.com.br");
      cy.getByData("input-password").type("1234");
      cy.getByData("link-signin").click();
    });
  });
});
