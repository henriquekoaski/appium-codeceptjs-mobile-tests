const { I } = inject();

var meView = {
   meHeadline: '#com.farfetch.farfetchshop:id/expandedText',
   regionSettingsButton: '#com.farfetch.farfetchshop:id/settings_region_row',
   languageSettingsButton: '#com.farfetch.farfetchshop:id/settings_language_row',
   meIsLoaded,
   goRegionPage,
   goLanguagePage,
}

function meIsLoaded() {
    I.waitForVisible(meView.meHeadline, 10);
    I.seeElement(meView.meHeadline);
}

function goRegionPage() {
    I.tap(meView.regionSettingsButton);
}

function goLanguagePage() {
    I.tap(meView.languageSettingsButton);
}

module.exports = meView;