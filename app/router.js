import EmberRouter from '@ember/routing/router';
import config from 'apexa-advisor-ui/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  // this.route('Advisors');
  this.route('Advisors');
  this.route('Advisors',{path:'/'});
  this.route('createadvisor');
  this.route('updateadvisor', function () {
    this.route('editadvisor', { path: 'editadvisor/:id' });
  });
  this.route('updateadvisor', { path: 'editadvisor/:id' });
  this.route('home');

  this.route('advisors', function () {
    this.route('edit', { path: '/edit/:id' });
  });
});
