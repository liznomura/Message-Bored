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


router.get('/users', (req, res) => {
  return Users.findAll({ attributes: ['id', 'name']}).then(users => { res.json(users); });
});


router.get('/users/:id', (req, res) => {
  let userId = req.params.id;
  return Users.findById(userId, {
    attributes: ['id', 'name'],
    include: [{ model: Messages, attributes: ['body', 'createdAt'],
    include: [{ model: Topics, attributes: ['name', 'id']
  }]}]
})
  .then(result => { res.json(result); });
});


router.post('/users', (req, res) => {
  return Users.create({ name: req.body.name })
  .then(user => {
    return res.json(user);
  });
});

router.post('/login', (req, res) => {
  return Users.findOne({ where: { name: req.body.name }})
  .then(user => {
    if(!user) {
      return res.json('loginErr');
    }
    return res.json(user);
  });
});

module.exports = router;