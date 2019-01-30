module.exports = (sequelize, DataTypes) => {
  return sequelize.define("user", {
    userid: {
      type: DataTypes.STRING,
      allowNull: false
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });
};
