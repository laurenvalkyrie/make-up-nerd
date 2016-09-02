import Ember from 'ember';

export function threadPopularity(params) {
  var thread = params[0];

  if(thread.get('responses').get('length') >= 3) {
    return Ember.String.htmlSafe('<span class="glyphicon glyphicon-star"></span>');
  }
}

export default Ember.Helper.helper(threadPopularity);
