describe('Todo App', () => {
  it('should add a todo', () => {
    cy.visit('/');
    cy.get('input').type('New Todo');
    cy.contains('Add Todo').click();
    cy.contains('New Todo').should('exist');
  });
});
