'use strict'

const createGuts = require('../helpers/model-guts')

const name = 'UserGroups'
const tableName = 'users_groups'

// Properties that are allowed to be selected from the database for reading.
// (e.g., `password` is not included and thus cannot be selected)
const selectableProps = [
  'id',
  'id_user',
  'id_group',
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
    const matchErrorMsg = "Username or password do not match";

    return knex
      .select()
      .from(tableName)
      .timeout(guts.timeout)
      .then(groups => {
        if (!groups) throw matchErrorMsg;
        return groups;
      });
  };
  return {
    ...guts,
    create,
    findAll
  };
}
