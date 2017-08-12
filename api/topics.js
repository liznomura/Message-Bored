/* jshint esversion:6 */
const express = require("express");
const session = require("express-session");
const sequelize = require("sequelize");
const methodOverride = require("method-override");
const moment = require("moment");

const router = express.Router();

const db = require("../models");
const Users = db.users;
const Topics = db.topics;
const Messages = db.messages;

router.get("/topics", (req, res) => {
  return Topics.findAll({
    attributes: ["id", "name", "createdAt"],
    include: [{ model: Users, attributes: ["name"] }]
  }).then(topics => {
    res.json(topics);
  });
});

router.get("/topics/:id", (req, res) => {
  let topicId = req.params.id;
  return Topics.findById(topicId, {
    attributes: ["id", "name", "createdAt"],
    include: [
      {
        model: Messages,
        attributes: ["body", "createdAt"],
        include: { model: Users, attributes: ["name", "id"] }
      },
      {
        model: Users,
        attributes: ["name", "id"]
      }
    ]
  }).then(result => {
    res.json(result);
  });
});

router.post("/topics", (req, res) => {
  return Topics.create({
    name: req.body.name,
    color: req.body.color,
    created_by: req.body.created_by
  }).then(topic => {
    return res.json(topic);
  });
});

module.exports = router;
