import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('topic', params.topic_id);
  },

  actions: {
    destroyTopic(topic) {
      topic.destroyRecord();
      this.transitionTo('index');
    }
  }
});
