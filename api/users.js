/* jshint esversion:6 */
const express = require('express');
const session = require('express-session');
const sequelize = require('sequelize');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');

const router = express.Router();


const db = require('../models');
const Users = db.users;
const Topics = db.topics;
const Messages = db.messages;

router.get('/users', (req, res) => {
  return Users.findAll()
  .then(users => {
    const usersData = users.map(user => {
      return {
        name: user.name
      };
    });
    return res.json(usersData);
  });
});

router.get('/users/:id', (req, res) => {
  let userId = req.params.id;
  return Users.findById(userId)
  .then(user => {
    let userData = {
      id: user.id,
      name: user.name
    };
    return userData;
  })
  .then(userData => {
    return Messages.findAll({ where: { author_id: userData.id } })
    .then(msg => {
      userData.messages = [];
      msg.forEach(message => {
        let msgObj = {
          id: message.id,
          body: message.body,
          topic_id: message.topic_id,
          author_id: message.author_id
        };

        userData.messages.push(msgObj);
      });
      return res.json(userData);
    });
  });
});

router.post('/users', (req, res) => {
  return Users.create({ name: req.body.name })
  .then(user => {
    return res.json(user);
  });
});

module.exports = router;

