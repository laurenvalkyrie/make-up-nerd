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
    },
    editThread(thread, params) {
      Object.keys(params).forEach(function(key) {
        if (params[key] !== undefined) {
        thread.set(key,params[key]);
        }
      });
      thread.save();
      this.transitionTo('topic');
    },
    destroyThread(thread) {
      thread.destroyRecord();
      this.transitionTo('topic');
    }
  }
});
