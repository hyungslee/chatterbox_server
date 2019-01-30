module.exports = (sequelize, DataTypes) => {
  return sequelize.define(
    "room",
    {
      roomname: {
        type: DataTypes.CHAR,
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
