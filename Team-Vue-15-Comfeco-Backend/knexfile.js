'use strict'

// ref: https://devhints.io/knex
// TODO: implement more dynamic env var settings loader
module.exports = {
  development: {
    client: 'mysql',
    connection: {
      port: 3306,
      host: 'localhost',
      database: 'comfeco',
      user: 'root',
      password: '',
    },
    migrations: {
      tableName: 'knex_migrations',
      directory: `${ __dirname }/db/migrations`
    },
    seeds: {
      directory: `${ __dirname }/db/seeds`
    }
  },
  // TODO adjust when the time comes
  staging: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },
  production: {
    client: 'mysql',
    connection: {
      port: 3306,
      host: 'localhost',
      database: 'comfeco',
      user: 'root',
      password: '',
    },
    migrations: {
      tableName: 'knex_migrations',
      directory: `${ __dirname }/db/migrations`
    },
    seeds: {
      directory: `${ __dirname }/db/seeds`
    }
  }
}
