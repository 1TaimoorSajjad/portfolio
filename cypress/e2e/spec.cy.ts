// cypress/integration/portfolio.spec.js
describe('Portfolio Website Test', () => {
  // Before visiting the website, you may want to set up the baseUrl if it's not already configured in your Cypress configuration.
  // before(() => {
  //   Cypress.config('baseUrl', 'https://portfolio-git-test-cases-taimoors7.vercel.app/');
  // });

  it('Should download the CV when the "Download CV" button is clicked', () => {
    cy.visit('https://portfolio-git-test-cases-taimoors7.vercel.app/');
    cy.wait(2000);
    cy.get('#downloadCV').click();
    cy.wait(2000);
    cy.get('#downloadCV').should('have.class', 'relative');


    // You can also check the content or text within the SweetAlert
    cy.get('#swal2-title').should('contain', 'Oops...');
    cy.get('.swal2-confirm').click()
    cy.scrollTo('top')


    // Check if the file exists
  });

});

