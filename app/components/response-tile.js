import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    editResponse(response, criteria) {
      this.sendAction('editResponse', response, criteria);
    },
    delete(response) {
      if (confirm('Are you sure you want to delete this response?')) {
        this.sendAction('destroyResponse', response);
      }
    }
  }
});
