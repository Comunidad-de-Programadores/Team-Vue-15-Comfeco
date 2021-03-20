"use strict";

const { Event } = require("../models");
const { UserEvents } = require("../models")
const getAllEvents = (req, res, next) => {
  Event.findAll()
    .then(events => {
      res.json({
        ok: true,
        message: "Event found",
        events
      });
    })
    .catch(next);
};

const getAllEventsUser = (req, res, next) => {
    const id = req.params.id;
    UserEvents.findAllEventUser(id)
      .then(events => {
        res.json({
          ok: true,
          message: "Events found",
          events
          })
        })
      .catch(next);
};

const postEventsUser = (req, res, next) => {
  const props = req.body;
  console.log(req.body)
  UserEvents.createEventUser(props)
    .then(event =>
      res.json({
        ok: true,
        message: "Event saved",
        event
      })
    )
    .catch(error => {
      console.log('EROR', error)
      next()
    });
};

module.exports = {
  postEventsUser,
  getAllEvents,
  getAllEventsUser
};
