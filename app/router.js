//This is the router

import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('reviews');
  this.route('coming-soon');
});

export default Router;
