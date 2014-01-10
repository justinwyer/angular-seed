require('jasmine-reporters');

exports.config = {
    baseUrl: 'http://localhost:8000',
    chromeDriver: '/usr/local/share/npm/lib/node_modules/chromedriver/bin/chromedriver',
    chromeOnly: true,

    specs: ['../test/e2e/*.js'],

    jasmineNodeOpts: {
        showColors: true,
        defaultTimeoutInterval: 30000
    },

    onPrepare: function () {
        jasmine.getEnv().addReporter(new jasmine.JUnitXmlReporter('target/', true, true));
    }
};
