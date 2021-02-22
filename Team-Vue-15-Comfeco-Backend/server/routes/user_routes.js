'use strict'

const router = require('express').Router()
const {
  postUsers,
  getUsers,
  getUser,
  getNickByFirebaseId,
  putUser,
  deleteUser
} = require('../controllers/user_controller')

router.route('/users')
  .post(postUsers)
  .get(getUsers)

router.route('/users/:id')
  .get(getUser)
  .put(putUser)
  .delete(deleteUser)

router.route('/users/nick/:id')
  .get(getNickByFirebaseId)

module.exports = router
