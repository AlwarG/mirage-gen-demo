import Controller from '@ember/controller';

export default Controller.extend({
  method: 'get',
  putTitle: 'foo',
  putBody: 'bar',

  actions: {
    showAPIMethod(method) {
      this.set('method', method);
    },

    getUsers() {
      this.set('isLoading', true);
      let xmlHttp = new XMLHttpRequest();
      xmlHttp.open('GET', 'https://jsonplaceholder.typicode.com/users', true);
      xmlHttp.send(null);
      let self = this;
      xmlHttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
          self.setProperties({
            isLoading: false,
            users: JSON.parse(xmlHttp.responseText)
          });
        }
      }
    },

    updateValue(src, { target }) {
      this.set(src, target.value);
    },

    makPostCall() {
      this.set('isLoading', true);
      let xmlHttp = new XMLHttpRequest();
      xmlHttp.open('POST', 'https://jsonplaceholder.typicode.com/posts', true);
      xmlHttp.send(JSON.stringify({
        title: this.title,
        body: this.body
      }));
      let self = this;
      xmlHttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 201) {
          self.set('isLoading', false);
        }
      }
    },

    makPutCall() {
      this.set('isLoading', true);
      let xmlHttp = new XMLHttpRequest();
      xmlHttp.open('PUT', 'https://jsonplaceholder.typicode.com/posts/1', true);
      xmlHttp.send(JSON.stringify({
        id: 1,
        title: this.putTitle,
        body: this.putBody
      }));
      let self = this;
      xmlHttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
          self.set('isLoading', false);
        }
      }
    }
  }
});