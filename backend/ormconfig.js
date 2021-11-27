module.exports = {
  type: 'postgres',
  host: 'db', // コンテナの名前 Error: connect ECONNREFUSED 127.0.0.1:5432
  port: 5432,
  database: 'todo',
  username: 'admin',
  password: 'admin',
  entities: [__dirname + '/dist/entities/*.js'],
  autoLoadEntities: true,
  synchronize: true,
  logging: true,
  cache: false,
  cli: {
    entitiesDir: 'dist/entities',
  },
  seeds: ['dist/seeds/*.seed.ts'],
  factories: ['dist/factories/*.factory.ts'],
};
