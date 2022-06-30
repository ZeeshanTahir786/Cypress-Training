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
  it("should check the radio button", () => {
    cy.get('.action-radios [type="radio"]')
      .check("radio1")
      .should("be.checked")
      .should("be.visible");
    cy.get('.action-radios [type="radio"]')
      .check("radio3", { force: true })
      .should("be.disabled");
  });
  it("should select the first option from dropdown", () => {
    // at first, no option should be selected
    cy.get(".action-select").should("have.value", "--Select a fruit--");
    // confirm the apples were selected
    cy.get(".action-select").select("apples").should("contain", "apples");
    // selecting multiple values
    cy.get(".action-select-multiple")
      .select(["apples", "oranges", "bananas"])
      .invoke("val")
      .should("have.length", 3);
    cy.get(".action-select-multiple")
      .invoke("val")
      .should("include", "fr-oranges");
  });
});
