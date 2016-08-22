import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('about');
  this.route('help');
  this.route('post', {path: '/post/:post_id'});
});

export default Router;
