'use strict'

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
module.exports = knex => {
  const guts = createGuts({
    knex,
    name,
    tableName,
    selectableProps
  })

  // Augment default `create` function to include custom `beforeSave` logic.
  const create = user => guts.create(user);
  const updateUser = user => { 
      return knex('users')
      .where({ id_firebase: user.id_firebase })
      .update({ username: user.username,
                password: user.password ? user.password : undefined,
                email: user.email ? user.email : undefined,
                image: user.image ? user.image : undefined,
                genre: user.genre ? user.genre : undefined,
                birthdate: user.birthdate ? user.birthdate : undefined,
                country: user.country ? user.country : undefined,
                speciality: user.speciality ? user.speciality : undefined,
                biography: user.biography ? user.biography : undefined,
                facebook: user.facebook ? user.facebook : undefined,
                github: user.github ? user.github : undefined,
                linkedin: user.linkedin ? user.linkedin : undefined,
                twitter: user.twitter ? user.twitter : undefined
            }).then(function (data) {
              // transaction suceeded, data written
              knex.select()
              .from('users_badges')
              .where({ id_user:  data })
              .timeout(guts.timeout)
              .then(user_badges => {
                if (!user_badges) throw matchErrorMsg
                // if he does not have the badge 1 then we check if he have all the fields and add it
                const badgeSociable = user_badges.find( (badge) => {
                  return badge.id_badge === 1
                })
                if (!badgeSociable) {
                  // check if all the info is on the user profile if so make the insert of the badge 1 (sociable)
                  knex.select()
                  .from('users')
                  .where({ id:  data })
                  .timeout(guts.timeout)
                  .then(user => {
                    if (!user) throw matchErrorMsg
                    if (user[0].biography !== null && user[0].birthdate !== null && user[0].country !== null && user[0].email !== null &&
                      user[0].facebook !== null && user[0].genre !== null && user[0].github !== null && user[0].linkedin !== null &&
                      user[0].twitter !== null && user[0].username !== null) {
                      knex('users_badges')
                      .insert({ 
                        id_user: data,
                        id_badge: 1 // the badge id predefined for Sociable
                      }).then(result => {
                        console.log(result)
                      })
                    }
                  })
                }
                return user
              })
              // check if the user have all the info and it does not have sociable badge

            })
            .catch(function (error) {
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
    }

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
