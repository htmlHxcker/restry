describe('Pomodoro Section', () => {
  beforeEach(() => {
    cy.visit('/');
  });
  it(' should have a deafult state of paused', () => {
    cy.get('[title="Start Timer"]').should('exist');
  });
  it('can start timer', () => {
    cy.get('[title="Start Timer"]').click();
    cy.get('.timer__label').should('not.have.text', '25:00');
  });
  it('should be able to refresh time', () => {
    cy.get('[title="Restart Timer"]').click();
    cy.get('[title="Start Timer"]').should('exist');
    cy.get('.timer__label').should('have.text', '25:00');
  });
});
