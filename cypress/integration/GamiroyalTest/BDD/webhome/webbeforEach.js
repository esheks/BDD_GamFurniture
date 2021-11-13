import ContactPage from '../../../../support/pageObjects/ContactPage'
const contactPage=new ContactPage()

beforeEach(function() 
{
    //WEBSITE TEST
    // runs once before all website tests in the block
    
    cy.visit(Cypress.env('url'))
    cy.viewport(1280, 720);
    cy.url().should('eq', 'https://gamiroyal.com/')
   
})