var { I, homeView, initialNotificationsView, meView, regionView, searchView, languageView } = inject();

//Feature: Search
Given('I am on the search page', () => {
  homeView.goSearchPage();
  searchView.searchPageIsLoaded();
});

When('I search by {string} products', (brand) => {
  searchView.searchByBrandProducts(brand);
});

Then('I must see a list of {string} products', (brandName) => {
  searchView.brandPageisLoaded(brandName);
});

