import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('topic');
  },

  actions: {
    saveAtIndex(params) {
      var newTopic = this.store.createRecord('topic', params);
      newTopic.save();
      this.transitionTo('index');
    },
    edit(topic, params) {
      Object.keys(params).forEach(function(key) {
        if (params[key] !== undefined) {
        topic.set(key,params[key]);
        }
      });
      topic.save();
      this.transitionTo('index');
    }
  }
});
