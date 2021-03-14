'use strict'

const { Badge } = require('../../server/models')

exports.seed = knex => knex(Badge.tableName).del()
  .then(() => [
    {
      name: 'Sociable',
      description: 'Primeros pasos para ser una persona mas sociable',
      explanation: 'Será obtenida si el usuario completa todo su perfil',
      image: '',
    }
  ])
  .then(newBadges => Promise.all(newBadges.map(badge => Badge.create(badge))))
  .catch(err => console.log('err: ', err))
