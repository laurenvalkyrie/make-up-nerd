import Ember from 'ember';

export default Ember.Component.extend({
  editTopicForm: false,
  actions: {
    edit( topic, params) {
      this.sendAction('edit', topic, params);
    },
  }
});
