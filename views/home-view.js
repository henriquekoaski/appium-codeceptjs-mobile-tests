const { I } = inject();

var homeView = {
   homeHeadline: '#com.farfetch.farfetchshop:id/ffb_toolbar',
   homeButton: '#com.farfetch.farfetchshop:id/bottom_nav_home',
   meButton: '#com.farfetch.farfetchshop:id/bottom_nav_me',
   searchButton: '#com.farfetch.farfetchshop:id/bottom_nav_explore',
   homeIsLoaded,
   goMePage,
   goSearchPage,
}

function homeIsLoaded() {
    I.waitForVisible(homeView.homeHeadline, 10);
    I.seeElement(homeView.homeHeadline);
}

function goMePage() {
    I.waitForVisible(homeView.meButton, 10);
    I.seeElement(homeView.meButton);
    I.tap(homeView.meButton);
}

function goSearchPage() {
    I.waitForVisible(homeView.searchButton, 10);
    I.seeElement(homeView.searchButton);
    I.tap(homeView.searchButton);
}

module.exports = homeView;