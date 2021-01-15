import Controller from '@ember/controller';
export default Controller.extend({
  actions: {
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
    }
  }
});