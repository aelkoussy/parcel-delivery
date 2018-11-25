"use strict";
const bcrypt = require("bcrypt");

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    "User",
    {
      firstName: { type: DataTypes.STRING, allowNull: false },
      lastName: { type: DataTypes.STRING, allowNull: false },
      phone: { type: DataTypes.STRING, allowNull: false },
      email: { type: DataTypes.STRING, allowNull: false },
      password: { type: DataTypes.STRING, allowNull: false },
      role: { type: DataTypes.STRING, allowNull: false }
    },
    {
      hooks: {
        beforeCreate: user => {
          {
            user.password =
              user.password && user.password != "" ? bcrypt.hashSync(user.password, 10) : "";
          }
        },
        beforeBulkCreate: user => {
          {
            user.password =
              user.password && user.password != "" ? bcrypt.hashSync(user.password, 10) : "";
          }
        }
      }
    }
  );
  User.associate = function(models) {
    // associations can be defined here
  };
  return User;
};
