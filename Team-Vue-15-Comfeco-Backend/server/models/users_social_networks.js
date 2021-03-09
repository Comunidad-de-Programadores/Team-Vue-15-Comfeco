'use strict'

const createGuts = require('../helpers/model-guts')

const name = 'UserSocialNetwork'
const tableName = 'users_social_networks'

// Properties that are allowed to be selected from the database for reading.
// (e.g., `password` is not included and thus cannot be selected)
const selectableProps = [
  'id',
  'id_user',
  'id_social_network',
  'username',
  'link',
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
