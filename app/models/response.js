import DS from 'ember-data';

export default DS.Model.extend({
  label: DS.attr(),
  text: DS.attr(),
  visitor: DS.attr(),
  thread: DS.belongsTo('thread', {async: true})
});
