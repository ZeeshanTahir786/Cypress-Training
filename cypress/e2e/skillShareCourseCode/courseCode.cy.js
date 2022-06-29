describe("UI Test", () => {
  beforeEach(() => {
    cy.visit("https://example.cypress.io/commands/actions");
  });

  it("should clear the input text field", () => {
    cy.get(".action-email")
      .type("fake@gmail.com")
      .clear()
      .should("not.have.text", "fake@gmail.com");
  });
  it("should double click the element", () => {
    cy.get(".action-div")
      .dblclick()
      .should("not.be.visible")
      .should("have.value", "");
    cy.get(".action-input-hidden")
      .should("be.visible")
      .should("have.value", "Double click to edit");
  });
  it("should check the checkbox", () => {
    cy.get('.action-checkboxes [type="checkbox"]')
      .check(["checkbox1", "checkbox3"])
      .not("[disabled]")
      .should("be.checked");
    cy.get('.action-checkboxes [type="checkbox"]')
      .check("checkbox2", { force: true })
      .should("be.disabled");
  });
  it("should uncheck the checkbox", () => {
    cy.get('.action-checkboxes [type="checkbox"]')
      .uncheck(["checkbox1", "checkbox3"])
      .should("not.be.checked");
  });
});
