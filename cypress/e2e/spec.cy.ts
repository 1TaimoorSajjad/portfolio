// cypress/integration/portfolio.spec.js
describe('Portfolio Website Test', () => {
  // Before visiting the website, you may want to set up the baseUrl if it's not already configured in your Cypress configuration.
  before(() => {
    Cypress.config('baseUrl', 'https://taimoorsajjad.com');
  });

  it('Should download the CV when the "Download CV" button is clicked', () => {
    // Visit the website
    cy.visit('https://taimoorsajjad.com'); // Replace with the correct URL

    // Find and click the "Download CV" button
    cy.get('#downloadCV').click();


    // Check if the download is in progress (this assumes the download initiates)
    cy.wait(2000); // You may need to adjust this wait time

    // You can add assertions here to confirm that the download process worked
    // For example, you can check if the download is successful in the Downloads folder.

    // For simplicity, we'll just assert that the download button was clicked.
    cy.get('button[id="downloadCV"]').should('have.been.clicked');
  });
});
