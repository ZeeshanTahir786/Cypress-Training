const navBarText = Cypress.env("navBarText");

describe("Name of the group", () => {
  beforeEach(() => {
    cy.visit("/commands/actions");
  });

  it("has h1 on Page", () => {
    cy.get("h1").should("exist");
  });
  it("should render the correct h1 text", () => {
    cy.get("h1").should("contain.text", "Actions");
  });
  it("render paragraph under h1", () => {
    cy.get(".container").eq(1).find("p").should("exist");
  });
  it("render the section with correct element", () => {
    cy.get(".container")
      .eq(2)
      .within(() => {
        cy.get("h4").should("exist");
        cy.get("p").should("exist");
      });
    cy.findByText(navBarText).should("exist");
    cy.wait(2000).then(() => {
      fetch("https://api.spacexdata.com/v3/missions")
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
        });
    });
  });
});
