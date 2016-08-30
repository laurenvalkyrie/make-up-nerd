import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('thread', params.thread_id);
  },
  actions: {
    destroyThread(thread) {
      thread.destroyRecord();
      this.transitionTo('topic');
    },
    saveResponse(args) {
        var newResponse = this.store.createRecord('response', args);
        newResponse.save();
        this.transitionTo('thread');
      },
  }
});
