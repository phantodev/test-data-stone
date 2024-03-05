describe("Access Products API", () => {
  beforeEach(() => {
    // Use cy.request() para chamar a API
    cy.request("http://localhost:5001/api/products").as("productsAPI");
  });

  it("should return data from Products API", () => {
    // Use o alias criado para acessar a resposta da API
    cy.get("@productsAPI").then((response) => {
      // Verifique se a resposta da API está correta
      expect(response.status).to.eq(200); // Verifica se o status da resposta é 200 (OK)
      expect(response.body).to.not.be.null; // Verifica se o corpo da resposta não é nulo
    });
  });
});
