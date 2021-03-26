'use strict';
module.exports = (sequelize, DataTypes) => {
  const Banner = sequelize.define('Banner', {
    title: DataTypes.STRING,
    img: DataTypes.STRING,
    bg_color: DataTypes.STRING
  }, {});
  Banner.associate = function(models) {
    // associations can be defined here
  };
  return Banner;
};