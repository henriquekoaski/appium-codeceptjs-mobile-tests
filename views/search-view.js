const { I } = inject();

var searchView = {
    searchHeadline: '#com.farfetch.farfetchshop:id/expandedText',
    searchField: '#com.farfetch.farfetchshop:id/search_text',
    searchInputField: '#com.farfetch.farfetchshop:id/exploreSearchInput',
    brandOption: '#com.farfetch.farfetchshop:id/ds_cell_auxiliary_text',
    brandName: (brandName) => `//*[@text,'${brandName}']`,
    brandNameHeadline: (brandHeadline) => `//*[@text='${brandHeadline}']`,
    searchPageIsLoaded,
    searchByBrandProducts,
    brandPageisLoaded,
}

function searchPageIsLoaded() {
    I.waitForVisible(searchView.searchHeadline, 10);
    I.seeElement(searchView.searchHeadline);
}

function searchByBrandProducts(brand) {
    I.tap(searchView.searchField);
    I.waitForVisible(searchView.searchInputField, 10);
    I.seeElement(searchView.searchInputField);
    I.tap(searchView.searchInputField);
    I.fillField(searchView.searchInputField, brand);
    I.waitForVisible(searchView.brandOption, 10);
    I.seeElement(searchView.brandOption);
    I.tap(searchView.brandOption);
}

function brandPageisLoaded(brandName) {
    I.waitForVisible(searchView.brandNameHeadline(brandName), 10);
    I.seeElement(searchView.brandNameHeadline(brandName));
}


module.exports = searchView;

