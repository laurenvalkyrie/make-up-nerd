import Ember from 'ember';

export default Ember.Component.extend({
  addNewTopic: false,
  actions: {
    topicFormShow() {
      this.set('addNewTopic', true);
    },

    save() {
      var params = {
        title: this.get('title'),
        details: this.get('details')
      };
      this.set('addNewTopic', false);
      this.sendAction('newTopicSave', params);
      this.set('title', "");
      this.set('details', "");
    }
  }
});
