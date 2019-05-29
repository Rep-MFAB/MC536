<<<<<<< HEAD
=======
// @ts-check
>>>>>>> 33696e1abebb25dadf476e1d3566f111abb697ba
// Protractor configuration file, see link for more information
// https://github.com/angular/protractor/blob/master/lib/config.ts

const { SpecReporter } = require('jasmine-spec-reporter');

<<<<<<< HEAD
=======
/**
 * @type { import("protractor").Config }
 */
>>>>>>> 33696e1abebb25dadf476e1d3566f111abb697ba
exports.config = {
  allScriptsTimeout: 11000,
  specs: [
    './src/**/*.e2e-spec.ts'
  ],
  capabilities: {
    'browserName': 'chrome'
  },
  directConnect: true,
  baseUrl: 'http://localhost:4200/',
  framework: 'jasmine',
  jasmineNodeOpts: {
    showColors: true,
    defaultTimeoutInterval: 30000,
    print: function() {}
  },
  onPrepare() {
    require('ts-node').register({
<<<<<<< HEAD
      project: require('path').join(__dirname, './tsconfig.e2e.json')
=======
      project: require('path').join(__dirname, './tsconfig.json')
>>>>>>> 33696e1abebb25dadf476e1d3566f111abb697ba
    });
    jasmine.getEnv().addReporter(new SpecReporter({ spec: { displayStacktrace: true } }));
  }
};