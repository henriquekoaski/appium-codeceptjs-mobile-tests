var { I } = inject();

var initialNotificationsView = {
    welcomeFarfecthHeadline:'#com.farfetch.farfetchshop:id/splash_gender_title',
    shopMenButton:'#com.farfetch.farfetchshop:id/splash_department_shop_men',
    notificationRequestHeadline:'#com.farfetch.farfetchshop:id/splash_push_title',
    yesNotifyMeButton: '#com.farfetch.farfetchshop:id/splash_push_notify_me',
    languageRequestPopUp:'#com.farfetch.farfetchshop:id/bottomSheetRoot',
    noThanksButton:'#com.farfetch.farfetchshop:id/decline_button',
    homeHeadline:'#com.farfetch.farfetchshop:id/ffb_toolbar',
    chooseShopMen,
    receiveNotifications,
    declareLanguageAndRegion,
    initialSetup
}

function chooseShopMen() {
    I.waitForVisible(initialNotificationsView.welcomeFarfecthHeadline, 10);
    I.seeElement(initialNotificationsView.shopMenButton);
    I.tap(initialNotificationsView.shopMenButton);
    I.waitForVisible(initialNotificationsView.notificationRequestHeadline, 10);
    I.seeElement(initialNotificationsView.notificationRequestHeadline);
}

function receiveNotifications() {
    I.seeElement(initialNotificationsView.yesNotifyMeButton);
    I.tap(initialNotificationsView.yesNotifyMeButton);
    I.waitForVisible(initialNotificationsView.languageRequestPopUp, 10);
    I.seeElement(initialNotificationsView.languageRequestPopUp);
}

function declareLanguageAndRegion() {
    I.seeElement(initialNotificationsView.noThanksButton);
    I.tap(initialNotificationsView.noThanksButton);
    I.waitForVisible(initialNotificationsView.homeHeadline, 10);
    I.seeElement(initialNotificationsView.homeHeadline);
}

function initialSetup() {
    chooseShopMen();
    receiveNotifications();
    declareLanguageAndRegion();
}

module.exports = initialNotificationsView;
