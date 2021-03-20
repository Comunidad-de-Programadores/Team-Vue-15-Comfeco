"use strict";

const { Group } = require("../models");

const getAllGroups = (req, res, next) => {
  Group.findAll()
    .then(groups => {
      res.json({
        ok: true,
        message: "Groups found",
        groups
      });
    })
    .catch(next);
};

module.exports = {
  getAllGroups
};
