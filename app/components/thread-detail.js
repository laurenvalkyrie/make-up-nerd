import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    delete(thread) {
      if (confirm('Are you sure you want to delete this thread?')) {
        this.sendAction('destroyThread', thread);
      }
    }
  }
});
