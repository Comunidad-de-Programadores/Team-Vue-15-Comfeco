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


const putUser = (req, res, next) => {
  const userId = req.params.id
  const props = req.body.user

  User.update(userId, props)
    .then(user => res.json({
      ok: true,
      message: 'User updated',
      user
    }))
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
  putUser,
  deleteUser
}
