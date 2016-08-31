import Ember from 'ember';

export default Ember.Component.extend({
  editThreadForm: false,
  actions: {
    editThreadForm() {
      this.set('editThreadForm', true);
    },

    editThread(thread) {
      var params = {
        heading: this.get('heading'),
        content: this.get('content'),
        author: this.get('author'),
        image: this.get('image'),
        // topic: this.get('topic'),
      };
      this.set('editThreadForm', false);
      this.sendAction('editThread', thread, params);
    }
  }
});
