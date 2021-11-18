import Controller from '@ember/controller';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class Get extends Controller {
  @tracked isLoading = false;
  @tracked users = [];

  @action getUsers() {
    this.isLoading = true;
    let xmlHttp = new XMLHttpRequest();
    xmlHttp.open('GET', 'https://jsonplaceholder.typicode.com/users', true);
    xmlHttp.send(null);
    let self = this;
    xmlHttp.onreadystatechange = function () {
      if (this.readyState == 4 && this.status == 200) {
        let users = JSON.parse(xmlHttp.responseText);

        users.forEach((user) => {
          let addressArr = Object.entries(user.address || {});
          addressArr = addressArr.filter(val => val[0] !== 'geo');
          addressArr = addressArr.map((val) => {
            return {
              key: val[0],
              value: val[1]
            }
          });
          user.addressArr = addressArr;
        });
        self.isLoading = false;
        self.users = users;
      }
    }
  }
}