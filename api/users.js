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
  findAllUsers(req, res);
});

router.post('/users', (req, res) => {

});

module.exports = router;



function findAllUsers(req, res) {
  return Users.findAll()
  .then(photos => {
    console.log(photos);
  });
}

function createNewUser(req, res) {
  return Users.create(
  {
    name: req.body.name
  });
}