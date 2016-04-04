import Ember from "ember";

export default Ember.Route.extend({
  model: function(params) {
    return this.store.find("survey", params.slug);
  },
  actions: {
    didTransition: function() {
      console.log("ACTIVATE!");
      Ember.run.later(function() {
        var id = 31;
        $("a[name='"+id+"']")[0].scrollIntoView();
      });
    },
  },

});
