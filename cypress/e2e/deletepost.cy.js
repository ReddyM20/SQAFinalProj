describe('addcomment demo', () => {
  it('renders default elements on screen', () => {
    cy.visit('http://localhost:3000/login')

    // cy.get('[data-testid="login"]').click()
    // .should('have.text', "Login");

    cy.get('[data-testid="username"]').should("exist")
    .should('have.text', "Username:");

    cy.get('[data-testid="action-username"]').type('reddy')
    cy.get('[data-testid="action-username"]').should('have.value', 'reddy')

    cy.get('[data-testid="password"]').should("exist")
    .should('have.text', "Password:");

    cy.get('[data-testid="action-password"]').type('password')
    cy.get('[data-testid="action-password"]').should('have.value', 'password')

    cy.get('[data-testid="loginbtn"]').click()
    .should('have.text', "Login");
 
    cy.get('.post').click();

    cy.get('[data-testid="deletebtn"]').click();

  });
});
