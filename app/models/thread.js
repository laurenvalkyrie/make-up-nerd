import DS from 'ember-data';

export default DS.Model.extend({
  heading: DS.attr(),
  content: DS.attr(),
  author: DS.attr(),
  image: DS.attr(),
  topic: DS.belongsTo('topic', {async: true}),
  responses: DS.hasMany('response', {async: true})
});
