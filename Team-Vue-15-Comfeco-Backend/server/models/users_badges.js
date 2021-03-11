'use strict'

const createGuts = require('../helpers/model-guts')

const name = 'UserBadges'
const tableName = 'users_badges'

// Properties that are allowed to be selected from the database for reading.
// (e.g., `password` is not included and thus cannot be selected)
const selectableProps = [
  'id',
  'id_user',
  'id_badge',
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

  return {
    ...guts,
    create
  }
}
