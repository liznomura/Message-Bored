/* jshint esversion:6 */
const express = require('express');
const session = require('express-session');
const sequelize = require('sequelize');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const moment = require('moment');

const router = express.Router();

const db = require('../models');
const Users = db.users;
const Topics = db.topics;
const Messages = db.messages;

router.get('/topics', (req, res) => {
  return Topics.findAll({ include: Users })
  .then(topics => {
    const topicsData = topics.map(topic => {
      let unixTime = new Date(topic.createdAt) / 1000;
      let t = moment.unix(unixTime).format("MM-DD-YYYY HH:mm");

      return {
        id: topic.id,
        name: topic.name,
        created_at: t,
        creator: topic.user.name
      };
    });

    return res.json(topicsData);
  });
});

router.post('/topics', (req, res) => {
  console.log(req);
  return Topics.create({ name: req.body.name })
  .then(topic => {
    console.log(topic);
  });
});

module.exports = router;