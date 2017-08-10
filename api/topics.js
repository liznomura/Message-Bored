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

router.get('/topics', (req, res) => {
  return Topics.findAll({
    attributes: ['id', 'name', 'createdAt'],
    include: [{ model: Users , attributes: ['name']}]
  })
  .then(topics => {
    res.json(topics);
  });
});
router.get('/topics/:id', (req, res) => {
  let topicId = req.params.id;
  return Topics.findById(topicId, {
    attributes: ['id', 'name', 'createdAt'],

    include: [{ model: Messages, attributes: ['body', 'createdAt'],
      include: { model: Users, attributes: ['name', 'id'] }
    },
    {
      model: Users,
      attributes: ['name', 'id']}]
    })
  .then(result => {
    res.json(result);
  });
});

// router.get('/topics', (req, res) => {
//   return Topics.findAll({ include: Users })
//   .then(topics => {
//     const topicsData = topics.map(topic => {
//       let unixTime = new Date(topic.createdAt) / 1000;
//       let t = moment.unix(unixTime).format("MM-DD-YYYY HH:mm");

//       return {
//         id: topic.id,
//         name: topic.name,
//         created_at: t,
//         creator: topic.user.name
//       };
//     });

//     return res.json(topicsData);
//   });
// });

// router.get('/topics/:id', (req, res) => {
//   let topicId = parseInt(req.params.id);

//   return Topics.findById(topicId,
//     { include: [
//     {
//       model: Messages,
//       where: { topic_id: topicId },
//       include: {
//         model: Users
//       }
//     }]})
//   .then(result => {
//     console.log(result.messages[0].user);
//   });
// });

router.post('/topics', (req, res) => {
  return Topics.create({
    name: req.body.name,
    created_by: req.body.created_by
  })
  .then(topic => {
    return res.json(topic);
  });
});

module.exports = router;