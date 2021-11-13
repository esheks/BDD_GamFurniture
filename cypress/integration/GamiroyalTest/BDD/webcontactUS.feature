Feature: End to End Contact US Form Validation

    Regression

    Scenario: Confirm text on contact page
    Given I open Contact us page
    Then confirm Contact us text
    
    Scenario: Requires name in contact form
    Given I open Contact us page
    When Type phone number and email on the form
    And Click on submit button
    Then Validate name error message
    
    Scenario: Requires phone in contact form
    Given I open Contact us page
    When Type name and email on the form
    And Click on submit button
    Then Validate phone error message
    
    Scenario: Requires email in contact form
    Given I open Contact us page
    When Type name and phone on the form
    And Click on submit button
    Then Validate email error message
    
    Scenario: Requires valid email in contact form
    Given I open Contact us page
    When Type name, phone and invalidemail on the form
    And Click on submit button
    Then Validate invalidemail error message
    
    Scenario: My ContactPage form positive Test case
    Given I open Contact us page
    When Type name, phone, email and message on the form
    Then Click on submit button
    
