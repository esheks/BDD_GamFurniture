import ContactPage from '../../../../support/pageObjects/ContactPage'
const contactPage=new ContactPage()

beforeEach(function() 
{
    //WEBSITE TEST
    // runs once before all website tests in the block
    cy.fixture('example').then(function(data)
    {
       this.data=data
    })
    
    cy.visit(Cypress.env('url'))
    cy.viewport(1280, 720);
    contactPage.elements.clickContact().click();
    cy.url().should('eq', 'https://gamiroyal.com/contact-2/')
   
})