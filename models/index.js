"use strict";

// const fs = require('fs');
// const path = require('path');
const Sequelize = require("sequelize");
// const basename = path.basename(__filename);
// const env = process.env.NODE_ENV || 'development';
// const config = require(__dirname + '/../config/config.json')[env];
const db = {};

const sequelize = new Sequelize(
  "mysql://root:fucking77@localhost:3306/chatterbox"
);

db.Post = require("./post")(sequelize, Sequelize);
db.Room = require("./room")(sequelize, Sequelize);

db.Room.hasMany(db.Post, {
  foreignKey: "roomid",
  sourceKey: "id"
});
db.Post.belongsTo(db.Room, {
  foreignKey: "roomid",
  targetKey: "id"
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
