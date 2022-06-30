describe("Login", () => {
  it("Enter user name & password", () => {
    cy.visit("https://opensource-demo.orangehrmlive.com");
    cy.intercept("GET", "/index.php/auth/validateCredentials").as("json");

    // cy.wait("@json");
    cy.get("#txtUsername").type("Admin");
    cy.get("#txtPassword").type("admin123");
    cy.get("#btnLogin").click();
    cy.wait("@json");
    // cy.get("#welcome").should("have.text", "Welcome mr.");
  });
});
