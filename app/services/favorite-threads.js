import Ember from 'ember';

export default Ember.Service.extend({
  threads: [],

  add(thread) {
    this.get('threads').pushObject(thread);
  }
});
