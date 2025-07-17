var { I, homeView, initialNotificationsView, meView, regionView, searchView, languageView } = inject();

//Feature: Region
Given('I am on the me page', () => {
  homeView.goMePage();
  meView.meIsLoaded();
});

When('I want to change to the {string} region', (region) => {
  meView.goRegionPage();
  regionView.regionIsLoaded();
  regionView.changeRegion(region);
});

Then('the region must be changed to {string}', (countryName) => {
  homeView.homeIsLoaded();
  homeView.goMePage();
  regionView.regionChanged(countryName);
});

