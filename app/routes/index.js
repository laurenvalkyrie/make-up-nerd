import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return Ember.RSVP.hash({
      topics: this.store.findAll('topic'),
      threads: this.store.findAll('thread'),
      responses: this.store.findAll('response'),
    });
  },

  actions: {
    saveTopic(params) {
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
