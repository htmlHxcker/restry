describe('Home page', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('loads the home page', () => {
    cy.contains('Home');
    cy.contains('Start Pomodoro');
  });
});
