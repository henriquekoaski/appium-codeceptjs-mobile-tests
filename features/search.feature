Feature: Search
  
  Background: Go through initial setup
    When I do the initial setup

  Scenario Outline: Search product by brand name
    Given I am on the search page
    When I search by "<brand>" products 
    Then I must see a list of "<brand>" products

  Examples:
  | brand   |
  | Gucci   |
  | Nike    |