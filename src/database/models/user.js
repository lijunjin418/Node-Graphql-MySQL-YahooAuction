'use strict';
const { AuthenticationError , ApolloError} = require('apollo-server') ;

const bcrypt =require('bcryptjs');

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    name: {
      type: DataTypes.STRING,
      unique: true,
      allowNull:false
    },
    email: {
      type: DataTypes.STRING,
      unique: true,
      validate: {
        notEmpty: true,
        isEmail: true,
      },
    },
    password: {
      type: DataTypes.STRING,      
      allowNull:false,
      validate: {
        notEmpty: true,
        len: [4, 40],
      },
    },
    sex:{
      type: DataTypes.BOOLEAN      
    },
    phone:{
      type: DataTypes.STRING,
      unique: true,
    },
    birth:{
      type: DataTypes.DATEONLY,      
    },
    IdNumber:{
      type: DataTypes.STRING,
      unique: true,
    },
    aCountry:{
      type: DataTypes.STRING      
    },    
    aProvince:{
      type: DataTypes.STRING      
    },    
    aCounty:{
      type: DataTypes.STRING      
    },    
    aCity:{
      type: DataTypes.STRING      
    },    
    aAddress:{
      type: DataTypes.STRING      
    },    
    postalCode:{
      type: DataTypes.STRING      
    },
    verified:{
      type: DataTypes.BOOLEAN
    },
    active:{
      type: DataTypes.BOOLEAN
    },
    deletedAt:{
      type: DataTypes.DATE
    }
  }, {
    
  });

  User.beforeCreate(async user => {
    user.password = await bcrypt.hash(user.password, 12);
  });
  
  User.beforeUpdate(async (user, options) => {
    // const hashedPassword = await hashPassword(user.password);
    console.log("----------------", user)
    user.password = await bcrypt.hash(user.password, 12);
  });
  User.associate = function(models) {
    User.belongsToMany(models.Role, {
      through: 'UserRole',
      as: 'roles',
      foreignKey:'userId'
    })
    User.hasMany(models.BidHistory, {
      foreignKey: 'userId'
    })
  };
  User.findByLogin = async login => {
    let user = await User.findOne({
      where: { name: login },
    });
    if (!user) {
      user = await User.findOne({
        where: { email: login },       
      });
    }
    if(!user){
       return null
    }    
    const roles=await user.getRoles();
    user=user.toJSON();
    user.roles= roles;       
    // console.log(user)
    return user;
  };

  return User;
};