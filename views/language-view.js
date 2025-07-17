var { I } = inject();

var languageView = {
    languageHeadline: '#com.farfetch.farfetchshop:id/toolbarTitle',
    languageOption: (languageName) => `//*[@text='${languageName}']`,
    languageChangeConfirmationHeadline: '#com.farfetch.farfetchshop:id/ffb_alert_dialog_title',
    languageChangeConfirmationButton: '#com.farfetch.farfetchshop:id/ffb_alert_dialog_positive_btn',
    languagePageIsLoaded,
    changeLanguage,
    languageChanged
}

function languagePageIsLoaded(){
    I.waitForVisible(languageView.languageHeadline, 10);
    I.seeElement(languageView.languageHeadline);
}

function changeLanguage(languageName){
    I.tap(languageView.languageOption(languageName));
    I.waitForVisible(languageView.languageChangeConfirmationHeadline, 10);
    I.seeElement(languageView.languageChangeConfirmationHeadline);
    I.tap(languageView.languageChangeConfirmationButton);
}

function languageChanged(languageName){
    I.waitForVisible(languageView.languageOption(languageName), 10);
    I.seeElement(languageView.languageOption(languageName));
}

module.exports = languageView;