/// <reference types='codeceptjs' />
type initialNotificationsView = typeof import('./views/initialNotifications-view.js');
type homeView = typeof import('./views/home-view.js');
type meView = typeof import('./views/me-view.js');
type regionView = typeof import('./views/region-view.js');
type languageView = typeof import('./views/language-view.js');
type searchView = typeof import('./views/search-view.js');

declare namespace CodeceptJS {
  interface SupportObject { I: I, current: any, initialNotificationsView: initialNotificationsView, homeView: homeView, meView: meView, regionView: regionView, languageView: languageView, searchView: searchView }
  interface Methods extends Appium {}
  interface I extends WithTranslation<Methods> {}
  namespace Translation {
    interface Actions {}
  }
}
