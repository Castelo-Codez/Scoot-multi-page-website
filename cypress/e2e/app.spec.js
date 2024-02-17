// https://on.cypress.io/api

describe("My First Test", () => {
    it("visits the app root url", () => {
        cy.visit("https://scoot-multi-page-website-bice.vercel.app/");
    });
    it("testing mobile-nav", () => {
        cy.visit("https://scoot-multi-page-website-bice.vercel.app/");
        cy.get("header").as("header");
        cy.viewport("iphone-7");
        cy.get("@header")
            .find("button:first-child")
            .as("mobile-nav-controller");
        cy.get("@header").get("@mobile-nav-controller").trigger("click");
        cy.get("@header").get("#mobile-nav").as("mobile-nav");
        cy.get("@header").get("@mobile-nav").should("be.visible");
    });
});
