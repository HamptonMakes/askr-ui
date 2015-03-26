import Ember from 'ember';
/* global ga */

export default Ember.Route.extend({
  actions: {
    beforeModel: function() {
      this.transitionTo("survey", {slug: "ruby"});
    },
  },
});
