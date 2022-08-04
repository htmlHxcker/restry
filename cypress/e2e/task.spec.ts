import { taskGenerator } from '@/test/data-generator';

describe('Task section', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should render empty tasks list', () => {
    cy.get('.tasks-list--empty').should('exist');
  });
  it('should be able to create tasks', () => {
    const task = taskGenerator();
    cy.get('[placeholder = "What do you want to work on?"]').type(task.name);
    cy.contains('Create Task').click();
    cy.get('.task__item').should('be.visible');
    cy.get('[title="Edit Task"]').should('have.value', task.name);
  });

  it('should be able to mark as done', () => {
    const task = taskGenerator();
    cy.get('[placeholder = "What do you want to work on?"]').type(task.name);
    cy.contains('Create Task').click();
    cy.get('[type="checkbox"]').click();
    cy.get('[type="checkbox"]').should('be.checked');
    cy.get('[title="Edit Task"]').should('have.class', 'done');
  });
});
