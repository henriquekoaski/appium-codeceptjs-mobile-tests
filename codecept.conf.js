exports.config = {
  output: './output',
  helpers: {
    Appium: {
      app: '/Users/T-GAMER/Desktop/apk-files/farfetch.apk',
      platform: 'Android',
      device: 'emulator'
    }
  },
  include: {
    initialNotificationsView: './views/initialNotifications-view.js',
    homeView: './views/home-view.js',
    meView: './views/me-view.js',
    regionView: './views/region-view.js',
    languageView: './views/language-view.js',
    searchView: './views/search-view.js'
  },
  mocha: {},
  bootstrap: null,
  timeout: null,
  teardown: null,
  hooks: [],
  gherkin: {
    features: './features/*.feature',
    steps: ['./step_definitions/language_steps.js','./step_definitions/region_steps.js','./step_definitions/search_steps.js','./step_definitions/initialSetup_steps.js' ]
  },
  plugins: {
    screenshotOnFail: {
      enabled: true
    }
  },
  stepTimeout: 0,
  stepTimeoutOverride: [{
      pattern: 'wait.*',
      timeout: 0
    },
    {
      pattern: 'amOnPage',
      timeout: 0
    }
  ],
  //tests: 'tests/*.js',
  name: 'appium-codeceptjs-mobile-tests'
}