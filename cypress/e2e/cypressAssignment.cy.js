describe("Login", () => {
  it("Enter user name & password", () => {
    cy.visit("https://opensource-demo.orangehrmlive.com");
    cy.intercept(
      {
        method: "GET",
        url: "https://jsonplaceholder.typicode.com/posts",
      },
      (req) => {
        console.log(req.reply.Scopes[0]);
      }
    ).as("json");
    cy.visit("https://jsonplaceholder.typicode.com/posts");

    // cy.wait("@json");
    cy.get("#txtUsername").type("Admin");
    cy.get("#txtPassword").type("admin123");
    // cy.get("#btnLogin").click();
    // cy.get("#welcome").should("have.text", "Welcome mr.");
  });
});
