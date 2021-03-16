'use strict'

const { Event } = require('../../server/models')

exports.seed = knex => knex(Event.tableName).del()
  .then(() => [
    {
      id: 1,
      name: 'Evento 1',
      description: 'Descripcion evento 1',
      image: '',
    },
    {
      id: 2,
      name: 'Evento 2',
      description: 'Descripcion evento 2',
      image: '',
    },
    {
      id: 3,
      name: 'Evento 3',
      description: 'Descripcion evento 3',
      image: '',
    },
    {
      id: 4,
      name: 'Evento 4',
      description: 'Descripcion evento 4',
      image: '',
    }
  ])
  .then(newEvents => Promise.all(newEvents.map(event => Event.create(event))))
  .catch(err => console.log('err: ', err))
