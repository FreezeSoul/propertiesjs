// Karma configuration
// Generated on Sun Jan 18 2015 15:04:05 GMT+0100 (CET)
var istanbul = require('browserify-istanbul');

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['mocha', 'chai', 'browserify'],


    // list of files / patterns to load in the browser
    files: [
        // Empty because will load from gulp 
    ],


    // list of files to exclude
    exclude: [
    ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
        //'**/*.coffee': ['coffee'],
        'src/**/*.js': [ 'browserify'],
        'test/**/*.spec.js': [ 'browserify']
    },


    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['dots', 'coverage', 'junit'],

    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,

    
    coverageReporter: {
      dir : 'coverage/',
      reporters: [
        { type: 'html', subdir: 'html' },
        { type: 'lcovonly', subdir: '.', file: 'lcov.txt' },
        { type: 'cobertura', subdir: '.', file: 'coverage.xml' }
      ]
    },

    junitReporter: {
      outputFile: 'test_reports/report.xml',
      suite: ''
    },


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: false,

    // add additional browserify configuration properties here
    // such as transform and/or debug=true to generate source maps
    browserify: {
      debug: true,
      watch: true,
      transform: [ istanbul({
        ignore: ['**/node_modules/**', '**/test/**'],
        defaultIgnore: true
      })]
    },

    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['PhantomJS'],

    // If browser does not capture in given timeout [ms], kill it
    captureTimeout: 60000,

    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: true
  });
};
