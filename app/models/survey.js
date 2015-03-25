import DS from "ember-data";

export default DS.Model.extend({
  name: DS.attr("string"),
  years: DS.hasMany("years"),
});
