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

const usersRouter = require('./routes/users');
const topicsRouter = require('./routes/topics');
const messagesRouter = require('./routes/messages');

app.use(express.static('./public'));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(methodOverride('_method'));
// app.use('/users', usersRouter);
// app.use('/topics', topicsRouter);
// app.use('/messages', messagesRouter);

app.get('/', (req, res) => {
  console.log('hello');
});

app.listen(PORT, () => {
  db.sequelize.sync({ force: true });
  console.log(`Server running on ${PORT}`);
});