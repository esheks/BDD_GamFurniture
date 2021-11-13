import ContactPage from '../../../../support/pageObjects/ContactPage'
const contactPage=new ContactPage()

beforeEach(function() 
{
    // MOBILE TEST
    // runs Mobile test once after each website test in the block

    cy.visit(Cypress.env('url'))
    cy.viewport('iphone-6') 
    cy.url().should('eq', 'https://gamiroyal.com/')
   
})
 