/*jshint esversion:6*/
const Sequelize = require('sequelize');
const Users = require('./users');
const Topics = require('./topics');

module.exports = function(sequelize, DataTypes) {
  var Messages = sequelize.define("messages", {
    body: { type: DataTypes.TEXT, allowNull: false }
  });

  Messages.associate = function(models) {
    Messages.belongsTo(models.topics,  {
      foreignKey: {
        name: 'topic_id',
        allowNull: false
      }
    });
    Messages.belongsTo(models.users,  {
      foreignKey: {
        name: 'author_id',
        allowNull: false
      }
    });
  };

  return Messages;
};