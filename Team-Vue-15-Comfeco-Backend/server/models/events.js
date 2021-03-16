'use strict'

const createGuts = require('../helpers/model-guts')

const name = 'Event'
const tableName = 'events'

// Properties that are allowed to be selected from the database for reading.
// (e.g., `password` is not included and thus cannot be selected)
const selectableProps = [
  'id',
  'name',
  'description',
  'image',
  'updated_at',
  'created_at'
]

module.exports = knex => {
  const guts = createGuts({
    knex,
    name,
    tableName,
    selectableProps
  })

  const create = props => guts.create(props)

  
  const findAll = () => {
    const matchErrorMsg = 'Username or password do not match'

    return knex.select()
      .from(tableName)
      .timeout(guts.timeout)
      .then(events => {
        if (!events) throw matchErrorMsg
        return events
      })
  }

  return {
    ...guts,
    create,
    findAll
  }
}
