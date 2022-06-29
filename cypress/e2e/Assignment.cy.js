describe("Name of the group", () => {
  it("should visit automotion practice site", () => {
    cy.visit("http://automationpractice.com/index.php");
    cy.get("#search_query_top").type("t shirts{enter}");
    const productName = cy.get(".right-block > h5 > .product-name");
    cy.get(".ajax_add_to_cart_button > span").click();
    cy.get(".button-container > .button-medium > span").click();
    cy.get(".cart_description > .product-name > a");
    // cy.get(".cart_description > .product-name > a").should(
    //   "have.text",
    //   "Faded Short Sleeve T-shirts"
    // );
  });
});
