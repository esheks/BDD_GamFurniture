import { Given,When,Then, And } from "cypress-cucumber-preprocessor/steps";
import HomePage from '../../../../support/pageObjects/HomePage';
//import page class 
const homePage=new HomePage()


//Confirm text on home page
Given('I open Home page', ()=>{
    cy.url()
})
Then("confirm home page text", function(){
    homePage.getText()
    cy.contains('GAMIROYAL');
    cy.contains('FURNITURE');
    cy.contains('Gamiroyal Furniture Warehouse.');
    cy.contains('Make your home comfortable and beautiful with our furniture')
    cy.contains('Search For Products');
})

//Click on sofa picture
Given('I open Home page', ()=>{
    cy.url()
})
Then("Click on sofa picture", function(){
    homePage.clicksofa().click();
})


//Click on dining picture
Given('I open Home page', ()=>{
    cy.url()
})
Then("Click on dining picture", function(){
    homePage.clickDining().click();
})


//Click on bed picture
Given('I open Home page', ()=>{
    cy.url()
})
And("Click on bed picture", function(){
    homePage.clickDining().click();
})
Then("go back to home page", function(){
    cy.go('back');
})

