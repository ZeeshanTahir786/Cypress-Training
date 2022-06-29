describe("empty spec", () => {
  beforeEach(() => {
    cy.visit("https://todomvc-app-for-testing.surge.sh/");
    cy.get(".new-todo", { timeout: 3000 }).type("Learn Cypress{enter}");
  });

  it("should add a new todo to the list", () => {
    cy.get(".toggle").click();
    cy.get("label").should("have.text", "Learn Cypress");
  });
  it("should mark a todo as completed", () => {
    cy.get(".toggle").click();
    cy.get("label").should("have.css", "text-decoration-line", "line-through");
  });
  it("should clear completed", () => {
    cy.get(".toggle").click();
    // cy.get(".clear-completed").click();
    cy.contains("Clear completed").click();
    cy.get(".todo-list").should("not.have.descendants", "li");
  });
});
