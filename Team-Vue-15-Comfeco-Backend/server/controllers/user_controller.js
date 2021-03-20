'use strict'

const { User } = require('../models')

const postUsers = (req, res, next) => {
  const props = req.body.user

  User.create(props)
    .then(user => res.json({
      ok: true,
      message: 'User created',
      user
    }))
    .catch(next)
}

const updateUser = (req, res, next) => {
  const props = req.body
  User.updateUser(props)
    .then(user => res.json({
      ok: true,
      message: 'User updated',
      user
    }))
    .catch(next)
}

const getUsers = (req, res, next) => {
  User.findAll()
    .then(users => res.json({
      ok: true,
      message: 'Users found',
      users
    }))
    .catch(next)
}

const getUser = (req, res, next) => {
  const userId = req.params.id

  User.findById(userId)
    .then(user => res.json({
      ok: true,
      message: 'User found',
      user
    }))
    .catch(next)
}

const getNickByFirebaseId = (req, res, next) => {
  const idFirebase = req.params.id
  User.findNickByFirebaseId(idFirebase)
    .then(user => {
      res.json({
        ok: true,
        message: 'User found',
        user: {
          id: user[0].id,
          username: user[0].username,
          id_firebase: user[0].id_firebase
        }
      })
    })
    .catch(next)
}

const getInfoByFirebaseId = (req, res, next) => {
  const idFirebase = req.params.id
  User.findNickByFirebaseId(idFirebase)
    .then(user => {
      res.json({
        ok: true,
        message: 'User found',
        user: {
          id: user[0].id,
          username: user[0].username,
          id_firebase: user[0].id_firebase,
          password: user[0].password,
          email: user[0].email,
          image: user[0].image,
          genre: user[0].genre,
          birthdate: user[0].birthdate,
          country: user[0].country,
          speciality: user[0].speciality,
          biography: user[0].biography,
          facebook: user[0].facebook,
          github: user[0].github,
          linkedin: user[0].linkedin,
          twitter: user[0].twitter
        }
      })
    })
    .catch(next)
}

const deleteUser = (req, res, next) => {
  const userId = req.params.id

  User.destroy(userId)
    .then(deleteCount => res.json({
      ok: true,
      message: `User '${ userId }' deleted`,
      deleteCount
    }))
    .catch(next)
}

module.exports = {
  postUsers,
  getUsers,
  getUser,
  getNickByFirebaseId,
  getInfoByFirebaseId,
  updateUser,
  deleteUser
}
