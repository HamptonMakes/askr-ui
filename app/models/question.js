import DS from "ember-data";

export default DS.Model.extend({
  content: DS.attr("string"),
  yearsAsked: DS.attr(),
  answers: DS.hasMany("answers"),
  yearSummaryAnswers: DS.hasMany("year_summary_answers"),
});
