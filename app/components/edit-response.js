import Ember from 'ember';

export default Ember.Component.extend({
  editResponseForm: false,
  actions: {
    editResponseForm() {
      this.set('editResponseForm', true);
    },

    editResponse(response) {
      var criteria = {
        label: this.get('label'),
        text: this.get('text'),
        visitor: this.get('visitor'),
        thread: this.get('thread'),
      };
      this.set('editResponseForm', false);
      this.sendAction('editResponse', response, criteria);
    }
  }
});
