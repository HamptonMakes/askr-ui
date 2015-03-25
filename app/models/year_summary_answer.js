import DS from "ember-data";

export default DS.Model.extend({
  year: DS.belongsTo("year"),
  question: DS.belongsTo("question"),
  answer: DS.belongsTo("answer"),

  percentageThisYear: DS.attr("number"),
  changeFromLastYear: DS.attr("number"),
  totalVotes: DS.attr("number")
});
