module.exports = [
  {
    type: 'postgres',
    host: 'db', // コンテナの名前 Error: connect ECONNREFUSED 127.0.0.1:5432
    port: 5432,
    database: 'todo',
    username: 'admin',
    password: 'admin',
    entities: [__dirname + '/dist/entities/*.js'],
    autoLoadEntities: true,
    synchronize: false,
    logging: true,
    cache: false,
    cli: {
      entitiesDir: 'dist/entities',
    },
    seeds: [__dirname + '/dist/seeds/*.seed.js'],
    factories: [__dirname + '/dist/factories/*.factory.js'],
  },
  {
    type: 'mongodb',
    host: 'mo',
    port: 27017,
    database: 'test',
    synchronize: false,
    logging: false,
    entities: ['src/entity/**/*.ts'],
    migrations: ['src/migration/**/*.ts'],
    subscribers: ['src/subscriber/**/*.ts'],
    cli: {
      entitiesDir: 'src/entity',
      migrationsDir: 'src/migration',
      subscribersDir: 'src/subscriber',
    },
  },
];
