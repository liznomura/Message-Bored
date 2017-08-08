/*jshint esversion:6*/
const express = require('express');

const router = express.Router();

const usersRouter = require('./users');
const topicsRouter = require('./topics');
const messagesRouter = require('./messages');

router.use('/', usersRouter);
router.use('/', topicsRouter);
router.use('/', messagesRouter);

module.exports = router;
