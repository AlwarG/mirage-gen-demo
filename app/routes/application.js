import Route from '@ember/routing/route';

export default class ApplicationRoute extends Route {
  beforeModel() {
    let { hash } = window.location;
    if (!hash || hash === '#/') {
      this.transitionTo('overview');
    }
  }
}
