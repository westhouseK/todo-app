import { define } from 'typeorm-seeding';
import Faker from 'faker';
import { Hoge } from 'entities/hoge';

define(Hoge, (faker: typeof Faker) => {
  const book = new Hoge();
  book.name = faker.name.firstName();
  return book;
});
