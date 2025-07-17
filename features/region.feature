Feature: Region
  
  Background: Go through initial setup
    When I do the initial setup

  Scenario Outline: Change to an available region
    Given I am on the me page
    When I want to change to the "<region>" region
    Then the region must be changed to "<region>"

    Examples:
    | region     |
    | Brazil     |
    | Panama     |
    | Canada     |
    | Poland     |
    | Angola     |
    | Japan      |
    | Australia  |
  


