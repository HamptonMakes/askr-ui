import Ember from 'ember';
import layout from '../templates/components/survey-question';

export default Ember.Component.extend({
  layout: layout,
  showYearlyResults: false,
  checkHash: function() {
    var id = this.get("question.id")
    if(window.location.hash === ("#" + id)) {
      this.set("showYearlyResults", true);
    }
  }.on('didInsertElement'),
  permalink: function() {
    var loc = window.location;
    return (loc.origin + loc.pathname + "#" + this.get("question.id"));
  }.property("question.id"),
  actions: {
    toggleResults: function() {
      this.toggleProperty("showYearlyResults");
    },
  },
});
