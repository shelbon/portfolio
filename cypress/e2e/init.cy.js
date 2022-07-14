context("Homepage", () => {
  it("is working", () => {
    expect(true).to.equal(true);
  });

  it("visits the app", () => {
    cy.visit("/fr/home");
  });
});