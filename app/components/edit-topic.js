import Ember from 'ember';

export default Ember.Component.extend({
  editTopicForm: false,
  actions: {
    editTopicForm() {
      this.set('editTopicForm', true);
    },

    edit(topic) {
      var params = {
        title: this.get('title'),
        details: this.get('details'),
      };
      this.set('editTopicForm', false);
      this.sendAction('edit', topic, params);

    }
  }
});
