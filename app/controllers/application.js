import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
export default class Application extends Controller {
  @service router;

  get isTesting() {
    return this.router.currentRouteName === 'testing';
  }
}