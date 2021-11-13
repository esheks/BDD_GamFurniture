import { Given,When,Then, And } from "cypress-cucumber-preprocessor/steps";
import ContactPage from '../../../../support/pageObjects/ContactPage';
//import page class 
const contactPage=new ContactPage()

//Confirm text on contact page
Given('I open Contact us page', ()=>{
    cy.url()
})
Then("confirm Contact us text", function(){
    cy.title().should("eq", "Contact -");
    cy.contains('Contact');
    cy.contains('SEND US A MESSAGE');
    cy.contains('Get In Touch');
    cy.contains('Business Hours');
})

//Requires name in contact form
Given('I open Contact us page', ()=>{
    cy.url()
})
When("Type phone number and email on the form", function(){
    contactPage.inputPhoneEmail(this.data.phone,this.data.email);//phone,email
})

And ("Click on submit button",function(){
    contactPage.elements.clickSubmit().click({force:true});//click submit
})
Then("Validate error message", function(){
    contactPage.elements.errorName().should('have.text', this.data.expected)//assert texT
})


//Requires name in contact form
Given('I open Contact us page', ()=>{
    cy.url()
})
When("Type phone number and email on the form", function(){
    contactPage.inputPhoneEmail(this.data.phone,this.data.email);//phone,email
})

And ("Click on submit button",function(){
    contactPage.elements.clickSubmit().click({force:true});//click submit
})
Then("Validate first error message", function(){
    contactPage.elements.errorName().should('have.text', this.data.expected)//assert texT
})


//Requires phone in contact form
Given('I open Contact us page', ()=>{
    cy.url()
})
When("Type name and email on the form", function(){
    contactPage.inputNameEmail(this.data.name, this.data.email);//name,email
})

And ("Click on submit button",function(){
    contactPage.elements.clickSubmit().click({force:true});//click submit
})
Then("Validate second error message", function(){
    contactPage.elements.errorPhone().should('have.text', this.data.expected)//assert text
})

//Requires email in contact form
Given('I open Contact us page', ()=>{
    cy.url()
})
When("Type name and phone on the form", function(){
    contactPage.inputNamePhone(this.data.name, this.data.phone);//name,phone
})

And ("Click on submit button",function(){
    contactPage.elements.clickSubmit().click({force:true});//click submit
})
Then("Validate third error message", function(){
    contactPage.elements.errorEmail().should('have.text', this.data.expected)//assert text
})

//Requires valid email in contact form
Given('I open Contact us page', ()=>{
    cy.url()
})
When("Type name, phone and invalidemail on the form", function(){
    contactPage.inputInvalidEmail(this.data.name, this.data.phone, this.data.invalidemail);//name,phone,invalidemail
})

And ("Click on submit button",function(){
    contactPage.elements.clickSubmit().click({force:true});//click submit
})
Then("Validate fourth error message", function(){
    contactPage.elements.errorEmail().should('have.text', this.data.expectInvalidEmail)//assert text
})

//My ContactPage form positive Test case
Given('I open Contact us page', ()=>{
    cy.url()
})
When("Type phone name, phone, email and message on the form", function(){
    contactPage.inputInvalidEmail(this.data.name, this.data.phone, this.data.invalidemail);//name,phone,invalidemail
})
Then("Click on submit button", function(){
    contactPage.elements.clickSubmit().click({force:true});//click submit
})