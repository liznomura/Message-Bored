/* jshint esversion:6 */
const express = require('express');
const session = require('express-session');
const sequelize = require('sequelize');
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
     limit: 10,
     order: [['createdAt', 'DESC']]
   })
  .then(result => {
    res.json(result);
  });
});

router.post('/messages', (req, res) => {
  return Messages.create({
    body: req.body.msgBody,
    author_id: req.body.author_id,
    topic_id: req.body.topic_id
  })
  .then(message => {
    console.log('message', message);
    return res.json(message);
  });
});

router.get('/messages/by-topic/:topic_id', (req, res) => {
  let topicId = req.params.id;
  return Messages.find
});

module.exports = router;