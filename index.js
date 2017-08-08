/* jshint esversion:6 */
const sequelize = require('sequelize');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const express = require('express');
const app = express();

const PORT = process.env.PORT || 8080;

const db = require('./models');
const Users = db.users;
const Topics = db.topics;
const Messages = db.messages;


app.use(express.static('./public'));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(methodOverride('_method'));

app.get('/', (req, res) => {
  console.log('hello');
});

app.listen(PORT, () => {
  db.sequelize.sync({ force: true });
  console.log(`Server running on ${PORT}`);
});