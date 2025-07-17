var { I, homeView, initialNotificationsView, meView, regionView, searchView, languageView } = inject();

//Background: Go through initial setup
Given('I do the initial setup', () => {
  initialNotificationsView.initialSetup();
}); 