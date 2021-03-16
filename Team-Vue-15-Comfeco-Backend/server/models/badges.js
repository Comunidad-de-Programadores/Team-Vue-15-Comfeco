'use strict'

const createGuts = require('../helpers/model-guts')

const name = 'Badge'
const tableName = 'badges'

// Properties that are allowed to be selected from the database for reading.
// (e.g., `password` is not included and thus cannot be selected)
const selectableProps = [
  'id',
  'name',
  'description',
  'explanation',
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
      .from('badges')
      .timeout(guts.timeout)
      .then(badges => {
        if (!badges) throw matchErrorMsg
        console.log('BADGES')
        return badges
      })
  }

  const findBadgesByFirebaseId = (idFirebase) => {
    const matchErrorMsg = 'Username or password do not match'

    return knex.select()
      .from('users_badges')
      .join('users', 'users.id', '=', 'users_badges.id_user')
      .join('badges', 'badges.id', '=', 'users_badges.id_badge')
      .where({ id_firebase: idFirebase})
      .timeout(guts.timeout)
      .then(badges => {
        if (!badges) throw matchErrorMsg
        return badges
      })
  }
  return {
    ...guts,
    create,
    findBadgesByFirebaseId,
    findAll
  }
}
