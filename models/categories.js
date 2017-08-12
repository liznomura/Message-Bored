/*jshint esversion:6*/
const Sequelize = require('sequelize');
const Users = require('./users');
const Messages = require('./messages');
const Topics = require('./topics');

module.exports = function(sequelize, DataTypes) {
  var Categories = sequelize.define('categories', {
    name: { type: DataTypes.STRING, allowNull: false, unique: true },
    color: { type: DataTypes.STRING(6), allowNull: false, unique: true }
  });

  Categories.associate = function(models) {
  };

  return Categories;
};
