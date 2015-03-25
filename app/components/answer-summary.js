import Ember from 'ember';
import layout from '../templates/components/answer-summary';

export default Ember.Component.extend({
  layout: layout,

  isPositive: function() {
    return (this.get("summary.changeFromLastYear") > 0);
  }.property("summary.changeFromLastYear"),

  barHeight: function() {
    return ("height:" + this.get("summary.percentageThisYear") + "%");
  }.property("summary.percentageThisYear"),

  roundedChangeFromLastYear: function() {
    return (Math.round(this.get("summary.changeFromLastYear") * 10) / 10)
  }.property("summary.changeFromLastYear"),

  roundedPercentageThisYear: function() {
    return (Math.round(this.get("summary.percentageThisYear") * 10) / 10)
  }.property("summary.percentageThisYear"),

});
