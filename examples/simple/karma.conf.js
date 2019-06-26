process.env.CHROME_BIN = require('puppeteer').executablePath();

module.exports = function (config) {
  config.set({
    basePath: '',

    frameworks: ['mocha'],

    files: [
      '*.js'
    ],

    exclude: [],

    reporters: ['progress'],

    port: 9876,

    colors: true,

    logLevel: config.LOG_INFO,

    autoWatch: false,

    browsers: ['CustomChrome'],

    singleRun: false,

    plugins: [
      require('../../'),
      'karma-mocha'
    ],
    
    customLaunchers: {
      CustomChrome: {
        base: 'ChromeHeadless',
        flags: [
          '--no-sandbox',
        ],
      },
    },
  })
}
