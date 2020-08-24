describe('Form tests', () => {
  it('navigates to http://locahost:3000/pizza', () => {
    cy.visit('http://localhost:3000/pizza');
    cy.url().should('includes', 'localhost');
  });

  it('Types name into name input', () => {
    cy.get('input[name="name"]').type('Sean').should('have.value', 'Sean');
  });

  it('Selects a pizza size', () => {
    cy.get('select').select('Medium');
  });

  it('Picks the toppings', () => {
    cy.get('[type="checkbox"]').check();
  });

  it('Types a special instruction', () => {
    cy.get('input[name="instructions"]')
      .type('Hello World')
      .should('have.value', 'Hello World');
  });

  it('Submits an Order', () => {
    cy.get('button[type="submit"]').click();
  });
});
