'use strict'

const bcrypt = require('bcrypt')
const createGuts = require('../helpers/model-guts')

const name = 'SocialNetwork'
const tableName = 'social_networks'

// Properties that are allowed to be selected from the database for reading.
// (e.g., `password` is not included and thus cannot be selected)
const selectableProps = [
  'id',
  'name',
  'base_url',
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

  return {
    ...guts,
    create
  }
}
