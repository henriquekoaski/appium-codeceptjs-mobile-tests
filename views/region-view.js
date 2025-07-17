const { I } = inject();

var regionView = {
    regionHeadline: '#com.farfetch.farfetchshop:id/toolbarTitle',
    regionSearchField: '#com.farfetch.farfetchshop:id/search_text',
    countryOption: "#com.farfetch.farfetchshop:id/ds_cell_text",
    countryName: (countryName) => `//*[@text,'${countryName}']`,
    confirmationNoticeTitle: '#com.farfetch.farfetchshop:id/ffb_alert_dialog_title',
    confirmationOkButton: '#com.farfetch.farfetchshop:id/ffb_alert_dialog_positive_btn',
    regionIsLoaded,
    changeRegion,
    regionChanged
}

function regionIsLoaded() {
    I.waitForVisible(regionView.regionHeadline, 10);
    I.seeElement(regionView.regionHeadline);
}

function changeRegion(region) {
    I.tap(regionView.regionSearchField);
    I.fillField(regionView.regionSearchField, region);
    I.waitForVisible(regionView.countryOption, 10);
    I.tap(regionView.countryOption);
    I.waitForVisible(regionView.confirmationNoticeTitle, 10);
    I.seeElement(regionView.confirmationNoticeTitle);
    I.tap(regionView.confirmationOkButton);
}

function regionChanged(countryName) {
    I.seeElement(regionView.countryName(countryName));
}

module.exports = regionView;