"use strict";
module.exports = (sequelize, DataTypes) => {
  const Parcel = sequelize.define(
    "Parcel",
    {
      origin: { type: DataTypes.STRING, allowNull: false },
      destination: { type: DataTypes.STRING, allowNull: false },
      status: { type: DataTypes.STRING, allowNull: false },
      // assignee: DataTypes.STRING,
      UserID: {
        type: DataTypes.STRING,
        references: { model: "Users", key: "id" },
        onUpdate: "CASCADE",
        onDelete: "SET NULL"
      },
      pickupTimestamp: DataTypes.STRING,
      deliveryTimestamp: DataTypes.STRING
    },
    {}
  ); // name of Target model // key in Target model that we're referencing
  Parcel.associate = function(models) {
    // associations can be defined here
    Parcel.belongsTo(models.User);
  };
  return Parcel;
};
