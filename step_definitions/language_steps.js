var { I, homeView, initialNotificationsView, meView, regionView, searchView, languageView } = inject();

//Feature: Language
//Scenario: change to {string} language
Given('I am on the me page', () => {
  homeView.goMePage();
  meView.meIsLoaded();
});

When('I want to change to {string} language', (languageOption) => {
  meView.goLanguagePage();
  languageView.languagePageIsLoaded();
  languageView.changeLanguage(languageOption);
});

Then('the language must be changed to {string}', (languageOption) => {
  homeView.homeIsLoaded();
  homeView.goMePage();
  languageView.languageChanged(languageOption);
});

