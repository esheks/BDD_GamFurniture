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
    cy.viewport('iphone-6') 
    contactPage.elements.clickMenu().click();
    cy.contains('Contact').click({force: true});
    cy.url().should('eq', 'https://gamiroyal.com/contact-2/')
   
})