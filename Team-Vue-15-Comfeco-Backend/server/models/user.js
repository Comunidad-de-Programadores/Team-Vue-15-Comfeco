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
  console.log('USER')
  console.log(user)
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

  const updateUser = props => beforeSave(props)
    .then(user => { 
      console.log('updateUser model')
      console.log(user)
      knex('users')
      .where({ id_firebase: user.id_firebase })
      .update({ username: user.username,
                password: user.password ? user.password : undefined,
                email: user.email ? user.email : undefined,
                image: user.image ? user.password : undefined,
                genre: user.genre ? user.genre : undefined,
                birthdate: user.birthdate ? user.birthdate : undefined,
                country: user.country ? user.country : undefined,
                speciality: user.speciality ? user.speciality : undefined,
                biography: user.biography ? user.biography : undefined,
                facebook: user.facebook ? user.facebook : undefined,
                github: user.github ? user.github : undefined,
                linkedin: user.linkedin ? user.linkedin : undefined,
                twitter: user.twitter ? user.twitter : undefined
            }).then(function () {
              // transaction suceeded, data written
              console.log('then')

            })
            .catch(function (error) {
              // transaction failed, data rolled back
              console.log('then 2')
              console.log(error)
            });
      // Por el momento 4 inserts o updates condicionales dependiendo de si mandan in id
      // Y luego hacer insert de info en user
      // 
/*       return knex.transaction(function (t) {
        return knex("users_social_networks")
          .transacting(t)
          .insert({ id_user: user.id, 
                    id_social_network: 1,
                    username: user.social_network_1_username,
                    link: user.social_network_1_link })
          .onConflict("username")
          .merge()
          .then(function (response) {
            return knex('groups')
              .transacting(t)
              .insert({name: 'Cool Group', user_id: response.id})
              .then(function (response) {
                return knex('groups')
                  .transacting(t)
                  .insert({name: 'Cool Group', user_id: response.id})
              })
              .then(t.commit)
              .catch(t.rollback)
          })
          .then(t.commit)
          .catch(t.rollback)
      })
      .then(function () {
        // transaction suceeded, data written
      })
      .catch(function () {
        // transaction failed, data rolled back
      }); */

      // guts.create(user)
    })

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
        return user
      })
  }

  return {
    ...guts,
    create,
    updateUser,
    verify,
    findNickByFirebaseId
  }
}
