'use strict'

const { User, Badge, Group, Event } = require('../models')

const postUsers = (req, res, next) => {
  const props = req.body.user
/* 
  {
    username: this.nick,
    password: this.password,
    email: this.email,
    id_firebase: uid,
  } */


  User.create(props)
    .then(user => res.json({
      ok: true,
      message: 'User created',
      user
    }))
    .catch(next)
}

const updateUser = (req, res, next) => {
  // console.log(req.body)
  const props = req.body
  console.log('updateUser controller')
  console.log(props)
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

const getBadgesByFirebaseId = (req, res, next) => {
  const idFirebase = req.params.id
  Badge.findBadgesByFirebaseId(idFirebase)
    .then(badges => {
      res.json({
        ok: true,
        message: 'User found',
        badges
      })
    })
    .catch(next)
}

const getAllBadges = (req, res, next) => {
  console.log('AAA')
  Badge.findAll()
    .then(badges => {
      res.json({
        ok: true,
        message: 'Badges found',
        badges
      })
    })
    .catch(next)
}

const getAllGroups = (req, res, next) => {
  console.log('getAllGroups')
  Group.findAll()
    .then(groups => {
      res.json({
        ok: true,
        message: 'Groups found',
        groups
      })
    })
    .catch(next)
}

const getAllEvents = (req, res, next) => {
  console.log('getAllEvents')
  Event.findAll()
    .then(groups => {
      res.json({
        ok: true,
        message: 'Event found',
        groups
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


/* const putUser = (req, res, next) => {
  const userId = req.params.id
  const props = req.body.user

  User.update(userId, props)
    .then(user => res.json({
      ok: true,
      message: 'User updated',
      user
    }))
    .catch(next)
} */

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
  getBadgesByFirebaseId,
  getAllBadges, // TODO MOVE TO CORRECT CONTROLLER
  getAllGroups, // TODO MOVE TO CORRECT CONTROLLER
  getAllEvents, // TODO MOVE TO CORRECT CONTROLLER
  updateUser,
  deleteUser
}
