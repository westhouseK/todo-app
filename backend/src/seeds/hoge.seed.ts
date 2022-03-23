import { Fuga } from '../entities/fuga';
import { Hoge } from 'entities/hoge';
import { Connection } from 'typeorm';
import { Factory, Seeder } from 'typeorm-seeding';

export default class Create implements Seeder {
  public async run(factory: Factory, connection: Connection): Promise<any> {
    console.log('seeding');
    await factory(Hoge)().createMany(3);
    await factory(Fuga)().createMany(3);
  }
}
