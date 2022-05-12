describe('Home page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
  });

  it('loads the home page', () => {
    cy.contains('Home');
    cy.contains('Start Pomodoro');
  });
});
