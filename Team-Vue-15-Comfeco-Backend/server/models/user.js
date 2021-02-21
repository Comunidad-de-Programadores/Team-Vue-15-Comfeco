'use strict'

const bcrypt = require('bcrypt')
const createGuts = require('../helpers/model-guts')

const name = 'User'
const tableName = 'users'

// Properties that are allowed to be selected from the database for reading.
// (e.g., `password` is not included and thus cannot be selected)
const selectableProps = [
  'id',
  'username',
  'email',
  'id_firebase',
  'updated_at',
  'created_at'
]

// Bcrypt functions used for hashing password and later verifying it.
const SALT_ROUNDS = 10
const hashPassword = password => bcrypt.hash(password, SALT_ROUNDS)
const verifyPassword = (password, hash) => bcrypt.compare(password, hash)

// Always perform this logic before saving to db. This includes always hashing
// the password field prior to writing so it is never saved in plain text.
const beforeSave = user => {
  if (!user.password) return Promise.resolve(user)

  // `password` will always be hashed before being saved.
  return hashPassword(user.password)
    .then(hash => ({ ...user, password: hash }))
    .catch(err => `Error hashing password: ${ err }`)
}

module.exports = knex => {
  const guts = createGuts({
    knex,
    name,
    tableName,
    selectableProps
  })

  // Augment default `create` function to include custom `beforeSave` logic.
  const create = props => beforeSave(props)
    .then(user => guts.create(user))

  const verify = (username, password) => {
    const matchErrorMsg = 'Username or password do not match'

    knex.select()
      .from(tableName)
      .where({ username })
      .timeout(guts.timeout)
      .then(user => {
        if (!user) throw matchErrorMsg

        return user
      })
      .then(user => Promise.all([user, verifyPassword(password, user.password)]))
      .then(([user, isMatch]) => {
        if (!isMatch) throw matchErrorMsg

        return user
      })
  }

  const findNickByFirebaseId = (idFirebase) => {
    const matchErrorMsg = 'Username or password do not match'

    return knex.select()
      .from(tableName)
      .where({ id_firebase: idFirebase})
      .timeout(guts.timeout)
      .then(user => {
        if (!user) throw matchErrorMsg
        console.log('findNickByFirebaseId')
        console.log(user)
        console.log(user[0])
        console.log(user[0].id_firebase)
        return user
      })
    console.log('AGGGGGGGGGG')
  }

  return {
    ...guts,
    create,
    verify,
    findNickByFirebaseId
  }
}
