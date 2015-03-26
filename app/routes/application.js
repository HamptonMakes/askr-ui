import Ember from 'ember';
import ENV from '../config/environment.js';
/* global ga */

export default Ember.Route.extend({
  actions: {
    didTransition: function() {
      if (ENV.environment === 'production') {
        Ember.run(function() {
          ga('send', 'pageview', {
            'page': window.location.pathname,
            'title': document.title,
          });
        });
      }
    },
  },
});
