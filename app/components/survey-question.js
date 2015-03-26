import Ember from 'ember';
import layout from '../templates/components/survey-question';

export default Ember.Component.extend({
  layout: layout,
  showYearlyResults: false,
  actions: {
    toggleResults: function() {
      this.toggleProperty("showYearlyResults");
    },
  },
});
