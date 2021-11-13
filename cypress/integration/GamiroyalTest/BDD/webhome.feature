Feature: End to End Home Page Validation

    Regression
    
    Scenario: Confirm text on home page
    Given I open Home page
    Then confirm home page text
    
    
    Scenario: Click on sofa picture
    Given I open Home page
    Then Click on sofa picture
    
    
    Scenario: Click on dining picture
    Given I open Home page
    Then Click on dining picture
    
    
    Scenario: Click on bed picture 
    Given I open Home page
    And   Click on bed picture
    Then go back to home page
