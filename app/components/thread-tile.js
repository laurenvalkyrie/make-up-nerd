import Ember from 'ember';

export default Ember.Component.extend({
  favoriteThreads: Ember.inject.service(),
  actions: {
    editThread(thread, params) {
      this.sendAction('editThread', thread, params);
    },
    deleteThread(thread) {
      if (confirm('Are you sure you want to delete this thread?')) {
        this.sendAction('destroyThread', thread);
      }
    },

    addToFav(thread) {
      this.get('favoriteThreads').add(thread);
    }

  }
});
