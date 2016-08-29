import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr(),
  details: DS.attr(),
  threads: DS.hasMany('thread', {async: true})
});
