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

router.get('/messages/latest', (req, res) => {
  return Messages.findAll({
    attributes: ['id', 'body', 'createdAt'],
    include: [{ model: Topics, attributes: ['name']},
     { model: Users, attributes: ['name']}],
     limit: 10
   })
  .then(result => {
    res.json(result);
  });
});

module.exports = router;