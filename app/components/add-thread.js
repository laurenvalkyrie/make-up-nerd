import Ember from 'ember';

export default Ember.Component.extend({
  addNewThread: false,
  actions: {
    threadFormShow() {
      this.set('addNewThread', true);
    },
    saveThread() {
      var params = {
        heading: this.get('heading'),
        content: this.get('content'),
        author: this.get('author'),
        image: this.get('image'),
        topic: this.get('topic'),
      };
      this.set('addNewThread', false);
      this.sendAction('saveThread', params);
    }
  }
});
