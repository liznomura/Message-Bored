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

router.post('/users', (req, res) => {
  console.log('hitting express side');
  console.log(req.body);
  return Users.create(
    { name: req.body.name })
  .then(user => {
    return res.json(user);
  });
});

// router.post('/users', (req, res) => {

// });

module.exports = router;

// function createNewUser(req, res) {
//   return Users.create(
//   {
//     name: req.body.name
//   });
// }