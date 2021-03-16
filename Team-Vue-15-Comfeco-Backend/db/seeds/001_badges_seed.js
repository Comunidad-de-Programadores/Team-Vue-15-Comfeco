'use strict'

const { Badge } = require('../../server/models')

exports.seed = knex => knex(Badge.tableName).del()
  .then(() => [
    {
      id: 1,
      name: 'Sociable',
      description: 'Primeros pasos para ser una persona mas sociable',
      explanation: 'Será obtenida si el usuario completa todo su perfil',
      image: ''
    },
    {
      id: 2,
      name: 'Colaborador',
      description: 'Dedicado a ayudar a los demas',
      explanation: 'Proximamente',
      image: ''
    },
    {
      id: 3,
      name: 'Maestro',
      description: 'Bastante sabio',
      explanation: 'Proximamente',
      image: ''
    }
  ])
  .then(newBadges => Promise.all(newBadges.map(badge => Badge.create(badge))))
  .catch(err => console.log('err: ', err))
