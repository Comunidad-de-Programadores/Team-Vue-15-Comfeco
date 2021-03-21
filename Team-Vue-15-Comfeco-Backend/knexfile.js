'use strict'

// ref: https://devhints.io/knex
// TODO: implement more dynamic env var settings loader
module.exports = {
  development: {
    client: 'mysql',
    connection: {
      port: 3306,
      host: 'database-1.c1g3efmxal0u.us-east-1.rds.amazonaws.com',
      database: 'comfeco',
      user: 'admin',
      password: '1CGdKrn0e7qYbuS0UcXz',
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
    client: 'mysql',
    connection: {
      database: 'comfeco',
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
      host: 'database-1.c1g3efmxal0u.us-east-1.rds.amazonaws.com',
      database: 'comfeco',
      user: 'admin',
      password: '1CGdKrn0e7qYbuS0UcXz',
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
