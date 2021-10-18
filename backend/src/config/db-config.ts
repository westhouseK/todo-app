import { PostgresConnectionOptions } from 'typeorm/driver/postgres/PostgresConnectionOptions';
import Todo from 'src/entities/todo';
import Test from '../entities/test';

const dbConfig: PostgresConnectionOptions = {
  type: 'postgres',
  host: 'todo-app-db', // コンテナ名を記述
  port: 5432,
  username: 'admin',
  password: 'admin',
  database: 'admin',
  synchronize: true,
  logging: true,
  logger: 'file', // MEMO: ormlogs.logで固定らしい
  entities: [Test, Todo], // NOTE: ここっていちいち追加するの？
  // TODO: カスタムロガーにする
  // logger: new MyCustomLogger()

};
export default dbConfig;
