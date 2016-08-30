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
      console.log(args);
        var newResponse = this.store.createRecord('response', args);
        var thread = args.thread;
        thread.get('responses').addObject(newResponse);
        newResponse.save();
        thread.save();
        this.transitionTo('thread');
    },
    editResponse(response, criteria) {
      Object.keys(criteria).forEach(function(key) {
        if (criteria[key] !== undefined) {
        response.set(key,criteria[key]);
        }
      });
      response.save();
      this.transitionTo('thread');
    },
    destroyResponse(response) {
      response.destroyRecord();
      this.transitionTo('thread');
    }
  }
});
