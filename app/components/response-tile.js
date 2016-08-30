import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    editResponse(response, critters) {
      this.sendAction('editResponse', response, critters);
    },
    delete(response) {
      if (confirm('Are you sure you want to delete this response?')) {
        this.sendAction('destroyResponse', response);
      }
    }
  }
});
