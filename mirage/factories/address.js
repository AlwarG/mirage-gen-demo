import { Factory, faker } from 'ember-cli-mirage';

export default Factory.extend({
  street:faker.random.word(),
  suite: faker.random.word(),
  city: faker.random.word()
});