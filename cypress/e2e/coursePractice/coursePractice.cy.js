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
  it("intercept the jsonPlaceHolder api", () => {
    cy.visit("https://jsonplaceholder.typicode.com");
    cy.intercept({
      path: "/posts",
    })
      .as("posts")
      .then((res) => {
        cy.log(JSON.stringify(res));
        console.log(JSON.stringify(res));
      });
    cy.get("table:nth-of-type(1) a[href='/posts']").click();

    cy.wait("@posts").then((res) => {
      cy.log(res?.response?.body);
      console.log(JSON.stringify(res));
      expect(res?.response?.body).to.have.length(100);
    });
  });
  it("should intercept with stubbing static resposne", () => {
    cy.visit("https://jsonplaceholder.typicode.com");
    cy.intercept("GET", "/posts", {
      total_posts: 5,
    }).as("posts");
    cy.get("table:nth-of-type(1) a[href='/posts']").click();
    cy.wait("@posts");
  });
  it.only("should intercept with stubbing dynamic resposne", () => {
    cy.visit("https://jsonplaceholder.typicode.com");
    cy.intercept("GET", "/posts", {
      fixture: "example.json",
    }).as("posts");
    cy.get("table:nth-of-type(1) a[href='/posts']").click();
    cy.wait("@posts");
  });
});
