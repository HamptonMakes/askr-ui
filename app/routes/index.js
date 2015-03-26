import Ember from 'ember';
/* global ga */

export default Ember.Route.extend({
  beforeModel: function() {
    this.transitionTo("survey", "ruby");
  },
});
