/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'ui',
    environment: environment,
    baseURL: '/',
    locationType: 'auto',
    apiPrefix: 'api',

    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    },

    contentSecurityPolicy: {
      'default-src': "'none'",
      'script-src': "'self' 'unsafe-inline' https://www.google-analytics.com",
      'font-src': "'self'",
      'connect-src': "'self' http://api.ruby-survey.com",
      'img-src': "'self' https://stats.g.doubleclick.net https://www.google-analytics.com",
      'style-src': "'self' 'unsafe-inline'",
      'media-src': "'self'"
    },
  };

  if (environment === 'development') {
    ENV.apiHost = 'http://localhost:3000';
    ENV.contentSecurityPolicy['connect-src'] += " http://localhost:3000";
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.baseURL = '/';
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {

  }

  return ENV;
};
