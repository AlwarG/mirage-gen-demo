import EmberRouter from '@ember/routing/router';
import config from './config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function() {
  this.route('overview');
  this.route('usage');
  this.route('structure');
  this.route('workflow');
  this.route('testing');
  this.route('advanced-usage');
});
