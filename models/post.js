module.exports = (sequelize, DataTypes) => {
  return sequelize.define(
    "post",
    {
      username: {
        type: DataTypes.CHAR,
        allowNull: false
      },
      text: {
        type: DataTypes.TEXT,
        allowNull: false
      },
      roomid: {
        type: DataTypes.INTEGER,
        allowNull: false
      }
    },
    {
      timestamps: true,
      paranoid: true,
      charset: "utf8",
      collate: "utf8_general_ci"
    }
  );
};
