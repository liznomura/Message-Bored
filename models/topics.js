/*jshint esversion:6*/
const Sequelize = require('sequelize');
const Users = require('./users');
const Messages = require('./messages');
const Categories = require('./categories');

module.exports = function(sequelize, DataTypes) {
  var Topics = sequelize.define('topics', {
    name: { type: DataTypes.STRING, allowNull: false, unique: true }
  });

  Topics.associate = function(models) {
    Topics.belongsTo(models.users, {
      foreignKey: {
        name: 'created_by',
        allowNull: false
      }
    });
    Topics.hasMany(models.messages, {
      foreignKey: {
        name: 'topic_id',
        allowNull: false
      }
    });
    Topics.belongsTo(models.categories, {
      foreignKey: {
        name: 'category_id',
        allowNull: false
      }
    });
  };

  return Topics;
};
