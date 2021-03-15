'use strict'

const router = require('express').Router()
const {
  postUsers,
  getUsers,
  getUser,
  getNickByFirebaseId,
  getInfoByFirebaseId,
  getBadgesByFirebaseId,
  getAllBadges,
  updateUser,
  deleteUser
} = require('../controllers/user_controller')

router.route('/users')
  .post(postUsers)
  .get(getUsers)
  .put(updateUser)

router.route('/users/:id')
  .get(getUser)
  .delete(deleteUser)

router.route('/users/nick/:id')
  .get(getNickByFirebaseId)

router.route('/users/info/:id')
  .get(getInfoByFirebaseId)
router.route('/badges/badgesAll')
  .get(getAllBadges)
router.route('/users/badges/:id')
  .get(getBadgesByFirebaseId)



module.exports = router
