import DS from "ember-data";

export default DS.Model.extend({
  year: DS.attr("number"),
  questions: DS.hasMany("questions"),
  survey: DS.belongsTo("survey")
});
