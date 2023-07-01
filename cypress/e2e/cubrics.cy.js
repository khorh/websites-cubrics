describe("navigation", () => {
  context("breakpoint-xxs (showing menu icon)", () => {
    beforeEach(() => {
      cy.visit("http://localhost:3000/");
      cy.viewport(599, 2000);
    });
    it("should navigate to the 'Services' section", () => {
      cy.get('[data-testid="vertical-links-container"]')
        .should("be.visible")
        .click()
        .find('[data-testid="navigation-services"]')
        .click()
        .url()
        .should("include", "/#services");
    });
    it("should navigate to the 'Industries' section", () => {
      cy.get('[data-testid="vertical-links-container"]')
        .should("be.visible")
        .click()
        .find('[data-testid="navigation-industries"]')
        .click()
        .url()
        .should("include", "/#industries");
    });
    it("should navigate to the 'About' section", () => {
      cy.get('[data-testid="vertical-links-container"]')
        .should("be.visible")
        .click()
        .find('[data-testid="navigation-about"]')
        .click()
        .url()
        .should("include", "/#about");
    });
  });

  context("breakpoint-xs and above", () => {
    beforeEach(() => {
      cy.visit("http://localhost:3000/");
      cy.viewport(600, 2000);
    });
    it("should navigate to the 'Services' section", () => {
      cy.get('[data-testid="horizontal-links-container"]')
        .should("be.visible")
        .find('[data-testid="navigation-services"]')
        .click()
        .url()
        .should("include", "/#services");
    });
    it("should navigate to the 'Industries' section", () => {
      cy.get('[data-testid="horizontal-links-container"]')
        .should("be.visible")
        .find('[data-testid="navigation-industries"]')
        .click()
        .url()
        .should("include", "/#industries");
    });
    it("should navigate to the 'About' section", () => {
      cy.get('[data-testid="horizontal-links-container"]')
        .should("be.visible")
        .find('[data-testid="navigation-about"]')
        .click()
        .url()
        .should("include", "/#about");
    });
  });
});
