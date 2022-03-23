import { define } from 'typeorm-seeding';
import Faker from 'faker';
import { Fuga } from '../entities/fuga';

define(Fuga, (faker: typeof Faker) => {
  const book = new Fuga();
  book.name = faker.name.firstName();
  return book;
});
