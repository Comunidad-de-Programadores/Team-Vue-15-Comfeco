'use strict'

const { Group } = require('../../server/models')

exports.seed = knex => knex(Group.tableName).del()
  .then(() => [
    {
      name: 'Equipo Javascript',
      description: 'Descripcion Equipo Javascript',
      tag: 'Javascript',
      image: '',
    }
  ])
  .then(newGroups => Promise.all(newGroups.map(group => Group.create(group))))
  .catch(err => console.log('err: ', err))
