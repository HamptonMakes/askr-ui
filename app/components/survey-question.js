import Ember from 'ember';
import layout from '../templates/components/survey-question';

export default Ember.Component.extend({
  layout: layout,
  showYearlyResults: false,
  init: function() {
    this._super();
    if(window.location.hash === ("#" + this.get("question.id"))) {
      this.set("showYearlyResults", true);
    }
  },
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
