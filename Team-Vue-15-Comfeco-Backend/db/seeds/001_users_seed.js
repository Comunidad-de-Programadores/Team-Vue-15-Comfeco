'use strict'

const { User } = require('../../server/models')

exports.seed = knex => knex(User.tableName).del()
  .then(() => [
    {
      username: 'admin',
      password: 'password',
      email: 'admin@email.com',
      id_firebase: 'test'
    },
    {
      username: 'first-user',
      password: 'another-password',
      email: 'first-user@email.com',
      id_firebase: 'test1'
    }
  ])
  .then(newUsers => Promise.all(newUsers.map(user => User.create(user))))
  .catch(err => console.log('err: ', err))
