/// <reference types="cypress" />

it('adds and completes todos', () => {
  cy.visit('/')
  cy.get('.new-todo')
    .type('write code{enter}')
    .type('write tests{enter}')
    .type('deploy{enter}')
  cy.get('.todo').should('have.length', 3)
  cy.percySnapshot('3 items')

  cy.get('.todo')
    .first()
    .find('.toggle')
    .check()
  cy.get('.todo')
    .first()
    .should('have.class', 'completed')
  cy.percySnapshot('first item has been completed')
})
