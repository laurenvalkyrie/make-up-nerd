import Ember from 'ember';

export default Ember.Component.extend({
  addNewResponse: false,
  actions: {
    responseFormShow() {
      this.set('addNewResponse', true);
    },
    saveResponse() {
      var args = {
        label: this.get('label'),
        text: this.get('text'),
        visitor: this.get('visitor'),
        thread: this.get('thread'),
      };
      this.set('addNewResponse', false);
      this.sendAction('saveResponse', args);
    }
  }
});
