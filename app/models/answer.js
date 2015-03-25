import DS from "ember-data";

export default DS.Model.extend({
  content: DS.attr("string"),
  yearSummaryAnswers: DS.hasMany("year_summary_answers"),
});
