import DS from 'ember-data';

export default DS.Model.extend({
  heading: DS.attr(),
  content: DS.attr(),
  author: DS.attr(),
  topic: DS.belongsTo('topic', {async: true})
  // replies: DS.hasMany('reply', {async: true})
});
