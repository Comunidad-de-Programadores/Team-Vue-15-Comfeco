"use strict";

const router = require("express").Router();
const {
  postUsers,
  getUsers,
  getUser,
  getNickByFirebaseId,
  getInfoByFirebaseId,
  updateUser,
  deleteUser
} = require("../controllers/user_controller");

const {
  getBadgesByFirebaseId,
  getAllBadges
} = require("../controllers/badges_controller");
const { getAllGroups } = require("../controllers/groups_controller");

const {
  getAllEvents,
  postEventsUser,
  getAllEventsUser,
} = require("../controllers/events_controller");
router
  .route("/users")
  .post(postUsers)
  .get(getUsers)
  .put(updateUser);

router
  .route("/users/:id")
  .get(getUser)
  .delete(deleteUser);

router.route("/users/nick/:id").get(getNickByFirebaseId);

router.route("/users/info/:id").get(getInfoByFirebaseId);

router.route("/badges/badgesAll").get(getAllBadges);

router.route("/events/eventsAll").get(getAllEvents);

router.route("/events").post(postEventsUser);

router.route("/events/events/:id").get(getAllEventsUser);

router.route("/groups/groupsAll").get(getAllGroups);

router.route("/users/badges/:id").get(getBadgesByFirebaseId);

module.exports = router;
