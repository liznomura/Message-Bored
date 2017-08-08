/* jshint esversion:6 */
const sequelize = require('sequelize');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');

const express = require('express');
const app = express();

const db = require('./models');
const Users = db.users;
const Topics = db.topics;
const Messages = db.messages;

const PORT = process.env.PORT || 8080;

app.use(express.static('public'));

app.get('/', (req, res) => {
  console.log('hello');
});

app.listen(PORT, () => {
  db.sequelize.sync({ force: true });
  console.log(`Server running on ${PORT}`);
});