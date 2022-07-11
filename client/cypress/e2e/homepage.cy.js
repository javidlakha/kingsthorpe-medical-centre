/// <reference types="cypress" />

const ADDRESS = "Kingsthorpe Medical Centre, Eastern Avenue South, Northampton, NN2 7JN"
const OPENING_HOURS = "Monday - Friday, 8am - 6.30pm"

describe("displays the homepage", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/");
  });

  it("displays the NHS logo", () => {
    cy.get(".nhs-logo").should("be.visible");
  });

  it("displays the practice name", () => {
    cy.get(".surgery-name").should("have.text", "Kingsthorpe Medical Centre");
  });

  it("displays the practice address", () => {
    cy.get(".practice-address").contains(ADDRESS);
  });

  it("displays the practice opening hours", () => {
    cy.get(".opening-hours").contains(OPENING_HOURS);
  });

  it("displays the CQC rating", () => {
    cy.get(".cqc-rating").should("be.visible");
    cy.get(".cqc-rating-image").should("be.visible");
  });
});
