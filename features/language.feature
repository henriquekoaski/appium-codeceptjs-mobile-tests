Feature: Language
  
  Background: Go through initial setup
    When I do the initial setup

  Scenario Outline: Change to an available language
    Given I am on the me page
    When I want to change to "<language>" language
    Then the language must be changed to "<language>"

    Examples:
    | language                | languageKey     |
    | Español (México)        | Spanish         |
    | Français                | French          |
    | 中文 (中国)              | Chinese         |
    | English (United States) | English         |
    | Deutsch                 | German          |
    | Русский                 | Russian         |