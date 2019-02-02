module.exports = (sequelize, DataTypes) => {
  return sequelize.define(
    "user",
    {
      username: {
        type: DataTypes.CHAR,
        allowNull: false
      },
      password: {
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
