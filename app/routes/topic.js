import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('topic', params.topic_id);
  },
  actions: {
    destroyTopic(topic) {
      topic.destroyRecord();
      this.transitionTo('index');
    },
    saveThread(params) {
      var newThread = this.store.createRecord('thread', params);
      var topic = params.topic;
      topic.get('threads').addObject(newThread);
      newThread.save().then(function() {
        return topic.save();
      });
      this.transitionTo('topic', params.topic);
    }
  }
});
