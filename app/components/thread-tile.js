import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    editThread(thread, params) {
      this.sendAction('editThread', thread, params);
    },
  }
});
