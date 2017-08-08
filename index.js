/* jshint esversion:6 */
const express = require('express');
const session = require('express-session');
const sequelize = require('sequelize');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const app = express();

const db = require('./models');
const Users = db.users;
const Topics = db.topics;
const Messages = db.messages;

const PORT = process.env.PORT || 8080;

app.use(express.static('public'));
app.use('/api', require('./api/index.js'));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(methodOverride('_method'));

app.get('*', (req, res) => {
  res.sendFile('./public/index.html', { root: __dirname });
});

app.get('/', (req, res) => {
  console.log('hello');
});

app.listen(PORT, () => {
  db.sequelize.sync({ force: true });
  console.log(`Server running on ${PORT}`);
});