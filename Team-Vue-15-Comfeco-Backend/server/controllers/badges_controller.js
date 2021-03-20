"use strict";

const { Badge } = require("../models");

const getBadgesByFirebaseId = (req, res, next) => {
  const idFirebase = req.params.id;
  Badge.findBadgesByFirebaseId(idFirebase)
    .then(badges => {
      res.json({
        ok: true,
        message: "User found",
        badges
      });
    })
    .catch(next);
};

const getAllBadges = (req, res, next) => {
  Badge.findAll()
    .then(badges => {
      res.json({
        ok: true,
        message: "Badges found",
        badges
      });
    })
    .catch(next);
};

module.exports = {
  getAllBadges,
  getBadgesByFirebaseId
};
