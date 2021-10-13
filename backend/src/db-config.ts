import { PostgresConnectionOptions } from "typeorm/driver/postgres/PostgresConnectionOptions";
import Customer from "./entities/customer";

const dbConfig: PostgresConnectionOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'admin',
  password: 'admin',
  database: 'admin',
  synchronize: true,
  logging: true,
  logger: "file",
  entities: [Customer] // ['entites/*.ts']では動かない。書き方が変わったっぽい？？
};
export default dbConfig;
