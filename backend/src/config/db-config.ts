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
  logger: 'file',
  entities: [Test, Todo], // ここはもしかしたら、いちいち追加しなくてもいいかもしれない
};
export default dbConfig;
