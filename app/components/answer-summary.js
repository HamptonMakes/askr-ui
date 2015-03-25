import Ember from 'ember';
import layout from '../templates/components/answer-summary';

export default Ember.Component.extend({
  layout: layout,

  isPositive: function() {
    return (this.get("summary.changeFromLastYear") > 0);
  }.property("summary.changeFromLastYear"),


});
