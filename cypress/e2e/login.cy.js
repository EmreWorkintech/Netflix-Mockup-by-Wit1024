/* eslint-disable no-undef */
it("sanity test", () => {
  cy.visit("http://localhost:5173");
});

describe("Error Messages:", () => {
  beforeEach(() => {
    cy.visit("http://localhost:5173/");
    cy.contains("Login").click();
  });

  it("shows 1 error message for invalid email", () => {
    //Arrange
    /* cy.visit("http://localhost:5173/");
    cy.contains("Login").click(); */
    //Act
    cy.get("[data-cy='input-email']").type("emre");
    //Assert
    cy.get("[data-cy='error']").should("have.length", 1);
  });
  it("shows 1 error message for 4 chars long password: Rt12", () => {
    //Arrange
    /* cy.visit("http://localhost:5173/");
    cy.contains("Login").click(); */
    //Act
    cy.get("[data-cy='input-password']").type("Rt12");
    //Assert
    cy.get("[data-cy='error']").should("have.length", 1);
  });
  it("shows 1 error message if password doen not contain uppercase letter 1234567t", () => {
    //Arrange
    /* cy.visit("http://localhost:5173/");
    cy.contains("Login").click(); */
    //Act
    cy.get("[data-cy='input-password']").type("1234567t");
    //Assert
    cy.get("[data-cy='error']").should("have.length", 1);
  });

  it("shows 1 error message if password doen not contain lowercase letter 1234567T", () => {
    //Arrange
    /* cy.visit("http://localhost:5173/");
    cy.contains("Login").click(); */
    //Act
    cy.get("[data-cy='input-password']").type("1234567T");
    //Assert
    cy.get("[data-cy='error']").should("have.length", 1);
  });

  it("shows 1 error message if sendEmail unchecked", () => {
    //Arrange
    /* cy.visit("http://localhost:5173/");
    cy.contains("Login").click(); */
    //Act
    cy.get("[data-cy='input-sendEmail']").check();
    cy.get("[data-cy='input-sendEmail']").uncheck();
    //Assert
    cy.get("[data-cy='error']").should("have.length", 1);
  });
});

describe("Success:", () => {
  it("opens welcome page on form submit", () => {
    //Arrange
    cy.visit("http://localhost:5173/");
    cy.contains("Login").click();
    //Act
    cy.get("[data-cy='input-email']").type("erdem@w.com.tr");
    cy.get("[data-cy='input-password']").type("1234567tT");
    cy.get("[data-cy='input-sendEmail']").check();
    cy.get("[data-cy='button-submit']").click();
    //Assert
    cy.url().should("contains", "/welcome");
  });
});
